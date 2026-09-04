"use client";

import { GraduationCap, Briefcase, Award, BadgeCheck } from "lucide-react";
import { EDUCATION, EXPERIENCE, HONORS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function TimelineItem({
  title,
  org,
  period,
  current,
  details,
  icon: Icon,
  last,
}: {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  details: string[];
  icon: "grad" | "work";
  last: boolean;
}) {
  const IconComp = Icon === "grad" ? GraduationCap : Briefcase;
  return (
    <div className="relative flex gap-4 sm:gap-5">
      {/* Marker */}
      <div className="flex flex-col items-center">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-background ${
            current
              ? "bg-gradient-to-br from-primary to-teal-500 text-white shadow-md shadow-primary/30"
              : "bg-card text-primary ring-border"
          }`}
        >
          <IconComp className="h-4.5 w-4.5" />
        </span>
        {!last && <span className="mt-1 w-px flex-1 bg-border" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${last ? "pb-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
            {title}
          </h3>
          {current && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary ring-1 ring-inset ring-primary/25">
              ● {period}
            </span>
          )}
          {!current && (
            <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              {period}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm font-medium text-primary/90">{org}</p>
        <ul className="mt-3 space-y-1.5">
          {details.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Journey() {
  const { t, tr } = useLanguage();

  return (
    <section id="journey" className="scroll-mt-20 bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("journey.kicker")}
          title={t("journey.title")}
          subtitle={t("journey.subtitle")}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Education */}
          <Reveal>
            <div>
              <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                {t("journey.education")}
              </h3>
              <div>
                {EDUCATION.map((item, i) => (
                  <TimelineItem
                    key={i}
                    icon="grad"
                    title={tr(item.degree)}
                    org={tr(item.school)}
                    period={tr(item.period)}
                    current={item.current}
                    details={item.details.map(tr)}
                    last={i === EDUCATION.length - 1}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                {t("journey.experience")}
              </h3>
              <div>
                {EXPERIENCE.map((item, i) => (
                  <TimelineItem
                    key={i}
                    icon="work"
                    title={tr(item.role)}
                    org={tr(item.org)}
                    period={tr(item.period)}
                    current={item.current}
                    details={item.details.map(tr)}
                    last={i === EXPERIENCE.length - 1}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Honors & Certifications */}
        <Reveal className="mt-4">
          <h3 className="mb-2 text-center font-display text-xl font-bold text-foreground">
            {t("journey.honorsTitle")}
          </h3>
          <p className="mb-7 text-center text-sm text-muted-foreground">
            {t("journey.honorsSub")}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HONORS.map((honor) => (
              <div
                key={honor.year + honor.title.en}
                className="group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 text-amber-500 ring-1 ring-amber-400/30">
                  {honor.icon === "award" ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <BadgeCheck className="h-5 w-5" />
                  )}
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-snug text-foreground">
                    {tr(honor.title)}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {tr(honor.issuer)}{honor.year ? ` · ${honor.year}` : ""}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
