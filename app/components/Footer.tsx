export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>© {year} Jay L&apos;héronde</span>
        <div className="flex items-center gap-5">
          <a
            href="mailto:jay.lheronde@gmail.com"
            className="hover:text-primary transition-colors"
          >
            jay.lheronde@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jay-lheronde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/00j5y"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
