import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const pageTitleClass =
  "font-display text-3xl md:text-4xl font-semibold text-foreground border-l-2 border-accent pl-4";

function ImageLightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="py-10 md:py-14 px-4 md:px-8"
    >
      <Helmet>
        <title>Projects — Soham Desai</title>
        <meta name="description" content="Selected projects covering satellite systems, underwater communications, AI-driven sensing, and marine biology." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <motion.h1 variants={fade} className={`${pageTitleClass} mb-4`}>Projects</motion.h1>
        <motion.p variants={fade} className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          Selected work covering satellite systems, underwater communications, AI, and marine sensing.
        </motion.p>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
              custom={idx * 0.5}
              className="rounded-lg border border-border bg-surface/80 overflow-hidden transition-colors hover:border-muted-foreground/40 hover:bg-surface"
            >
              {project.images && project.images.length > 0 && (
                <div
                  className={`grid gap-1 ${
                    project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {project.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => setLightbox({ src: img, alt: project.title })}
                      className="relative group overflow-hidden bg-background cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - figure ${imgIdx + 1}`}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-surface-elevated text-muted text-xs tracking-wide uppercase border border-border">
                    {project.format}
                  </span>
                  {project.note && (
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs tracking-wide uppercase border border-accent/20">
                      {project.note}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-foreground font-display mb-3">{project.title}</h2>
                <p className="text-muted mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-elevated text-muted-foreground rounded-full text-sm border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-accent text-sm hover:text-accent-hover transition-colors"
                  >
                    {project.linkLabel} →
                  </a>
                  {project.githubHref ? (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent text-sm hover:text-accent-hover transition-colors"
                    >
                      GitHub →
                    </a>
                  ) : null}
                  {project.paperHref ? (
                    <a
                      href={project.paperHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent text-sm hover:text-accent-hover transition-colors"
                    >
                      Paper Link →
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </motion.div>
  );
}
