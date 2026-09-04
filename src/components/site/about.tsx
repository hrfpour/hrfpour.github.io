"use client";

import { Download, MapPin, Languages, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const { t, tr, lang } = useLanguage();

  const paragraphs = tr(PROFILE.bioLong).split("\n\n");

  const facts = [
    { icon: Sparkles, label: t("about.factName"), value: lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn },
    { icon: GraduationCap, label: t("about.factDegree"), value: t("about.factDegreeValue") },
    { icon: MapPin, label: t("about.factBirth"), value: t("about.factBirthValue") },
    { icon: Languages, label: t("about.factLang"), value: t("about.factLangValue") },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("about.kicker")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Bio paragraphs */}
          <Reveal>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-loose text-muted-foreground sm:text-lg">
                  {p}
                </p>
              ))}
              <Button
                asChild
                className="mt-2 gap-2 rounded-full bg-gradient-to-r from-primary to-teal-500 shadow-md shadow-primary/20"
              >
                <a href="/cv/hamidreza-farhadipour-cv.pdf" download>
                  <Download className="h-4 w-4" />
                  {t("about.downloadCv")}
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Quick facts card */}
          <Reveal delay={0.12}>
            <Card className="h-fit border-border/70 bg-card/60 shadow-sm backdrop-blur">
              <CardContent className="p-6">
                <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold">
                  <Sparkles className="h-5 w-5 text-primary" />
                  {t("about.infoTitle")}
                </h3>
                <ul className="space-y-4">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {label}
                        </span>
                        <span className="block text-sm font-semibold text-foreground">
                          {value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
