import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const calculateDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = endDate === "current" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} yrs ${months} mos`;
};

const pageTitleClass =
  "font-display text-3xl md:text-4xl font-semibold text-foreground border-l-2 border-accent pl-4 mb-10";

export default function EducationExperience() {
  return (
    <div className="flex flex-col justify-between px-4 md:px-8">
      <Helmet>
        <title>Education &amp; Experience — Soham Desai</title>
        <meta name="description" content="Soham Desai's career journey from electronics engineering in Mumbai through Samsung 5G R&D to building satellite systems at Skylo." />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-4xl mx-auto flex-1 py-10 md:py-14 space-y-12"
      >
        <motion.h1 variants={fade} className={pageTitleClass}>Education &amp; Experience</motion.h1>

        {/* ── Narrative intro ── */}
        <motion.section variants={fade} className="max-w-prose">
          <p className="text-muted leading-relaxed">
            My path has followed a single thread: making wireless communication work in places where it
            traditionally doesn&rsquo;t. Each step&mdash;from university research to consumer devices to
            satellite infrastructure&mdash;deepened the same conviction that the hardest connectivity
            problems are the ones most worth solving.
          </p>
        </motion.section>

        {/* ── Education ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="prose prose-invert prose-sm md:prose-base max-w-none"
        >
          <motion.h2 variants={fade} className="font-display text-2xl font-semibold text-foreground mb-6 not-prose">
            Education
          </motion.h2>
          <div className="text-muted space-y-6 not-prose max-w-prose">
            <motion.div variants={fade}>
              <div className="text-base font-semibold text-foreground">Stanford &ndash; Continuing Studies</div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                AI and machine learning for business (Python), innovation and creativity, communication with impact.
              </p>
            </motion.div>
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">University at Buffalo, SUNY</p>
              <p className="text-sm text-muted-foreground mt-1">M.S., Electrical Engineering</p>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                Thesis on underwater distributed beamforming. Built a working multi-antenna acoustic MIMO
                testbed, earned the Dean&rsquo;s Award, and published in IEEE and Computer Networks.
              </p>
            </motion.div>
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">K.J. Somaiya College of Engineering</p>
              <p className="text-sm text-muted-foreground mt-1">B.S., Electronics Engineering</p>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                Where the interest in wireless started. Co-founded EcoMappers, an air-quality sensing startup,
                during the final year.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Career ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="prose prose-invert prose-sm md:prose-base max-w-none"
        >
          <motion.h2 variants={fade} className="font-display text-2xl font-semibold text-foreground mb-6 not-prose">
            Career
          </motion.h2>
          <div className="text-muted space-y-10 not-prose max-w-prose">

            {/* Skylo */}
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">
                Staff Wireless Systems Engineer (CTO Group) &ndash; Skylo
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Apr 2022 &ndash; Present &middot; {calculateDuration("2022-04-01", "current")}
              </p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                After seeing 5G at the chip level at Samsung, I wanted to work at the system level&mdash;where
                physics, protocol, and product collide. Skylo offered exactly that: building the world&rsquo;s
                largest direct-to-device satellite network from the ground up.
              </p>
              <ul className="text-sm text-muted mt-3 list-disc list-outside pl-5 space-y-1.5 leading-relaxed">
                <li>
                  5G and NB-IoT protocols; growing involvement in <span className="text-foreground">6G</span>, AI-native
                  RAN, and integrated sensing and communications.
                </li>
                <li>
                  Algorithms for dynamic power allocation, spectrum management, and link adaptation; system- and
                  link-level simulators in MATLAB and Python.
                </li>
                <li>
                  LEO constellation architecture &mdash; chipsets, beamformers, FPGA vs. ASIC trade-offs, power
                  and cost analysis.
                </li>
                <li>ITU documentation for global mega-constellation spectrum.</li>
                <li>
                  <span className="text-foreground">3GPP delegate</span> (RAN1, RAN2, RAN4) with active contributions.
                </li>
                <li>Collaboration with satellite partners including EchoStar, Ligado, and Inmarsat.</li>
                <li>Hands-on work with SDRs, spectrum analyzers, devkits, and UEs (Qualcomm, Altair, MediaTek).</li>
                <li>Emission testing, dynamic power control, and technical documentation.</li>
                <li>MATLAB, Python, Linux, SQL, large-scale data, and GCP.</li>
                <li>
                  <span className="text-foreground">5 granted US/international patents</span>; 10+ applications filed.
                </li>
              </ul>
            </motion.div>

            {/* Samsung */}
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">
                Senior Engineer (Cellular R&amp;D) &ndash; Samsung Semiconductor
              </p>
              <p className="text-sm text-muted-foreground mt-1">Oct 2019 &ndash; Apr 2022 &middot; 2 yrs 6 mos</p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                Joined Samsung to move from research into production wireless&mdash;shipping modem firmware that
                went into millions of handsets taught me what &ldquo;works at scale&rdquo; actually means.
              </p>
              <ul className="text-sm text-muted mt-3 list-disc list-outside pl-5 space-y-1.5 leading-relaxed">
                <li>5G sub-6 and mmWave modem software.</li>
                <li>Power and SAR algorithms; FCC / ISED regulations.</li>
                <li>Beamforming and antenna switching; power sharing across RATs.</li>
              </ul>
            </motion.div>

            {/* UB RA */}
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">Research Assistant &ndash; University at Buffalo</p>
              <p className="text-sm text-muted-foreground mt-1">May 2018 &ndash; Jul 2021 &middot; 3 yrs 2 mos</p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                The starting point for everything&mdash;where I first proved that robust underwater MIMO was
                achievable outside of simulation, using hardware I built myself.
              </p>
              <ul className="text-sm text-muted mt-3 list-disc list-outside pl-5 space-y-1.5 leading-relaxed">
                <li>
                  Thesis: <span className="text-foreground">underwater distributed beamforming</span> for robotic swarms.
                </li>
                <li>
                  Tank experiments with USRP N210, hydrophones, magnetic-induction antennas, GNU Radio, and MATLAB.
                </li>
              </ul>
            </motion.div>

            {/* Lab assistant */}
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">
                Graduate Lab Assistant &ndash; Electronics Tinkering Lab
              </p>
              <p className="text-sm text-muted-foreground mt-1">Aug 2018 &ndash; Aug 2019 &middot; 1 yr</p>
            </motion.div>

            {/* EcoMappers */}
            <motion.div variants={fade}>
              <p className="text-base font-semibold text-foreground">Co-Founder &ndash; EcoMappers</p>
              <p className="text-sm text-muted-foreground mt-1">Mar 2014 &ndash; Feb 2016 &middot; 1 yr 11 mos</p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                My first taste of building from zero. Led the hardware side of Airolyzr&mdash;air and noise
                pollution sensing devices spun out of a university project. It didn&rsquo;t scale, but it
                cemented the instinct to ship things that work in the real world.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
