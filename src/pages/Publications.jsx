import React from 'react';

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
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1389128620300165" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Underwater cooperative MIMO communications using hybrid acoustic and magnetic induction technique
              </a>
            </h3>
            <p className="text-slate-400">Computer Networks, Volume 173, 22 May 2020</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">
              <a href="https://ieeexplore.ieee.org/abstract/document/8885489" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Enabling underwater acoustic cooperative MIMO systems by metamaterial-enhanced magnetic induction
              </a>
            </h3>
            <p className="text-slate-400">IEEE Wireless Communications and Networking Conference (WCNC), 2019</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">
              <a href="https://ieeexplore.ieee.org/abstract/document/9599885" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Delay Estimation of Initial Access procedure for 5G mm-Wave Cellular Networks
              </a>
            </h3>
          </div>
        </div>
      </div>

      {/* Patents */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Patents</h2>
        <p className="text-slate-400 mb-6">
          View all patents on{' '}
          <a href="https://patents.justia.com/inventor/soham-dhiren-desai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Justia Patents
          </a>
        </p>
        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing Satellite Network Demand for Emergency Services</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240334490</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a network demand for emergency services are disclosed. One method includes adaptively reserving, by a base station of a satellite network, reserved PRACH (physical random access channel) preambles for a plurality of reserved services...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Control of States of a Wireless Device for Connection to a Satellite Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240397427</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing an operational state of a wireless device that connects to a satellite wireless network are disclosed. One method includes supporting, by a base station, a wireless connection of the wireless device through a satellite...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Multicast Message that includes Responses to Radio Resource Requests of Wireless Devices of a Multicast Group</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240357621</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems of a base station that multicasts a multicast message that includes responses to radio resource requests of wireless devices of a multicast group are disclosed...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing a User Equipment Connection to a Wireless Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240040650</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a User Equipment (UE) connection to a wireless network are disclosed. One method includes attaching, by a core network, the UE to the wireless network...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
