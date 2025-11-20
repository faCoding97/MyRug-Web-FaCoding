"use client";

import { Card } from "@/components/ui/Card";
import Modal from "@/components/widgets/Modal.client";
import { useState } from "react";

export default function BlogList({ posts }: { posts: any[] }) {
  const [activePost, setActivePost] = useState<any | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <button
            key={post.id}
            type="button"
            onClick={() => setActivePost(post)}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-2xl"
          >
            <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-1">
              <div className="p-5 flex-1 flex flex-col gap-2">
                <p className="text-xs text-slate-500">
                  {new Date(post.date).toLocaleDateString("en-ZA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-lg font-semibold text-slate-900">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-700 line-clamp-3">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </button>
        ))}
      </div>

      <Modal
        title={activePost?.title ?? ""}
        isOpen={!!activePost}
        onClose={() => setActivePost(null)}
      >
        {activePost && (
          <article className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p className="text-xs text-slate-500">
              {new Date(activePost.date).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            {activePost.tags && activePost.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {activePost.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="whitespace-pre-line">{activePost.content}</p>
          </article>
        )}
      </Modal>
    </>
  );
}
