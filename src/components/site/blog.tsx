"use client";

import { CalendarDays, Clock, ArrowRight, NotebookPen, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const COVER_GRADIENTS = [
  "from-primary/80 to-teal-500/70",
  "from-teal-500/80 to-emerald-500/70",
  "from-emerald-500/80 to-primary/70",
];

export function Blog() {
  const { t, tr, num } = useLanguage();

  return (
    <section id="blog" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("blog.kicker")}
          title={t("blog.title")}
          subtitle={t("blog.subtitle")}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={i} delay={i * 0.08} className="h-full">
              <Card className="group flex h-full flex-col overflow-hidden border-border/70 bg-card/80 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                {/* Cover */}
                <div
                  className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${COVER_GRADIENTS[i % COVER_GRADIENTS.length]}`}
                >
                  <NotebookPen className="h-10 w-10 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                  <Badge className="absolute top-3 start-3 rounded-full bg-white/20 px-2.5 text-[11px] font-semibold text-white backdrop-blur">
                    {tr(post.tag)}
                  </Badge>
                  {post.soon && (
                    <span className="absolute bottom-3 end-3 flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <Sparkles className="h-3 w-3" />
                      {t("blog.soon")}
                    </span>
                  )}
                </div>

                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {tr(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {num(post.readTime)} {t("blog.minRead")}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {tr(post.title)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {tr(post.excerpt)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={post.soon}
                    className="mt-4 w-fit gap-1.5 rounded-full px-3 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
