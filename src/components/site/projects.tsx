"use client";

import { useState } from "react";
import { Github, ExternalLink, LayoutDashboard, Radar, Brain, ShieldCheck, Database, Globe, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PROJECTS,
  type Project,
  type ProjectCategory,
  type StringKey,
} from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CATEGORY_KEYS: Record<ProjectCategory, StringKey> = {
  ml: "projects.cat.ml",
  dl: "projects.cat.dl",
  viz: "projects.cat.viz",
  web: "projects.cat.web",
};

const PROJECT_ICONS = {
  dashboard: LayoutDashboard,
  radar: Radar,
  brain: Brain,
  shield: ShieldCheck,
  database: Database,
  globe: Globe,
} as const;

type Filter = "all" | ProjectCategory;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, tr } = useLanguage();
  const Icon = PROJECT_ICONS[project.icon];

  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <Card className="group flex h-full flex-col border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
        <CardContent className="flex h-full flex-col p-6">
          {/* Header: icon + featured */}
          <div className="mb-4 flex items-start justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-teal-400/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-6 w-6" />
            </span>
            <div className="flex items-center gap-1.5">
              {project.featured && (
                <Badge className="gap-1 rounded-full bg-gradient-to-r from-primary to-teal-500 px-2.5 text-[11px] font-semibold text-white">
                  <Star className="h-3 w-3" />
                  {t("projects.featured")}
                </Badge>
              )}
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
          </div>

          <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {tr(project.title)}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {tr(project.description)}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label={t("projects.viewCode")}
              >
                <Github className="h-4 w-4" />
                {t("projects.viewCode")}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label={t("projects.demo")}
              >
                <ExternalLink className="h-4 w-4" />
                {t("projects.demo")}
              </a>
            )}
            <span className="ms-auto text-[11px] font-medium text-muted-foreground/70">
              {t(CATEGORY_KEYS[project.category])}
            </span>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-20 bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("projects.kicker")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        {/* Filters */}
        <Reveal className="mb-10 flex justify-center">
          <Tabs
            value={filter}
            onValueChange={(v) => setFilter(v as Filter)}
            dir={undefined}
          >
            <TabsList className="h-auto flex-wrap justify-center gap-1 rounded-full bg-card p-1.5 shadow-sm ring-1 ring-border">
              <TabsTrigger
                value="all"
                className="rounded-full px-4 py-1.5 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
              >
                {t("projects.all")}
              </TabsTrigger>
              {(Object.keys(CATEGORY_KEYS) as ProjectCategory[]).map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-4 py-1.5 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
                >
                  {t(CATEGORY_KEYS[cat])}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
