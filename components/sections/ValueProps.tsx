import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

type ValueProp = {
  title: string;
  description: string;
  icon?: string;
};

export default function ValueProps({ items }: { items: ValueProp[] }) {
  return (
    <div>
      <SectionTitle
        id="why-us-heading"
        eyebrow="Why myrug"
        title="Thoughtful rugs, chosen for the way you live."
        lead="We focus on a manageable, well-edited range so you do not have to scroll through hundreds of options. Every piece is selected with a South African home in mind."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.slice(0, 3).map((item) => (
          <Card key={item.title} className="p-5">
            <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
            <p className="text-sm text-slate-700">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
