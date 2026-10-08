import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Sparkles, MapPin, Phone, RotateCcw, Loader2, AlertCircle } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  StackOverflowIcon,
  LeetCodeIcon,
  InstagramIcon,
  FacebookIcon,
} from "../icons/SocialIcons";
import confetti from "canvas-confetti";
import { siteConfig } from "../../data/siteConfig";

export default function ContactView() {
  // Contact state
  const [copied, setCopied] = useState(false);
  const [copiedSecond, setCopiedSecond] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Development",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleCopyEmail = (emailToCopy = siteConfig.socials.email, isSecond = false) => {
    navigator.clipboard.writeText(emailToCopy);
    if (isSecond) {
      setCopiedSecond(true);
      setTimeout(() => setCopiedSecond(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ["#06b6d4", "#38bdf8", "#818cf8"],
    });
  };

  const validateField = (name, value) => {
    if (name === "name") {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
    }
    if (name === "email") {
      if (!value.trim()) return "Email address is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return "Enter a valid email address";
    }
    if (name === "message") {
      if (!value.trim()) return "Project description is required";
      if (value.trim().length < 10) return "Please provide at least 10 characters";
    }
    return "";
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleFieldBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Web Development",
      message: ""
    });
    setErrors({});
    setTouched({});
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const msgErr = validateField("message", formData.message);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr
    };

    setTouched({ name: true, email: true, message: true });
    setErrors(newErrors);

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/anfiquehussain6@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          _subject: `New Portfolio Inquiry: ${formData.subject} from ${formData.name.trim()}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === "true" || data?.success === true || response.status === 200)) {
        setFormSent(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.5 },
          colors: ["#06b6d4", "#2dd4bf", "#6366f1"],
        });
        setFormData({
          name: "",
          email: "",
          subject: "Web Development",
          message: ""
        });
        setTouched({});
        setErrors({});
        setTimeout(() => {
          setFormSent(false);
        }, 6000);
      } else {
        throw new Error(data?.message || "Form submission failed. Please try again or use direct mail.");
      }
    } catch (err) {
      console.error("FormSubmit dispatch failed:", err);
      setSubmitError(
        err?.message || "Failed to dispatch message directly. You can use the direct mail button below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full flex flex-col justify-between max-w-4xl py-2"
    >
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono-code mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for New Initiatives</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-1.5">
          Let's create something iconic.
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm">
          Got an idea, product architecture question, or collaborative opportunity? Reach out through any of these channels.
        </p>
      </div>

      {/* Main Grid: Direct Contact / Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {/* Left Column: Direct Info */}
        <div className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
          <div>
            <span className="text-[11px] uppercase font-mono-code tracking-widest text-neutral-400 block mb-2">
              Direct Emails
            </span>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-xs font-mono-code text-cyan-300 truncate mr-2">
                  {siteConfig.socials.email}
                </span>
                <button
                  onClick={() => handleCopyEmail(siteConfig.socials.email, false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition shrink-0 cursor-pointer"
                  title="Copy Primary Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-xs font-mono-code text-neutral-300 truncate mr-2">
                  {siteConfig.socials.secondaryEmail}
                </span>
                <button
                  onClick={() => handleCopyEmail(siteConfig.socials.secondaryEmail, true)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition shrink-0 cursor-pointer"
                  title="Copy Secondary Email"
                >
                  {copiedSecond ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            {(copied || copiedSecond) && (
              <span className="text-[11px] text-emerald-400 mt-1.5 block font-mono-code">
                ✓ Copied to clipboard!
              </span>
            )}
          </div>

          {/* Phone & Address */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono-code flex items-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Phone</span>
              </span>
              <a
                href={`tel:${siteConfig.socials.phone}`}
                className="text-xs font-mono-code text-white hover:text-cyan-300 transition block"
              >
                {siteConfig.socials.phone}
              </a>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono-code flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Address</span>
              </span>
              <address className="not-italic text-[11px] font-mono-code text-neutral-300 leading-snug">
                {siteConfig.contactInfo.address.line1}, {siteConfig.contactInfo.address.line2}<br />
                {siteConfig.contactInfo.address.po}<br />
                {siteConfig.contactInfo.address.city}, {siteConfig.contactInfo.address.country}
              </address>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10">
            <span className="text-[11px] uppercase font-mono-code tracking-widest text-neutral-400 mb-2 block">
              Social Profiles & Coding
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <TwitterIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">X</span>
              </a>
              <a
                href={siteConfig.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">LeetCode</span>
              </a>
              <a
                href={siteConfig.socials.stackoverflow}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <StackOverflowIcon className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">Stack OF</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span className="truncate">Instagram</span>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-300 text-xs"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Fast Quick Contact Form (Powered by FormSubmit) */}
        <form
          action="https://formsubmit.co/anfiquehussain6@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
          className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value={`New Inquiry: ${formData.subject} from ${formData.name}`} />
          {formSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8 my-auto">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Message Transmitted!</h4>
              <p className="text-xs text-neutral-300 max-w-xs leading-relaxed">
                Your inquiry has been received directly. I will review the details and get back to you promptly.
              </p>
              <button
                type="button"
                onClick={() => setFormSent(false)}
                className="mt-4 px-3 py-1 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 text-neutral-400 hover:text-cyan-300 text-xs font-mono-code transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-between gap-3">
              <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-mono-code flex items-center gap-1.5 font-semibold">
                  <Send className="w-3 h-3" />
                  <span>Transmit Inquiry</span>
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[10px] text-neutral-500 hover:text-cyan-300 flex items-center gap-1 font-mono-code transition cursor-pointer"
                  title="Reset form fields"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Submission Error Banner with Fallback Options */}
              {submitError && (
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] flex flex-col gap-2">
                  <div className="flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-400" />
                    <span className="leading-snug">{submitError}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-red-500/20">
                    <a
                      href={`mailto:${siteConfig.socials.email}?subject=${encodeURIComponent(`[${formData.subject || "Project Inquiry"}] from ${formData.name || "Client"}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.subject}\n\nMessage:\n${formData.message}`)}`}
                      className="px-2 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/40 text-[10px] font-mono-code transition flex items-center gap-1 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="w-2.5 h-2.5" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        const text = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.subject}\n\nMessage:\n${formData.message}`;
                        navigator.clipboard.writeText(text);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 text-[10px] font-mono-code transition flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-2.5 h-2.5" />
                      <span>{copied ? "Copied!" : "Copy Inquiry"}</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-2.5 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono-code block mb-1">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={() => handleFieldBlur("name")}
                      className={`w-full px-3 py-2 rounded-xl bg-black/40 border text-white placeholder-neutral-500 text-xs focus:outline-none transition ${
                        touched.name && errors.name
                          ? "border-red-500/60 focus:border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                          : "border-white/10 focus:border-cyan-400"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <span className="text-[10px] text-red-400 font-mono-code mt-0.5 block">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono-code block mb-1">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      onBlur={() => handleFieldBlur("email")}
                      className={`w-full px-3 py-2 rounded-xl bg-black/40 border text-white placeholder-neutral-500 text-xs focus:outline-none transition ${
                        touched.email && errors.email
                          ? "border-red-500/60 focus:border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                          : "border-white/10 focus:border-cyan-400"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <span className="text-[10px] text-red-400 font-mono-code mt-0.5 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono-code block mb-1">
                    Subject / Project Type
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleFieldChange("subject", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-neutral-200 text-xs focus:outline-none focus:border-cyan-400 transition cursor-pointer"
                  >
                    <option value="Web Development" className="bg-[#0c0e14] text-white">Full-Stack Web Development</option>
                    <option value="Frontend Architecture" className="bg-[#0c0e14] text-white">Frontend & UI/UX Architecture</option>
                    <option value="Backend & APIs" className="bg-[#0c0e14] text-white">Backend & API Engineering</option>
                    <option value="Full-Time Opportunity" className="bg-[#0c0e14] text-white">Full-Time / Contract Role</option>
                    <option value="General Inquiry" className="bg-[#0c0e14] text-white">General Consultation & Other</option>
                  </select>
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono-code block mb-1">
                    Message / Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Describe your project, timeline, deliverables, or questions..."
                    value={formData.message}
                    onChange={(e) => handleFieldChange("message", e.target.value)}
                    onBlur={() => handleFieldBlur("message")}
                    className={`w-full flex-1 min-h-[90px] px-3 py-2 rounded-xl bg-black/40 border text-white placeholder-neutral-500 text-xs focus:outline-none transition resize-none ${
                      touched.message && errors.message
                        ? "border-red-500/60 focus:border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-[10px] text-red-400 font-mono-code mt-0.5 block">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-neutral-950 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] font-mono-code text-neutral-500">
                  🔒 No spam. Direct encrypted dispatch • Replies typically in &lt; 24h
                </p>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Footer reassurance */}
      <div className="pt-1 text-center text-xs text-neutral-500 font-mono-code">
        Available for Remote & Global Roles
      </div>
    </motion.div>
  );
}
