import { motion } from "framer-motion";
import {
  Printer,
  Wifi,
  FileText,
  Droplets,
  Settings,
  TriangleAlert,
  ArrowUpRight,
} from "lucide-react";

const problems = [
  {
    icon: Printer,
    title: "Printer Not Printing",
    description:
      "The printer is turned on, but nothing comes out when you send a document. This can happen when a print job is stuck, the wrong printer is selected, the printer is paused or the device is showing an offline status.",
  },
  {
    icon: Wifi,
    title: "Connection Problems",
    description:
      "Your computer or phone may not be able to find the printer, or the printer may keep showing as offline. Common things to check include the Wi-Fi connection, network selection and whether both devices are connected to the same network.",
  },
  {
    icon: FileText,
    title: "Paper Problems",
    description:
      "Paper may get stuck inside the printer, fail to feed from the tray or appear as an 'out of paper' message even when paper is loaded. Paper that is bent, damaged, overloaded or incorrectly positioned can also cause feeding problems.",
  },
  {
    icon: Droplets,
    title: "Ink & Toner Issues",
    description:
      "Prints may come out faded, incomplete, streaked or with missing colours when ink or toner is low or not working correctly. A cartridge may also need to be checked if the printer does not recognize it or reports an ink-related warning.",
  },
  {
    icon: Settings,
    title: "Printer Setup",
    description:
      "A new printer normally needs to be connected, supplied with the correct paper and ink or toner, and configured with the device you want to print from. A proper setup can also include checking the printer's network connection and printing a test page.",
  },
  {
    icon: TriangleAlert,
    title: "Error Messages",
    description:
      "Printers can display warnings for paper, ink, open covers, connection problems and other conditions. Understanding the message first is important because the correct next step depends on what the printer is reporting.",
  },
];

const Problems = () => {
  const scrollToGuides = () => {
    document.getElementById("guides")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="problems" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
            Common Problems
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            What Are You Having Trouble With?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose the problem that best matches what you're experiencing and
            find helpful information.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/70"
              >
                {/* top decoration */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 transition duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-7 text-xl font-bold text-slate-900">
                  {problem.title}
                </h3>

                <p className="relative mt-4 min-h-[150px] leading-7 text-slate-600">
                  {problem.description}
                </p>

                <button
                  type="button"
                  onClick={scrollToGuides}
                  className="group/link relative mt-auto inline-flex w-fit items-center gap-2 pt-6 font-semibold text-blue-600"
                >
                  Learn more
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
