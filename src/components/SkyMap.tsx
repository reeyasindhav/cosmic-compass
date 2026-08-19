import { useMemo, useState } from "react";
import { Minus, Plus, Crosshair } from "lucide-react";
import { constellationLines, skyObjects, type SkyObject } from "@/lib/data";
import { StarField } from "@/components/StarField";

export function SkyMap({
  interactive = true,
  height = "min(62vh, 560px)",
  selected,
  onSelect,
  location = "New York · 40.7° N, 74.0° W",
}: {
  interactive?: boolean;
  height?: string;
  selected?: SkyObject;
  onSelect?: (o: SkyObject) => void;
  location?: string;
}) {
  const [zoom, setZoom] = useState(1);
  const paths = useMemo(
    () =>
      constellationLines.map((c) => ({
        name: c.name,
        d: c.points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" "),
        label: c.points[Math.floor(c.points.length / 2)]!,
      })),
    [],
  );

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border"
      style={{
        height,
        background:
          "radial-gradient(60% 60% at 50% 45%, oklch(0.28 0.08 275 / 0.9), oklch(0.15 0.03 265) 75%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.6 0.05 260 / 0.18) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.6 0.05 260 / 0.18) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <StarField count={110} />

      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `scale(${zoom})` }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
          {paths.map((p) => (
            <path
              key={p.name}
              d={p.d}
              fill="none"
              stroke="oklch(0.83 0.13 200 / 0.45)"
              strokeWidth="0.22"
              strokeDasharray="1.4 1.4"
            />
          ))}
        </svg>
        {paths.map((p) => (
          <span
            key={p.name}
            className="absolute -translate-x-1/2 text-[10px] tracking-[0.24em] text-muted-foreground"
            style={{ left: `${p.label[0]}%`, top: `${p.label[1] + 6}%` }}
          >
            {p.name.toUpperCase()}
          </span>
        ))}

        {skyObjects.map((o) => {
          const active = selected?.id === o.id;
          return (
            <button
              key={o.id}
              type="button"
              disabled={!interactive}
              onClick={() => onSelect?.(o)}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ left: `${o.x}%`, top: `${o.y}%` }}
            >
              <span
                className={`block rounded-full bg-primary transition-all duration-300 group-hover:scale-150 ${
                  active ? "scale-150" : ""
                }`}
                style={{
                  width: o.size,
                  height: o.size,
                  boxShadow: `0 0 ${active ? 26 : 14}px oklch(0.83 0.13 200 / 0.9)`,
                }}
              />
              <span
                className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[11px] transition-opacity duration-300 ${
                  active ? "text-primary opacity-100" : "text-foreground/80 opacity-0 group-hover:opacity-100"
                }`}
              >
                {o.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
        <Crosshair className="size-4 text-primary" /> {location}
      </div>

      <p className="absolute bottom-4 left-5 text-[11px] tracking-[0.2em] text-muted-foreground">
        RIGHT ASCENSION · 18H 36M · DECLINATION −63°
      </p>

      {interactive && (
        <div className="absolute bottom-4 right-4 flex flex-col overflow-hidden rounded-xl border border-border bg-background/70 backdrop-blur">
          <button
            className="p-2 text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setZoom((z) => Math.min(1.8, +(z + 0.2).toFixed(2)))}
            aria-label="Zoom in"
          >
            <Plus className="size-4" />
          </button>
          <button
            className="border-t border-border p-2 text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.2).toFixed(2)))}
            aria-label="Zoom out"
          >
            <Minus className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
