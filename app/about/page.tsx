import site from "@/data/site.json";
import { Container } from "@/components/ui/Container";
import MapEmbed from "@/components/widgets/MapEmbed.client";
import Reveal from "@/components/widgets/Reveal.client";

export default function AboutPage() {
  const contact = (site as any).contact;
  const org = (site as any).org;

  return (
    <div className="py-16 md:py-20">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Reveal>
            <div>
              <p className="text-sm font-medium tracking-wide text-[var(--brand)] uppercase mb-2">
                About myrug
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Premium rugs, selected for real South African homes.
              </h1>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                myrug is an independent rug specialist based in Gqeberha
                (Port Elizabeth). We focus on a curated range of Persian,
                Oriental, kilim, modern and shag rugs that balance durability,
                comfort and timeless style.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Whether you are furnishing a first apartment, updating a family
                lounge or investing in a statement piece, we guide you through
                sizes, materials and colours so that your rug feels right for
                the way you live.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 md:grid-cols-2 mt-8">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Our promise</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>• Honest, practical advice – never pressure selling.</li>
                  <li>• Clear information on fibre content and care.</li>
                  <li>• Fair pricing with rounded ZAR amounts.</li>
                  <li>• Local after-sales support for cleaning and repairs.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Delivery & returns</h2>
                <p className="text-slate-700">
                  We deliver in and around Gqeberha and can arrange courier
                  services for out-of-town customers. Unused rugs in original
                  condition can usually be returned within 7 days – please chat
                  to us about any special orders or custom-size pieces.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div id="contact" className="mt-10 space-y-6">
              <h2 className="text-2xl font-semibold">Contact & showroom</h2>
              <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] items-start">
                <div className="space-y-3 text-slate-700">
                  <p>
                    <span className="font-semibold">Brand:</span> {org.brandName}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href={`tel:${contact.phone}`} className="underline underline-offset-4">
                      {contact.phone}
                    </a>
                  </p>
                  {contact.whatsapp && (
                    <p>
                      <span className="font-semibold">WhatsApp:</span>{" "}
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {contact.whatsapp}
                      </a>
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {contact.address}
                  </p>
                  {contact.hours && (
                    <p>
                      <span className="font-semibold">Hours:</span> {contact.hours}
                    </p>
                  )}
                  <div className="pt-3 border-t border-slate-200 mt-3">
                    <h3 className="font-semibold mb-2 text-lg">
                      Request a quote
                    </h3>
                    <p className="text-sm text-slate-700 mb-2">
                      Send us a WhatsApp or email with your room size, photos
                      and preferred style (e.g. Persian, modern, shag). We will
                      suggest suitable rugs and share photos, prices and
                      availability.
                    </p>
                    <p className="text-sm text-slate-700">
                      You are also welcome to visit the showroom by
                      appointment for a more detailed consultation.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <MapEmbed
                    embedSrc={contact.mapEmbedSrc}
                    query={contact.mapQuery}
                    title="myrug location in Gqeberha"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
