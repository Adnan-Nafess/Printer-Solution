import { motion } from "framer-motion";
import {
  Search,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Problem",
    description:
      "Start by identifying what is happening with your printer. Whether it is not printing, having connection issues, showing an error, or having a paper or ink problem, choose the issue that looks closest to yours.",
    points: [
      "Choose the issue you are facing",
      "See common printer problems",
    ],
  },
  {
    number: "02",
    icon: BookOpenCheck,
    title: "Follow the Guide",
    description:
      "Once you find the right topic, go through the guide step by step. Each guide explains simple things you can check without overwhelming you with complicated information.",
    points: [
      "Follow clear instructions",
      "Understand what to check",
    ],
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Get Back to Printing",
    description:
      "Use the suggested checks to understand what may be causing the problem. In many cases, a few simple checks can help you get your printer ready to use again.",
    points: [
      "Check the suggested solutions",
      "Get your printer ready again",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Simple Help, Step by Step
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Finding help for a printer problem doesn't have to be
            complicated. Start with your issue and follow the information
            that matches your situation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-16">

          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[72px] hidden h-px bg-blue-100 lg:block" />

          <div className="grid gap-7 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative"
                >
                  <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-slate-200/70">

                    {/* Decorative number */}
                    <div className="pointer-events-none absolute right-7 top-5 select-none text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    {/* Supporting information */}
                    <div className="mt-auto border-t border-slate-100 pt-6">
                      <div className="space-y-3">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-3"
                          >
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                              <CheckCircle2 size={14} />
                            </div>

                            <span className="text-sm font-medium text-slate-600">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;