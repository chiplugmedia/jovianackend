"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const transactionId =
    searchParams.get("transaction_id") || searchParams.get("id");

  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!transactionId) {
      setLoading(false);
      return;
    }

    const fetchTransaction = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/transactions/${transactionId}`);

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Server API Error Response:", errorData);
          throw new Error(errorData.error || "Transaction not found");
        }

        const data = await response.json();
        setPaymentDetails(data);
      } catch (err) {
        console.error("Error fetching transaction details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [transactionId]);

  const supportTelegramUrl = transactionId
    ? `https://t.me/jovia_support?text=${encodeURIComponent(
        `Hello Jovia Support,\n\nI completed a payment with the following details:\n\n• Plan: ${
          paymentDetails?.plan || "N/A"
        }\n• Transaction ID: ${transactionId}\n• Amount: ${
          paymentDetails?.amount || "N/A"
        }`,
      )}`
    : "https://t.me/jovia_support";

  if (loading) {
    return (
      <div className="py-10 text-center text-slate-400 font-medium animate-pulse">
        Verifying payment status...
      </div>
    );
  }

  if (error || !transactionId) {
    return (
      <div className="py-10 text-center text-emerald-400 font-medium">
        Unable to load transaction details. Please check your Transaction ID or
        contact support.
      </div>
    );
  }

  return (
    <>
      <div className="mt-7 space-y-3 rounded-3xl border border-emerald-500/20 bg-[#0a0518]/90 p-5 text-left backdrop-blur-xl shadow-2xl sm:p-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
          Transaction Summary
        </p>

        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-sm">
          <span className="font-medium text-slate-400">Active Plan</span>
          <span className="font-semibold text-white">
            {paymentDetails?.plan || "Standard Plan"}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-sm">
          <span className="font-medium text-slate-400">Transaction ID</span>
          <span className="font-mono font-bold text-emerald-300">
            {paymentDetails?.transactionId || transactionId}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-sm">
          <span className="font-medium text-slate-400">Date</span>
          <span className="text-slate-200">
            {paymentDetails?.date
              ? new Date(paymentDetails.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
          </span>
        </div>

        <div className="flex items-center justify-between pt-1 text-sm">
          <span className="font-semibold text-slate-200">Amount Paid</span>
          <span className="text-lg font-black text-emerald-400">
            {paymentDetails?.amount || "N/A"}
          </span>
        </div>
      </div>

      <div className="mt-7 space-y-3">
      
        <Link
          href={supportTelegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E2C876] via-[#C726D4] to-emerald-400 text-base font-bold text-[#05010d] transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-emerald-900/30 active:scale-[0.99] sm:h-[3.25rem]"
        >
          Contact Support via Telegram
        </Link>
      </div>
    </>
  );
}

export default function PaymentSuccess() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center bg-[#05010d] px-4 py-20 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-emerald-600/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-2.5 items-center justify-center rounded-full bg-[#E2C876]"></span>
            <span className="flex size-2.5 items-center justify-center rounded-full bg-[#E2C876]"></span>
            <span className="flex size-2.5 items-center justify-center rounded-full bg-emerald-500"></span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#E2C876] via-[#C726D4] to-emerald-400 transition-all duration-500 ease-out" />
          </div>
        </div>

        <div className="mx-auto max-w-md py-4 text-center sm:py-6">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Payment Status: Verified
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Payment{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              Confirmed!
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
            Awesome! Your transaction was verified successfully. Your account is
            now active.
          </p>

          <Suspense
            fallback={<p className="mt-5 text-slate-400">Loading...</p>}
          >
            <PaymentSuccessContent />
          </Suspense>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-400">
            Jovia Network Ecosystem · Secure Verification
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
            Verified membership grants full access to the Jovia Network
            benefits.
          </p>
        </div>
      </div>
    </main>
  );
}
