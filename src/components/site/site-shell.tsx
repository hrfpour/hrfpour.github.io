"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Research } from "./research";
import { Publications } from "./publications";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Journey } from "./journey";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { BackToTop } from "./back-to-top";

export function SiteShell() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Research />
          <Publications />
          <Projects />
          <Skills />
          <Journey />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}
