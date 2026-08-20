import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { observationLog, events } from "@/lib/data";
import { initials, useAuth } from "@/lib/auth";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Observer Profile & Observation Log | Stargazer" },
      {
        name: "description",
        content:
          "Review your observation log, saved celestial events and stargazing stats in your personal Stargazer profile.",
      },
      { property: "og:title", content: "Observer Profile | Stargazer" },
      { property: "og:description", content: "Your observation log and saved events in one place." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user } = useAuth();

  return (
    <AppLayout breadcrumb="Profile">
      <section className="panel animate-rise flex flex-wrap items-center gap-6 p-7">
        <span className="grid size-20 place-items-center rounded-full bg-primary/20 font-display text-2xl text-primary glow-ring">
          {user ? initials(user.name) : "GS"}
        </span>
        <div>
          <h1 className="text-4xl capitalize">{user?.name ?? "Guest observer"}</h1>
          <p className="mt-1 text-primary">{user?.role ?? "Sign in to save your logs"}</p>
          <p className="text-sm text-muted-foreground">{user?.email ?? "Not signed in"}</p>
        </div>
        {!user && (
          <Link
            to="/login"
            className="ml-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring hover:brightness-110"
          >
            Sign in
          </Link>
        )}
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        {([
          ["Nights logged", "42"],
          ["Objects observed", "128"],
          ["Events attended", "9"],
        ] as const).map(([label, value], i) => (
          <div key={label} className="panel lift animate-rise p-6" style={{ animationDelay: `${i * 60}ms` }}>
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground">{label.toUpperCase()}</p>
            <p className="mt-2 font-display text-4xl">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="panel animate-rise p-6">
          <h2 className="text-3xl">Observation log</h2>
          <ul className="mt-5 space-y-4">
            {observationLog.map((o) => (
              <li key={o.object} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-semibold">{o.object}</p>
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] tracking-[0.16em] text-primary">
                    {o.seeing.toUpperCase()}
                  </span>
                  <span className="ml-auto text-xs tracking-[0.16em] text-muted-foreground">
                    {o.date.toUpperCase()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{o.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel animate-rise p-6">
          <h2 className="text-3xl">Saved events</h2>
          <ul className="mt-5 space-y-4">
            {events.slice(0, 4).map((e) => (
              <li key={e.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <p className="text-[11px] tracking-[0.18em] text-primary">{e.category.toUpperCase()}</p>
                <p className="mt-1 font-semibold">{e.title}</p>
                <p className="text-sm text-muted-foreground">
                  {e.date} · {e.time}
                </p>
              </li>
            ))}
          </ul>
          <Link to="/events" className="mt-5 inline-block text-sm text-primary hover:underline">
            Browse all events →
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
