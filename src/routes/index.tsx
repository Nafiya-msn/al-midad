import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FileText,
  Globe2,
  HeartPulse,
  Hammer,
  HandHeart,
  Headset,
  Home,
  IdCard,
  Languages,
  Landmark,
  Layers,
  Mail,
  Menu,
  MessageSquareText,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Stamp,
  Stethoscope,
  UserRoundCheck,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dubai.jpg";
import logoImg from "@/assets/logo.png";
import aboutImg from "@/assets/about-documents.jpg";
import contactImg from "@/assets/contact-architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Midad Star | Document Clearing Services UAE" },
      {
        name: "description",
        content:
          "Reliable assistance for visa, government, documentation and business-related services across the UAE.",
      },
      { property: "og:title", content: "Al Midad Star Documentation Clearing Services" },
      {
        property: "og:description",
        content: "Professional document clearing, made simple across the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Service = { title: string; description: string; icon: LucideIcon; badge: LucideIcon };
const services: Service[] = [
  {
    title: "AMER Services",
    description: "Assistance with AMER-related applications and documentation.",
    icon: Landmark,
    badge: Stamp,
  },
  {
    title: "Emirates ID",
    description: "Clear support throughout your Emirates ID documentation process.",
    icon: IdCard,
    badge: BadgeCheck,
  },
  {
    title: "Medical",
    description: "Guidance for medical documentation and related requirements.",
    icon: Stethoscope,
    badge: FileText,
  },
  {
    title: "Health Insurance",
    description: "Support with health insurance documentation and processing.",
    icon: ShieldPlus,
    badge: HeartPulse,
  },
  {
    title: "Translation",
    description: "Professional assistance for document translation requirements.",
    icon: Languages,
    badge: FileText,
  },
  {
    title: "DHA",
    description: "Documentation support for DHA-related service requirements.",
    icon: HeartPulse,
    badge: ShieldCheck,
  },
  {
    title: "Golden Visa",
    description: "Guidance and document support for Golden Visa applications.",
    icon: Sparkles,
    badge: BookIcon(),
  },
  {
    title: "Tourist Visa",
    description: "Reliable assistance for tourist visa documentation.",
    icon: Plane,
    badge: Globe2,
  },
  {
    title: "Family Visa",
    description: "Support for family visa applications and required documents.",
    icon: Users,
    badge: Home,
  },
  {
    title: "Labour",
    description: "Assistance with labour-related documentation and processes.",
    icon: Hammer,
    badge: ClipboardCheck,
  },
  {
    title: "Business Setup",
    description: "Documentation guidance to support your business setup journey.",
    icon: Building2,
    badge: BriefcaseBusiness,
  },
  {
    title: "Other Services",
    description: "Speak with our team about your specific documentation needs.",
    icon: Layers,
    badge: Headset,
  },
];
function BookIcon(): LucideIcon {
  return CreditCard;
}

const navItems = ["Home", "Services", "About", "Why Us", "Process", "Contact"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-io, .step-line");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal-io ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`flex min-w-0 items-center gap-3 ${className}`}
      aria-label="Al Midad Star home"
    >
      <img src={logoImg} alt="Al Midad Star logo" className="h-9 w-auto shrink-0 opacity-90" />
      <span className="min-w-0">
        <span className="block truncate font-display-serif text-[11px] font-bold uppercase text-foreground sm:text-sm">
          Al Midad Star
        </span>
        <span className="block truncate text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Documentation Clearing Services
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navDelayClasses = [
    "nav-link-delay-0",
    "nav-link-delay-1",
    "nav-link-delay-2",
    "nav-link-delay-3",
    "nav-link-delay-4",
    "nav-link-delay-5",
  ];
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "about", "why-us", "process", "contact"];
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]!;
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/30 bg-background/85 backdrop-blur" : "border-transparent bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <Brand className="header-logo" />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item, i) => {
            const href = item === "Home" ? "#top" : `#${item.toLowerCase().replace(" ", "-")}`;
            const sectionId = item === "Home" ? "home" : item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                href={href}
                className={`nav-link text-sm font-medium uppercase tracking-[0.1em] hover:text-foreground ${navDelayClasses[i]} ${isActive ? "active" : ""}`}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <Button asChild className="hidden lg:inline-flex header-cta">
          <a href="tel:+971556184576">
            <Phone size={16} /> Contact Us
          </a>
        </Button>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative grid h-10 w-10 place-items-center text-foreground lg:hidden"
        >
          <Menu
            size={20}
            className={`absolute transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          />
          <X
            size={20}
            className={`absolute transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-2 px-5 py-3">
          {navItems.map((item, i) => {
            const href = item === "Home" ? "#top" : `#${item.toLowerCase().replace(" ", "-")}`;
            const sectionId = item === "Home" ? "home" : item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                onClick={() => setOpen(false)}
                href={href}
                className={`border-b border-border py-3 text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"} last:border-0`}
              >
                {item}
              </a>
            );
          })}
          <Button asChild className="mt-2 w-fit">
            <a href="tel:+971556184576">
              <Phone size={16} /> Contact Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2500);
    const finishTimer = setTimeout(() => onFinish(), 3100);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-600 ${exiting ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative flex items-center gap-6 sm:gap-8">
        <div className="intro-glow absolute inset-0 -z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl sm:h-24 sm:w-24" />
        <div className="absolute inset-0 -z-10 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />
        <img
          src={logoImg}
          alt="Al Midad Star"
          className="intro-logo h-20 w-auto object-contain sm:h-24"
        />
        <div className="flex flex-col">
          <p className="intro-name font-display-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            AL MIDAD STAR
          </p>
          <p className="intro-subtitle text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
            DOCUMENTATION CLEARING SERVICES
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="font-display-serif text-3xl font-bold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p>}
    </Reveal>
  );
}

