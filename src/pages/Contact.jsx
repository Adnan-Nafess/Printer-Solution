import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Clock3,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Background decoration */}
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              <MessageSquare size={16} />
              Contact Us
            </span>

            {/* Heading */}
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              We'd Love to Hear
              <span className="block text-blue-600">
                From You
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Have a question about the information on our website,
              noticed something that could be improved, or have a
              printer-related topic you would like us to cover? Send
              us a message and share your thoughts.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-500">
              We welcome useful feedback, suggestions, and questions
              that can help make this educational resource more helpful
              for readers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          CONTACT CONTENT
      ========================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =========================
              LEFT SIDE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Send Us a Message
            </h2>

            <p className="mt-5 max-w-xl text-[16px] leading-7 text-slate-600">
              If you have feedback about an article, a suggestion for
              a new topic, or a question related to the information on
              this website, you can use the form below.
            </p>

            {/* =========================
                THANK YOU MESSAGE
            ========================== */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Thank You!
                </h3>

                <p className="mt-3 max-w-lg text-[16px] leading-7 text-slate-600">
                  Thank you for taking the time to contact us. We
                  appreciate your message and feedback.
                </p>
              </motion.div>
            ) : (
              /* =========================
                  FORM
              ========================== */
              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What would you like to tell us?"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="7"
                    placeholder="Write your message..."
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Website Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Globe size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Website
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    This website is an educational resource focused on
                    everyday printer topics, printing information, and
                    useful learning guides.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Information */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Response Information
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Messages and suggestions can be shared through
                    the contact form. Response times may vary
                    depending on the nature of the message.
                  </p>
                </div>
              </div>
            </div>

            {/* Topic Suggestion */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Have a Topic Suggestion?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                If there is a printer topic you would like to see
                explained on the website, mention it in your message.
                Suggestions can help us decide what information to
                cover next.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;