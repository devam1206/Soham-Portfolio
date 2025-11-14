import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhaleLocationEstimation() {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-4 md:px-8 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
          Technique for Quick Positioning of Underwater Animals When They Surface
        </h1>

        <hr className="border-slate-700 mb-8" />

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Problem Statement</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Whales surface only briefly—typically 3–5 seconds—at irregular intervals (often ~30 seconds for 
            a few minutes, then a multi-minute dive). This short exposure is insufficient for reliable GPS fixes, 
            and tracking is further complicated by variable surfacing patterns across species, changing sea states, 
            and long gaps with no visibility. A method is needed to accurately estimate whale positions and 
            trajectories using minimal, intermittent observation data.
          </p>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Solution Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Solution Overview</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Use marine radar to detect and measure each whale surfacing event, capturing range, bearing, and 
            possibly Doppler. Instead of relying on a single observation for a full fix, apply{" "}
            <strong>pseudo-trilateration over time</strong>: combine multiple surfacing measurements from one 
            or more radar-equipped platforms, fusing them with a motion model of whale behavior in a tracking 
            filter (e.g., UKF/particle filter). Over successive detections, the system refines location estimates, 
            and maintains continuous tracks despite long dive intervals. This approach enables accurate, 
            non-invasive whale tracking which acts as a secondary method for location estimation when onboard 
            GPS fails.
          </p>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Create a local pseudo-GPS network using multiple transmitters on nearby hills, boats or drones and 
            measure the signals from a receiver on the whales. These signals will be post processed to get a 
            triangulation based location estimate.
          </p>

          <p className="text-slate-300 mb-6 leading-relaxed">
            This will allow us to detect and measure each whale surfacing event, capturing range, bearing, and 
            Doppler. Instead of relying on a single observation for a full fix, apply{" "}
            <strong>pseudo-trilateration over time</strong>: combine multiple surfacing measurements, fusing 
            them with a motion model of whale behavior in a tracking filter (e.g., UKF/particle filter). Over 
            successive detections, the system refines location estimates, and maintains continuous tracks despite 
            long dive intervals. This approach enables accurate, non-invasive whale tracking which acts as a 
            secondary method for location estimation when onboard GPS fails.
          </p>
        </section>

        {/* Project Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Project Details and Description</h2>

          <h3 className="text-2xl font-semibold text-white mb-4">CATS Tag</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            The CATS (Customizable Animal Tracking Solutions) tag is a multi-sensor data logger that records 
            high-resolution movement, behavior, and environmental data from marine animals.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            <img
              src="/images/projects/whale-location/image.png"
              alt="CATS Tag Overview"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-location/image 1.png"
              alt="CATS Tag Details"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Blue Whale Dataset */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Blue Whale Dataset</h2>

          <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
          <img
            src="/images/projects/whale-location/_bw180827-53Quicklook.jpg"
            alt="Blue Whale Dataset Overview"
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <h3 className="text-2xl font-semibold text-white mb-4">Sensor Data from CATS Tags</h3>
          <div className="flex flex-col gap-6 mb-8">
            <img
              src="/images/projects/whale-location/image 2.png"
              alt="Sensor Data 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-location/image 3.png"
              alt="Sensor Data 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Depth and Surfacing Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Further Analysis of Depth and Surfacing</h2>

          <img
            src="/images/projects/whale-location/image 4.png"
            alt="Depth and Surfacing Analysis"
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <h3 className="text-2xl font-semibold text-white mb-4">Depth Statistics</h3>
          <div className="bg-slate-900 p-6 rounded-lg mb-6">
            <ul className="text-slate-300 space-y-2">
              <li><strong>Min depth:</strong> -0.98 m (~1 m above surface)</li>
              <li><strong>Max depth:</strong> 254.93 m</li>
              <li><strong>Mean depth:</strong> 81.02 m</li>
              <li><strong>Surfacing events</strong> (depth &lt; 0.7 m): 19,049 out of 116,135 total records</li>
              <li><strong>Percentage of time at surface:</strong> 16.40%</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Surfacing Analysis</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Cycle 1</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Start:</strong> 2018-08-27 13:00:48</li>
                <li><strong>Duration:</strong> 10.5 minutes</li>
                <li><strong>Number of surfacings:</strong> 12</li>
                <li><strong>Mean surfacing duration:</strong> 7.4 seconds</li>
                <li><strong>Mean interval between surfacings:</strong> 49.4 seconds</li>
                <li><strong>Time since previous cycle:</strong> N/A (first cycle)</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Cycle 2</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Start:</strong> 2018-08-27 13:26:25</li>
                <li><strong>Duration:</strong> 1.9 minutes</li>
                <li><strong>Number of surfacings:</strong> 10</li>
                <li><strong>Mean surfacing duration:</strong> 6.4 seconds</li>
                <li><strong>Mean interval between surfacings:</strong> 5.5 seconds</li>
                <li><strong>Time since previous cycle:</strong> 15.1 minutes</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Cycle 3</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Start:</strong> 2018-08-27 13:36:42</li>
                <li><strong>Duration:</strong> 0.9 minutes</li>
                <li><strong>Number of surfacings:</strong> 4</li>
                <li><strong>Mean surfacing duration:</strong> 7.8 seconds</li>
                <li><strong>Mean interval between surfacings:</strong> 7.9 seconds</li>
                <li><strong>Time since previous cycle:</strong> 8.4 minutes</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Distance Covered Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Distance Covered Analysis</h2>
          
          <div className="flex flex-col gap-6 mb-8">
            <img
              src="/images/projects/whale-location/image 5.png"
              alt="Distance Covered Analysis 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-location/image 6.png"
              alt="Distance Covered Analysis 2"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-location/image 7.png"
              alt="Distance Covered Analysis 3"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-location/image 8.png"
              alt="Distance Covered Analysis 4"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* GPS Data */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Current GPS Data from a Test</h2>
          <img
            src="/images/projects/whale-location/Figure_1.png"
            alt="GPS Data Test Results"
            className="w-full rounded-lg shadow-lg mb-8"
          />
          <p className="text-slate-300 leading-relaxed">
            The figure above shows the current GPS tracking data collected during field tests. The gaps and 
            inconsistencies in the data highlight the challenges of relying solely on GPS for tracking marine 
            animals that spend most of their time underwater.
          </p>
        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mt-8 text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}

