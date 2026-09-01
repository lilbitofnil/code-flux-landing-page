import { useEffect, useState, type ComponentType } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowDown, ArrowRight, Award, BrainCircuit, CalendarDays, ChevronDown, Clock3,
  Code2, Gift, Github, GraduationCap, HeartPulse, Instagram, Lightbulb, Linkedin,
  MapPin, Menu, Network, Rocket, Sparkles, Trophy, Users, WalletCards, Wrench, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const REGISTRATION_URL = "/register";

type Accent = "blue" | "green" | "orange" | "red";
const accentText: Record<Accent, string> = { blue: "text-brand", green: "text-brand-green", orange: "text-brand-orange", red: "text-brand-red" };
const accentBg: Record<Accent, string> = { blue: "bg-brand/10", green: "bg-brand-green/10", orange: "bg-brand-orange/15", red: "bg-brand-red/10" };

const highlights = [
  { icon: Trophy, title: "Cash prizes", value: "₹60,000+", text: "Cash prizes and rewards for winning teams.", accent: "blue" },
  { icon: Users, title: "Industry mentorship", text: "Learn directly from industry experts and experienced builders.", accent: "green" },
  { icon: Gift, title: "Swags & goodies", text: "Exciting goodies, swag and surprises for participants.", accent: "orange" },
  { icon: Award, title: "Certificates", text: "Certificates for all eligible participants.", accent: "red" },
] as const;

const reasons = [
  { icon: Wrench, title: "Build", text: "Turn your ideas into functional products.", accent: "blue" },
  { icon: GraduationCap, title: "Learn", text: "Gain practical knowledge through workshops and mentorship.", accent: "green" },
  { icon: Users, title: "Collaborate", text: "Work with students from different backgrounds.", accent: "orange" },
  { icon: Lightbulb, title: "Solve", text: "Build solutions for real-world problems.", accent: "red" },
  { icon: Trophy, title: "Compete", text: "Challenge yourself against talented teams.", accent: "blue" },
  { icon: Network, title: "Connect", text: "Meet mentors, builders and fellow innovators.", accent: "green" },
] as const;

export const tracks = [
  { icon: BrainCircuit, name: "AI & Machine Learning", description: "Build intelligent solutions using AI and ML.", accent: "blue" },
  { icon: Code2, name: "Web & App Development", description: "Create useful, scalable digital products.", accent: "green" },
  { icon: WalletCards, name: "Fintech", description: "Build solutions for the future of finance.", accent: "orange" },
  { icon: HeartPulse, name: "Health & Wellness", description: "Use technology to solve meaningful problems.", accent: "red" },
  { icon: Sparkles, name: "Open Innovation", description: "Have an idea outside conventional categories? Build it.", accent: "blue" },
] as const;

const process = [
  ["Register", "Sign up and form your team."], ["Ideate", "Choose a problem worth solving."],
  ["Build", "Code, design, test and iterate."], ["Mentor", "Get guidance from industry experts."],
  ["Submit", "Present your final solution."], ["Win", "Compete for prizes, recognition and opportunities."],
];

const milestones = [
  { day: "Day 1", items: ["Registration & Opening", "Team Formation", "Problem Statements", "Ideation"], accent: "blue" },
  { day: "Day 2", items: ["Development", "Mentorship Sessions", "Workshops", "Building & Testing"], accent: "green" },
  { day: "Day 3", items: ["Final Development", "Project Submission", "Evaluation", "Final Presentations"], accent: "orange" },
  { day: "Closing", items: ["Results", "Prize Distribution", "Certificates", "Celebration"], accent: "red" },
] as const;

const faqs = [
  ["Who can participate?", "Eligibility details will be confirmed by the organizers. This answer is easy to edit in the FAQ data."],
  ["Is this an individual or team event?", "CODE FLUX is designed as a team event. Final team formation rules will be shared by the organizers."],
  ["How many members can a team have?", "The permitted team size will be announced in the official registration details."],
  ["Is there a registration fee?", "Registration fee details will be included in the official registration form."],
  ["What should we build?", "Choose a track and build a working solution to a meaningful problem. Detailed statements will be announced at the event."],
  ["Are beginners allowed?", "Yes. Curious students at every skill level are encouraged to participate and learn."],
  ["What should participants bring?", "Bring your laptop, charger, student identification, and anything else listed in the participant guidelines."],
  ["Will certificates be provided?", "Certificates will be provided to all eligible participants."],
  ["Will mentors be available?", "Yes. Industry professionals will support teams through technical, product, and feedback sessions."],
  ["Where will the hackathon take place?", "CODE FLUX will take place at LPU Campus, Phagwara, Punjab."],
] as const;

