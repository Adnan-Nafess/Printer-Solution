import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
        
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Simple Printer Learning Guides
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
            Get Your Printer
            <span className="block text-blue-600">
              Working Again
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Easy-to-follow guides for common printer problems.
            Find clear information about printing, connections,
            paper, ink and more.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("problems")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Find Your Problem

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("guides")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
            >
              Browse Guides
            </button>
          </div>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={17}
                className="text-emerald-500"
              />
              Easy instructions
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={17}
                className="text-emerald-500"
              />
              Clear explanations
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={17}
                className="text-emerald-500"
              />
              Helpful guides
            </div>
          </div>
        </motion.div>

        {/* =========================
            SIMPLE IMAGE
        ========================== */}
        <motion.div
  initial={{
    opacity: 0,
    x: 35,
    scale: 0.95,
  }}
  animate={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    delay: 0.15,
  }}
  className="relative"
>
  <div className="mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/40">
    <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
      <img
        src="https://miro.medium.com/1*9_V_7lAKI7HGEyzDlgjs_g.jpeg"
        alt="Modern printer"
        className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
      />
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;