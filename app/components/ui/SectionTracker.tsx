"use client";

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

interface Props {
  section: string;
}

export default function SectionTracker({ section }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          track("section_view", { section });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [section]);

  return <div ref={ref} aria-hidden />;
}
