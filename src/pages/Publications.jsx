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

const pageTitleClass =
  "font-display text-3xl md:text-4xl font-semibold text-foreground border-l-2 border-accent pl-4";

export default function Publications() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="max-w-6xl mx-auto py-10 md:py-14 px-4 md:px-8"
    >
      <Helmet>
        <title>Patents &amp; Papers — Soham Desai</title>
        <meta name="description" content="Soham Desai's published research and patents in satellite communications, underwater MIMO, 5G mmWave, and wireless positioning." />
      </Helmet>

      <motion.h1 variants={fade} className={`${pageTitleClass} mb-6`}>Patents &amp; Papers</motion.h1>
      <motion.p variants={fade} className="mb-10 text-lg text-muted max-w-prose leading-relaxed">
        For the full list and citations, see{" "}
        <a
          href="https://scholar.google.com/citations?user=aT7kdMMAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover underline underline-offset-4"
        >
          Google Scholar
        </a>
        .
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="mb-14"
      >
        <motion.h2 variants={fade} className="font-display text-2xl font-semibold text-foreground mb-6">
          Journals and conferences
        </motion.h2>
        <div className="space-y-5">
          {publications.map((publication) => (
            <motion.article
              key={publication.title}
              variants={fade}
              className="bg-surface p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg text-foreground font-medium mb-2 leading-snug">
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {publication.title}
                </a>
              </h3>
              {publication.venue && <p className="text-muted-foreground text-sm">{publication.venue}</p>}
              {publication.note && <p className="text-muted-foreground/80 text-sm mt-2">{publication.note}</p>}
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.h2 variants={fade} className="font-display text-2xl font-semibold text-foreground mb-4">
          Patents
        </motion.h2>
        <motion.p variants={fade} className="text-muted mb-8 max-w-prose leading-relaxed text-sm md:text-base">
          Updated from the public inventor listing on{" "}
          <a
            href="https://patents.justia.com/inventor/soham-dhiren-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            Justia Patents
          </a>
          . Open the inventor page for numbers, dates, and abstracts.
        </motion.p>

        <motion.h3 variants={fade} className="text-lg font-semibold text-foreground mb-4">Granted</motion.h3>
        <div className="space-y-4 mb-10">
          {grantedPatents.map((patent) => (
            <motion.div
              key={patent}
              variants={fade}
              className="bg-surface p-5 rounded-lg border-l-2 border-accent border border-border pl-5"
            >
              <p className="text-foreground text-base leading-snug">{patent}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3 variants={fade} className="text-lg font-semibold text-foreground mb-4">Applications</motion.h3>
        <div className="space-y-4">
          {patentApplications.map((application) => (
            <motion.div key={application} variants={fade} className="bg-surface p-5 rounded-lg border border-border">
              <p className="text-foreground text-base leading-snug">{application}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
