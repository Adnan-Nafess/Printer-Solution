import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  Wifi,
  FileText,
  Droplets,
  Settings,
  TriangleAlert,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

const guides = [
  {
    icon: Printer,
    category: "Printing",
    title: "Printer Not Printing",
    description:
      "A printer can appear ready but still fail to print a document. The problem may be related to a stuck print queue, incorrect printer selection, offline status, connection problems or the printer itself needing attention.",
    image:
      "https://media.istockphoto.com/id/826385060/photo/compact-printer-isolated.jpg?s=612x612&w=0&k=20&c=SKq9HjuZAOZs1dLlHnPMoXnqp-bwQfoI4zuaZ0OzqCM=",
    steps: [
      "Make sure the printer is switched on and does not show an error or warning.",
      "Check that the correct printer is selected when sending the document.",
      "Look at the print queue and remove documents that are stuck or paused.",
      "Check whether the printer is shown as offline or unavailable on your device.",
      "Make sure paper is loaded and the printer does not report an ink, toner or paper problem.",
      "Restart the printer and try a small test document again.",
    ],
  },

  {
    icon: Wifi,
    category: "Connection",
    title: "Printer Wi-Fi Connection",
    description:
      "Wireless printers need a working connection to the same network used by the computer or phone. If the printer disappears from your device, shows offline or cannot be found during setup, the network connection is one of the first things to check.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    steps: [
      "Check that Wi-Fi is enabled on the printer.",
      "Confirm that your computer or phone is connected to the intended Wi-Fi network.",
      "Check whether the printer is connected to the same network rather than a different network.",
      "If the wireless signal is weak, move the printer closer to the router where practical.",
      "Restart the printer and, if necessary, restart the router before trying again.",
      "If the printer was previously connected to another network, reconnect it using the printer's network setup process.",
    ],
  },

  {
    icon: FileText,
    category: "Paper",
    title: "Paper Jam or Paper Not Feeding",
    description:
      "Paper problems are not limited to visible jams. A printer can also fail to pick up paper because the stack is damaged, incorrectly positioned, overloaded or unsuitable for the printer. A printer may sometimes report a jam even when very little paper is visible.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85",
    steps: [
      "Stop the print job and check the printer for a paper-jam message.",
      "Remove loose paper from the input tray and check for bent, torn or damaged sheets.",
      "Look carefully inside the accessible paper path for stuck paper or foreign material.",
      "If paper is jammed, remove it slowly and carefully rather than pulling aggressively.",
      "Make sure the paper guides are positioned against the paper without pressing too tightly.",
      "Do not overload the tray and use paper that matches the printer's supported size and type.",
      "Reload the paper neatly and try printing again.",
    ],
  },

  {
    icon: Droplets,
    category: "Ink & Toner",
    title: "Ink or Toner Problem",
    description:
      "Ink and toner problems can appear as faded printing, missing colours, blank areas, streaks or warning messages. A cartridge can also be reported as empty, missing or not recognized even when it has recently been installed.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=900&q=85",
    steps: [
      "Check the ink or toner level shown by the printer or its software.",
      "Make sure the cartridge is installed in the correct position and is seated properly.",
      "If a new cartridge was installed, check that all required protective packaging or tape has been removed.",
      "If the printer supports cleaning or print-quality tools, run the appropriate maintenance check.",
      "Print a test or quality page to see whether specific colours or sections are missing.",
      "If the cartridge is empty, damaged or repeatedly not recognized, replacement may be necessary.",
    ],
  },

  {
    icon: Settings,
    category: "Setup",
    title: "Setting Up a New Printer",
    description:
      "Setting up a printer involves more than connecting the power cable. You may need to install the supplied ink or toner, load paper, connect the printer to your computer or network and confirm that the device is ready to print.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    steps: [
      "Place the printer on a stable, suitable surface with enough room for paper and access to the printer.",
      "Connect the printer to power and complete the initial startup instructions.",
      "Install the supplied ink cartridges or toner according to the printer's instructions.",
      "Load the correct paper size and adjust the paper guides.",
      "Connect the printer to your computer, phone or Wi-Fi network using the available setup method.",
      "Check that the printer appears correctly on the device you want to print from.",
      "Print a test page or small document to confirm that the setup is complete.",
    ],
  },

  {
    icon: TriangleAlert,
    category: "Warnings",
    title: "Printer Warning or Error",
    description:
      "A printer warning usually means that something needs attention before printing can continue. The message may relate to paper, ink or toner, an open cover, a connection issue, or another printer condition.",
    image:
      "https://geeksonsite.com/wp-content/uploads/2026/08/printer-paper-jam-error.jpg",
    steps: [
      "Read the complete warning or error message shown on the printer display or computer.",
      "Check whether the message refers to paper, ink, toner, a cover, or the printer connection.",
      "Make sure all printer covers and access doors are properly closed.",
      "Check the paper tray and cartridge or toner area if the warning points to supplies.",
      "Restart the printer if the message appears temporary and the printer allows a restart.",
      "If a specific error code remains, check the information for your printer model to understand what it means.",
    ],
  },
];

const Guides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    if (!selectedGuide) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedGuide(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedGuide]);

  return (
    <>
      <section id="guides" className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Printer Guides
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Helpful Guides for Common Issues
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore simple guides covering the problems people commonly face
              with their printers.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => {
              const Icon = guide.icon;

              return (
                <motion.article
                  key={guide.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group flex h-full min-h-[560px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-slate-200/70"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 backdrop-blur">
                      {guide.category}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[310px] flex-col p-7">
                    <h3 className="text-xl font-bold leading-7 text-slate-900">
                      {guide.title}
                    </h3>

                    <p className="mt-4 min-h-[120px] text-[15px] leading-7 text-slate-600">
                      {guide.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedGuide(guide)}
                      className="group/button mt-auto inline-flex w-fit items-center gap-2 pt-6 font-semibold text-blue-600"
                    >
                      Read guide
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGuide(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[82vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="border-b border-slate-100 p-7 pb-5">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  <X size={19} />
                </button>

                <div className="flex items-start gap-4 pr-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <selectedGuide.icon size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                      Solution Guide
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      {selectedGuide.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {selectedGuide.description}
                </p>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto px-7 py-6">
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                  Things to check
                </p>

                <div className="space-y-3">
                  {selectedGuide.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <p className="text-sm leading-6 text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t border-slate-100 bg-white p-5">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Guides;
