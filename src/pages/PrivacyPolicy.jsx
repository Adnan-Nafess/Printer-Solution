import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
              <ShieldCheck size={16} />
              Privacy Policy
            </span>

            {/* Main heading */}
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              Your Privacy Is
              <span className="block text-blue-600">
                Important to Us
              </span>
            </h1>

            {/* Intro */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              This Privacy Policy explains how information may be
              handled when you visit and use this website. Our aim is
              to provide clear information about the types of data that
              may be received, how it may be used, and the choices
              available to visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          POLICY CONTENT
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
                1. About This Policy
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                This Privacy Policy applies to this website and
                describes the general approach we take toward
                information associated with visitors and website
                activity. The website provides educational information
                about everyday printer use, printing topics, settings,
                connections, supplies, and related subjects.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                By continuing to use the website, you acknowledge the
                practices described in this policy. If you do not agree
                with any part of this policy, you may choose not to use
                the website.
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
                2. Information You May Provide
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Most areas of the website can be viewed without
                submitting personal information. However, if you
                voluntarily contact us through the website, we may
                receive information that you choose to provide.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                This may include your name, email address, subject,
                message, and any other information you decide to include
                in your communication.
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
                3. Automatically Collected Information
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                When you visit a website, certain technical details
                may be made available through your browser or hosting
                environment. Depending on the services used by the
                website, this may include information such as browser
                type, device characteristics, general location,
                referring page, pages viewed, and basic usage details.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Such information may be used for understanding website
                performance, maintaining functionality, identifying
                technical issues, and improving the overall experience.
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
                4. How We Use Information
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Information associated with website use may be used
                for purposes such as:
              </p>

              <ul className="mt-5 list-disc space-y-4 pl-7 text-[16px] leading-7 text-slate-600">
                <li>
                  Responding to questions, feedback, and messages
                  submitted through the contact form.
                </li>
                <li>
                  Maintaining and improving the functionality of the
                  website.
                </li>
                <li>
                  Understanding which areas of the website are useful
                  to visitors.
                </li>
                <li>
                  Identifying and resolving website errors or
                  performance issues.
                </li>
                <li>
                  Improving and expanding the educational content
                  available on the website.
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
                5. Contact Form Information
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                If you use the contact form, the information you submit
                is transmitted through our form-processing service so
                that your message can be received and handled.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                We use the information provided through the form only
                for legitimate communication related to your message,
                such as responding to a question, reviewing feedback,
                or considering a topic suggestion.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Please avoid submitting passwords, payment information,
                government identification numbers, or other sensitive
                information through the contact form.
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
                6. Cookies and Similar Technologies
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                The website or services used by the website may use
                cookies or similar technologies for functionality,
                security, preferences, or website measurement.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Cookies are small pieces of information stored by a
                website in your browser. You can usually control or
                remove cookies through the settings available in your
                browser.
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
                7. Website Analytics
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                If analytics or website measurement tools are used,
                they may collect general information about how visitors
                interact with the website. This can help us understand
                traffic patterns, identify frequently viewed content,
                and improve the usefulness of the website.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Analytics information is generally intended to help
                evaluate website usage rather than to identify visitors
                personally.
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
                8. Third-Party Services
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Some website functions may depend on services provided
                by third parties. For example, the contact form uses a
                third-party form-processing service to receive and
                process submitted messages.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Third-party services may process information according
                to their own privacy policies and terms. We recommend
                reviewing the privacy information of any third-party
                service you interact with if you would like to understand
                how that service handles information.
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
                9. Information Security
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                We take reasonable steps to protect information
                associated with the website and communications submitted
                through it. However, no website, online transmission,
                or electronic storage system can be guaranteed to be
                completely secure.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Visitors should therefore avoid sending confidential
                or highly sensitive information through publicly
                accessible website forms.
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
                10. Data Retention
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Information submitted through the contact form may be
                retained for as long as reasonably necessary to review
                the communication, respond to the sender, maintain
                records of correspondence, or meet legitimate
                operational requirements.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Retention periods may also depend on the third-party
                services used to process or store submitted information.
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
                11. Children's Privacy
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                This website is intended for a general audience. We do
                not knowingly seek to collect personal information from
                children through the website.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                If a parent or guardian believes that a child has
                provided personal information through the website,
                they may contact us so that the matter can be reviewed.
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
                12. External Websites
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                Our articles may occasionally refer readers to external
                websites or resources for additional information.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Once you leave this website and visit an external
                website, that website's own privacy policy and terms
                will apply. We are not responsible for the privacy
                practices, content, or security of external websites.
              </p>
            </motion.section>

            {/* 13 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                13. Changes to This Policy
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-600">
                This Privacy Policy may be updated from time to time
                when website features, services, or information
                practices change.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-slate-600">
                Any updated version will be published on this page.
                Visitors are encouraged to review this page periodically
                to remain informed about how information may be handled.
              </p>
            </motion.section>

            {/* 14 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

            </motion.section>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;