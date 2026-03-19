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
              <span className="text-white">Hey, I'm Soham</span>, an Electrical and Communications Engineer with a hands-on approach and a passion for solving meaningful problems. 
              </p>
              <p>
                I specialize in <span className="text-white">satellite and underwater communications</span>, and I'm always looking for opportunities to build innovative solutions in challenging environments. I'm a proactive <span className="text-white">problem-solver</span>, a strong <span className="text-white">communicator</span>, and a fast learner who thrives when working on cutting-edge projects.
              </p>
              <p>
                I get excited about pushing the boundaries of <span className="text-white">wireless tech</span>. When I'm not deep in <span className="text-white">signals and systems</span>, I explore my love for <span className="text-white">oceanic observation</span> and <span className="text-white">marine animal tracking</span>.
              </p>
              <p>
                Apart from work, I enjoy my days slow — I love <span className="text-white">traveling</span> and <span className="text-white">photography</span>, enjoy good music, and I train in <span className="text-white">Muay Thai</span>.
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
              <p className="text-lg font-bold">Staff Wireless Systems Engineer (CTO Group) – Skylo Tech Inc.</p>
              <p className="text-sm text-gray-400">Apr 2022 – Current • {calculateDuration('2022-04-01', 'current')}</p>
              <ul className="text-sm text-gray-400 mt-2 list-disc list-inside space-y-1">
                <li>5G and NB-IoT protocols with growing involvement in <span className="text-white">6G</span>, AI-native RAN, and Integrated Sensing & Communications.</li>
                <li>Developed algorithms for dynamic power allocation, spectrum management, and link adaptation; built system- and link-level simulators in MATLAB and Python.</li>
                <li>LEO constellation system design — architecture, chipsets, beamformers, FPGA vs. ASIC trade-offs, power and cost analysis.</li>
                <li>ITU document preparation for mega-constellations with varied spectrum across the globe.</li>
                <li><span className="text-white">3GPP delegate</span> across RAN1 (Physical Layer), RAN2 (Scheduling), and RAN4 (Power & Frequency), actively submitting proposals.</li>
                <li>Close collaboration with satellite partners including EchoStar, Ligado, and Inmarsat.</li>
                <li>Hands-on with SDRs, spectrum analyzers, devkits, and UEs — work with latest modems from Qualcomm, Altair, and MediaTek.</li>
                <li>Emission testing, dynamic power control testing, and technical documentation.</li>
                <li>Proficient in MATLAB, Python, Linux, SQL, large-scale databases, and GCP.</li>
                <li>Equally comfortable in labs and boardrooms.</li>
                <li>Hold <span className="text-white">5 US and international patents</span> with more than 10 filed.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Sr Engineer (Cellular R&D) – Samsung Semiconductor Inc.</p>
              <p className="text-sm text-gray-400">Oct 2019 – Apr 2022 • 2 yrs 6 mos</p>
              <ul className="text-sm text-gray-400 mt-2 list-disc list-inside space-y-1">
                <li>5G sub-6 and mmWave modem software development.</li>
                <li>Focus on Power and Specific Absorption Rate (SAR) algorithms and FCC/ICED regulations.</li>
                <li>Beamforming and antenna switching algorithms.</li>
                <li>Power sharing between 5G, LTE, Bluetooth, and Wi-Fi.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Research Assistant - University at Buffalo</p>
              <p className="text-sm text-gray-400">May 2018 – Jul 2021 • 3 yrs 2 mos</p>
              <ul className="text-sm text-gray-400 mt-2 list-disc list-inside space-y-1">
                <li>Thesis on <span className="text-white">Underwater Distributed Beamforming</span> for Robotic Swarms for long-range wireless communication.</li>
                <li>Test results demonstrated in university water tanks using Software-Defined Radios (USRP N210), Acoustic Hydrophones, Magnetic Induction antennas, GNU Radio Companion, and MATLAB.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Graduate Lab Assistant - Electronics Tinkering lab</p>
              <p className="text-sm text-gray-400">Aug 2018 - Aug 2019 • 1 yr 0 mos</p>
            </div>
            <div>
              <p className="text-lg font-bold">Co-Founder – EcoMappers (Air Quality Measurement Startup, India)</p>
              <p className="text-sm text-gray-400">Mar 2014 - Feb 2016 • 1 yr 11 mos</p>
              <p className="text-sm text-gray-400 mt-2">
                Tech Lead at Airolyzr (Ecomappers), a university project spinoff manufacturing air and noise pollution measuring devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
