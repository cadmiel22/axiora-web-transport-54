-- Tabla de envíos para el sistema de seguimiento
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT NOT NULL UNIQUE,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT,
  client_phone TEXT,
  weight_kg DECIMAL(10,2),
  cargo_description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'collected', 'in_transit', 'out_for_delivery', 'delivered', 'delayed')),
  estimated_delivery DATE,
  actual_delivery TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabla de historial de estados del envío
CREATE TABLE public.shipment_tracking (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL REFERENCES public.shipments(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  location TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabla de solicitudes de contacto/cotización
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT,
  origin TEXT,
  destination TEXT,
  cargo_description TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabla de perfiles para administradores
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'staff')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS en todas las tablas
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipment_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Políticas para envíos: lectura pública por tracking_number, escritura solo admin
CREATE POLICY "Anyone can view shipments by tracking number"
ON public.shipments FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert shipments"
ON public.shipments FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update shipments"
ON public.shipments FOR UPDATE
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete shipments"
ON public.shipments FOR DELETE
USING (auth.uid() IS NOT NULL);

-- Políticas para historial de seguimiento
CREATE POLICY "Anyone can view tracking history"
ON public.shipment_tracking FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert tracking history"
ON public.shipment_tracking FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Políticas para solicitudes de contacto: inserción pública, lectura admin
CREATE POLICY "Anyone can submit contact requests"
ON public.contact_requests FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact requests"
ON public.contact_requests FOR SELECT
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update contact requests"
ON public.contact_requests FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Políticas para perfiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id);

-- Trigger para crear perfil automáticamente al registrar usuario
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_shipments_updated_at
  BEFORE UPDATE ON public.shipments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Función para generar número de tracking único
CREATE OR REPLACE FUNCTION public.generate_tracking_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  exists_count INTEGER;
BEGIN
  LOOP
    new_number := 'AX' || TO_CHAR(NOW(), 'YYMM') || '-' || LPAD(FLOOR(RANDOM() * 100000)::TEXT, 5, '0');
    SELECT COUNT(*) INTO exists_count FROM public.shipments WHERE tracking_number = new_number;
    EXIT WHEN exists_count = 0;
  END LOOP;
  RETURN new_number;
END;
$$ LANGUAGE plpgsql SET search_path = public;