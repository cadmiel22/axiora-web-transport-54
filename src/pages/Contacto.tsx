import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Contacto() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service_type: "", origin: "", destination: "", cargo_description: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from("contact_requests").insert([form]);
    
    if (error) {
      toast({ title: "Error", description: "No se pudo enviar. Intente de nuevo.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <MainLayout>
        <section className="py-24">
          <div className="container max-w-lg text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-success" />
            <h1 className="mt-6 text-3xl font-bold">¡Solicitud Enviada!</h1>
            <p className="mt-4 text-muted-foreground">Nuestro equipo se pondrá en contacto con usted en menos de 24 horas.</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="bg-primary py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">Contacto</h1>
            <p className="mt-4 text-primary-foreground/80">Solicite una cotización o contacte con nuestro equipo</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Solicitar Cotización</h2>
                  <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Nombre *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <Input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    <Input placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <Input placeholder="Empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    <Select onValueChange={(v) => setForm({ ...form, service_type: v })}>
                      <SelectTrigger><SelectValue placeholder="Tipo de servicio" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nacional">Transporte Nacional</SelectItem>
                        <SelectItem value="internacional">Transporte Internacional</SelectItem>
                        <SelectItem value="ftl">Carga Completa</SelectItem>
                        <SelectItem value="ltl">Carga Parcial</SelectItem>
                        <SelectItem value="adr">Mercancías Peligrosas</SelectItem>
                        <SelectItem value="temperatura">Temperatura Controlada</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Origen" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} />
                    <Input placeholder="Destino" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
                    <Input placeholder="Descripción de la carga" value={form.cargo_description} onChange={(e) => setForm({ ...form, cargo_description: e.target.value })} />
                    <Textarea placeholder="Mensaje adicional" className="sm:col-span-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <Button type="submit" className="sm:col-span-2 bg-accent text-accent-foreground" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar Solicitud"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card><CardContent className="p-6 flex gap-4"><Phone className="h-6 w-6 text-accent shrink-0" /><div><h3 className="font-semibold">Teléfono</h3><p className="text-muted-foreground">+34 900 000 000</p></div></CardContent></Card>
              <Card><CardContent className="p-6 flex gap-4"><Mail className="h-6 w-6 text-accent shrink-0" /><div><h3 className="font-semibold">Email</h3><p className="text-muted-foreground">info@axiora.es</p></div></CardContent></Card>
              <Card><CardContent className="p-6 flex gap-4"><MapPin className="h-6 w-6 text-accent shrink-0" /><div><h3 className="font-semibold">Dirección</h3><p className="text-muted-foreground">Polígono Industrial Norte, Madrid</p></div></CardContent></Card>
              <Card><CardContent className="p-6 flex gap-4"><Clock className="h-6 w-6 text-accent shrink-0" /><div><h3 className="font-semibold">Horario</h3><p className="text-muted-foreground">Lun-Vie: 8:00-20:00</p></div></CardContent></Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}