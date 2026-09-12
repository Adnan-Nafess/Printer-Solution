const RefundPolicy = () => {
  return (
    <div className="bg-slate-50">

      {/* =========================
          HERO
      ========================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">

          <div className="mx-auto inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Refund Policy
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Refund & Cancellation
            <span className="block text-blue-600">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            This page explains how refunds and cancellations are handled
            when using our website and its services.
          </p>

        </div>
      </section>

      {/* =========================
          CONTENT
      ========================== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">

          <div className="space-y-8">

            {/* 01 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                1. About This Policy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                This Refund Policy explains whether refunds or cancellations
                may apply to any paid products or services associated with
                this website. The website primarily provides general
                educational and informational content about printers and
                everyday printing topics.
              </p>
            </article>

            {/* 02 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                2. Educational Website Content
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                The information available through this website is provided
                for general educational purposes. Accessing or reading the
                website's general content does not involve a purchase that
                would normally require a refund.
              </p>
            </article>

            {/* 03 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                3. Paid Products or Services
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If paid products or services are introduced in the future,
                the applicable refund terms will be clearly presented before
                a purchase is completed. Those terms may include information
                about eligibility, cancellation periods and applicable
                conditions.
              </p>
            </article>

            {/* 04 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                4. Refund Eligibility
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Where a specific paid product or service includes a refund
                option, eligibility will depend on the terms shown at the
                time of purchase. Requests that do not meet the applicable
                conditions may not qualify for a refund.
              </p>
            </article>

            {/* 05 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                5. Cancellation Requests
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If cancellation is available for a particular paid service,
                the cancellation instructions provided with that service
                should be followed. Cancellation does not automatically
                guarantee a refund unless the applicable terms provide for
                one.
              </p>
            </article>

            {/* 06 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                6. Changes to This Policy
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We may update this Refund Policy when our website,
                offerings or applicable requirements change. Any updated
                version will be published on this page.
              </p>
            </article>

            {/* 07 */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-xl font-bold text-slate-900">
                7. Contact Information
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If you have a question about a refund or cancellation
                relating to a specific paid product or service, you can
                contact us using the contact information provided on the
                website.
              </p>

              <p className="mt-4 font-semibold text-blue-600">
                admin@12printer.online
              </p>
            </article>

          </div>

        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;