import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Download, Wrench, BarChart3, Compass } from "lucide-react";

const proofPoints = [
  { value: "14M+", label: "Devices powered" },
  { value: "5", label: "US Patents" },
  { value: "4", label: "IEEE & Journal Papers" },
  { value: "3GPP", label: "Delegate" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const pillars = [
  {
    icon: Wrench,
    title: "Build",
    description:
      "Prototyping real-world communication systems using SDRs, embedded hardware, and field testing.",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description:
      "Working with noisy data, signal metrics, and system-level performance across LTE, 5G, and GNSS.",
  },
  {
    icon: Compass,
    title: "Explore",
    description:
      "Pushing communication into extreme environments: underwater systems and non-terrestrial networks.",
  },
];

const currentFocus = [
  "GNSS carrier-phase positioning",
  "Non-terrestrial networks (NTN) & satellite systems",
  "Marine animal tracking & underwater sensing",
  "Congestion control in extreme network conditions",
];

export default function About() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Soham Desai — Wireless Systems Engineer</title>
        <meta name="description" content="Soham Desai builds wireless systems for extreme environments — underwater, satellite, and space. Staff Engineer at Skylo powering 14M+ devices." />
        <meta property="og:title" content="Soham Desai — Wireless Systems Engineer" />
        <meta property="og:description" content="Building wireless systems for extreme environments — underwater, satellite, and space. Staff Engineer at Skylo powering 14M+ devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soham-desai.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soham Desai — Wireless Systems Engineer" />
        <meta name="twitter:description" content="Building wireless systems for extreme environments — underwater, satellite, and space." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="px-4 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-tight"
          >
            Hey, I&rsquo;m Soham.
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-5 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
          >
            I build wireless systems for extreme environments&mdash;underwater,
            remote, and in space.
          </motion.p>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto italic"
          >
            Currently building the world&rsquo;s largest direct-to-device satellite
            network at{" "}
            <a
              href="https://www.skylo.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Skylo
            </a>{" "}
            (powering 14M+ devices).
          </motion.p>

          {/* ── Social proof bar ── */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2.5}
            className="mt-8 flex items-center justify-center gap-6 md:gap-10 flex-wrap"
          >
            {proofPoints.map((point) => (
              <div key={point.label} className="text-center">
                <span className="block font-display text-xl md:text-2xl font-semibold text-accent">
                  {point.value}
                </span>
                <span className="block text-xs md:text-sm text-muted-foreground mt-0.5">
                  {point.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-background text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-surface transition-colors"
            >
              Read Publications
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-surface transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── One-line expansion ── */}
      <section className="px-4 md:px-8 pb-14 md:pb-16">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={4}
          className="max-w-2xl mx-auto text-center text-base md:text-lg text-muted leading-relaxed"
        >
          Electrical engineer working across hardware, signal processing, and
          system design&mdash;focused on making communication reliable where it
          typically fails.
        </motion.p>
      </section>

      {/* ── What I Do ── */}
      <section className="px-4 md:px-8 py-14 md:py-16 border-t border-border/60">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fade}
                className="group rounded-lg border border-border/60 bg-surface/40 p-6 hover:border-accent/30 transition-colors"
              >
                <p.icon className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Long-form narrative ── */}
      <section className="px-4 md:px-8 py-14 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-10">
            <motion.img
              variants={fade}
              src="/profile.jpg"
              alt="Soham Desai"
              className="w-56 h-56 md:w-64 md:h-64 rounded-lg object-cover object-center shrink-0 border border-border"
            />

            <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-5">
              <motion.p variants={fade} className="text-muted leading-relaxed">
                I&rsquo;m an Electrical and Electronics Engineer who works across
                the full stack of wireless systems&mdash;from hardware and
                prototyping to signal processing and system-level analysis.
                I&rsquo;m most effective close to the system:{" "}
                <span className="text-foreground font-medium">
                  building, testing, and iterating with real data
                </span>{" "}
                rather than relying purely on simulation.
              </motion.p>

              <motion.p variants={fade} className="text-muted leading-relaxed">
                My work is driven by a simple idea: as humans push into oceans,
                remote regions, and space, communication should not be the
                bottleneck. I&rsquo;m particularly interested in making
                connectivity reliable where traditional assumptions break
                down&mdash;
                <span className="text-foreground font-medium">
                  low power, weak signals, long delays, and unpredictable
                  conditions.
                </span>
              </motion.p>
            </div>
          </div>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none mt-10 space-y-5">
            <motion.p variants={fade} className="text-muted leading-relaxed">
              This has led me to focus on two domains:{" "}
              <span className="text-foreground font-medium">
                underwater and satellite communications
              </span>
              . During my Master&rsquo;s, I built a fully working underwater
              multi-antenna communication system using software-defined radios
              (SDRs) and acoustic antennas, earning the Dean&rsquo;s Award and
              leading to published research.
            </motion.p>

            <motion.p variants={fade} className="text-muted leading-relaxed">
              For the past four years, I have been putting this into practice at
              scale at{" "}
              <a
                href="https://www.skylo.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-border transition-colors"
              >
                Skylo
              </a>
              , where I am helping build{" "}
              <span className="text-foreground font-medium">
                the world&rsquo;s largest direct-to-device satellite network
              </span>
              . Today, that network powers over{" "}
              <span className="text-foreground font-medium">
                14 million devices and counting
              </span>
              . Working across LTE, 5G, and NB-IoT, my focus has been on
              performance, access control, and real-world behavior under extreme
              load.
            </motion.p>

            <motion.p variants={fade} className="text-muted leading-relaxed">
              I gravitate toward problems where theory meets messy
              reality&mdash;field tests, noisy data, and systems that don&rsquo;t
              behave ideally. Whether it&rsquo;s analyzing network performance,
              experimenting with GNSS positioning approaches, or exploring
              non-terrestrial networks, I enjoy challenges that require both rigor
              and practical intuition.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── Current Engineering Focus ── */}
      <section className="px-4 md:px-8 py-14 md:py-16 border-t border-border/60">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fade}
            className="font-display text-2xl font-semibold text-foreground mb-6"
          >
            Current Engineering Focus
          </motion.h2>
          <ul className="space-y-3">
            {currentFocus.map((item) => (
              <motion.li
                key={item}
                variants={fade}
                className="flex items-start gap-3 text-muted text-sm md:text-base leading-relaxed"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.p
            variants={fade}
            className="mt-8 text-sm text-muted-foreground leading-relaxed"
          >
            You&rsquo;ll find a mix of hands-on systems, field experiments, and
            research-driven work in my{" "}
            <Link
              to="/projects"
              className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-border transition-colors"
            >
              Projects
            </Link>{" "}
            and{" "}
            <Link
              to="/publications"
              className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-border transition-colors"
            >
              Publications
            </Link>{" "}
            sections.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Research Collaboration ── */}
      <section className="px-4 md:px-8 py-14 md:py-16 border-t border-border/60">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fade}
            className="font-display text-2xl font-semibold text-foreground mb-6"
          >
            Research Collaboration
          </motion.h2>
          <motion.div
            variants={fade}
            className="rounded-lg border border-border/60 bg-surface/40 p-6"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Marine Animal Tracking &amp; Underwater Sensing
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hopkins Marine Station, Stanford University &middot; CATS (Customized Animal Tracking Solutions), Australia
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed mb-4">
              Working with{" "}
              <span className="text-foreground font-medium">Dr. Jeremy Goldbogen</span> and{" "}
              <span className="text-foreground font-medium">Dr. Dave Cade</span> at
              Stanford&rsquo;s Hopkins Marine Station, alongside{" "}
              <span className="text-foreground font-medium">CATS</span> tag
              manufacturers in Australia, on sensing and positioning systems for
              marine animals. The work combines bio-logging hardware (HD cameras,
              IMUs, depth sensors, GNSS) with signal processing and machine
              learning to track whale behavior, estimate speed from sensor fusion,
              and develop positioning techniques for animals that surface only
              briefly.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Bio-logging", "Sensor Fusion", "LEO Positioning", "Computer Vision", "Field Research"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-elevated text-muted-foreground rounded-full text-xs border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Personal footer ── */}
      <section className="px-4 md:px-8 pt-6 pb-14 md:pb-16">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="max-w-3xl mx-auto text-sm text-muted-foreground italic"
        >
          When I&rsquo;m not working on wireless systems, I&rsquo;m usually
          training Muay Thai, traveling, or behind a camera.
        </motion.p>
      </section>
    </div>
  );
}
