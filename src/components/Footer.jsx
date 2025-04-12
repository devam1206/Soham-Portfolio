import React from "react";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 text-white bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {/* Email Link */}
          <Link
            to="/contact" // Link to the Contact page
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>

          {/* GitHub Link */}
          <a
            href="https://github.com/soham12112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/s-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* Google Scholar Link */}
          <a
            href="https://scholar.google.com/citations?user=aT7kdMMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <GraduationCap className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}