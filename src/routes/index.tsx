import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bath, BedDouble, Building2, ChevronDown, MapPin, Menu, Ruler, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@/assets/hero-residence.jpg";
import willowImage from "@/assets/willow-residence.jpg";
import ariaImage from "@/assets/aria-heights.jpg";
import casaImage from "@/assets/casa-verde.jpg";
import delhiImage from "@/assets/location-delhi.jpg";
import mumbaiImage from "@/assets/location-mumbai.jpg";
import goaImage from "@/assets/location-goa.jpg";
import closingImage from "@/assets/closing-residence.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Homes in India | Avera Estates" },
      { name: "description", content: "Discover considered luxury homes in Delhi, Mumbai and Goa with Avera Estates." },
      { property: "og:title", content: "Avera Estates — Curated Real Estate" },
      { property: "og:description", content: "Exceptional homes, thoughtfully selected for the way you want to live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const properties = [
  { name: "The Willow Residence", location: "New Delhi", type: "Villa", beds: 4, baths: 5, area: "4,200 sq.ft.", price: "₹4.8 Cr", image: willowImage, lead: true },
  { name: "Aria Heights", location: "Mumbai", type: "Apartment", beds: 3, baths: 3, area: "2,180 sq.ft.", price: "₹2.6 Cr", image: ariaImage },
  { name: "Casa Verde", location: "Goa", type: "Villa", beds: 4, baths: 4, area: "3,600 sq.ft.", price: "₹3.9 Cr", image: casaImage },
];

const locations = [
  { name: "Delhi", count: "42 properties", copy: "Leafy enclaves, enduring architecture and the centre of it all.", image: delhiImage },
  { name: "Mumbai", count: "36 properties", copy: "Elevated city living, shaped by sea, light and possibility.", image: mumbaiImage },
  { name: "Goa", count: "28 properties", copy: "A slower rhythm, tropical modernism and room to breathe.", image: goaImage },
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Arrow() {
  return <ArrowRight aria-hidden="true" className="arrow-move size-4" />;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const nav = ["Properties", "Buy", "Rent", "Sell", "About", "Insights", "Contact"];
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", scrolled || open ? "border-border bg-background text-foreground" : "border-transparent bg-transparent text-hero-foreground")}>
      <div className={cn("page-shell flex items-center justify-between transition-all duration-500", scrolled ? "h-18" : "h-24")}>
        <a href="#top" aria-label="Avera Estates home" className="font-display text-3xl">Avera<span className="text-accent">.</span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => <a key={item} className="nav-link text-[0.69rem] font-medium uppercase tracking-[0.12em]" href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <Button variant={scrolled ? "accent" : "outlineLight"} className="hidden lg:inline-flex" onClick={() => scrollTo("contact")}>Book a Consultation</Button>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex size-12 items-center justify-center border border-current lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div className={cn("absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] bg-background px-6 text-foreground transition-all duration-500 lg:hidden", open ? "visible opacity-100" : "invisible opacity-0")}>
        <nav className="flex h-full flex-col justify-center gap-5" aria-label="Mobile navigation">
          {nav.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="border-b border-border pb-4 font-display text-4xl"><span className="mr-5 align-middle font-sans text-[0.65rem] text-muted-foreground">0{index + 1}</span>{item}</a>)}
          <Button variant="accent" className="mt-5 w-full" onClick={() => { setOpen(false); scrollTo("contact"); }}>Book a Consultation <Arrow /></Button>
        </nav>
      </div>
    </header>
  );
}

function SelectField({ label, children, dark = false }: { label: string; children: React.ReactNode; dark?: boolean }) {
  return <label className="relative block min-w-0 flex-1">
    <span className={cn("eyebrow mb-2 block", dark ? "text-hero-foreground/70" : "text-muted-foreground")}>{label}</span>
    <select className={cn("h-9 w-full appearance-none bg-transparent pr-7 text-sm outline-none transition-colors focus:border-accent", dark ? "text-hero-foreground" : "text-foreground")} defaultValue="">
      {children}
    </select>
    <ChevronDown aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-0 size-4" />
  </label>;
}

