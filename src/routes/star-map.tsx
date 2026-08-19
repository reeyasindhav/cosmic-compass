import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { SkyMap } from "@/components/SkyMap";
import { skyObjects, type SkyObject } from "@/lib/data";

const locations = [
  "New York · 40.7° N, 74.0° W",
  "London · 51.5° N, 0.1° W",
  "Mumbai · 19.0° N, 72.8° E",
  "Sydney · 33.8° S, 151.2° E",
];

export const Route = createFileRoute("/star-map")({
  head: () => ({
    meta: [
      { title: "Star Map Explorer — Navigate Tonight's Constellations | Stargazer" },
      {
        name: "description",
        content:
          "Interactive star map: pick your location, tap stars, planets and galaxies to see magnitude, distance and constellation data.",
      },
      { property: "og:title", content: "Star Map Explorer | Stargazer" },
      {
        property: "og:description",
        content: "Navigate the sky from your location and discover the constellations above.",
      },
    ],
  }),
  component: StarMapPage,
});

function StarMapPage() {
  const [selected, setSelected] = useState<SkyObject>(skyObjects[4]!);
  const [location, setLocation] = useState(locations[0]!);

  return (
    <AppLayout breadcrumb="Star map">
      <section className="animate-rise">
        <p className="eyebrow">Night sky</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">Star map explorer</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Navigate the sky from your location and discover the constellations above.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-2">
        {locations.map((l) => (
          <button
            key={l}
            onClick={() => setLocation(l)}
            className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
              location === l
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {l.split(" · ")[0]}
          </button>
        ))}
      </div>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="panel animate-rise p-4" style={{ animationDelay: "80ms" }}>
          <SkyMap selected={selected} onSelect={setSelected} location={location} />
        </div>

        <aside className="panel animate-rise p-6" style={{ animationDelay: "160ms" }}>
          <p className="eyebrow">Selected object</p>
          <div className="mt-6 flex items-center gap-5">
            <span
              className="size-16 animate-float-slow rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 30%, #fff, oklch(0.83 0.13 200))",
                boxShadow: "0 0 44px oklch(0.83 0.13 200 / 0.6)",
              }}
            />
            <div>
              <h2 className="text-3xl">{selected.name}</h2>
              <p className="text-sm text-muted-foreground">{selected.type}</p>
            </div>
          </div>

          <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
            {[
              ["Distance", selected.distance],
              ["Magnitude", selected.magnitude],
              ["Constellation", selected.constellation],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            {selected.note}
          </p>

          <div className="mt-6">
            <p className="text-xs tracking-[0.2em] text-muted-foreground">VISIBLE TONIGHT</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skyObjects.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelected(o)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${
                    o.id === selected.id
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {o.name}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </AppLayout>
  );
}
