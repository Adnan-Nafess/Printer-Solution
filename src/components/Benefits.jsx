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
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        
        {/* =========================
            IMAGE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/30">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1100&q=85"
                alt="Laptop in a modern workspace"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Less Searching,
            <span className="block text-blue-600">
              More Understanding
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our guides are designed to make common printer problems
            easier to understand, with simple information you can
            follow at your own pace.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="min-h-[185px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;