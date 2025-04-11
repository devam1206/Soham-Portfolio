import React from "react";
import { Download } from "lucide-react";

export default function CV() {
  return (
    <div className="h-full py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">Curriculum Vitae</h1>
          <a
            href="/cv.pdf"
            download="Soham_Desai_CV.pdf"
            className="flex items-center gap-2 text-slate-400 hover:text-white hover:bg-white/10 px-4 py-2 rounded transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        </div>
        <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden">
          <iframe
            src="/cv.pdf"
            className="w-full h-full"
            title="CV PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}
