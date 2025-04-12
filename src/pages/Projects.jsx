import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">Projects.</h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="md:flex">
                {project.image && (
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-semibold text-white mb-4">{project.title}</h2>
                  <p className="text-slate-400 mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