function ServiceArt({ icon: Icon, badge: Badge }: { icon: LucideIcon; badge: LucideIcon }) {
  return (
    <div className="relative mb-4 flex h-18 w-full items-end justify-between">
      <div className="grid h-14 w-14 place-items-center rounded-xl border border-border/30 bg-primary/5 text-primary">
        <Icon size={26} strokeWidth={1.3} />
      </div>
      <div className="grid h-6 w-6 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
        <Badge size={10} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      if (sessionStorage.getItem("al-midad-intro-seen") === "true") return false;
    }
    return true;
  });
  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";
  }, [showIntro]);
  const handleIntroFinish = () => {
    sessionStorage.setItem("al-midad-intro-seen", "true");
    setShowIntro(false);
  };
  const heroBg = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (heroBg.current)
          heroBg.current.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      {showIntro && <IntroScreen onFinish={handleIntroFinish} />}
      {!showIntro && (
        <main className="intro-content-in">
          {/* Hero */}
          <section
            id="home"
            className="relative min-h-[820px] scroll-mt-20 overflow-hidden border-b border-border pt-28 sm:pt-32"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                ref={heroBg}
                src={heroImg}
                alt=""
                width={1920}
                height={1088}
                className="parallax bg-drift h-full w-full scale-[1.08] object-cover object-[70%_center] will-change-transform"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
            <div className="fine-grid absolute inset-0 opacity-12 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
            <div className="relative px-5 pb-20 sm:px-8 lg:pl-[7%]">
              <div className="max-w-2xl pt-10 lg:max-w-3xl">
                <div className="hero-rise inline-flex items-center gap-2 border border-primary/30 bg-background/50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                  <img src={logoImg} alt="" className="h-4 w-auto opacity-80" />
                  Al Midad Star • Document Clearing Services
                </div>
                <h1 className="hero-rise-delay mt-7 max-w-3xl font-display-serif text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl lg:text-7xl">
                  Professional Document Clearing,{" "}
                  <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                    Made Simple.
                  </span>
                </h1>
                <p className="hero-sub mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Reliable assistance for visa, government, documentation and business-related
                  services across the UAE.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <div className="hero-cta1">
                    <Button
                      asChild
                      className="w-full shadow-[0_10px_40px_-10px_var(--gold-glow)] transition-transform hover:-translate-y-0.5"
                    >
                      <a href="tel:+971556184576">
                        <Phone size={17} /> Contact Us
                      </a>
                    </Button>
                  </div>
                  <div className="hero-cta2">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full bg-background/40 backdrop-blur"
                    >
                      <a href="#services">
                        Explore Services <ArrowRight size={17} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section
            id="services"
            className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
          >
            <div className="arch-lines absolute inset-0 opacity-40" />
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="What we do"
                title="Documentation support, all in one place."
                copy="Explore comprehensive assistance across essential personal, visa, government and business-related services."
              />
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {services.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 80}>
                    <article className="svc-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_var(--gold-glow)]">
                      <ServiceArt icon={s.icon} badge={s.badge} />
                      <h3 className="mb-3 font-display-serif text-xl font-bold text-foreground">
                        {s.title}
                      </h3>
                      <p className="mb-5 flex-1 text-sm leading-7 text-muted-foreground">
                        {s.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        Learn More
                        <ChevronRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section
            id="about"
            className="scroll-mt-20 border-y border-border bg-card px-5 py-24 sm:px-8 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="relative mx-auto max-w-md lg:mx-0">
                  <div className="absolute -inset-4 translate-x-6 translate-y-6 border border-primary/40" />
                  <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                  <img
                    src={aboutImg}
                    alt="Passport and official documents on a desk"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="relative aspect-[4/5] w-full object-cover shadow-2xl"
                  />
                  <div className="float-document absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-border/50 bg-background/90 px-5 py-4 shadow-xl backdrop-blur sm:-left-10">
                    <span className="grid h-10 w-10 place-items-center bg-primary text-primary-foreground">
                      <FileCheck2 size={20} />
                    </span>
                    <span className="text-sm font-medium">Document clearing solutions</span>
                  </div>
                </div>
              </Reveal>
              <div>
                <SectionHeading eyebrow="About Al Midad Star" title="Who We Are" />
                <Reveal delay={150} className="mt-8 border-l border-primary pl-6 sm:pl-8">
                  <p className="font-display-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
                    Welcome to Al Midad Star Documentation Clearing Services.
                  </p>
                  <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                    We are a trusted and reliable provider of comprehensive document clearing
                    solutions in the UAE. Our focus is to make complex documentation requirements
                    clearer and easier to navigate through professional, customer-focused support.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section
            id="why-us"
            className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
          >
            <div className="fine-grid absolute inset-0 opacity-15" />
            <div className="relative mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Our approach"
                title="Support built around your requirements."
                copy="Four pillars of service excellence."
                center
              />
              <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {(
                  [
                    [
                      "Professional Assistance",
                      "Clear, attentive guidance for every documentation requirement.",
                      UserRoundCheck,
                    ],
                    [
                      "Comprehensive Services",
                      "A broad range of document, visa, personal and business services.",
                      Layers,
                    ],
                    [
                      "Documentation Support",
                      "Practical help to understand and prepare the documents you need.",
                      ClipboardCheck,
                    ],
                    [
                      "Customer-Focused Service",
                      "Responsive support shaped around your specific requirement.",
                      HandHeart,
                    ],
                  ] as [string, string, LucideIcon][]
                ).map(([title, copy, Icon], i) => (
                  <Reveal key={title} delay={i * 110}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-5 grid h-16 w-16 place-items-center rounded-full border border-primary/30 bg-primary/5 text-primary transition-transform duration-300 hover:scale-105">
                        <Icon size={32} strokeWidth={1.4} />
                      </div>
                      <h3 className="font-display-serif text-xl font-bold text-foreground">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section
            id="process"
            className="scroll-mt-20 border-y border-border bg-card px-5 py-24 sm:px-8 lg:py-32"
          >
            <div className="mx-auto max-w-6xl">
              <SectionHeading eyebrow="A clear path" title="Three simple steps." center />
              <div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="absolute left-10 right-10 top-8 hidden h-px lg:block">
                  <div className="step-line h-full w-full bg-gradient-to-r from-primary via-primary to-primary/20" />
                </div>
                {(
                  [
                    ["01", "Consultation", MessageSquareText],
                    ["02", "Document Processing", FileCheck2],
                    ["03", "Completion", BadgeCheck],
                  ] as [string, string, LucideIcon][]
                ).map(([num, stepTitle, Icon], i) => (
                  <Reveal key={num} delay={i * 220}>
                    <div className="relative flex flex-col items-center text-center">
                      <span className="process-step-num mb-2 sm:text-5xl lg:text-6xl">{num}</span>
                      <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-primary/30 bg-primary/5 text-primary">
                        <Icon size={32} strokeWidth={1.4} />
                      </div>
                      <h3 className="font-display-serif text-xl font-bold text-foreground sm:text-2xl">
                        {stepTitle}
                      </h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20 bg-card px-5 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                <div>
                  <SectionHeading
                    eyebrow="Contact"
                    title="Let's Get Started"
                    copy="Speak with our team about the documentation support you need."
                  />
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <Reveal delay={0}>
                      <a
                        href="tel:+971556184576"
                        className="contact-card group block rounded-xl border border-border bg-background/50 p-6 transition-all hover:border-primary/50"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                          <Phone size={20} />
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Call us
                        </p>
                        <p className="mt-1 font-medium text-foreground">+971 55 618 4576</p>
                      </a>
                    </Reveal>
                    <Reveal delay={120}>
                      <a
                        href="tel:+971556428799"
                        className="contact-card group block rounded-xl border border-border bg-background/50 p-6 transition-all hover:border-primary/50"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                          <Phone size={20} />
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Call us
                        </p>
                        <p className="mt-1 font-medium text-foreground">+971 55 642 8799</p>
                      </a>
                    </Reveal>
                    <Reveal delay={240}>
                      <a
                        href="mailto:info@almidadstar.com"
                        className="contact-card group block sm:col-span-2 rounded-xl border border-border bg-background/50 p-6 transition-all hover:border-primary/50"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                          <Mail size={20} />
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Email us
                        </p>
                        <p className="mt-1 font-medium text-foreground">info@almidadstar.com</p>
                      </a>
                    </Reveal>
                  </div>
                  <Reveal delay={360} className="mt-10">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild>
                        <a href="tel:+971556184576">
                          <Phone size={17} /> Call Now
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="bg-background/40">
                        <a href="mailto:info@almidadstar.com">
                          <Send size={17} /> Email Us
                        </a>
                      </Button>
                    </div>
                  </Reveal>
                </div>
                <div>
                  <Reveal delay={200}>
                    <div className="relative overflow-hidden rounded-2xl border border-border">
                      <img
                        src={contactImg}
                        alt=""
                        loading="lazy"
                        width={1600}
                        height={912}
                        className="h-full w-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <div className="cta-glow relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/20 bg-accent/30 px-8 py-16 text-center sm:px-12 sm:py-24">
                <div className="arch-lines absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-primary" />
                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2">
                    <img src={logoImg} alt="" className="h-5 w-auto opacity-80" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                      Al Midad Star
                    </span>
                  </div>
                  <h2 className="mx-auto max-w-3xl font-display-serif text-3xl font-bold text-foreground sm:text-5xl">
                    Need Assistance With Your Documents?
                  </h2>
                  <p className="mt-5 text-muted-foreground">
                    Contact Al Midad Star Documentation Clearing Services today.
                  </p>
                  <Button asChild className="mt-8">
                    <a href="tel:+971556184576">
                      Contact Us <ArrowRight size={17} />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
      )}
      {!showIntro && (
        <footer className="border-t border-border px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <Brand />
              <div className="text-sm text-muted-foreground sm:text-right">
                <a
                  className="footer-link block hover:text-primary"
                  href="mailto:info@almidadstar.com"
                >
                  info@almidadstar.com
                </a>
                <a className="footer-link mt-2 block hover:text-primary" href="tel:+971556184576">
                  +971 55 618 4576
                </a>
              </div>
            </div>
            <div className="mt-10 grid gap-12 sm:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Navigation
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {navItems.map((item) => {
                    const href =
                      item === "Home" ? "#top" : `#${item.toLowerCase().replace(" ", "-")}`;
                    return (
                      <li key={item}>
                        <a href={href} className="footer-link">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Services
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {services.map((s) => (
                    <li key={s.title}>
                      <a href="#services" className="footer-link">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Contact
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="tel:+971556184576" className="footer-link">
                      +971 55 618 4576
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971556428799" className="footer-link">
                      +971 55 642 8799
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@almidadstar.com" className="footer-link">
                      info@almidadstar.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Al Midad Star Documentation Clearing Services
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
