import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
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
            {/* Small label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              <FileText size={16} />
              Terms & Conditions
            </span>

            {/* Main heading */}
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              Terms of
              <span className="block text-blue-600">
                Website Use
              </span>
            </h1>

            {/* Intro */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              These Terms & Conditions describe the general rules that
              apply when you access and use this website. By using the
              website, you agree to use its content and features in a
              responsible and lawful manner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          TERMS CONTENT
      ========================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-14">

            {/* 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                1. Agreement to These Terms
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                By accessing or using this website, you acknowledge
                that you have read and understood these Terms &
                Conditions and agree to follow them while using the
                website.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                If you do not agree with these terms, you should
                discontinue use of the website. Continued use of the
                website after changes are published may be considered
                acceptance of the updated terms.
              </p>
            </motion.section>

            {/* 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                2. About the Website
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                This website provides educational and informational
                content related to everyday printer use. Topics may
                include printing, printer setup, wireless connections,
                paper handling, ink and toner, printer settings,
                maintenance, and common printer situations.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                The website is intended to make general printer
                information easier to understand and explore. It is not
                intended to replace instructions, documentation, or
                recommendations provided specifically for your printer
                model.
              </p>
            </motion.section>

            {/* 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                3. Use of Website Content
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                The information published on this website is provided
                for general educational purposes. You may read and use
                the information for your own personal or ordinary
                informational needs.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                You should use reasonable judgment when applying any
                information to your own printer, computer, network, or
                other equipment. Different devices and printer models
                may have different menus, features, requirements, and
                procedures.
              </p>
            </motion.section>

            {/* 4 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                4. Responsible Use
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                When using this website, visitors are expected to use
                the website responsibly and in accordance with
                applicable laws.
              </p>

              <ul className="mt-5 list-disc space-y-4 pl-7 text-[16px] leading-7 text-slate-600">
                <li>
                  Use the website only for lawful and legitimate
                  purposes.
                </li>

                <li>
                  Do not attempt to disrupt, damage, or interfere with
                  the website or its normal operation.
                </li>

                <li>
                  Do not use the website to distribute harmful,
                  misleading, or unlawful material.
                </li>

                <li>
                  Do not attempt to gain unauthorized access to
                  website systems or information.
                </li>

                <li>
                  Respect the rights of other visitors and website
                  users.
                </li>
              </ul>
            </motion.section>

            {/* 5 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                5. Accuracy of Information
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                We make reasonable efforts to provide useful and
                understandable information. However, printer
                technology, software, hardware, operating systems,
                network settings, and manufacturer instructions may
                change over time.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                For this reason, information published on the website
                should be treated as general educational guidance.
                Information that applies to one printer model may not
                necessarily apply to another model.
              </p>
            </motion.section>

            {/* 6 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                6. Intellectual Property
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Unless otherwise stated, the original text, structure,
                design elements, graphics, and other materials created
                for this website are protected by applicable
                intellectual property laws.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Website content should not be reproduced, republished,
                substantially copied, or distributed for commercial
                purposes without appropriate permission, unless such
                use is permitted by applicable law.
              </p>
            </motion.section>

            {/* 7 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                7. External Resources
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Some articles may refer to external websites,
                documentation, tools, or other resources that may
                provide additional information.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                External websites are operated independently from this
                website. We do not control their content, availability,
                security, or privacy practices, and visiting an external
                website is subject to that website's own terms and
                policies.
              </p>
            </motion.section>

            {/* 8 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                8. Educational Disclaimer
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                The content available on this website is intended for
                general educational and informational purposes. It is
                not a guarantee that a particular printer problem will
                be resolved by following the information provided.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Before making changes to hardware, software, network
                settings, printer components, or other equipment,
                visitors should consider the instructions applicable to
                their specific device.
              </p>
            </motion.section>

            {/* 9 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                9. Limitation of Liability
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                To the extent permitted by applicable law, this website
                and its content are provided without guarantees that
                the information will be suitable for every individual
                situation, printer model, device, or configuration.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                We are not responsible for losses, damage, equipment
                problems, interruptions, or other consequences that may
                result from relying on information published on the
                website, except where such limitation is not permitted
                by applicable law.
              </p>
            </motion.section>

            {/* 10 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                10. Website Availability
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                We aim to keep the website available and functioning
                properly, but continuous or uninterrupted availability
                cannot be guaranteed.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                The website may occasionally be unavailable because of
                maintenance, updates, hosting issues, technical
                problems, or circumstances outside our reasonable
                control.
              </p>
            </motion.section>

            {/* 11 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                11. Changes to These Terms
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                These Terms & Conditions may be updated when the
                website, its features, content, or applicable
                requirements change.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                When changes are made, the updated version will be
                published on this page. Visitors should review the
                terms periodically to remain aware of the current
                conditions of website use.
              </p>
            </motion.section>

            {/* 12 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                12. Applicable Law
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                These Terms & Conditions shall be interpreted in
                accordance with the applicable laws of India, subject
                to any mandatory legal provisions that may apply.
              </p>
            </motion.section>

            {/* 13 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                13. Contact Information
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                If you have questions about these Terms & Conditions,
                you can contact us through the website's Contact page.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Email:{" "}
                <a
                  href="mailto:mohdadnan3508@gmail.com"
                  className="font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  mohdadnan3508@gmail.com
                </a>
              </p> */}
            </motion.section>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;