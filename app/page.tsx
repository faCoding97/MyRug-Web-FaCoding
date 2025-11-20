import site from "@/data/site";
import { Container } from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/widgets/Reveal.client";

export default function HomePage() {
  const hero = (site as any).hero;
  const valueProps = (site as any).valueProps;
  const features = (site as any).features;
  const testimonials = (site as any).testimonials;
  const faq = (site as any).faq;
  const contact = (site as any).contact;

  return (
    <>
      <Hero hero={hero} />
      <section
        id="why-us"
        aria-labelledby="why-us-heading"
        className="anchor-section py-16 md:py-20">
        <Container>
          <Reveal>
            <ValueProps items={valueProps} />
          </Reveal>
        </Container>
      </section>

      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="anchor-section py-16 md:py-20 bg-white/80">
        <Container>
          <Reveal>
            <Features
              id="gallery-heading"
              title="Featured rugs"
              description="A small selection from our Gqeberha (Port Elizabeth)showroom. Browse the full gallery for more."
              featuredGallery={(site as any).gallery?.slice(0, 8) ?? []}
            />
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="features-heading"
        className="anchor-section py-16 md:py-20">
        <Container>
          <Reveal>
            <Features
              id="features-heading"
              title="Why shop with myrug?"
              description="We combine premium products with practical services that make choosing a rug easier."
              extraFeatures={(site as any).features}
            />
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="testimonials-heading"
        className="anchor-section py-16 md:py-20 bg-white/80">
        <Container>
          <Reveal>
            <Testimonials
              id="testimonials-heading"
              title="What our clients say"
              items={testimonials}
            />
          </Reveal>
        </Container>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="anchor-section py-16 md:py-20">
        <Container>
          <Reveal>
            <FAQ id="faq-heading" items={faq} />
          </Reveal>
        </Container>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="anchor-section py-16 md:py-20 bg-white/80">
        <Container>
          <Reveal>
            <CTA contact={contact} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
