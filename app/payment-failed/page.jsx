"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Zap, AlertTriangle, AlertCircle } from "lucide-react";

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const transactionId =
    searchParams.get("transaction_id") || searchParams.get("id");

  const supportTelegramUrl = transactionId
    ? `https://t.me/jovia_support?text=${encodeURIComponent(
        `Hello Jovia Support,\n\nMy payment failed. Here is my Transaction ID:\n• Transaction ID: ${transactionId}\n\nPlease help me resolve this.`
      )}`
    : "https://t.me/jovia_support";

  return (
    <>
      <div className="mt-7 space-y-3 rounded-3xl border border-red-500/20 bg-[#0a0518]/90 p-5 text-left sm:p-6 backdrop-blur-xl shadow-2xl">
        {transactionId && (
          <div className="flex justify-between items-center text-sm pb-2 border-b border-red-500/20">
            <span className="text-slate-400 font-medium">Transaction ID</span>
            <span className="font-mono text-red-300 font-bold">
              {transactionId}
            </span>
          </div>
        )}

        <p className="flex items-start gap-3 text-sm text-slate-200">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
            <AlertCircle className="size-3" />
          </span>
          <span>
            <strong>Verification Failed</strong> — Payment gateway could not
            confirm funds
          </span>
        </p>
        <p className="flex items-start gap-3 text-sm text-slate-200">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
            <AlertCircle className="size-3" />
          </span>
          <span>
            <strong>Common Issues</strong> — Check card balance or network
            connectivity
          </span>
        </p>
        <p className="flex items-start gap-3 text-sm text-slate-200">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
            <AlertCircle className="size-3" />
          </span>
          <span>
            <strong>Activation Blocked</strong> — Try standard or boosted tier
            again
          </span>
        </p>
      </div>

      <div className="mt-7 space-y-3">
        <Link
          href="https://jovianetwork.ng/register"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] text-base font-bold text-[#05010d] transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-red-900/30 active:scale-[0.99] sm:h-[3.25rem]"
        >
          Try Activation Again
          <Zap className="h-5 w-5" />
        </Link>

        <Link
          href={supportTelegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 text-base font-semibold text-red-200 transition-all duration-300 hover:bg-red-500/20 sm:h-[3.25rem]"
        >
          Report Issue to Jovia Support
        </Link>
      </div>
    </>
  );
}

export default function PaymentFailed() {
  return (
    <main className="relative min-h-screen bg-[#05010d] text-white flex flex-col justify-center py-20 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex size-2.5 items-center justify-center rounded-full bg-[#E2C876]"></span>
            <span className="flex size-2.5 items-center justify-center rounded-full bg-[#E2C876]"></span>
            <span className="flex size-2.5 items-center justify-center rounded-full bg-red-600/50"></span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-[#E2C876] via-[#C726D4] to-red-600 w-full transition-all duration-500 ease-out" />
          </div>
        </div>

        <div className="mx-auto max-w-md text-center py-4 sm:py-6">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            Payment Status: Unsuccessful
          </div>

          <h1 className="text-4xl font-black text-white sm:text-5xl leading-tight">
            Transaction{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Interrupted.
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
            We were unable to verify your membership activation payment. Please
            review the details below.
          </p>

          <Suspense fallback={<p className="mt-5 text-slate-400">Loading...</p>}>
            <PaymentFailedContent />
          </Suspense>

          <p className="mt-5 font-mono text-xs uppercase tracking-widest text-slate-400">
            Jovia Network Ecosystem · Secure Verification
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
            Unverified attempts will be automatically flagged by our secure
            monitoring partner.
          </p>
        </div>
      </div>
    </main>
  );
}