import React from 'react';

const publications = [
  {
    title: "Experimental Demonstration of Snapshot Differential Positioning with LEO Satellites",
    href: "https://arxiv.org/abs/2603.15908",
    venue: "IEEE Radar Conference, 2026",
    note: "Preprint available on arXiv",
  },
  {
    title: "Underwater cooperative MIMO communications using hybrid acoustic and magnetic induction technique",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S1389128620300165",
    venue: "Computer Networks, Volume 173, 22 May 2020",
  },
  {
    title: "Enabling underwater acoustic cooperative MIMO systems by metamaterial-enhanced magnetic induction",
    href: "https://ieeexplore.ieee.org/abstract/document/8885489",
    venue: "IEEE Wireless Communications and Networking Conference (WCNC), 2019",
  },
  {
    title: "Delay Estimation of Initial Access procedure for 5G mm-Wave Cellular Networks",
    href: "https://ieeexplore.ieee.org/abstract/document/9599885",
    venue: "International Conference on Distributed Computing in Sensor Systems (DCOSS)",
  },
];

const grantedPatents = [
  "Managing a Connection of a Wireless Device to a Satellite Network",
  "Management of an Interface of a Satellite Network Between a Wireless Device and a Service Provider",
  "Control of States of a Wireless Device for Connection to a Satellite Network",
  "Dynamic Power Assignment Based on Link Qualities and Total Integrated Transmission Power",
  "Managing Satellite Network Demand for Emergency Services",
];

const patentApplications = [
  "Managing Satellite Network Demand for Emergency Services",
  "Scheduling Forward Link Resource Allocations and Return Link Resource Allocations of a Satellite Link",
  "Base Station Management of a Connection of a Wireless Device to a Satellite Network",
  "Managing a Connection of a Wireless Device to a Satellite Network",
  "Control of States of a Wireless Device for Connection to a Satellite Network",
  "Multicast Message that includes Responses to Radio Resource Requests of Wireless Devices of a Multicast Group",
  "Managing a User Equipment Connection to a Wireless Network",
];

export default function Publications() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-indigo-500 bg-clip-text">Publications.</h1>
      <p className="mb-8 text-lg text-slate-400">
        Check out my Google Scholar profile for more details:
        <a href="https://scholar.google.com/citations?user=aT7kdMMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
          Google Scholar
        </a>
      </p>

      {/* Journals and Conferences */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Journals and Conferences</h2>
        <div className="space-y-6">
          {publications.map((publication) => (
            <div key={publication.title} className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  {publication.title}
                </a>
              </h3>
              {publication.venue && (
                <p className="text-slate-400">{publication.venue}</p>
              )}
              {publication.note && (
                <p className="text-slate-500 mt-2">{publication.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Patents</h2>
        <p className="text-slate-400 mb-6">
          Updated from the current public inventor listing on{' '}
          <a href="https://patents.justia.com/inventor/soham-dhiren-desai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Justia Patents
          </a>
          . Open the inventor page for the latest patent numbers, dates, and full abstracts.
        </p>
        
        {/* Granted Patents */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Granted Patents</h3>
        <div className="space-y-6 mb-8">
          {grantedPatents.map((patent) => (
            <div key={patent} className="bg-slate-800 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl text-white mb-2">{patent}</h3>
            </div>
          ))}
        </div>

        {/* Patent Applications */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Patent Applications</h3>
        <div className="space-y-6">
          {patentApplications.map((application) => (
            <div key={application} className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">{application}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
