import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Telescope } from "lucide-react";
import { StarField } from "@/components/StarField";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In or Create an Account | Stargazer" },
      {
        name: "description",
        content:
          "Sign in to Stargazer to save observation logs, set event reminders and personalise your night sky dashboard.",
      },
      { property: "og:title", content: "Sign In | Stargazer" },
      { property: "og:description", content: "Save your observations and follow the sky all year." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password of at least 6 characters.");
      return;
    }
    signIn(email, mode === "signup" ? name : undefined);
    navigate({ to: "/" });
  };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 20% -10%, oklch(0.35 0.09 268 / 0.6), transparent 60%), radial-gradient(700px 500px at 90% 20%, oklch(0.3 0.1 300 / 0.4), transparent 65%)",
        }}
      />
      <StarField count={90} className="absolute inset-0 opacity-70" />

      <div className="panel animate-rise relative w-full max-w-md p-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-accent glow-ring">
            <Telescope className="size-5 text-primary" />
          </span>
          <span className="text-sm font-semibold tracking-[0.28em]">STARGAZER</span>
        </Link>

        <h1 className="mt-8 text-4xl">{mode === "login" ? "Welcome back" : "Join the observers"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {mode === "login"
            ? "Sign in to pick up your observation log where you left it."
            : "Create an account to save sightings and set event reminders."}
        </p>

        <form onSubmit={submit} className="mt-7 space-y-4">
          {mode === "signup" && (
            <div>
              <label htmlFor="name" className="text-xs tracking-[0.18em] text-muted-foreground">
                NAME
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Stargazer"
                className="mt-2 w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="text-xs tracking-[0.18em] text-muted-foreground">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs tracking-[0.18em] text-muted-foreground">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110"
          >
            {mode === "login" ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "login" ? "New to Stargazer?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setError("");
            }}
            className="text-primary hover:underline"
          >
            {mode === "login" ? "Create an account" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
