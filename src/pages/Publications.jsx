import React from 'react';

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-indigo-500 bg-clip-text">Publications.</h1>
      <p className="mb-4 text-lg text-slate-400">
        Check out my Google Scholar profile for more details:
        <a href="https://scholar.google.com/citations?user=aT7kdMMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
          Google Scholar
        </a>
      </p>
      <div className="prose prose-invert">
        <h3 className="text-2xl font-bold text-white">Conference Publications</h3>
        <ul className="list-disc list-inside text-slate-400">
          <li>Publication 1: Title, Conference, Year</li>
          <li>Publication 2: Title, Conference, Year</li>
          <li>Publication 3: Title, Conference, Year</li>
          {/* Add more publications as needed */}
        </ul>
      </div>
    </div>
  );
}
