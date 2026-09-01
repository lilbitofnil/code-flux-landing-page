import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const TUNYT_URL = "https://www.tunyt.com/events/01a059a1-2356-7099-8dce-d2ce7fc74bca";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — CODE FLUX Hackathon" },
      { name: "description", content: "Register your team for CODE FLUX, the 36-hour student hackathon at LPU Campus, Phagwara, Punjab." },
      { property: "og:title", content: "Register — CODE FLUX Hackathon" },
      { property: "og:description", content: "Register your team for CODE FLUX, the 36-hour student hackathon at LPU Campus." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <main className="fixed inset-0 flex flex-col bg-paper">
      <div className="flex h-12 shrink-0 items-center border-b border-border px-4">
        <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink">
          <ArrowLeft className="size-4" /> Back to CODE FLUX
        </Link>
      </div>
      <iframe
        src={TUNYT_URL}
        title="CODE FLUX registration"
        className="min-h-0 w-full flex-1 border-0"
        allow="payment"
      />
    </main>
  );
}
