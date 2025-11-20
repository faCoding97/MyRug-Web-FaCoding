import site from "@/data/site.json";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Reveal from "@/components/widgets/Reveal.client";
import { formatPriceZAR } from "@/lib/utils";

export default function ServicesPage() {
  const services = (site as any).services ?? [];

  return (
    <div className="py-16 md:py-20">
      <Container>
        <Reveal>
          <header className="max-w-3xl mb-10">
            <p className="text-sm font-medium tracking-wide text-[var(--brand)] uppercase mb-2">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Rug cleaning, repairs and home consultations.
            </h1>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Beyond selling rugs, we look after them. From professional cleaning
              and repairs to custom underlays and home trials, our services are
              designed around real homes in Gqeberha.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((service: any) => (
            <Reveal key={service.id}>
              <Card className="h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-700 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {service.bullets?.map((b: string, idx: number) => (
                      <li key={idx}>• {b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  {service.fromPriceZAR ? (
                    <p className="text-sm font-medium text-slate-900">
                      From{" "}
                      <span className="text-[var(--brand)]">
                        {formatPriceZAR(service.fromPriceZAR)}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">Contact for pricing</span>
                    </p>
                  )}
                  <Badge>Booking essential</Badge>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
