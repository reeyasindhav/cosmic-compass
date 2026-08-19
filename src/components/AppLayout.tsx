import { Link, useRouterState } from "@tanstack/react-router";
import {
  Compass,
  Sparkles,
  Star,
  CalendarDays,
  BookOpen,
  Search,
  Bell,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Telescope,
} from "lucide-react";
import { useState } from "react";
import { useAuth, initials } from "@/lib/auth";
import { StarField } from "@/components/StarField";

const nav = [
  { to: "/", label: "Dashboard", icon: Compass },
  { to: "/star-map", label: "Star map", icon: Star },
  { to: "/events", label: "Events", icon: CalendarDays },
  { to: "/explore", label: "Explore", icon: Sparkles },
  { to: "/learn", label: "Learn", icon: BookOpen },
] as const;

export function AppLayout({
  breadcrumb,
  children,
}: {
  breadcrumb: string;
  children: React.ReactNode;
}) {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(800px 500px at 15% -10%, oklch(0.35 0.09 268 / 0.55), transparent 60%), radial-gradient(700px 500px at 95% 10%, oklch(0.3 0.1 300 / 0.35), transparent 65%)",
        }}
      />
      <StarField count={70} className="fixed inset-0 opacity-60" />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-sidebar-border bg-sidebar/95 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-6">
          <span className="grid size-11 place-items-center rounded-2xl bg-accent glow-ring">
            <Telescope className="size-5 text-primary" />
          </span>
          <span className="text-sm font-semibold tracking-[0.28em] text-foreground">STARGAZER</span>
          <button
            className="ml-auto text-muted-foreground lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {nav.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300 ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground glow-ring"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                }`}
              >
                <item.icon
                  className={`size-[18px] transition-transform duration-300 group-hover:scale-110 ${active ? "text-primary" : ""}`}
                />
                {item.label}
                {active && <span className="ml-auto size-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-5 p-5">
          <div className="rounded-2xl border border-sidebar-border bg-accent/40 p-4">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary">
              <HelpCircle className="size-4" /> SKY TIP
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The darkest skies reveal thousands more stars than city lights ever can.
            </p>
          </div>

          <div className="flex items-center gap-3 border-t border-sidebar-border pt-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
              {user ? initials(user.name) : "AS"}
            </span>
            <Link to="/profile" className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold capitalize">{user?.name ?? "Guest observer"}</p>
              <p className="truncate text-xs text-primary">{user?.role ?? "Sign in to save logs"}</p>
            </Link>
            {user ? (
              <button
                onClick={signOut}
                aria-label="Sign out"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <LogOut className="size-4" />
              </button>
            ) : (
              <Link to="/login" className="text-xs text-primary hover:underline">
                Log in
              </Link>
            )}
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="relative lg:pl-[264px]">
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-background/70 px-5 py-5 backdrop-blur-xl sm:px-8">
          <button
            className="text-muted-foreground lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>
          <p className="truncate text-xs tracking-[0.24em] text-muted-foreground sm:text-sm">
            {breadcrumb.toUpperCase()} / AUGUST 2026
          </p>
          <div className="ml-auto flex items-center gap-4 text-muted-foreground">
            <Link to="/search" aria-label="Search" className="transition-colors hover:text-primary">
              <Search className="size-[18px]" />
            </Link>
            <button aria-label="Notifications" className="relative transition-colors hover:text-primary">
              <Bell className="size-[18px]" />
              <span className="absolute -right-0.5 -top-0.5 size-2 animate-twinkle rounded-full bg-primary" />
            </button>
            <span className="hidden border-l border-border pl-4 text-sm sm:block">
              Local time 09:41 PM
            </span>
          </div>
        </header>

        <main className="relative px-5 pb-20 pt-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
