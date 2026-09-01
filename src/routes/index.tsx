import { createFileRoute } from "@tanstack/react-router";
import { About, EventStats, FAQ, FinalCTA, Footer, Hero, HowItWorks, Mentorship, Navbar, RegistrationCTA, Timeline, Tracks, WhyParticipate } from "@/components/code-flux";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "CODE FLUX | 36-Hour Student Hackathon" },
    { name: "description", content: "Join CODE FLUX, a 36-hour student hackathon at Lovely Professional University. Build, break, innovate, and compete for ₹60,000+ in prizes." },
    { property: "og:title", content: "CODE FLUX | 36-Hour Student Hackathon" },
    { property: "og:description", content: "Build real solutions with mentors at Lovely Professional University, 11–13 September 2026." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EventStats />
      <About />
      <WhyParticipate />
      <Tracks />
      <HowItWorks />
      <Timeline />
      <Mentorship />
      <RegistrationCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
