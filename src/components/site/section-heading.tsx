"use client";

import { Reveal } from "./reveal";

interface SectionHeadingProps {
  /** Already-translated kicker */
  kicker: string;
  /** Already-translated title */
  title: string;
  /** Already-translated subtitle */
  subtitle?: string;
}

export function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
        {kicker}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
      <span className="mx-auto mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-teal-400" />
    </Reveal>
  );
}
