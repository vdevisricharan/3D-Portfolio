import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address (e.g. alex@company.com).";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "Please enter a message of at least 10 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validate()) {
      return;
    }

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        text: "Direct EmailJS relay is not configured in this environment. No message was sent yet — click 'Dispatch via Email Client' below or email vdevisricharan@gmail.com directly.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          to_name: "V Devi Sri Charan",
          from_email: form.email.trim(),
          to_email: "vdevisricharan@gmail.com",
          message: form.message.trim(),
        },
        publicKey
      );

      if (response && (response.status === 200 || response.text === "OK")) {
        setLoading(false);
        setSubmitStatus({
          type: "success",
          text: "Signal transmitted successfully! Thank you — I will get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Unexpected response from EmailJS service.");
      }
    } catch (error) {
      setLoading(false);
      console.error("EmailJS transmission error:", error);
      setSubmitStatus({
        type: "error",
        text: "Signal transmission failed. Your message was not sent — please try again or use the direct email link below (vdevisricharan@gmail.com).",
      });
    }
  };

  const mailtoFallbackHref = `mailto:vdevisricharan@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${form.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n---\nFrom: ${form.name} (${form.email})`
  )}`;

  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            08 // SEND A SIGNAL
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>GOT A PROBLEM WORTH SOLVING?</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Let&apos;s build something extraordinary.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
        {/* Left: Contact Form + Direct Channels (7 Columns) */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.55)}
          className="xl:col-span-7 comic-panel rounded-xl p-6 sm:p-8 flex flex-col justify-between"
        >
          {/* Direct Channels Bar */}
          <div className="pb-6 mb-6 border-b border-[#9B4DFF]/20">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9B4DFF] block mb-3">
              DIRECT CHANNELS // IMMEDIATE RESPONSE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="mailto:vdevisricharan@gmail.com"
                className="p-3 rounded-lg bg-[#08060F] hover:bg-[#9B4DFF]/15 border border-[#9B4DFF]/30 hover:border-[#FF304F] transition-colors group"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FF304F] block">
                  EMAIL
                </span>
                <span className="font-mono text-[12px] font-semibold text-[#F7F5FF] group-hover:text-[#C4A2FF] truncate block mt-0.5">
                  vdevisricharan@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/vdevisricharan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#08060F] hover:bg-[#9B4DFF]/15 border border-[#9B4DFF]/30 hover:border-[#FF304F] transition-colors group"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9B4DFF] block">
                  GITHUB
                </span>
                <span className="font-mono text-[12px] font-semibold text-[#F7F5FF] group-hover:text-[#C4A2FF] truncate block mt-0.5">
                  github.com/vdevisricharan
                </span>
              </a>

              <a
                href="https://linkedin.com/in/vdevisricharan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#08060F] hover:bg-[#9B4DFF]/15 border border-[#9B4DFF]/30 hover:border-[#FF304F] transition-colors group"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C4A2FF] block">
                  LINKEDIN
                </span>
                <span className="font-mono text-[12px] font-semibold text-[#F7F5FF] group-hover:text-[#C4A2FF] truncate block mt-0.5">
                  in/vdevisricharan
                </span>
              </a>
            </div>
          </div>

          {/* Signal Transmission Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#F7F5FF] mb-2"
                >
                  Your Name <span className="text-[#FF304F]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  placeholder="Alex Mercer"
                  className={`w-full bg-[#08060F] py-3.5 px-4 rounded-md font-sans text-[14px] text-[#F7F5FF] placeholder:text-[#BDB4CC]/45 border transition-colors ${
                    errors.name
                      ? "border-[#FF304F]"
                      : "border-[#9B4DFF]/35 focus:border-[#9B4DFF]"
                  }`}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-1.5 font-mono text-[11px] text-[#FF304F]"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#F7F5FF] mb-2"
                >
                  Your Email <span className="text-[#FF304F]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  placeholder="alex@company.com"
                  className={`w-full bg-[#08060F] py-3.5 px-4 rounded-md font-sans text-[14px] text-[#F7F5FF] placeholder:text-[#BDB4CC]/45 border transition-colors ${
                    errors.email
                      ? "border-[#FF304F]"
                      : "border-[#9B4DFF]/35 focus:border-[#9B4DFF]"
                  }`}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="mt-1.5 font-mono text-[11px] text-[#FF304F]"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#F7F5FF] mb-2"
              >
                Your Message <span className="text-[#FF304F]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows="5"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                placeholder="Tell me about the system, role, or problem we can solve together..."
                className={`w-full bg-[#08060F] py-3.5 px-4 rounded-md font-sans text-[14px] text-[#F7F5FF] placeholder:text-[#BDB4CC]/45 border transition-colors resize-y ${
                  errors.message
                    ? "border-[#FF304F]"
                    : "border-[#9B4DFF]/35 focus:border-[#9B4DFF]"
                }`}
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  role="alert"
                  className="mt-1.5 font-mono text-[11px] text-[#FF304F]"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submission Feedback Banner */}
            {submitStatus && (
              <div
                role="status"
                aria-live="polite"
                className={`p-4 rounded-lg border font-sans text-[13.5px] leading-relaxed ${
                  submitStatus.type === "success"
                    ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-200"
                    : "bg-[#FF304F]/15 border-[#FF304F]/60 text-[#F7F5FF]"
                }`}
              >
                <p>{submitStatus.text}</p>
                {submitStatus.type === "error" && (
                  <div className="mt-3">
                    <a
                      href={mailtoFallbackHref}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#FF304F] text-[#F7F5FF] font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
                    >
                      <span>Dispatch via Email Client</span>
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="spider-sense-btn px-7 py-3.5 rounded-md bg-[#FF304F] hover:bg-[#e02442] disabled:opacity-60 text-[#F7F5FF] font-mono text-[13px] font-bold uppercase tracking-[0.16em] transition-all shadow-[0_0_24px_rgba(255,48,79,0.4)] flex items-center gap-2.5 cursor-pointer"
              >
                <span>{loading ? "Transmitting Signal..." : "Send a Signal"}</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <span className="font-mono text-[11px] text-[#BDB4CC]">
                Direct inbox:{" "}
                <a
                  href="mailto:vdevisricharan@gmail.com"
                  className="text-[#C4A2FF] hover:text-[#FF304F] underline"
                >
                  vdevisricharan@gmail.com
                </a>
              </span>
            </div>
          </form>
        </motion.div>

        {/* Right: 3D Global Signal Relay Canvas (5 Columns) */}
        <motion.div
          variants={slideIn("right", "tween", 0.18, 0.55)}
          className="xl:col-span-5 comic-panel rounded-xl p-4 flex flex-col justify-between min-h-[360px] sm:min-h-[440px]"
        >
          <div className="px-2 py-1.5 border-b border-[#9B4DFF]/20 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B4DFF]">
              GLOBAL RELAY // HYDERABAD, IN
            </span>
            <span className="font-mono text-[10px] text-[#FF304F]">ONLINE</span>
          </div>

          <div className="flex-1 w-full h-[300px] sm:h-[360px] relative">
            <EarthCanvas />
          </div>

          <div className="px-2 pt-2 border-t border-[#9B4DFF]/20 flex items-center justify-between font-mono text-[10px] text-[#BDB4CC] uppercase tracking-[0.14em]">
            <span>OPEN TO SWE / AI / BACKEND ROLES</span>
            <span className="text-[#C4A2FF]">UTC+05:30</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");