function Hero() {
  return <section id="top" className="relative min-h-[760px] overflow-hidden text-hero-foreground md:min-h-[840px]">
    <img src={heroImage} alt="Contemporary residence with illuminated gardens at dusk" width={1920} height={1200} fetchPriority="high" className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.02_170/0.78)_0%,oklch(0.12_0.02_170/0.38)_48%,transparent_78%)]" />
    <div className="page-shell relative flex min-h-[760px] flex-col justify-end pb-8 pt-32 md:min-h-[840px] md:pb-10">
      <div className="mb-auto mt-auto max-w-3xl pb-10 md:pb-16">
        <p className="eyebrow hero-enter hero-enter-1 mb-6 text-hero-foreground/75">Curated Real Estate</p>
        <h1 className="display-title hero-enter hero-enter-2 max-w-3xl text-6xl sm:text-7xl md:text-[6.3rem]">Find a Place Worth <em>Calling Home.</em></h1>
        <p className="hero-enter hero-enter-3 mt-7 max-w-lg text-base leading-7 text-hero-foreground/85 md:text-lg">Exceptional homes, thoughtfully selected for the way you want to live.</p>
        <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3">
          <Button variant="light" onClick={() => scrollTo("properties")}>Explore Properties <Arrow /></Button>
          <Button variant="outlineLight" onClick={() => scrollTo("contact")}>Book a Consultation</Button>
        </div>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); scrollTo("properties"); }} className="hero-enter hero-enter-5 grid gap-5 border border-hero-border bg-primary/75 p-5 backdrop-blur-sm md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-6">
        <SelectField dark label="Location"><option value="">Any location</option><option>Delhi</option><option>Mumbai</option><option>Goa</option></SelectField>
        <SelectField dark label="Property type"><option value="">All properties</option><option>Apartment</option><option>Villa</option><option>House</option></SelectField>
        <SelectField dark label="Price range"><option value="">Any price</option><option>₹1–3 Cr</option><option>₹3–5 Cr</option><option>₹5 Cr+</option></SelectField>
        <Button variant="accent" type="submit"><Search className="size-4" /> Search</Button>
      </form>
    </div>
  </section>;
}

function SearchSection() {
  const [mode, setMode] = useState("Buy");
  return <section id="buy" className="border-b border-border bg-card py-14 md:py-18">
    <div className="page-shell reveal">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="eyebrow mb-3 text-accent">Begin your search</p><h2 className="font-display text-4xl md:text-5xl">What are you looking for?</h2></div>
        <div className="flex border-b border-border" role="tablist" aria-label="Transaction type">
          {["Buy", "Rent"].map((item) => <button type="button" role="tab" aria-selected={mode === item} key={item} onClick={() => setMode(item)} className={cn("min-h-12 px-8 text-sm transition-colors", mode === item ? "border-b-2 border-accent text-primary" : "text-muted-foreground")}>{item}</button>)}
        </div>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); scrollTo("properties"); }} className="grid gap-x-7 gap-y-6 border-y border-border py-7 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_.7fr_auto] lg:items-end">
        <SelectField label="Location"><option value="">Select a city</option><option>Delhi</option><option>Mumbai</option><option>Goa</option></SelectField>
        <SelectField label="Property type"><option value="">Any type</option><option>Apartment</option><option>Villa</option><option>House</option><option>Penthouse</option><option>Commercial</option></SelectField>
        <SelectField label="Price range"><option value="">Any price</option><option>₹1–3 Cr</option><option>₹3–5 Cr</option><option>₹5 Cr+</option></SelectField>
        <SelectField label="Bedrooms"><option value="">Any</option><option>2+</option><option>3+</option><option>4+</option></SelectField>
        <Button variant="accent" type="submit">Find Properties <Arrow /></Button>
      </form>
    </div>
  </section>;
}

