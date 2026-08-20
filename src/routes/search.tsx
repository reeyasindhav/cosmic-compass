import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { articles, events, planets, skyObjects } from "@/lib/data";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search Planets, Events and Sky Objects | Stargazer" },
      {
        name: "description",
        content:
          "Search across planets, celestial events, sky objects and astronomy guides to find exactly what you want to observe tonight.",
      },
      { property: "og:title", content: "Search | Stargazer" },
      { property: "og:description", content: "One search across the whole Stargazer universe." },
    ],
  }),
  component: SearchPage,
});

type Result = { key: string; title: string; sub: string; group: string };

function SearchPage() {
  const [q, setQ] = useState("");

  const all = useMemo<Result[]>(
    () => [
      ...planets.map((p) => ({ key: `p-${p.slug}`, title: p.name, sub: p.tagline, group: "Planet" })),
      ...events.map((e) => ({ key: `e-${e.id}`, title: e.title, sub: `${e.date} · ${e.time}`, group: "Event" })),
      ...skyObjects.map((o) => ({ key: `o-${o.id}`, title: o.name, sub: o.type, group: "Sky object" })),
      ...articles.map((a) => ({ key: `a-${a.slug}`, title: a.title, sub: a.excerpt, group: "Article" })),
    ],
    [],
  );

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return all;
    return all.filter((r) => `${r.title} ${r.sub} ${r.group}`.toLowerCase().includes(t));
  }, [q, all]);

  return (
    <AppLayout breadcrumb="Search">
      <section className="animate-rise">
        <p className="eyebrow">Find anything</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">Search the universe</h1>
        <div className="panel mt-7 flex items-center gap-3 px-5 py-4">
          <SearchIcon className="size-5 text-primary" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “Saturn”, “meteor shower”, “telescope”…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Search Stargazer"
          />
          <span className="text-xs tracking-[0.16em] text-muted-foreground">{results.length} RESULTS</span>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {results.map((r, i) => (
          <div key={r.key} className="panel lift animate-rise p-5" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}>
            <p className="text-[11px] tracking-[0.2em] text-primary">{r.group.toUpperCase()}</p>
            <p className="mt-2 font-display text-xl">{r.title}</p>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.sub}</p>
          </div>
        ))}
        {results.length === 0 && (
          <p className="text-muted-foreground">
            Nothing matched. Try{" "}
            <Link to="/explore" className="text-primary hover:underline">
              browsing the planets
            </Link>
            .
          </p>
        )}
      </section>
    </AppLayout>
  );
}
