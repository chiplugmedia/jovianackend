import Link from "next/link";

// NOTE: Add these to your tailwind.config.js for animations, or use framer-motion.
// extend: {
//   animation: {
//     'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
//     'pop-in': 'popIn 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
//   },
//   keyframes: {
//     fadeInUp: {
//       '0%': { opacity: '0', transform: 'translateY(20px)' },
//       '100%': { opacity: '1', transform: 'translateY(0)' },
//     },
//     popIn: {
//       '0%': { opacity: '0', transform: 'scale(0.8)' },
//       '100%': { opacity: '1', transform: 'scale(1)' },
//     },
//   },
// }

export default function PaymentSuccess() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] px-5 overflow-hidden">
      {/* Background Ambient Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0F9AC5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0E2258]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-gray-100 text-center border border-gray-100 animate-fade-in-up">
        {/* Animated Glassmorphism Success Icon */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center animate-pop-in">
          {/* Glowing Background Ring */}
          <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse-slow" />

          {/* Main Glass Icon Container */}
          <div className="relative w-20 h-20 rounded-3xl bg-white/60 backdrop-blur-sm border border-white shadow-xl shadow-green-100 flex items-center justify-center overflow-hidden">
            {/* Inner Gradient Shine */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-green-50/50" />

            <span className="relative text-green-600 text-6xl font-black leading-none mt-1">
              ✓
            </span>
          </div>

          {/* Decorative Sparkle */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-ping" />
        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0E2258] tracking-tight leading-tight">
          Payment <span className="text-[#0F9AC5]">Confirmed!</span>
        </h1>

        <p className="mt-5 text-lg text-slate-600 max-w-sm mx-auto leading-relaxed">
          Awesome! Your transaction was verified successfully. Your account is
          now active.
        </p>

        {/* Decorative Transaction Details Section */}
        <div className="mt-10 bg-slate-50 border border-slate-100 rounded-3xl p-6 text-left space-y-3">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
            Transaction Summary
          </p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Transaction ID</span>
            <span className="font-mono text-[#0E2258] font-medium">
              #JV87X-99PQ0
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Date</span>
            <span className="text-[#0E2258] font-medium">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100">
            <span className="text-slate-700 font-semibold">Amount Paid</span>
            <span className="text-green-600 font-bold text-lg">Verified ✓</span>
          </div>
        </div>

        <Link
          href="https://jovianetwork.ng"
          className="
            relative
            mt-10
            inline-flex
            items-center
            justify-center
            w-full
            sm:w-auto
            px-12
            py-4
            rounded-full
            font-bold
            text-lg
            text-white
            bg-gradient-to-r
            from-[#0E2258]
            via-[#15347A]
            to-[#0F9AC5]
            shadow-lg
            shadow-[#0F9AC5]/20
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:shadow-[#0F9AC5]/30
            hover:scale-105
            active:scale-100
            group
          "
        >
          Proceed to Dashboard
          <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          Having trouble?{" "}
          <Link href="#" className="text-[#0F9AC5] hover:underline">
            Contact Jovia Support
          </Link>
        </p>
      </div>
    </main>
  );
}
