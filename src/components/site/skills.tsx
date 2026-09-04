"use client";

import { Code2, Sparkles, Brain, BarChart3, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SKILL_GROUPS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS = {
  code: Code2,
  sparkles: Sparkles,
  brain: Brain,
  chart: BarChart3,
  wrench: Wrench,
} as const;

export function Skills() {
  const { t, tr } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("skills.kicker")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            const wide = i >= 3; // last two groups stretch on lg
            return (
              <Reveal
                key={group.icon}
                delay={(i % 3) * 0.07}
                className={wide ? "lg:col-span-1" : undefined}
              >
                <Card className="h-full border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-teal-400/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {tr(group.title)}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
