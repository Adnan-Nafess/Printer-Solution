import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const purposeCards = [
  {
    icon: BookOpen,
    title: "Educational Information",
    description:
      "We create original articles that explain everyday printer topics, basic functions, common settings, and familiar printing situations in a way that is easy to read and understand.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description:
      "Our content focuses on useful printer knowledge that people can apply to everyday situations, including printing, connectivity, paper handling, ink and toner, setup, and routine care.",
  },
  {
    icon: Lightbulb,
    title: "Clear Language",
    description:
      "Printer-related information can sometimes contain unfamiliar terms. We aim to explain these subjects in straightforward language so readers can understand the topic without unnecessary complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Resource",
    description:
      "This website is an independent educational resource focused on printer-related information. Our content is intended to help readers learn and understand common printing topics.",
  },
];

const About = () => {
  return (
    <main className="bg-white">

      {/* =========================================
          ABOUT HERO
      ========================================== */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Soft background shapes */}
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Small label */}
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About Our Website
            </span>

            {/* Heading */}
            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              Helping Readers Better Understand
              <span className="block text-blue-600">
                Everyday Printer Topics
              </span>
            </h1>

            {/* Main paragraph */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              This website is an educational resource created to share
              easy-to-understand information about everyday printer use,
              printing basics, wireless connections, paper handling, ink and
              toner, maintenance, and other common printing topics.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Our goal is to present useful information in simple language,
              giving readers a convenient place to learn about printers and
              become more familiar with the things they use every day.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =========================================
          INTRODUCTION WITH IMAGE
      ========================================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[1.8rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1100&q=85"
              alt="Printer in a modern workspace"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Learning Through Clear and
              <span className="block">
                Practical Guidance
              </span>
            </h2>

            <div className="mt-7 space-y-6 text-[16px] leading-8 text-slate-600">

              <p>
                Modern printers offer many useful features, but everyday
                printing can still become confusing when a setting, message,
                connection, or printer function does not behave as expected.
                Understanding the basics can make these situations much easier
                to approach.
              </p>

              <p>
                Our articles explain common printer-related subjects using
                straightforward language. Readers can explore topics such as
                printing, wireless connectivity, paper loading, ink and toner,
                printer setup, and routine maintenance.
              </p>

              <p>
                The information is written with an educational approach.
                Instead of assuming that readers already know printer
                terminology, we explain the subject from the perspective of
                someone who simply wants to understand how a printer works in
                everyday use.
              </p>

              <p>
                Whether you use a printer at home, in an office, or in another
                everyday environment, our aim is to make useful printer
                information easier to find, read, and understand.
              </p>

            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================
          OUR PURPOSE
      ========================================== */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Purpose
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We believe learning should be simple, useful, and easy to
              follow. Our content is created to explain common printer topics
              in a clear and informative way for everyday readers.
            </p>
          </motion.div>


          {/* Four cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {purposeCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="min-h-[350px] rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    {card.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =========================================
          CONTINUING TO LEARN
      ========================================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Continuing to Learn
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We plan to continue expanding our collection of educational
              articles to cover more aspects of everyday printer use. As
              printing technology and the way people use printers continue to
              change, there are always new topics worth explaining.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Future content may explore additional subjects related to
              printing, wireless connections, document handling, print
              quality, printer settings, supplies, maintenance, and other
              common situations encountered by home and office users.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our approach will remain focused on making information practical
              and understandable, so readers can explore topics at their own
              pace and build a better understanding of everyday printing.
            </p>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default About;