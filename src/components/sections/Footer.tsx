export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-sm font-bold text-foreground">
          Tony<span className="text-accent"> Abadia</span>
        </p>

        <div className="flex gap-6">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B639433049913&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-accent"
            aria-label="Contact Franz Abadia on WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/abadiafranz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-accent"
            aria-label="Follow Franz Abadia on Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/franz-abadia-62240a239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-accent"
            aria-label="Connect with Franz Abadia on LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} Tonywrites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