function Wordmark({ large = false }: { large?: boolean }) {
  return <div aria-label="CODE FLUX" className={`font-display font-extrabold leading-[0.82] ${large ? "text-[clamp(4.5rem,15vw,11rem)]" : "text-lg"}`}><span className="block text-ink">CODE</span><span className="block"><span className="text-brand">F</span><span className="text-brand-green">L</span><span className="text-brand-orange">U</span><span className="text-brand-red">X</span></span></div>;
}

function RegisterButton({ variant = "flux", label = "Register now" }: { variant?: "flux" | "ink"; label?: string }) {
  return <Button asChild variant={variant} size="xl"><a href={REGISTRATION_URL}>{label}<ArrowRight /></a></Button>;
}

function SectionHead({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="flex flex-col gap-5 border-b-2 border-ink pb-6 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{label}</p><h2 className="mt-2 max-w-3xl font-display text-4xl font-extrabold text-ink md:text-5xl">{title}</h2></div>{text && <p className="max-w-md text-sm leading-7 text-muted-foreground">{text}</p>}</div>;
}

export function Navbar() {
  const [open, setOpen] = useState(false); const [compact, setCompact] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = [["Home", "#home"], ["About", "#about"], ["Tracks", "#tracks"], ["Timeline", "#timeline"], ["Prizes", "#prizes"], ["FAQs", "#faqs"]];
  return <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-sm"><nav aria-label="Main navigation" className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 transition-all lg:px-8 ${compact ? "h-14" : "h-18"}`}><a href="#home" className="w-fit" aria-label="CODE FLUX home"><Wordmark /></a><div className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-xs font-bold text-muted-foreground transition-colors hover:text-ink">{label}</a>)}<RegisterButton /></div><Button className="lg:hidden" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></nav>{open && <div className="border-t border-border bg-paper px-5 py-5 lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-semibold text-ink">{label}</a>)}<div className="pt-4"><RegisterButton /></div></div>}</header>;
}

export function Hero() {
  return <section id="home" className="relative overflow-hidden bg-paper"><div className="dot-grid absolute inset-x-0 top-0 h-40 opacity-15" /><div className="drift absolute -right-28 -top-28 size-96 rounded-full border-[3px] border-brand-orange" /><div className="absolute -left-28 bottom-20 size-72 rounded-full border-[3px] border-brand" /><div className="absolute right-[8%] top-1/2 hidden font-display text-8xl font-extrabold text-brand-green/20 lg:block">{"{ }"}</div><div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"><p className="rise text-xs font-bold uppercase tracking-[0.22em] text-ink">36-hour student hackathon <span className="text-brand">/ ideas in motion</span></p><h1 className="sr-only">CODE FLUX student hackathon</h1><div className="rise mt-7 [animation-delay:60ms]"><Wordmark large /></div><p className="rise mt-7 font-display text-base font-bold uppercase tracking-[0.18em] text-ink [animation-delay:120ms]">Build <span className="text-brand-green">•</span> Break <span className="text-brand-orange">•</span> Innovate</p><div className="rise mt-7 max-w-xl [animation-delay:160ms]"><p className="font-display text-xl font-bold text-ink">A hackathon where ideas flow and innovation never stops.</p><p className="mt-3 leading-7 text-muted-foreground">Bring your ideas, build real solutions, collaborate with brilliant minds, and turn problems into possibilities.</p></div><div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:200ms]"><RegisterButton variant="ink" /><Button asChild variant="outlineInk" size="xl"><a href="#about">Explore event<ArrowDown /></a></Button></div><div className="rise mt-12 grid max-w-4xl divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0 [animation-delay:240ms]">{[[CalendarDays,"11–13 September 2026","36-hour hackathon"],[Clock3,"36 hours","Non-stop building"],[MapPin,"LPU Campus","Phagwara, Punjab"]].map(([Icon,title,text]) => { const I = Icon as ComponentType<{className?:string}>; return <div key={String(title)} className="flex items-center gap-4 py-5 md:px-6 first:pl-0"><I className="size-7 shrink-0 text-brand"/><div className="min-w-0"><p className="font-display text-sm font-bold uppercase text-ink">{String(title)}</p><p className="mt-1 text-xs uppercase text-muted-foreground">{String(text)}</p></div></div>})}</div></div></section>;
}

export function EventStats() { return <section className="border-y border-border bg-soft"><div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{highlights.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-xl border border-border bg-paper p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"><div className={`grid size-12 place-items-center rounded-full ${accentBg[item.accent]}`}><Icon className={`size-6 ${accentText[item.accent]}`}/></div><h3 className="mt-5 font-display text-lg font-extrabold uppercase text-ink">{item.title}</h3>{"value" in item && <p className="mt-1 font-display text-3xl font-extrabold text-brand">{item.value}</p>}<p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></article>})}</div></section> }

export function About() { return <section id="about" className="bg-paper py-20 lg:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">About CODE FLUX</p><h2 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">Where Ideas Start Flowing.</h2><p className="mt-6 leading-8 text-muted-foreground">CODE FLUX is a 36-hour student hackathon designed to bring together curious minds, developers, designers, problem solvers and innovators.</p><p className="mt-4 leading-8 text-muted-foreground">Participants will work in teams to transform ideas into working solutions while learning, experimenting and receiving guidance from industry professionals.</p><div className="mt-8"><RegisterButton /></div></div><div className="relative grid min-h-96 place-items-center overflow-hidden rounded-2xl border border-border bg-soft"><div className="dot-grid absolute inset-0 opacity-10"/><div className="absolute left-10 top-10 font-display text-6xl font-extrabold text-brand">{"{ }"}</div><Code2 className="size-28 text-ink" strokeWidth={1.2}/><Lightbulb className="absolute bottom-12 right-14 size-16 text-brand-orange"/><div className="absolute left-16 right-16 top-1/2 h-0.5 bg-brand-green"/><div className="absolute bottom-8 left-8 flex gap-3">{["bg-brand","bg-brand-green","bg-brand-orange","bg-brand-red"].map(c=><span key={c} className={`size-3 rounded-full ${c}`}/>)}</div></div></div></section> }

export function WhyParticipate() { return <section className="border-y border-border bg-soft py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead label="Why participate" title="Why CODE FLUX?"/><div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{reasons.map(({icon:Icon,title,text,accent})=><article key={title} className="bg-paper p-7"><Icon className={`size-7 ${accentText[accent]}`}/><h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section> }

export function Tracks() { return <section id="tracks" className="bg-paper py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead label="Hackathon tracks" title="Choose Your Track" text="Five directions, one goal: build a useful solution that deserves to exist."/><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tracks.map(({icon:Icon,name,description,accent},i)=><article key={name} className="rounded-xl border border-border bg-paper p-6 shadow-soft transition hover:-translate-y-1"><div className="flex items-center justify-between"><Icon className={`size-7 ${accentText[accent]}`}/><span className="text-xs font-bold text-muted-foreground">0{i+1}</span></div><h3 className="mt-8 font-display text-lg font-extrabold uppercase text-ink">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div><div className="mt-8"><RegisterButton /></div></div></section> }

export function HowItWorks() { return <section className="border-y border-border bg-soft py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead label="How it works" title="From Idea → Innovation"/><ol className="relative mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6 before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-brand md:before:left-0 md:before:right-0 md:before:top-6 md:before:h-0.5 md:before:w-full">{process.map(([title,text],i)=><li key={title} className="relative pl-16 md:pl-0 md:pt-14"><span className={`absolute left-0 top-0 grid size-11 place-items-center rounded-full font-display text-xs font-extrabold text-paper ${["bg-brand","bg-brand-green","bg-brand-orange","bg-brand-red"][i%4]}`}>{String(i+1).padStart(2,"0")}</span><h3 className="font-display text-sm font-extrabold uppercase text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></li>)}</ol></div></section> }

export function Timeline() { return <section id="timeline" className="bg-paper py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead label="Event timeline" title="The CODE FLUX Journey" text="An editable event rhythm from opening registration to the final celebration."/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{milestones.map(({day,items,accent})=><article key={day} className="rounded-xl border border-border p-6"><div className={`mb-5 h-1 w-16 rounded-full ${accentBg[accent]}`} /><h3 className={`font-display text-2xl font-extrabold uppercase ${accentText[accent]}`}>{day}</h3><ul className="mt-5 space-y-3">{items.map(item=><li key={item} className="flex items-center gap-3 text-sm text-ink"><span className={`size-2 rounded-full ${accentBg[accent]}`}/>{item}</li>)}</ul></article>)}</div></div></section> }

export function Mentorship() { const cards=[[Code2,"Technical mentorship","Get help with architecture, development and implementation."],[Lightbulb,"Product guidance","Turn an idea into something users actually need."],[Sparkles,"Expert feedback","Get feedback from experienced professionals."]] as const; return <section className="border-y border-border bg-soft py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHead label="Mentorship" title="Build With Guidance." text="You don't have to build alone. Get access to industry professionals who can help validate ideas, overcome technical challenges and improve your solution."/><div className="mt-8 grid gap-5 md:grid-cols-3">{cards.map(([Icon,title,text],i)=><article key={title} className="rounded-xl border border-border bg-paper p-7 shadow-soft"><Icon className={`size-8 ${["text-brand","text-brand-green","text-brand-orange"][i]}`}/><h3 className="mt-6 font-display text-lg font-extrabold uppercase text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div><div className="mt-8 grid gap-4 sm:grid-cols-3">{[1,2,3].map(n=><div key={n} className="flex items-center gap-4 border-t border-border py-5"><div className="grid size-12 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground"><Users className="size-5"/></div><div><p className="font-display text-sm font-bold text-ink">Mentor profile</p><p className="text-xs text-muted-foreground">Details coming soon</p></div></div>)}</div><RegisterButton /></div></section> }



export function RegistrationCTA() { return <section id="register" className="relative overflow-hidden bg-paper py-24 text-center lg:py-32"><div className="dot-grid absolute inset-x-0 top-0 h-32 opacity-10"/><div className="relative mx-auto max-w-3xl px-5"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Registrations open</p><h2 className="mt-4 font-display text-4xl font-extrabold text-ink md:text-6xl">Ready to Make Something Flow?</h2><p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Your next big idea could start here.</p><div className="mt-8"><RegisterButton label="Register for CODE FLUX" /></div><p className="mt-4 text-xs text-muted-foreground">Registration is open to eligible student participants.</p></div></section> }

export function FAQ() { return <section id="faqs" className="border-t border-border bg-soft py-20 lg:py-28"><div className="mx-auto max-w-4xl px-5 lg:px-8"><SectionHead label="FAQs" title="Questions, answered."/><Accordion.Root type="multiple" className="mt-8 divide-y divide-border border-y border-border">{faqs.map(([q,a])=><Accordion.Item key={q} value={q}><Accordion.Header><Accordion.Trigger className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left font-display font-bold text-ink"><span className="min-w-0">{q}</span><ChevronDown className="size-5 shrink-0 transition-transform group-data-[state=open]:rotate-180"/></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="max-w-2xl pb-5 text-sm leading-7 text-muted-foreground">{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section> }

export function FinalCTA() { return <section className="relative overflow-hidden bg-paper py-20 text-center"><div className="absolute -left-20 top-8 size-44 rounded-full border-[3px] border-brand"/><div className="absolute -right-16 bottom-4 size-36 rounded-full border-[3px] border-brand-red"/><div className="relative mx-auto max-w-4xl px-5"><h2 className="font-display text-4xl font-extrabold uppercase text-ink md:text-6xl">Don't just have an idea.<br/><span className="text-brand">Build it.</span></h2><p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">CODE FLUX — Build <span className="text-brand-green">•</span> Break <span className="text-brand-orange">•</span> Innovate</p><div className="mt-8"><RegisterButton /></div></div></section> }

export function Footer() { return <footer className="border-t border-border bg-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8"><div><Wordmark/><p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Build • Break • Innovate</p><p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4"/>LPU Campus, Phagwara, Punjab</p></div><div><h3 className="font-display text-sm font-bold uppercase text-ink">Quick links</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">{[["Home","#home"],["About","#about"],["Tracks","#tracks"],["Timeline","#timeline"],["Prizes","#prizes"],["FAQs","#faqs"]].map(([l,h])=><a key={h} href={h} className="hover:text-ink">{l}</a>)}</div></div><div><h3 className="font-display text-sm font-bold uppercase text-ink">Follow us</h3><div className="mt-4 flex gap-3">{[[Github,"GitHub"],[Linkedin,"LinkedIn"],[Instagram,"Instagram"]].map(([Icon,label])=>{const I=Icon as ComponentType<{className?:string}>;return <a key={String(label)} href="#" aria-label={String(label)} className="grid size-10 place-items-center rounded-full border border-border text-ink transition hover:-translate-y-0.5 hover:border-ink"><I className="size-4"/></a>})}</div></div></div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© 2026 CODE FLUX. All rights reserved.</div></footer> }