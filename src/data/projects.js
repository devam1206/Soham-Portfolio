export const projects = [
  {
    id: 1,
    title: "Link Adaptation for NB-IOT over GEO Satellites",
    description: `Link adaptation is a mechanism by which the eNB selects optimal resources for uplink and downlink data transmissions based on the quality of the air-interface link. The eNB uses a combination of repetitions, modulation and coding schemes (MCS) depending on the link quality (RSSI or SINR) and channel utilisation at that point.

For UEs which are in poor coverage area and have low RSSI & SINR, the eNB allocates more resources (more repetitions and lower coding rate / MCS) compared to the UEs that have a good coverage condition.

This selection is done on a per-UE basis, and the resource allocation may change over time if the radio channel condition changes.
This mechanism is called Link Adaptation.`,
    image: "/images/projects/link-adaptation.jpg",
    tags: ["NB-IOT", "Satellite Communications", "Link Adaptation", "Radio Networks"],
  }
]; 