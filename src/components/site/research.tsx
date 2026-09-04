"use client";

import {
  Network,
  Radar,
  Activity,
  Eye,
  BarChart3,
  BrainCircuit,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RESEARCH_AREAS, type ResearchArea } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS = {
  network: Network,
  radar: Radar,
  activity: Activity,
  eye: Eye,
  chart: BarChart3,
  brain: BrainCircuit,
} as const;

export function Research() {
  const { t, tr } = useLanguage();

  return (
    <section id="research" className="scroll-mt-20 bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("research.kicker")}
          title={t("research.title")}
          subtitle={t("research.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_AREAS.map((area: ResearchArea, i) => {
            const Icon = ICONS[area.icon];
            return (
              <Reveal key={area.icon} delay={(i % 3) * 0.08}>
                <Card className="group h-full border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-teal-400/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                      {tr(area.title)}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {tr(area.description)}
                    </p>
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
