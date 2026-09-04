"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Handshake, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Contact() {
  const { t, tr, lang } = useLanguage();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error(t("contact.errorRequired"));
      return;
    }

    setSending(true);
    // Demo mode — a real backend endpoint will be wired later.
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success(t("contact.sentTitle"), {
        description: t("contact.sentDesc"),
      });
    }, 900);
  };

  const infoCards = [
    {
      icon: Mail,
      label: t("contact.infoEmail"),
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: MapPin,
      label: t("contact.infoLocation"),
      value: tr(PROFILE.location),
    },
    {
      icon: Handshake,
      label: t("contact.infoCollab"),
      value: t("contact.infoCollabValue"),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Info column */}
          <div className="space-y-4">
            {infoCards.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <Card className="h-full border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-teal-400/10 text-primary ring-1 ring-primary/20">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-foreground" dir={label === t("contact.infoEmail") ? "ltr" : undefined}>
                        {value}
                      </span>
                    </span>
                  </CardContent>
                </Card>
              );
              return (
                <Reveal key={label} delay={i * 0.07}>
                  {href ? (
                    <a href={href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}

            {/* Availability note */}
            <Reveal delay={0.22}>
              <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-teal-400/5 p-5">
                <p className="text-sm leading-relaxed text-foreground">
                  {lang === "fa"
                    ? "💬 برای همکاری پژوهشی، تدریس یا پروژه‌های داده، همیشه خوشحال می‌شوم صحبت کنیم."
                    : "💬 Always happy to talk about research collaboration, teaching, or data projects."}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.1}>
            <Card className="border-border/70 bg-card/80 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">{t("contact.formName")} *</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder={t("contact.formNamePh")}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">{t("contact.formEmail")} *</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        placeholder={t("contact.formEmailPh")}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">{t("contact.formSubject")}</Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder={t("contact.formSubjectPh")}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{t("contact.formMessage")} *</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      placeholder={t("contact.formMessagePh")}
                      className="resize-none rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-teal-500 shadow-md shadow-primary/25 transition-transform hover:scale-[1.01] sm:w-auto"
                  >
                    {sending ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5 rtl:rotate-180" />
                    )}
                    {sending ? t("contact.sending") : t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
