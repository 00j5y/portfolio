interface SectionCTAProps {
  text: string;
  href: string;
}

export default function SectionCTA({ text, href }: SectionCTAProps) {
  return (
    <div className="flex justify-center py-6 bg-transparent">
      <a
        href={href}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors group"
      >
        {text}
        <span
          className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:border-primary group-hover:bg-primary-light transition-all"
          aria-hidden
        >
          ↓
        </span>
      </a>
    </div>
  );
}
