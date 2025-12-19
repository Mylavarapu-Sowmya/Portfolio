import { Github, Linkedin } from "lucide-react";
import { developerInfo } from "@/data/developer";

/**
 * Minimal footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gradient-to-t from-accent/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {developerInfo.name}. Built with React & ❤️
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {developerInfo.socialLinks?.github && (
              <a
                href="https://github.com/Mylavarapu-Sowmya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            )}

            {developerInfo.socialLinks?.linkedin && (
              <a
                href="https://www.linkedin.com/in/sowmya-mylavarapu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}
