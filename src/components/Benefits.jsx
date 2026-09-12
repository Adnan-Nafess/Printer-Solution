import { motion } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Easy to Understand",
    description:
      "Printer problems can involve several different things at once. Our guides break common situations into smaller checks so you can understand what you are looking at before trying the next step.",
  },
  {
    icon: Lightbulb,
    title: "Practical Information",
    description:
      "The guides focus on things you can actually check, such as printer status, paper loading, network connection, cartridges, print queues and messages shown by the printer.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Instead of searching through unrelated information, you can start with a problem category that matches your situation and work through the relevant checks in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Guidance",
    description:
      "Organized information that helps you approach common printer issues in a clear and practical way without unnecessary complexity.",
  },
];

const Benefits = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Less Searching,
            <span className="block text-blue-600">
              More Understanding
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our guides are designed to make common printer problems easier
            to understand, with simple information you can follow at your
            own pace.
          </p>
        </motion.div>

        {/* =========================
            IMAGE + BENEFIT CARDS
        ========================== */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1fr_1fr]">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <div className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="h-full min-h-[560px] overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?_gl=1*k0jpbd*_ga*NzMxMjI5NzM4LjE3ODkyNDg0NjQ.*_ga_8JE65Q40S6*czE3ODkyNDg0NjMkbzEkZzAkdDE3ODkyNDg0NjMkajYwJGwwJGgw"
                  alt="Printer workspace"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* BENEFIT CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="flex min-h-[265px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-7 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </motion.article>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;