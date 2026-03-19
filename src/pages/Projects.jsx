import React, { useState } from "react";
import { projects } from "../data/projects";

function ImageLightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
          Projects.
        </h1>
        <p className="text-slate-400 mb-8 max-w-3xl">
          Selected Notion books and project pages covering satellite systems,
          underwater communications, AI, and marine sensing.
        </p>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors hover:border-slate-700 hover:bg-slate-800/80"
            >
              {project.images && project.images.length > 0 && (
                <div
                  className={`grid gap-1 ${
                    project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setLightbox({ src: img, alt: project.title })
                      }
                      className="relative group overflow-hidden bg-slate-950 cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - figure ${idx + 1}`}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs tracking-wide uppercase">
                    {project.format}
                  </span>
                  {project.note && (
                    <span className="px-3 py-1 rounded-full bg-blue-950/60 text-blue-300 text-xs tracking-wide uppercase">
                      {project.note}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  {project.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
