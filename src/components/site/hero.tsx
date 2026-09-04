"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  GraduationCap,
  Mail,
  Download,
  ArrowDown,
  FileText,
  MousePointer2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROFILE, HERO_STATS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

/* Subtle typewriter for rotating roles. Remount via key on language change. */
function RoleTyper({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx % roles.length] ?? "";
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text === current) {
      // Hold, then start deleting
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      // Move to next role
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 220);
    } else {
      // Type / erase one character
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, Math.max(0, prev.length - 1))
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 35 : 75
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx, roles]);

  return (
    <span className="min-h-[1.4em] text-primary">
      {text}
      <span className="ms-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] animate-pulse rounded bg-primary" />
    </span>
  );
}

export function Hero() {
  const { t, tr, lang } = useLanguage();

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
      {/* Background decor: dot grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,hsl(var(--dot-color))_1px,transparent_1px)] [background-size:26px_26px] opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl rtl:translate-x-1/2"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Text column */}
          <div className="text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center justify-center gap-2 lg:justify-start"
            >
              <Badge
                variant="outline"
                className="gap-2 rounded-full border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t("hero.available")}
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-3 text-lg font-medium text-muted-foreground"
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
            >
              {lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-3 font-display text-xl font-semibold sm:text-2xl"
            >
              <RoleTyper key={lang} roles={PROFILE.roles[lang]} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              {tr(PROFILE.bioShort)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => goTo("research")}
                className="gap-2 rounded-full bg-gradient-to-r from-primary to-teal-500 px-6 shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
              >
                <GraduationCap className="h-5 w-5" />
                {t("hero.ctaResearch")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => goTo("contact")}
                className="gap-2 rounded-full px-6"
              >
                <Mail className="h-5 w-5" />
                {t("hero.ctaContact")}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="gap-2 rounded-full px-4 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="/cv/hamidreza-farhadipour-cv.pdf" download>
                  <Download className="h-5 w-5" />
                  {t("hero.ctaCv")}
                </a>
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
            >
              {[
                { icon: Github, href: PROFILE.github, label: "GitHub" },
                { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { icon: FileText, href: PROFILE.scholar, label: "Google Scholar" },
                { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-md"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Gradient blob behind */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-teal-400/15 to-transparent blur-2xl"
            />
            {/* Offset frame */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-primary/30 ltr:translate-x-3 rtl:-translate-x-3"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <img
                src={PROFILE.avatar}
                alt={`${PROFILE.nameEn} — ${PROFILE.roles.en[0]}`}
                className="aspect-square w-full object-cover"
                width={900}
                height={900}
              />
              {/* Floating badge: degree */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 start-4 flex items-center gap-2.5 rounded-2xl border border-border/50 bg-background/85 px-4 py-2.5 shadow-lg backdrop-blur-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-start">
                  <span className="block text-xs font-semibold text-foreground">
                    {t("about.factDegreeValue")}
                  </span>
                  <span className="block text-[11px] text-muted-foreground">
                    {tr(PROFILE.location)}
                  </span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.key}
              className="rounded-2xl border border-border bg-card/70 p-5 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <dd className="font-display text-3xl font-bold text-primary">{stat.value}</dd>
              <dt className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {t(stat.key)}
              </dt>
            </div>
          ))}
        </motion.dl>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => goTo("about")}
            className="group flex flex-col items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            aria-label={t("hero.scroll")}
          >
            <span className="flex items-center gap-1.5">
              <MousePointer2 className="h-3.5 w-3.5" />
              {t("hero.scroll")}
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
