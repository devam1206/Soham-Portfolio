export const projects = [
  {
    id: 1,
    title: "Hybrid Acoustic & Magnetic Induction Distributed MIMO for Underwater Robot Swarms",
    description:
      "Underwater Robot Swarms face a massive communication bottleneck: acoustic MIMO needs synchronization, but sound travels too slowly for real-time clock alignment. We solve this with a hybrid system using Metamaterial-Enhanced Magnetic Induction (M²I) for near-instantaneous sync and acoustic MIMO for long-range data. Our SDAMM testbed on USRP N210 demonstrated 4–8 dB SNR improvement over pure acoustic sync.",
    tags: [
      "Underwater Robotics",
      "Distributed MIMO",
      "Acoustic Communications",
      "Magnetic Induction",
      "Swarm Systems",
    ],
    images: [
      "/images/projects/underwater-swarms/system-diagram.png",
      "/images/projects/underwater-swarms/lab-testbed.jpg",
    ],
    href: "https://www.notion.so/Underwater-Robotic-Swarms-3288349b0e168034950bc2f5425668fe?source=copy_link",
    format: "Notion Book",
    linkLabel: "Open Notion Book",
  },
  {
    id: 2,
    title: "LEO Satellites for Positioning (PNT)",
    description:
      "Traditional GNSS fails when receivers can only capture signals for 3–5 seconds (e.g., marine mammals surfacing briefly). We developed a Doppler-based snapshot differential positioning framework using LEO (Iridium) satellite signals in 5–10 second bursts, with a fixed base station providing differential corrections. Field experiments in the SF Bay Area with a 30 km baseline reduced positioning error by ~47%, from 500 m to under 265 m. Paper accepted at IEEE Radar Conference 2026.",
    tags: [
      "LEO Satellites",
      "PNT",
      "Doppler Positioning",
      "GNSS Alternatives",
      "Wildlife Tracking",
    ],
    images: [
      "/images/projects/leo-pnt/differential-positioning.png",
      "/images/projects/leo-pnt/experiment-results.png",
    ],
    href: "https://www.notion.so/LEO-Satellites-for-Positioning-PNT-3288349b0e16809ab3dee1eee692a68e?source=copy_link",
    format: "Notion Book",
    linkLabel: "Open Notion Book",
  },
  {
    id: 3,
    title: "First Voice Call over NB NTN GEO Satellites for Skylo",
    description:
      "Standard SIP-over-IP voice calls over narrowband satellite links suffer from massive overhead and 10-transaction call setup. Skylo's VoNIDD architecture replaces SIP with the 11 protocol (reducing setup to 3 transactions), uses Non-IP Data Delivery for minimal headers, and employs AI codecs achieving high voice quality (MOS 3.9) at under 1 kbps. This enables real-time bi-directional voice and emergency calling over GEO satellite infrastructure.",
    tags: [
      "NB-NTN",
      "GEO Satellites",
      "Voice over NIDD",
      "AI Codecs",
      "Emergency Communications",
    ],
    images: [
      "/images/projects/ntn-voice/architecture.png",
      "/images/projects/ntn-voice/codec-results.png",
    ],
    href: "https://www.notion.so/First-Voice-Call-over-NB-NTN-GEO-Satellites-3288349b0e168008b21cf4cc9bdbfcfd?source=copy_link",
    format: "Notion Book",
    linkLabel: "Open Notion Book",
  },
  {
    id: 4,
    title: "AI-Driven Vision & Sensor Fusion for Underwater Environments",
    description:
      "GPS doesn't work underwater and cameras are distorted by water conditions, making animal tracking extremely challenging. This system fuses onboard video with multi-sensor data (accelerometers, depth, orientation) from CATS tags. A Random Forest Regressor achieves R²=0.92 for speed prediction from kinematic data alone. Weighted optical flow algorithms account for underwater light attenuation, enabling accurate speed estimation even in murky conditions.",
    tags: [
      "Computer Vision",
      "Sensor Fusion",
      "Underwater AI",
      "Autonomy",
      "Perception",
    ],
    images: [
      "/images/projects/ai-vision/speed-estimation.png",
      "/images/projects/ai-vision/optical-flow.png",
    ],
    href: "https://www.notion.so/AI-Driven-Vision-Sensor-Fusion-for-Underwater-Environments-3288349b0e1680228846fea6cce3846b?source=copy_link",
    format: "Notion Book",
    linkLabel: "Open Notion Book",
  },
  {
    id: 5,
    title: "Semantic Video Transfer for Low-Bandwidth Underwater Acoustics",
    description:
      "Acoustic links underwater are limited to under 35 kbps, making raw video transfer take hours. Our system converts video into semantic text prompts on the AUV, transmits a ~102 KB payload (text + first frame) instead of 2.4 MB compressed video, and regenerates the scene using generative AI (MiniMax) on the surface. Transmission drops from ~1 hour to ~2.6 minutes on a 5.4 kbps link, enabling real-time situational awareness for ocean exploration.",
    tags: [
      "Semantic Communications",
      "Underwater Acoustics",
      "Low Bandwidth",
      "Video Transfer",
      "Generative AI",
    ],
    images: [
      "/images/projects/semantic-video/pipeline.png",
    ],
    href: "https://www.notion.so/Semantic-Video-Transfer-for-Low-Bandwidth-Underwater-Acoustics-3288349b0e1680618269f7abad2a4c9e?source=copy_link",
    format: "Notion Book",
    linkLabel: "Open Notion Book",
  },
  {
    id: 6,
    title: "Whale Position and Depth Analysis",
    description:
      "Developed in collaboration with Hopkins Marine Station at Stanford University and CATS (Customized Animal Tracking Solutions). CATS tags—equipped with HD cameras, IMUs, depth sensors, and GNSS modules—are temporarily attached to whales via suction cups to capture a complete picture of underwater behavior. Analysis of blue whale data revealed surfacing events lasting ~7 seconds on average, with the animal at surface 16.4% of the time across 116,000+ records.",
    tags: [
      "Whale Tracking",
      "Depth Analysis",
      "Marine Sensing",
      "Behavior Analysis",
      "Field Research",
    ],
    images: [
      "/images/projects/whale-depth/cats-tag.png",
      "/images/projects/whale-depth/depth-analysis.png",
    ],
    href: "https://www.notion.so/Whale-Position-and-Depth-Analysis-3288349b0e1680b7ae1ac85c7e35a3af?source=copy_link",
    linkLabel: "Open Notion Book",
  },
];