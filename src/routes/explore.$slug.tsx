import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { planets } from "@/lib/data";

export const Route = createFileRoute("/explore/$slug")({
  loader: ({ params }) => {
    const planet = planets.find((p) => p.slug === params.slug);
    if (!planet) throw notFound();
    return planet;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Planet"} — Planet Profile | Stargazer` },
      {
        name: "description",
        content: loaderData?.summary?.slice(0, 155) ?? "Planet profile with orbital data and facts.",
      },
      { property: "og:title", content: `${loaderData?.name ?? "Planet"} | Stargazer` },
      { property: "og:description", content: loaderData?.tagline ?? "A world worth knowing." },
      ...(loaderData?.image
        ? [
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
          ]
        : []),
    ],
  }),
  component: PlanetPage,
});

function PlanetPage() {
  const p = Route.useLoaderData();
  const stats = [
    ["Distance from Sun", p.distanceAu],
    ["Diameter", p.diameter],
    ["Day length", p.dayLength],
    ["Year length", p.yearLength],
    ["Moons", String(p.moons)],
    ["Gravity", p.gravity],
    ["Temperature", p.temperature],
    ["Type", p.kind],
  ] as const;

  return (
    <AppLayout breadcrumb={`Explore / ${p.name}`}>
      <Link
        to="/explore"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" /> All planets
      </Link>

      <section className="mt-6 grid animate-rise gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="panel relative grid h-[380px] place-items-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 50% 55%, ${p.color}33, transparent 70%)` }}
          />
          <img
            src={p.image}
            alt={`${p.name} photographed from space`}
            className="size-60 animate-float-slow rounded-full object-cover"
            style={{ boxShadow: `0 0 90px -10px ${p.color}` }}
          />
        </div>
        <div>
          <p className="eyebrow">{p.kind}</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">{p.name}</h1>
          <p className="mt-3 font-display text-2xl text-primary">{p.tagline}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{p.summary}</p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value], i) => (
          <div key={label} className="panel lift animate-rise p-5" style={{ animationDelay: `${i * 50}ms` }}>
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground">{label.toUpperCase()}</p>
            <p className="mt-2 font-display text-xl">{value}</p>
          </div>
        ))}
      </section>

      <section className="panel mt-8 animate-rise p-6">
        <h2 className="text-3xl">Notable facts</h2>
        <ul className="mt-5 space-y-4">
          {p.facts.map((f) => (
            <li key={f} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
      </section>
    </AppLayout>
  );
}
