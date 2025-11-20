import site from "@/data/site.json";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/widgets/Reveal.client";
import BlogList from "@/components/sections/BlogList.client";

export default function BlogPage() {
  const posts = (site as any).blog ?? [];

  return (
    <div className="py-16 md:py-20">
      <Container>
        <Reveal>
          <header className="max-w-3xl mb-8">
            <p className="text-sm font-medium tracking-wide text-[var(--brand)] uppercase mb-2">
              Blog
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Rug care tips and buying guides.
            </h1>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Short, practical guides from our team in Gqeberha to help you
              choose, place and care for your rugs with confidence.
            </p>
          </header>
        </Reveal>
        <Reveal>
          <BlogList posts={posts} />
        </Reveal>
      </Container>
    </div>
  );
}
