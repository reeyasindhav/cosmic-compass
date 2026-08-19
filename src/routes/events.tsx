import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bell, Clock } from "lucide-react";
import { toast } from "sonner";
import { AppLayout } from "@/components/AppLayout";
import { events } from "@/lib/data";

const filters = ["All", "Meteor shower", "Planetary", "Lunar phase", "Eclipse", "Conjunction"];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Celestial Event Calendar — Meteor Showers & Eclipses | Stargazer" },
      {
        name: "description",
        content:
          "A clear calendar of upcoming celestial events: meteor showers, oppositions, eclipses, conjunctions and moon phases with viewing times.",
      },
      { property: "og:title", content: "Celestial Event Calendar | Stargazer" },
      {
        property: "og:description",
        content: "Every meteor shower, eclipse and conjunction worth staying up for.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [filter, setFilter] = useState("All");
  const [reminders, setReminders] = useState<string[]>([]);

  const list = useMemo(
    () => (filter === "All" ? events : events.filter((e) => e.category === filter)),
    [filter],
  );

  const toggle = (id: string, title: string) => {
    setReminders((prev) => {
      const on = prev.includes(id);
      toast[on ? "message" : "success"](on ? `Reminder removed for ${title}` : `Reminder set for ${title}`);
      return on ? prev.filter((r) => r !== id) : [...prev, id];
    });
  };

  return (
    <AppLayout breadcrumb="Events">
      <section className="animate-rise">
        <p className="eyebrow">What's coming</p>
        <h1 className="mt-4 text-5xl sm:text-6xl">Celestial event calendar</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Everything worth staying up for, in one place — with peak times and honest visibility
          ratings.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
              filter === f
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="mt-8 space-y-4">
        {list.map((e, i) => (
          <article
            key={e.id}
            className="panel lift animate-rise flex flex-col gap-5 p-6 md:flex-row md:items-center"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex w-full items-center gap-4 md:w-48 md:flex-col md:items-start md:gap-1">
              <p className="font-display text-3xl">{e.date}</p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{e.day.toUpperCase()}</p>
            </div>

            <div className="flex-1">
              <p className="text-[11px] tracking-[0.2em] text-primary">{e.category.toUpperCase()}</p>
              <h2 className="mt-1 text-2xl">{e.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{e.detail}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" /> {e.time}
              </p>
            </div>

            <div className="flex items-center gap-3 md:flex-col md:items-end">
              <span
                className={`rounded-full px-3 py-1.5 text-xs ${
                  e.visibility === "Excellent"
                    ? "bg-primary/15 text-primary"
                    : e.visibility === "Good"
                      ? "bg-nebula/15 text-nebula"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {e.visibility}
              </span>
              <button
                onClick={() => toggle(e.id, e.title)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
                  reminders.includes(e.id)
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bell className="size-3.5" />
                {reminders.includes(e.id) ? "Reminder on" : "Remind me"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </AppLayout>
  );
}
