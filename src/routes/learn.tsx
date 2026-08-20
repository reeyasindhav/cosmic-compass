import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { articles } from "@/lib/data";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn Astronomy — Guides for Every Stargazer | Stargazer" },
      {
        name: "description",
        content:
          "Plain-language astronomy guides: reading the night sky, stellar life cycles, galaxy shapes and choosing your first telescope.",
      },
      { property: "og:title", content: "Learn Astronomy | Stargazer" },
      { property: "og:description", content: "Short, clear guides to understanding the night sky." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const [open, setOpen] = useState<string | null>(articles[0]?.slug ?? null);

  return (
    <AppLayout breadcrumb="Learn">
      <section className="animate-rise">
        <p className="eyebrow">Knowledge base</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">Learn the sky</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Short reads that turn scattered astronomy facts into something you can use outside tonight.
        </p>
      </section>

      <section className="mt-10 space-y-5">
        {articles.map((a, i) => {
          const expanded = open === a.slug;
          return (
            <article
              key={a.slug}
              className="panel animate-rise overflow-hidden"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-48 w-full object-cover md:h-full"
                />
                <div className="p-6">
                  <p className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-primary">
                    <BookOpen className="size-4" /> {a.category.toUpperCase()} · {a.readTime}
                  </p>
                  <h2 className="mt-3 text-2xl">{a.title}</h2>
                  <p className="mt-2 text-muted-foreground">{a.excerpt}</p>

                  <div
                    className={`grid transition-all duration-500 ${expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="space-y-4 overflow-hidden text-sm leading-relaxed text-muted-foreground">
                      {a.body.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(expanded ? null : a.slug)}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    {expanded ? "Collapse" : "Read article"}
                    <ChevronRight
                      className={`size-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <div className="mt-10">
        <Link to="/explore" className="text-sm text-primary hover:underline">
          Continue to planet profiles →
        </Link>
      </div>
    </AppLayout>
  );
}
