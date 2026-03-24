import React from "react";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 md:px-12 text-foreground bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-5">
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Contact"
          >
            <Mail className="w-5 h-5" />
          </Link>

          <a
            href="https://github.com/soham12112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/s-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://scholar.google.com/citations?user=aT7kdMMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
