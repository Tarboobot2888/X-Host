"use client"

import Link from "next/link"
import { CosmicFooter } from "@/components/cosmic-footer"

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Background stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 blur-sm"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4">الصفحة غير موجودة</h2>
          <p className="text-xl text-white/60 mb-8 max-w-md mx-auto">
            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. يرجى المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-20">
        <CosmicFooter />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
