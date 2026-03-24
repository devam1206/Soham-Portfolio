import React from "react";
import { useNavigate } from "react-router-dom";

export default function UnderwaterMIMO() {
  const navigate = useNavigate();

  return (
    <div className="py-10 md:py-14 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 text-accent hover:text-accent-hover flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground border-l-2 border-accent pl-4 mb-6 leading-tight">
          Distributed Underwater MIMO
        </h1>

        <hr className="border-border mb-8" />

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Problem Statement</h2>
          <p className="text-muted mb-6 leading-relaxed">
            Underwater acoustic communication faces significant challenges due to the unique characteristics 
            of the underwater channel, including severe multipath propagation, limited bandwidth, high latency, 
            and time-varying channel conditions. Traditional single-input single-output (SISO) systems struggle 
            to achieve reliable high-speed communication in such harsh environments. A distributed Multiple-Input 
            Multiple-Output (MIMO) system is needed to improve communication reliability, increase data rates, 
            and extend coverage in underwater acoustic networks.
          </p>
        </section>

        <hr className="border-border mb-8" />

        {/* Solution Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Solution Overview</h2>
          <p className="text-muted mb-6 leading-relaxed">
            This project explores the implementation of a distributed MIMO system for underwater acoustic 
            communication. By leveraging spatial diversity through multiple transmit and receive nodes, 
            the system can combat multipath fading and improve overall link reliability. The distributed 
            architecture allows for cooperative transmission and reception, enabling better coverage and 
            increased throughput compared to conventional point-to-point links.
          </p>

          <p className="text-muted mb-6 leading-relaxed">
            Key features of the system include:
          </p>

          <ul className="list-disc list-inside text-muted mb-6 space-y-2 ml-4">
            <li>Spatial multiplexing to increase data rates</li>
            <li>Diversity combining to enhance link reliability</li>
            <li>Distributed signal processing for cooperative communication</li>
            <li>Adaptive modulation and coding schemes</li>
            <li>Channel estimation and equalization techniques for time-varying channels</li>
          </ul>
        </section>

        <hr className="border-border mb-8" />

        {/* Project Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Project Details and Description</h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4">System Architecture</h3>
          <p className="text-muted mb-6 leading-relaxed">
            The distributed MIMO system consists of multiple spatially separated transmit and receive nodes 
            that work cooperatively to improve communication performance. Each node is equipped with acoustic 
            transducers and processing capabilities to implement advanced signal processing algorithms.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Key Technologies</h3>
          <div className="bg-surface p-6 rounded-lg mb-6">
            <ul className="text-muted space-y-3">
              <li><strong>MIMO Signal Processing:</strong> Advanced algorithms for spatial multiplexing and diversity combining</li>
              <li><strong>Channel Estimation:</strong> Adaptive techniques to track time-varying underwater acoustic channels</li>
              <li><strong>Synchronization:</strong> Distributed timing and carrier synchronization methods</li>
              <li><strong>Error Correction:</strong> Robust coding schemes to combat channel impairments</li>
              <li><strong>Network Coordination:</strong> Protocols for distributed cooperation among nodes</li>
            </ul>
          </div>
        </section>

        <hr className="border-border mb-8" />

        {/* Technical Documentation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technical Documentation</h2>
          
          <div className="space-y-6">
            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Research Paper 1</h4>
              <p className="text-muted mb-4">
                Detailed analysis and implementation of the distributed MIMO system for underwater communication.
              </p>
              <a
                href="/images/projects/underwater-mimo/mimo1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-accent hover:bg-accent-hover text-zinc-950 rounded-lg transition-colors"
              >
                View PDF
              </a>
            </div>

            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Research Paper 2</h4>
              <p className="text-muted mb-4">
                Additional research findings and experimental results from the underwater MIMO project.
              </p>
              <a
                href="/images/projects/underwater-mimo/mimo2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-accent hover:bg-accent-hover text-zinc-950 rounded-lg transition-colors"
              >
                View PDF
              </a>
            </div>
          </div>
        </section>

        <hr className="border-border mb-8" />

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Underwater Sensor Networks</h4>
              <p className="text-muted">
                Enable reliable data collection from distributed underwater sensors for environmental 
                monitoring and oceanographic research.
              </p>
            </div>

            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Autonomous Underwater Vehicles (AUVs)</h4>
              <p className="text-muted">
                Facilitate high-speed communication between AUVs and base stations for mission-critical 
                operations and real-time control.
              </p>
            </div>

            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Offshore Operations</h4>
              <p className="text-muted">
                Support communication infrastructure for offshore oil and gas operations, underwater 
                construction, and maintenance activities.
              </p>
            </div>

            <div className="bg-surface-elevated p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">Marine Research</h4>
              <p className="text-muted">
                Enable real-time data streaming from underwater research equipment and sensor arrays 
                for marine biology and oceanography studies.
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mt-8 text-accent hover:text-accent-hover flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}

