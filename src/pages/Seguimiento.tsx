import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const statusConfig: Record<string, { label: string; color: string; icon: typeof Package }> = {
  pending: { label: "Pendiente de recogida", color: "text-muted-foreground", icon: Clock },
  collected: { label: "Recogido", color: "text-blue-600", icon: Package },
  in_transit: { label: "En tránsito", color: "text-accent", icon: Truck },
  out_for_delivery: { label: "En reparto", color: "text-warning", icon: MapPin },
  delivered: { label: "Entregado", color: "text-success", icon: CheckCircle },
  delayed: { label: "Retrasado", color: "text-destructive", icon: AlertCircle },
};

export default function Seguimiento() {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get("ref") || "");
  const [shipment, setShipment] = useState<any>(null);
  const [tracking, setTracking] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (searchParams.get("ref")) {
      handleSearch();
    }
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setLoading(true);
    setSearched(true);
    
    const { data: shipmentData } = await supabase
      .from("shipments")
      .select("*")
      .eq("tracking_number", trackingNumber.trim().toUpperCase())
      .maybeSingle();
    
    setShipment(shipmentData);
    
    if (shipmentData) {
      const { data: trackingData } = await supabase
        .from("shipment_tracking")
        .select("*")
        .eq("shipment_id", shipmentData.id)
        .order("created_at", { ascending: false });
      
      setTracking(trackingData || []);
    }
    
    setLoading(false);
  };

  const status = shipment ? statusConfig[shipment.status] : null;
  const StatusIcon = status?.icon || Package;

  return (
    <MainLayout>
      <section className="bg-primary py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">Seguimiento de Envío</h1>
            <p className="mt-4 text-primary-foreground/80">Introduzca su número de referencia para conocer el estado de su envío</p>
            <form onSubmit={handleSearch} className="mt-8 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Ej: AX2501-12345"
                  className="pl-10 h-12 bg-card"
                />
              </div>
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground" disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          {searched && !loading && !shipment && (
            <Card>
              <CardContent className="py-12 text-center">
                <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">Envío no encontrado</h3>
                <p className="mt-2 text-muted-foreground">Verifique el número de referencia e intente de nuevo.</p>
              </CardContent>
            </Card>
          )}

          {shipment && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Envío {shipment.tracking_number}</CardTitle>
                    <span className={`flex items-center gap-2 font-medium ${status?.color}`}>
                      <StatusIcon className="h-5 w-5" />
                      {status?.label}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div><span className="text-sm text-muted-foreground">Origen:</span><p className="font-medium">{shipment.origin}</p></div>
                  <div><span className="text-sm text-muted-foreground">Destino:</span><p className="font-medium">{shipment.destination}</p></div>
                  {shipment.estimated_delivery && (
                    <div><span className="text-sm text-muted-foreground">Entrega estimada:</span><p className="font-medium">{new Date(shipment.estimated_delivery).toLocaleDateString("es-ES")}</p></div>
                  )}
                </CardContent>
              </Card>

              {tracking.length > 0 && (
                <Card>
                  <CardHeader><CardTitle>Historial</CardTitle></CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tracking.map((t, i) => (
                        <div key={t.id} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`h-3 w-3 rounded-full ${i === 0 ? "bg-accent" : "bg-muted"}`} />
                            {i < tracking.length - 1 && <div className="flex-1 w-px bg-border" />}
                          </div>
                          <div className="pb-4">
                            <p className="font-medium">{t.description}</p>
                            <p className="text-sm text-muted-foreground">{t.location} · {new Date(t.created_at).toLocaleString("es-ES")}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}