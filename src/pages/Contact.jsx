import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const pageTitleClass =
  "font-display text-3xl md:text-4xl font-semibold text-foreground border-l-2 border-accent pl-4";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact Form Submission",
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send — please try email directly.");
      })
      .finally(() => setSending(false));
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-shadow";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="max-w-2xl mx-auto mt-10 md:mt-14 mb-16 px-4 md:px-6"
    >
      <Helmet>
        <title>Contact — Soham Desai</title>
        <meta name="description" content="Get in touch with Soham Desai for collaborations, research discussions, or consulting opportunities." />
      </Helmet>

      <motion.h1 variants={fade} custom={0} className={`${pageTitleClass} mb-4`}>
        Get in Touch
      </motion.h1>

      <motion.p variants={fade} custom={1} className="text-muted leading-relaxed mb-8">
        I&rsquo;m open to research collaborations, consulting on wireless/satellite systems, and interesting
        conversations about NTN, GNSS, or underwater communications.
      </motion.p>

      <motion.div variants={fade} custom={2} className="flex flex-wrap gap-5 mb-10">
        <a
          href="mailto:soham.d.desai@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          <Mail className="w-4 h-4" />
          soham.d.desai@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/s-desai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/soham12112"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </motion.div>

      <motion.form variants={fade} custom={2.5} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-muted mb-2">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-muted mb-2">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-muted mb-2">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} min-h-[140px] resize-y`}
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="w-full py-2.5 bg-accent text-zinc-950 font-medium rounded-md border border-transparent hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send Message"}
        </button>
      </motion.form>
    </motion.div>
  );
}
