"use client";

import { Github, Linkedin, GraduationCap, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NAV_ITEMS, PROFILE } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t, lang } = useLanguage();

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="mt-auto border-t border-border/60 bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-500 font-display text-sm font-bold text-primary-foreground shadow-md">
                HF
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { icon: Github, href: PROFILE.github, label: "GitHub" },
                { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { icon: GraduationCap, href: PROFILE.scholar, label: "Google Scholar" },
                { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t("footer.quickLinks")}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.connect")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>{PROFILE.domain}</li>
              <li>{PROFILE.location[lang]}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-muted-foreground">
            © 2025 {lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn}. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {t("footer.builtWith")}
            <span aria-hidden>·</span>
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
