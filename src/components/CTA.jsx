import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";

const CTA = () => {
  const goToGuides = () => {
    document.getElementById("guides")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-16 shadow-2xl shadow-blue-600/20 md:px-14 md:py-20"
        >
          {/* Background decorations */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <BookOpenCheck size={17} />
                Helpful Printer Guides
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Having a Printer Problem?
                <span className="block text-blue-100">
                  Start With the Right Guide.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
                Find a guide that matches your problem and follow simple
                information to understand what you can check.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  Simple information
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  Common printer issues
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  Easy-to-follow guides
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={goToGuides}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-600 shadow-xl transition hover:bg-blue-50"
            >
              Browse Printer Guides
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;