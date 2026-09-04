"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, PROFILE } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const { t, tr, lang, setLang } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLabel = (id: string) => {
    const item = NAV_ITEMS.find((n) => n.id === id);
    return item ? tr(item.label) : id;
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={t("nav.home")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-500 font-display text-sm font-bold text-primary-foreground shadow-md">
            HF
          </span>
          <span className="hidden font-display text-lg font-semibold tracking-tight text-foreground sm:block">
            {lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goTo(item.id)}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {navLabel(item.id)}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language switch */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            className="h-9 gap-1.5 rounded-full px-3 text-xs font-semibold"
            aria-label={lang === "en" ? "Switch to Persian" : "تغییر به انگلیسی"}
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "فارسی" : "EN"}
          </Button>

          {/* Theme switch — icon swaps via CSS, no hydration mismatch */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 dark:hidden" />
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full lg:hidden"
                aria-label={t("nav.openMenu")}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={lang === "fa" ? "right" : "left"}
              className="w-72"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-500 font-display text-sm font-bold text-primary-foreground">
                    HF
                  </span>
                  {lang === "fa" ? PROFILE.nameFa : PROFILE.nameEn}
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-4 flex flex-col gap-1 px-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => goTo(item.id)}
                      className={`w-full rounded-lg px-3 py-2.5 text-start text-sm font-medium transition-colors ${
                        active === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {navLabel(item.id)}
                    </button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
