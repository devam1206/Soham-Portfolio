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
        
        {/* Granted Patents */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Granted Patents</h3>
        <div className="space-y-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl text-white mb-2">Managing Satellite Network Demand for Emergency Services</h3>
            <p className="text-slate-400 mb-2">Patent number: 12356465 • Date of Patent: July 8, 2025</p>
            <p className="text-slate-400 mb-2">Assignee: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a network demand for emergency services are disclosed. One method includes adaptively reserving, by a base station of a satellite network, reserved PRACH (physical random access channel) preambles for a plurality of reserved services, broadcasting, by the base station, the configuration, wherein a wireless device receives the reserved PRACH preambles configuration...
            </p>
          </div>
        </div>

        {/* Patent Applications */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Patent Applications</h3>
        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing Satellite Network Demand for Emergency Services</h3>
            <p className="text-slate-400 mb-2">Publication number: 20250301509 • Publication date: September 25, 2025</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a network demand for emergency services are disclosed. One method includes adaptively reserving, by a base station of a satellite network, reserved PRACH (physical random access channel) preambles for a plurality of reserved services, broadcasting, by the base station, the configuration, wherein a wireless device receives the reserved PRACH preambles configuration, wherein the wireless device selects a reserved service from the plurality of reserved services and transmits a PRACH preamble from the reserved preambles, and transmitting, by the base station, a message grant to the wireless device in response to the PRACH preamble...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Scheduling Forward Link Resource Allocations and Return Link Resource Allocations of a Satellite Link</h3>
            <p className="text-slate-400 mb-2">Publication number: 20250220660 • Publication date: July 3, 2025</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems of scheduling wireless communication through a satellite link are disclosed. One method includes determining a forward link quality of a forward link and a return link quality of a return link, determining a forward data rate requirement for a forward timing interval and a return data rate requirement for a return timing interval, determining a modulation and coding scheme (MCS) of the forward link based on the forward link quality, the return link quality, the forward data rate requirement, the return data rate requirement...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Base Station Management of a Connection of a Wireless Device to a Satellite Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20250132821 • Publication date: April 24, 2025</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems of a base station of a satellite network managing a connection of a wireless device to the satellite network are disclosed. One method includes broadcasting location information of a satellite associated with the base station, broadcasting an effective communication range for wireless communications between the base station and the wireless device of a satellite beam, wherein the wireless device calculates a distance between the wireless device and a reference point associated with the satellite based on the broadcast location information...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing a Connection of a Wireless Device to a Satellite Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20250125867 • Publication date: April 17, 2025</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a connection of a wireless device to a satellite network are disclosed. One method includes maintaining, by a core network of the satellite network, a parameter list that includes at least an estimate of a location of the wireless device and an estimate of one or more satellite locations, estimating, by the core network, a probability of a mapping of a wireless connection between the wireless device and a base station supporting the satellite network based upon the parameter list...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Control of States of a Wireless Device for Connection to a Satellite Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240397427 • Publication date: November 28, 2024</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing an operational state of a wireless device that connects to a satellite wireless network are disclosed. One method includes supporting, by a base station, a wireless connection of the wireless device through a satellite to the satellite wireless network, determining that the wireless device is in a dormant state based on an indication that the wireless device supports the dormant state and based on signaling attempts to the wireless device...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Multicast Message that includes Responses to Radio Resource Requests of Wireless Devices of a Multicast Group</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240357621 • Publication date: October 24, 2024</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems of a base station that multicasts a multicast message that includes responses to radio resource requests of wireless devices of a multicast group are disclosed. One method includes receiving, by the wireless satellite base station, a plurality of radio resource requests from a plurality of wireless devices corresponding with preambles received during an access window, forming, by the wireless satellite base station, a multicast group from the plurality of wireless devices based on a timing of receiving the radio resource requests...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing Satellite Network Demand for Emergency Services</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240334490 • Publication date: October 3, 2024</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a network demand for emergency services are disclosed. One method includes adaptively reserving, by a base station of a satellite network, reserved PRACH (physical random access channel) preambles for a plurality of reserved services, broadcasting, by the base station, the configuration, wherein a wireless device receives the reserved PRACH preambles configuration, wherein the wireless device selects a reserved service from the plurality of reserved services and transmits a PRACH preamble from the reserved preambles...
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Managing a User Equipment Connection to a Wireless Network</h3>
            <p className="text-slate-400 mb-2">Publication number: 20240040650 • Publication date: February 1, 2024</p>
            <p className="text-slate-400 mb-2">Applicant: Skylo Technologies, Inc.</p>
            <p className="text-slate-400">
              Apparatuses, methods, and systems for managing a User Equipment (UE) connection to a wireless network are disclosed. One method includes attaching, by a core network, the UE to the wireless network, storing, by the core network, at least a first subset of an attach context and a UE operational data set, wherein the UE stores at least a second subset of the attach context in memory and network operational data sets, wherein the UE transmits packets using the second subset of the attach context and the network operational data sets...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
