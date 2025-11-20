"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type Post = {
  id: string;
  title: string;
  date: string;
  tags?: string[];
  excerpt: string;
};

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <p className="text-sm text-slate-700">
        No blog posts available yet. Please check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-2xl">
          <Card className="h-full flex flex-col p-4 sm:p-5 transition-transform duration-200 group-hover:-translate-y-1">
            <div className="mb-3 flex items-center justify-between gap-2">
              <p className="text-xs text-slate-600">
                {new Date(post.date).toLocaleDateString("en-ZA", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-end">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      className="text-[10px] px-2 py-0.5 bg-[var(--bg)]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
              {post.title}
            </h2>
            <p className="text-sm text-slate-700 line-clamp-3 mb-3">
              {post.excerpt}
            </p>
            <span className="mt-auto text-sm font-medium text-[var(--brand)] group-hover:underline">
              Read more
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
