import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import site from "@/data/site";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/widgets/Reveal.client";

type Params = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  const posts = (site as any).blog ?? [];
  return posts.map((post: any) => ({ id: post.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const posts = (site as any).blog ?? [];
  const post = posts.find((p: any) => p.id === params.id);

  if (!post) {
    return {
      title: "Post not found | myrug Blog",
    };
  }

  const baseTitle = `${post.title} | myrug Blog`;
  const description =
    post.excerpt ?? "Rug care tips and buying guides from myrug in Gqeberha.";

  return {
    title: baseTitle,
    description,
    openGraph: {
      title: baseTitle,
      description,
      url: `https://myrug.co.za/blog/${post.id}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: baseTitle,
      description,
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const posts = (site as any).blog ?? [];
  const post = posts.find((p: any) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 md:py-20">
      <Container>
        <Reveal>
          <article className="max-w-3xl mx-auto">
            {/* 🔙 دکمه‌ی برگشت */}
            <div className="mb-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-[var(--brand)]">
                <span className="inline-block rounded-full border border-slate-300 px-2 py-0.5 text-xs">
                  ←
                </span>
                <span>Back to blog</span>
              </Link>
            </div>

            <p className="text-sm font-medium tracking-wide text-[var(--brand)] uppercase mb-2">
              Blog
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              {post.title}
            </h1>
            <p className="text-xs text-slate-600 mb-6">
              {new Date(post.date).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
              {post.tags?.length ? ` • ${post.tags.join(", ")}` : ""}
            </p>

            <div className="prose prose-sm md:prose-base max-w-none text-slate-800">
              {post.content.split("\n\n").map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </div>
  );
}
