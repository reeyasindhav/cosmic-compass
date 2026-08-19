import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { planets } from "@/lib/data";

export const Route = createFileRoute("/explore/")({
  head: () => ({
    meta: [
      { title: "Explore the Planets — Worlds of Our Solar System | Stargazer" },
      {
        name: "description",
        content:
          "Browse every planet in the solar system with real imagery, orbital data, gravity, moons and the stories behind each world.",
      },
      { property: "og:title", content: "Explore the Planets | Stargazer" },
      {
        property: "og:description",
        content: "Start close to home, then keep going. Every world has a story.",
      },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  return (
    <AppLayout breadcrumb="Explore">
      <section className="animate-rise">
        <p className="eyebrow">The cosmos</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">Explore the universe</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Start close to home, then keep going. Every world has a story.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {planets.map((p, i) => (
          <Link
            key={p.slug}
            to="/explore/$slug"
            params={{ slug: p.slug }}
            className="panel lift animate-rise group flex flex-col overflow-hidden"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="relative grid h-56 place-items-center overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: `radial-gradient(circle at 50% 55%, ${p.color}22, transparent 70%)` }}
              />
              <img
                src={p.image}
                alt={`${p.name} photographed from space`}
                loading="lazy"
                className="size-32 animate-float-slow rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ boxShadow: `0 0 60px -10px ${p.color}` }}
              />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-2">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground">
                  {p.kind.toUpperCase()}
                </p>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <h2 className="mt-2 text-3xl">{p.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">Avg. distance</span>
                <span className="font-medium">{p.distanceAu}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </AppLayout>
  );
}
