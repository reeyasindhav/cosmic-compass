import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, ChevronRight, Moon, Sparkles } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { SkyMap } from "@/components/SkyMap";
import { events } from "@/lib/data";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stargazer Dashboard — Tonight's Sky at a Glance" },
      {
        name: "description",
        content:
          "Your personalized night sky dashboard: live sky view, upcoming celestial events, moon phase and visibility score.",
      },
      { property: "og:title", content: "Stargazer Dashboard — Tonight's Sky at a Glance" },
      {
        property: "og:description",
        content: "Live sky view, celestial events, moon phase and visibility for tonight.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const firstName = (user?.name ?? "Stargazer").split(" ")[0];

  return (
    <AppLayout breadcrumb="Dashboard">
      <section className="animate-rise">
        <p className="eyebrow">Good evening, {firstName}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Look up. The universe is waiting.
        </h1>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-muted-foreground">
            Your personalized view of the night sky, upcoming celestial events, and worlds beyond our
            own.
          </p>
          <Link
            to="/star-map"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110"
          >
            Open star map
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="panel animate-rise p-6" style={{ animationDelay: "80ms" }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Live sky view</p>
              <h2 className="mt-2 text-3xl">Tonight above you</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs tracking-[0.16em] text-foreground">
              <span className="size-2 animate-twinkle rounded-full bg-primary" /> CLEAR SKIES
            </span>
          </div>
          <div className="mt-6">
            <SkyMap interactive={false} height="340px" />
          </div>
          <Link
            to="/star-map"
            className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Explore the full sky <ChevronRight className="size-4" />
          </Link>
        </div>

        <div className="panel animate-rise p-6" style={{ animationDelay: "160ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow">Next up</p>
              <h2 className="mt-2 text-3xl">Celestial events</h2>
            </div>
            <CalendarDays className="size-5 text-primary" />
          </div>
          <ul className="mt-6 space-y-5">
            {events.slice(0, 3).map((e) => (
              <li key={e.id} className="border-b border-border pb-5 last:border-0 last:pb-0">
                <div className="flex gap-5">
                  <span className="pt-1 text-xs tracking-[0.16em] text-muted-foreground">
                    {e.date.toUpperCase()}
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] text-primary">
                      {e.category.toUpperCase()}
                    </p>
                    <p className="mt-1 font-semibold">{e.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/events"
            className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View event calendar <ChevronRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="panel lift animate-rise p-6" style={{ animationDelay: "220ms" }}>
          <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground">
            <Moon className="size-4" /> MOON PHASE
          </p>
          <div className="mt-6 flex items-center gap-5">
            <span className="relative grid size-16 place-items-center">
              <span className="absolute inset-0 animate-float-slow rounded-full bg-foreground shadow-[0_0_40px_oklch(0.9_0.02_250/0.35)]" />
              <span className="absolute inset-0 translate-x-[38%] rounded-full bg-card" />
            </span>
            <div>
              <p className="font-display text-2xl">Waxing crescent</p>
              <p className="text-sm text-muted-foreground">18% illuminated</p>
            </div>
          </div>
        </div>

        <div className="panel lift animate-rise p-6" style={{ animationDelay: "280ms" }}>
          <p className="text-xs tracking-[0.2em] text-muted-foreground">VISIBILITY SCORE</p>
          <p className="mt-5 font-display text-5xl text-foreground">
            8.7<span className="text-2xl text-muted-foreground">/10</span>
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-accent">
            <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: "87%" }} />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Excellent conditions tonight</p>
        </div>

        <Link
          to="/explore"
          className="panel lift animate-rise flex flex-col justify-between p-6"
          style={{ animationDelay: "340ms" }}
        >
          <Sparkles className="size-5 text-primary" />
          <div className="mt-8">
            <p className="font-display text-2xl">Discover something new</p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
              Explore planets <ChevronRight className="size-4" />
            </span>
          </div>
        </Link>
      </section>
    </AppLayout>
  );
}
