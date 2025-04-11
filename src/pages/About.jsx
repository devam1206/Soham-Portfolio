import React from "react";
import { Download } from "lucide-react";

const calculateDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = endDate === 'current' ? new Date() : new Date(endDate);
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return `${years} yrs ${months} mos`;
};

export default function About() {
  return (
    <div className="flex flex-col justify-between px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex-1 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text">About Me.</h1>
        <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-72 h-72 rounded-lg object-cover object-center" 
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed">
              <p>
              <span className="text-white">Hey, I'm Soham Desai</span>, a Wireless Communications Engineer with a hands-on approach and a passion for solving tough technical challenges.
              </p>
              <p>
                I specialize in <span className="text-white">satellite and underwater communications</span>, and I'm always looking for opportunities to build innovative solutions in complex environments. I'm a proactive <span className="text-white">problem-solver</span>, a strong <span className="text-white">communicator</span>, and a fast learner who thrives when working on cutting-edge projects.
              </p>
              <p>
                I get excited about pushing the boundaries of <span className="text-white">wireless tech</span>. When I'm not deep in <span className="text-white">signals and systems</span>, I enjoy learning new tools, collaborating with curious minds, and exploring the intersection of engineering and the real world.
              </p>
            </div>
          </div>
        </div>
        <div className="prose prose-invert mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
          <div className="text-slate-400 space-y-6">
            <div>
              <div className="text-lg font-bold">Stanford – Continuing Studies Program</div>
              <p className="text-sm text-gray-400">Crash course in AI, Machine Learning for Business with Python, Innovation and Creativity, Communicate with Impact and Purpose.</p>
            </div>
            <div>
              <p className="text-lg font-bold">University at Buffalo - The State University of New York</p>
              <p className="text-sm text-gray-400">Master of Science, Electrical Engineering</p>
            </div>
            <div>
              <p className="text-lg font-bold">K.J. Somaiya College of Engineering, India</p>
              <p className="text-sm text-gray-400">Bachelor of Science, Electronics Engineering</p>
            </div>
          </div>
        </div>
        <div className="prose prose-invert">
          <h3 className="text-2xl font-bold text-white mb-4">Career</h3>
          <div className="text-slate-400 space-y-6">
            <div>
              <p className="text-lg font-bold">Wireless Systems Lead (CTO R&D Group) – Skylo Tech Inc.</p>
              <p className="text-sm text-gray-400">Apr 2022 – Current • {calculateDuration('2022-04-01', 'current')}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Sr Engineer (Cellular R&D) – Samsung Semiconductor Inc.</p>
              <p className="text-sm text-gray-400">Oct 2019 – Apr 2022 • 2 yrs 6 mos</p>
            </div>
            <div>
              <p className="text-lg font-bold">Research Assistant - University at Buffalo</p>
              <p className="text-sm text-gray-400">May 2018 – Jul 2021 • 3 yrs 2 mos</p>
            </div>
            <div>
              <p className="text-lg font-bold">Graduate Lab Assistant - Electronics Tinkering lab</p>
              <p className="text-sm text-gray-400">Aug 2018 - Aug 2019 • 1 yr 0 mos</p>
            </div>
            <div>
              <p className="text-lg font-bold">Co-Founder – EcoMappers (Air Quality Measurement Startup, India)</p>
              <p className="text-sm text-gray-400">Mar 2014 - Feb 2016 • 1 yr 11 mos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
