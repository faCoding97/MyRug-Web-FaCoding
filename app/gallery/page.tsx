import site from "@/data/site";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/widgets/Reveal.client";
import GalleryPageClient from "@/components/sections/GalleryPageClient.client";

export default function GalleryPage() {
  const gallery = (site as any).gallery ?? [];

  return (
    <div className="py-16 md:py-20">
      <Container>
        <Reveal>
          <header className="max-w-3xl mb-8">
            <p className="text-sm font-medium tracking-wide text-[var(--brand)] uppercase mb-2">
              Gallery
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Browse our curated rug collection.
            </h1>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Use the search and filters to find rugs by size, style, colour and
              material. All prices are shown in rounded ZAR for transparency.
            </p>
          </header>
        </Reveal>
        <Reveal>
          <GalleryPageClient items={gallery} />
        </Reveal>
      </Container>
    </div>
  );
}