function PropertyTile({ property }: { property: typeof properties[number] }) {
  return <article className="property-tile group border-b border-border pb-6 transition-colors duration-500">
    <div className={cn("overflow-hidden", property.lead ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]")}><img src={property.image} alt={`${property.name}, ${property.location}`} width={property.lead ? 1408 : 1200} height={property.lead ? 1600 : 912} loading="lazy" className="image-zoom h-full w-full object-cover" /></div>
    <div className="property-copy mt-5 transition-transform duration-500">
      <div className="mb-2 flex items-start justify-between gap-4"><div><p className="eyebrow mb-2 text-muted-foreground">{property.location}</p><h3 className="font-display text-3xl">{property.name}</h3></div><Arrow /></div>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"><span>{property.beds} Beds</span><span>{property.baths} Baths</span><span>{property.area}</span><strong className="ml-auto text-base font-semibold text-foreground">{property.price}</strong></div>
    </div>
  </article>;
}

function FeaturedProperties() {
  const leadProperty = properties[0];
  if (!leadProperty) return null;
  return <section id="properties" className="py-24 md:py-36"><div className="page-shell">
    <div className="reveal mb-14 grid gap-6 md:grid-cols-2 md:items-end"><div><p className="eyebrow mb-4 text-accent">Selected residences</p><h2 className="display-title text-5xl md:text-7xl">Properties Worth <em>Discovering</em></h2></div><div className="md:justify-self-end"><p className="max-w-md leading-7 text-muted-foreground">A considered collection of residences selected for location, architecture and lifestyle.</p><Button variant="text" className="mt-6">View All Properties <Arrow /></Button></div></div>
    <div className="grid items-start gap-8 md:grid-cols-[1.22fr_.78fr] md:gap-12"><div className="reveal"><PropertyTile property={leadProperty} /></div><div className="grid gap-12 md:pt-24">{properties.slice(1).map((property) => <div className="reveal" key={property.name}><PropertyTile property={property} /></div>)}</div></div>
  </div></section>;
}

function Principles() {
  const items = [
    ["Curated Properties", "We look beyond listings to find homes with lasting architectural and lifestyle value."],
    ["Local Expertise", "On-the-ground knowledge of neighbourhoods, markets and the nuances that matter."],
    ["Transparent Guidance", "Clear advice, thoughtful due diligence and no pressure at any stage."],
    ["Long-Term Relationships", "A trusted partner for this move, the next one and everything in between."],
  ];
  return <section id="about" className="bg-primary py-24 text-primary-foreground md:py-36"><div className="page-shell grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
    <div className="reveal lg:sticky lg:top-32 lg:self-start"><p className="eyebrow mb-5 text-secondary">Why Avera</p><h2 className="display-title max-w-xl text-5xl md:text-7xl">Real Estate, With a More <em>Considered</em> Approach.</h2></div>
    <ol className="reveal">{items.map(([title, copy], index) => <li key={title} className="group grid gap-3 border-t border-hero-border py-8 sm:grid-cols-[3rem_1fr] sm:gap-6"><span className="eyebrow pt-2 text-secondary">0{index + 1}</span><div><h3 className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{title}</h3><p className="mt-3 max-w-lg leading-7 text-primary-foreground/70">{copy}</p></div></li>)}</ol>
  </div></section>;
}

function Locations() {
  return <section className="bg-card py-24 md:py-36"><div className="page-shell">
    <div className="reveal mb-14 max-w-3xl"><p className="eyebrow mb-4 text-accent">Places we know</p><h2 className="display-title text-5xl md:text-7xl">Live Where Life Feels <em>Different.</em></h2></div>
    <div className="grid gap-4 lg:grid-cols-3">{locations.map((location, index) => <article key={location.name} className={cn("location-tile group relative overflow-hidden", index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-32" : "")}><div className="aspect-[4/5] overflow-hidden"><img src={location.image} alt={`Luxury property setting in ${location.name}`} width={1408} height={912} loading="lazy" className="image-zoom h-full w-full object-cover" /></div><div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-hero-foreground"><div className="flex items-end justify-between"><div><p className="eyebrow mb-2 text-hero-foreground/70">{location.count}</p><h3 className="font-display text-5xl transition-transform duration-300 group-hover:-translate-y-1">{location.name}</h3></div><Arrow /></div><p className="mt-4 max-w-xs text-sm leading-6 text-hero-foreground/75">{location.copy}</p></div></article>)}</div>
  </div></section>;
}

function PropertyStory() {
  const details = [[BedDouble, "4", "Bedrooms"], [Bath, "5", "Bathrooms"], [Ruler, "4,200", "Sq.ft."], [Building2, "Private", "Garden"]] as const;
  return <section className="py-24 md:py-36"><div className="page-shell grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
    <div className="reveal overflow-hidden"><img src={willowImage} alt="Sunlit courtyard of The Willow Residence" width={1408} height={1600} loading="lazy" className="h-[34rem] w-full object-cover md:h-[46rem]" /></div>
    <div className="reveal"><p className="eyebrow mb-5 text-accent">The Willow Residence</p><h2 className="display-title text-5xl md:text-6xl">Architecture designed around <em>light, space</em> and everyday living.</h2><p className="mt-7 max-w-lg leading-7 text-muted-foreground">A quiet urban retreat in New Delhi, where warm natural materials meet generous gardens and beautifully framed daylight.</p><dl className="my-9 grid grid-cols-2 border-y border-border py-7">{details.map(([Icon, value, label]) => <div key={label} className="flex items-center gap-3 py-3"><Icon className="size-5 text-accent" aria-hidden="true" /><div><dt className="text-lg font-semibold">{value}</dt><dd className="eyebrow mt-1 text-muted-foreground">{label}</dd></div></div>)}</dl><Button>View Property <Arrow /></Button></div>
  </div></section>;
}

function Process() {
  const steps = [["Discover", "Understand your requirements and lifestyle."], ["Curate", "Shortlist properties that genuinely fit."], ["Guide", "Support you from viewing to closing."]];
  return <section className="bg-secondary py-24 md:py-32"><div className="page-shell reveal"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4 text-accent">How we work</p><h2 className="display-title text-5xl md:text-6xl">From first conversation<br />to <em>front door.</em></h2></div><p className="max-w-sm leading-7 text-muted-foreground">A clear, personal process built around your priorities—not ours.</p></div><div className="relative grid gap-0 md:grid-cols-3"><div className="timeline-progress absolute left-0 right-0 top-[1.15rem] hidden h-px bg-primary md:block" />{steps.map(([title, copy], index) => <div key={title} className="relative border-l border-primary pb-10 pl-8 last:pb-0 md:border-0 md:pb-0 md:pl-0 md:pr-12"><span className="relative z-10 inline-flex size-9 items-center justify-center bg-secondary text-xs font-semibold">0{index + 1}</span><h3 className="mt-6 font-display text-4xl">{title}</h3><p className="mt-3 max-w-xs leading-6 text-muted-foreground">{copy}</p></div>)}</div></div></section>;
}

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCount(value); observer.disconnect(); return; }
      const start = performance.now();
      const tick = (now: number) => { const progress = Math.min((now - start) / 1100, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function StatsAndQuote() {
  const stats = [[12, "+", "Years of Experience"], [480, "+", "Properties Transacted"], [18, "", "Prime Locations"], [96, "%", "Client Referrals"]] as const;
  return <><section className="border-b border-border bg-card py-16"><div className="page-shell grid grid-cols-2 gap-y-10 md:grid-cols-4">{stats.map(([value, suffix, label]) => <div key={label} className="border-l border-border pl-5 md:pl-7"><strong className="font-display text-5xl font-normal text-primary md:text-6xl"><CountUp value={value} suffix={suffix} /></strong><p className="mt-2 text-xs text-muted-foreground">{label}</p></div>)}</div></section>
  <section className="bg-card py-24 md:py-36"><div className="page-shell reveal grid gap-10 md:grid-cols-[.25fr_1fr] md:gap-20"><span className="font-display text-8xl leading-none text-accent">“</span><figure><blockquote className="display-title max-w-5xl text-4xl md:text-6xl">They understood exactly what we were looking for and never pushed us toward a property that <em>wasn't right.</em></blockquote><figcaption className="mt-10 border-t border-border pt-5"><strong className="text-sm">Ananya &amp; Rohan Mehta</strong><span className="ml-4 text-sm text-muted-foreground">Villa purchase · New Delhi</span></figcaption></figure></div></section></>;
}

function Insights() {
  const articles = [["Neighbourhoods", "How to Choose the Right Neighbourhood", "6 min read", delhiImage], ["Investment", "Understanding Property Value Beyond the Price", "8 min read", mumbaiImage], ["Buying Guide", "5 Things to Look for Before Buying a Home", "5 min read", casaImage]];
  return <section id="insights" className="py-24 md:py-36"><div className="page-shell"><div className="reveal mb-12 flex items-end justify-between"><div><p className="eyebrow mb-4 text-accent">Perspective</p><h2 className="display-title text-5xl md:text-7xl">Insights for <em>considered</em> decisions.</h2></div><Button variant="text" className="hidden md:inline-flex">View all insights <Arrow /></Button></div><div>{articles.map(([category, title, time, image]) => <article key={title} className="insight-row group reveal grid items-center gap-5 border-t border-border py-6 transition-colors md:grid-cols-[13rem_1fr_auto]"><div className="aspect-[16/10] overflow-hidden"><img src={image} alt="" width={1408} height={912} loading="lazy" className="image-zoom h-full w-full object-cover" /></div><div><p className="eyebrow mb-3 text-accent">{category} · {time}</p><h3 className="font-display text-3xl md:text-4xl">{title}</h3></div><Arrow /></article>)}</div></div></section>;
}

function Closing() {
  return <section id="contact" className="relative isolate min-h-[600px] overflow-hidden text-hero-foreground"><img src={closingImage} alt="Contemporary courtyard residence illuminated at dusk" width={1920} height={1008} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-primary/70" /><div className="page-shell flex min-h-[600px] items-center"><div className="reveal max-w-3xl"><p className="eyebrow mb-6 text-secondary">Begin a conversation</p><h2 className="display-title text-6xl md:text-8xl">Your Next Chapter Starts <em>Here.</em></h2><p className="mt-7 max-w-lg text-lg leading-7 text-hero-foreground/80">Tell us what you're looking for. We'll help you find the right place.</p><div className="mt-9 flex flex-wrap gap-3"><Button variant="light">Book a Consultation <Arrow /></Button><Button variant="outlineLight" onClick={() => scrollTo("properties")}>Explore Properties</Button></div></div></div></section>;
}

function Footer() {
  return <footer className="bg-footer py-16 text-primary-foreground md:py-24"><div className="page-shell"><div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]"><div><a href="#top" className="font-display text-4xl">Avera<span className="text-accent">.</span></a><p className="mt-5 max-w-xs text-sm leading-6 text-footer-muted">Considered homes and trusted advice in India's most desirable locations.</p></div>{[["Explore", "Properties", "Buy", "Rent", "Sell"], ["Company", "About", "Insights", "Contact"]].map(([heading, ...links]) => <div key={heading}><h3 className="eyebrow mb-5 text-secondary">{heading}</h3><ul className="space-y-3 text-sm text-footer-muted">{links.map((link) => <li key={link}><a className="transition-colors hover:text-primary-foreground" href={`#${link.toLowerCase()}`}>{link}</a></li>)}</ul></div>)}<div><h3 className="eyebrow mb-5 text-secondary">Contact</h3><address className="space-y-3 text-sm not-italic text-footer-muted"><p>+91 11 4102 8800</p><p>hello@averaestates.in</p><p>Defence Colony, New Delhi</p></address><div className="mt-7 flex gap-5 text-sm"><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-hero-border pt-6 text-xs text-footer-muted md:flex-row"><p>© 2026 Avera Estates. All rights reserved.</p><p>Privacy · Terms</p></div></div></footer>;
}

function HomePage() {
  useReveals();
  return <><Header /><main><Hero /><SearchSection /><FeaturedProperties /><Principles /><Locations /><PropertyStory /><Process /><StatsAndQuote /><Insights /><Closing /></main><Footer /></>;
}