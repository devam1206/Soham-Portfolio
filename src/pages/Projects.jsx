import React from "react";

export default function Projects() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">Projects.</h1>
        <div className="grid gap-8">
          {/* Project cards will go here */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Project Name</h2>
            <p className="text-slate-400 mb-4">
              Brief description of the project and its key features.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
