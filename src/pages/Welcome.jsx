import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="min-h-screen text-black p-6 md:p-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Soham Desai</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Developer. Creator. Passionate about building great developer experiences.
        </p>

        {/* <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="outline" asChild>
            <a href="mailto:soham@example.com">
              <Mail className="mr-2 w-4 h-4" /> Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/sohamdesai" target="_blank">
              <Github className="mr-2 w-4 h-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/sohamdesai" target="_blank">
              <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
            </a>
          </Button>
        </div> */}

        <div className="space-y-6">
          <Section title="About">
            <p>
              I'm Soham Desai, a software engineer who loves creating intuitive and impactful tools
              for developers. I focus on performance, accessibility, and simplicity in everything I build.
            </p>
          </Section>

          <Section title="Projects">
            <ul className="list-disc list-inside">
              <li><strong>DevToolKit</strong>: A set of productivity tools for developers.</li>
              <li><strong>CodeSync</strong>: Real-time collaborative code editor.</li>
              <li><strong>Snippetly</strong>: Curate and share code snippets with ease.</li>
            </ul>
          </Section>

          <Section title="Talks">
            <p>
              I've spoken at meetups and conferences about developer tools, React, and building efficient UIs.
            </p>
          </Section>

          <Section title="Articles">
            <p>
              I write about frontend development, performance optimization, and developer workflows.
            </p>
          </Section>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="text-gray-800 text-base space-y-2">{children}</div>
      </CardContent>
    </Card>
  );
};

export default Welcome;