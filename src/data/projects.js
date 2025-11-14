export const projects = [
 
  {
    id: 1,
    title: "Whale Speed Estimation",
    description: `Advanced machine learning and computer vision techniques for estimating whale swimming speed using kinematic sensor data and optical flow methods. This project combines Random Forest Regression models with underwater optical flow analysis to provide robust speed estimation even when video quality is compromised.`,
    image: "/images/projects/whale-speed/Actual_vs_Predicted_2.png",
    tags: ["Machine Learning", "Computer Vision", "Optical Flow", "Marine Biology", "Random Forest"],
    detailPage: "/projects/whale-speed-estimation"
  },
  {
    id: 2,
    title: "Whale Location Estimation",
    description: `A novel technique for quick positioning of underwater animals when they surface. This project addresses the challenge of tracking whales during brief 3-5 second surfacing events using pseudo-trilateration over time and motion modeling with tracking filters (UKF/particle filter). The system enables accurate, non-invasive whale tracking when onboard GPS fails.`,
    image: "/images/projects/whale-location/Figure_1.png",
    tags: ["Radar", "Tracking", "Signal Processing", "Marine Biology", "Pseudo-GPS", "UKF"],
    detailPage: "/projects/whale-location-estimation"
  },
  {
    id: 3,
    title: "Distributed Underwater MIMO",
    description: `Advanced distributed Multiple-Input Multiple-Output (MIMO) system for underwater acoustic communication. This project addresses the challenges of reliable high-speed underwater communication by leveraging spatial diversity, cooperative transmission, and advanced signal processing to combat harsh underwater channel conditions including multipath propagation and time-varying characteristics.`,
    image: "/images/projects/underwater-mimo/mimo-system-diagram.png",
    tags: ["MIMO", "Underwater Communication", "Signal Processing", "Distributed Systems", "Acoustic Networks"],
    detailPage: "/projects/underwater-mimo"
  },
  {  id: 4,
  title: "Link Adaptation for NB-IOT over GEO Satellites",
  description: `Link adaptation is a mechanism by which the eNB selects optimal resources for uplink and downlink data transmissions based on the quality of the air-interface link. The eNB uses a combination of repetitions, modulation and coding schemes (MCS) depending on the link quality (RSSI or SINR) and channel utilisation at that point.

For UEs which are in poor coverage area and have low RSSI & SINR, the eNB allocates more resources (more repetitions and lower coding rate / MCS) compared to the UEs that have a good coverage condition.

This selection is done on a per-UE basis, and the resource allocation may change over time if the radio channel condition changes.
This mechanism is called Link Adaptation.`,
  image: "/images/projects/link-adaptation.jpg",
  tags: ["NB-IOT", "Satellite Communications", "Link Adaptation", "Radio Networks"],
}
]; 