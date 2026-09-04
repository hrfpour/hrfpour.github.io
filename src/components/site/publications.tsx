"use client";

import { BookOpen, FileText, Code2, Quote, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PUBLICATIONS, PROFILE, type PubType, type StringKey } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const TYPE_STYLES: Record<PubType, string> = {
  journal: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  conference: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400",
  preprint: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  inprogress: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

const TYPE_KEYS: Record<PubType, StringKey> = {
  journal: "pub.type.journal",
  conference: "pub.type.conference",
  preprint: "pub.type.preprint",
  inprogress: "pub.type.inprogress",
};

/** Highlight the owner's name in the author list */
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(",");
  return (
    <>
      {parts.map((a, i) => {
        const name = a.trim();
        const mine = name.toLowerCase().includes("farhadipour");
        return (
          <span key={i}>
            {i > 0 && ", "}
            <span className={mine ? "font-semibold text-primary" : ""}>{name}</span>
          </span>
        );
      })}
    </>
  );
}

export function Publications() {
  const { t, tr } = useLanguage();

  const copyBibtex = async (id: string) => {
    const pub = PUBLICATIONS.find((p) => p.id === id);
    if (!pub) return;
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      toast.success(t("pub.copied"));
    } catch {
      toast.error("Clipboard unavailable");
    }
  };

  return (
    <section id="publications" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("publications.kicker")}
          title={t("publications.title")}
          subtitle={t("publications.subtitle")}
        />

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 0.06}>
              <Card className="group relative overflow-hidden border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-lg">
                {/* Accent edge */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 start-0 w-1 bg-gradient-to-b from-primary to-teal-400 opacity-70 transition-opacity group-hover:opacity-100"
                />
                <CardContent className="p-6 ps-7 sm:p-7 sm:ps-9">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className={`${TYPE_STYLES[pub.type]} rounded-full px-3 font-semibold`}>
                      {t(TYPE_KEYS[pub.type])}
                    </Badge>
                    <Badge variant="secondary" className="rounded-full font-mono text-xs">
                      {pub.year}
                    </Badge>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {tr(pub.title)}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {tr(pub.venue)}
                    </span>
                  </p>

                  <p className="mt-1.5 text-sm text-muted-foreground">
                    <Authors authors={pub.authors} />
                  </p>

                  <p className="mt-4 rounded-xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
                    {tr(pub.abstract)}
                  </p>

                  {/* Keywords */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pub.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary/90 ring-1 ring-inset ring-primary/15"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  {/* Link buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.links.pdf && (
                      <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-full text-xs" asChild>
                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3.5 w-3.5" /> {t("pub.linkPdf")}
                        </a>
                      </Button>
                    )}
                    {pub.links.doi && (
                      <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-full text-xs" asChild>
                        <a href={pub.links.doi} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> {t("pub.linkDoi")}
                        </a>
                      </Button>
                    )}
                    {pub.links.code && (
                      <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-full text-xs" asChild>
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                          <Code2 className="h-3.5 w-3.5" /> {t("pub.linkCode")}
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyBibtex(pub.id)}
                      className="h-8 gap-1.5 rounded-full text-xs text-muted-foreground"
                    >
                      <Copy className="h-3.5 w-3.5" /> {t("pub.bibtex")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Google Scholar hint */}
        <Reveal className="mt-8 text-center">
          <a
            href={PROFILE.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Quote className="h-4 w-4" />
            Google Scholar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
