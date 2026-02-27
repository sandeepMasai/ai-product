import { useEffect, useMemo, useState } from "react";

const STOCK_NEWS_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2u74b-P16xwbjpGKex421Tmy1DXSb7RTJA&s";

function Dashboard() {
  const [activeNews, setActiveNews] = useState(0);

  const newsItems = useMemo(
    () => [
      {
        title: "LAMF flows hit new high",
        body: "More users are choosing LAMF over redeeming as awareness improves.",
      },
      {
        title: "Turn SIP portfolios into liquidity",
        body: "Investors are pledging long‑running SIP portfolios for big-ticket goals.",
      },
      {
        title: "Same‑day disbursal becomes the norm",
        body: "Median time from application to disbursal is now under 6 hours.",
      },
      {
        title: "RBI guidance shapes digital lending",
        body: "Guidelines continue to emphasise consent, transparency, and lien clarity.",
      },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(
      () => setActiveNews((idx) => (idx + 1) % newsItems.length),
      6000
    );
    return () => clearInterval(id);
  }, [newsItems.length]);

  return (
    <div className="space-y-10">
      {/* Hero / overview */}
      <section className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-[0_0_80px_-40px_rgba(16,185,129,1)] md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Loan Against Mutual Funds · LAMF
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Secure liquidity without selling your investments.
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-[15px]">
              Use Loan Against Mutual Funds to unlock quick funds while your
              mutual fund units stay invested. Lower rates, interest‑only
              payments, and a fully digital journey.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
                Ownership retained
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                RBI‑regulated partners
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Interest‑only servicing
              </span>
            </div>
          </div>

          <div className="grid w-full max-w-xs grid-cols-2 gap-3 text-xs text-slate-100 sm:max-w-sm">
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-200">
                Rates from
              </p>
              <p className="mt-1 text-xl font-semibold text-emerald-300">
                10.20% p.a.
              </p>
              <p className="mt-1 text-[11px] text-emerald-100/80">
                Typically lower than unsecured loans.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-300">
                Eligible limit
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-50">Up to 65% LTV</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Based on fund type and partner policy.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 col-span-2">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-300">
                Same‑day disbursal
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Simple, guided flow from importing holdings to e‑signing and
                receiving funds in your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              How it works
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              From holdings to disbursal in a few steps.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-400 md:text-sm">
            This dashboard outlines the LAMF journey your users would follow,
            from importing mutual fund holdings to receiving liquidity against
            their portfolio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Step 1
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              Import MF holdings
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Verify PAN and registered mobile to fetch mutual fund units from
              CAMS/Karvy or your demat.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Step 2
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              Choose amount & pledge
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              See your eligible limit, pick an amount within LTV bands, and
              confirm which schemes to pledge.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Step 3
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              Link bank & disbursal
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Set up e‑mandate for interest servicing, sign digitally, and track
              lender review and disbursal.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-7 md:grid-cols-[1.4fr,1fr] md:px-8">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            Illustrative LAMF snapshot
          </h3>
          <p className="text-xs text-slate-400 md:text-sm">
            Show a simple calculator where users can explore eligible limits and
            monthly interest without committing to a loan.
          </p>
          <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">Total MF holdings (₹)</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                5,00,000
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">Eligible LTV</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">65%</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">Chosen amount (₹)</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                3,00,000
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-4 text-xs text-emerald-50 md:px-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Estimated interest
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-emerald-200">
              ₹2,188
            </span>
            <span className="text-[11px] text-emerald-100/80">
              /month · interest‑only
            </span>
          </div>
          <p className="text-[11px] text-emerald-100/80">
            Illustration for a 12‑month tenure at 10.5% p.a. Exact terms depend
            on the lending partner.
          </p>
        </div>
      </section>


      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Why choose LAMF
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Key benefits to highlight in your product experience.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Stay invested, still borrow
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Units remain in the customer&apos;s name with a lien. They keep
              earning returns while accessing liquidity.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Lower cost than unsecured loans
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Because the loan is backed by MF units, rates are typically more
              competitive than personal loans.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Interest‑only servicing
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Many journeys support interest‑only EMIs, so customers can prepay
              or top up flexibly as cash flows improve.
            </p>
          </div>
        </div>
      </section>


      <section className="space-y-5 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-8 md:px-8">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Trending news
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              What&apos;s moving LAMF and markets this week.
            </h2>
          </div>

          <p className="max-w-md text-xs text-slate-400 md:text-sm">
            Use this section to surface quick, scrollable headlines that keep
            users informed while they explore product flows.
          </p>
        </div>

        <div className="mt-6 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeNews * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <article
                key={item.title}
                className="min-w-full shrink-0 sm:min-w-1/2 md:min-w-[50%] lg:min-w-[25%]"
              >
                <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 px-5 py-5">
                  <div className="mb-4 flex items-center justify-center">
                    <img
                      src={STOCK_NEWS_IMAGE_URL}
                      alt="Trending stock visual"
                      className="h-[120px] w-auto rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="text-center text-sm font-semibold text-slate-50 md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-center text-xs leading-relaxed text-slate-300 md:text-sm">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveNews(idx)}
              className={`h-1.5 rounded-full transition-all ${activeNews === idx ? "w-6 bg-emerald-400" : "w-2 bg-slate-600"
                }`}
            />
          ))}
        </div>
      </section>


      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            See how people like you used LAMF
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
            Real examples from satisfied borrowers.
          </h2>
          <p className="max-w-2xl text-xs text-slate-400 md:text-sm">
            Use persona‑style stories to explain when LAMF makes sense and how
            it keeps long‑term investments intact while solving short‑term needs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <article className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Salaried professional
            </div>
            <p className="text-sm font-semibold text-slate-50">
              Medical advance without selling investments
            </p>
            <dl className="mt-3 space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Need</dt>
                <dd className="font-medium text-slate-100">
                  ₹3,00,000 for medical advance
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Holdings</dt>
                <dd className="text-right">
                  Equity + hybrid funds worth ₹6,20,000
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Eligible</dt>
                <dd className="text-right">₹3,72,000 (60% LTV)</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Timeline</dt>
                <dd className="text-right">
                  Application 10 mins, disbursal same day
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Repayment</dt>
                <dd className="text-right">
                  Interest‑only ₹3,100/month; cleared in 5 months
                </dd>
              </div>
            </dl>
            <div className="mt-3 space-y-1.5 rounded-xl bg-slate-900/90 p-3 text-[11px] text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Before:</span>{" "}
                Funds locked for long‑term goals.
              </p>
              <p>
                <span className="font-semibold text-slate-100">After:</span> Funds
                still invested + cash in bank.
              </p>
            </div>
            <p className="mt-3 text-xs italic text-emerald-200">
              “I kept earning returns while clearing hospital bills.”
            </p>
          </article>


          <article className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Business owner
            </div>
            <p className="text-sm font-semibold text-slate-50">
              Bridge inventory cycles with flexible credit
            </p>
            <dl className="mt-3 space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Need</dt>
                <dd className="font-medium text-slate-100">
                  ₹12,00,000 to bridge inventory cycle
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Holdings</dt>
                <dd className="text-right">
                  Debt + liquid funds worth ₹20,00,000
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Eligible</dt>
                <dd className="text-right">
                  Drew ₹10,00,000 first, topped up by ₹2,00,000 later
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Timeline</dt>
                <dd className="text-right">
                  Partial withdrawals, no prepayment fee
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Repayment</dt>
                <dd className="text-right">
                  Reused line twice in a quarter
                </dd>
              </div>
            </dl>
            <div className="mt-3 space-y-1.5 rounded-xl bg-slate-900/90 p-3 text-[11px] text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Before:</span>{" "}
                Inventory cash‑flow gap.
              </p>
              <p>
                <span className="font-semibold text-slate-100">After:</span>{" "}
                Flexible credit line + funds still growing.
              </p>
            </div>
            <p className="mt-3 text-xs italic text-emerald-200">
              “I borrow only what I need and repay as customers pay me.”
            </p>
          </article>


          <article className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              HUF education fund
            </div>
            <p className="text-sm font-semibold text-slate-50">
              Pay overseas fees, keep portfolio intact
            </p>
            <dl className="mt-3 space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Need</dt>
                <dd className="font-medium text-slate-100">
                  ₹35,00,000 fees for two siblings abroad
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Holdings</dt>
                <dd className="text-right">Diversified MF portfolio</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Eligible</dt>
                <dd className="text-right">₹45,00,000 approved</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Timeline</dt>
                <dd className="text-right">
                  Assisted onboarding, document pick‑up
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Repayment</dt>
                <dd className="text-right">
                  Dedicated RM, lien release after closure
                </dd>
              </div>
            </dl>
            <div className="mt-3 space-y-1.5 rounded-xl bg-slate-900/90 p-3 text-[11px] text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Before:</span>{" "}
                Large education fees due at once.
              </p>
              <p>
                <span className="font-semibold text-slate-100">After:</span>{" "}
                HUF portfolio stayed invested while fees were paid on time.
              </p>
            </div>
            <p className="mt-3 text-xs italic text-emerald-200">
              “The HUF portfolio stayed invested for long‑term goals.”
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

