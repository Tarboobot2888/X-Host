"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { useState, useEffect, useRef } from "react"

// SVG Components
const ServerIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const SupportIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const PriceIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const EasyIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const AboutIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const ContactIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const features = [
    {
      title: "بنية تحتية متطورة",
      description: "أنظمة استضافة ذات أداء عالي مع ضمان 99.9% لوقت التشغيل",
      icon: <ServerIcon />,
      gradient: "from-slate-700 to-slate-800",
      stats: "99.9%",
    },
    {
      title: "دعم فني متخصص",
      description: "فريق دعم فني محترف متوفر على مدار الساعة طوال أيام الأسبوع",
      icon: <SupportIcon />,
      gradient: "from-slate-700 to-slate-800",
      stats: "24/7",
    },
    {
      title: "خطط مرنة",
      description: "باقات استضافة متنوعة تلبي احتياجات المشاريع الصغيرة والكبيرة",
      icon: <PriceIcon />,
      gradient: "from-slate-700 to-slate-800",
      stats: "+50",
    },
    {
      title: "واجهة بديهية",
      description: "لوحة تحكم مصممة بعناية لتسهيل إدارة خدمات الاستضافة",
      icon: <EasyIcon />,
      gradient: "from-slate-700 to-slate-800",
      stats: "95%",
    },
  ]

  const ctas = [
    {
      label: "استكشاف الخدمات",
      href: "/services",
      variant: "primary",
      icon: <RocketIcon />,
    },
    {
      label: "مقارنة الباقات",
      href: "/plans",
      variant: "secondary",
      icon: <ChartIcon />,
    },
    {
      label: "معلومات عنا",
      href: "/about",
      variant: "secondary",
      icon: <AboutIcon />,
    },
    {
      label: "طلب استشارة",
      href: "/contact",
      variant: "secondary",
      icon: <ContactIcon />,
    },
  ]

  const stats = [
    { value: "10,000+", label: "مشروع ناجح" },
    { value: "99.95%", label: "نسبة توفر" },
    { value: "24/7", label: "دعم فني" },
    { value: "150+", label: "خدمة متكاملة" },
  ]

  // Variants للحركات ثلاثية الأبعاد
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      rotateY: direction > 0 ? 30 : -30,
      scale: 0.9,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      rotateY: direction > 0 ? -30 : 30,
      scale: 0.9,
      opacity: 0,
    }),
  }

  const featureItemVariants = {
    initial: { 
      opacity: 0,
      x: -20,
      rotateY: -5
    },
    animate: (custom: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }
    }),
    hover: {
      x: 5,
      rotateY: 3,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const goToNextFeature = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setActiveFeature((prev) => (prev + 1) % features.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToPrevFeature = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const selectFeature = (index: number) => {
    if (isAnimating || index === activeFeature) return
    setIsAnimating(true)
    setDirection(index > activeFeature ? 1 : -1)
    setActiveFeature(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        goToNextFeature()
      }
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAnimating])

  return (
    <ThemeProvider>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="relative overflow-hidden min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
      >
        {/* Fixed Background */}
        <div className="fixed inset-0 z-0">
          <StarField intensity={0.15} />
          
          {/* Static Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Static Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>
            
            {/* Static Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/5 to-cyan-900/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-900/10 to-slate-800/5 rounded-full blur-3xl"></div>
            
            {/* Static Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
          </div>
        </div>

        <CosmicNavbar />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center max-w-6xl mx-auto"
            >
              {/* Main Title */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 tracking-tight">
                  حلول استضافة رقمية <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">متكاملة</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
                ></motion.div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-slate-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed"
              >
                نقدم حلول استضافة مبتكرة تجمع بين الأداء الفائق والموثوقية العالية لدعم نمو مشاريعك الرقمية
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
              >
                خبرة تمتد لأكثر من عقد في توفير خدمات الاستضافة المتقدمة
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-b from-slate-800/20 to-slate-900/10 backdrop-blur-sm border border-slate-700/20 rounded-xl p-4 md:p-6 text-center hover:border-slate-600/30 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm md:text-base mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
              >
                {ctas.map((cta, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={cta.href}
                      className={`relative group px-6 py-4 rounded-xl transition-all duration-300 text-center font-medium flex items-center justify-center gap-3 ${
                        cta.variant === "primary"
                          ? "bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white shadow-lg shadow-blue-500/10"
                          : "bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 border border-slate-700/30 hover:border-slate-600/40 backdrop-blur-sm"
                      }`}
                    >
                      <span className="opacity-80">{cta.icon}</span>
                      <span>{cta.label}</span>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                        cta.variant === "primary" 
                          ? "from-blue-400/10 to-cyan-400/10" 
                          : "from-slate-700/10 to-transparent"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="py-20 md:py-32 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 md:mb-24"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-blue-300 font-medium text-sm md:text-base tracking-wider mb-4"
                >
                  مميزاتنا الأساسية
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                  لماذا تختار <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">خدماتنا</span>؟
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  نتميز بتقديم حلول شاملة مدعومة بأحدث التقنيات
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Features List */}
                <div className="space-y-6">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      initial="initial"
                      whileInView="animate"
                      whileHover="hover"
                      viewport={{ once: true }}
                      variants={featureItemVariants}
                      onClick={() => selectFeature(idx)}
                      className={`relative cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                        activeFeature === idx
                          ? "bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-blue-500/20 shadow-lg"
                          : "bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 hover:border-slate-600/30"
                      }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="flex items-start gap-6">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} border border-slate-600/30`}
                          whileHover={{ rotateY: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-blue-300">
                            {feature.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-slate-100">{feature.title}</h3>
                            <span className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient === "from-slate-700 to-slate-800" ? "from-blue-300 to-cyan-300" : feature.gradient} bg-clip-text text-transparent`}>
                              {feature.stats}
                            </span>
                          </div>
                          <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                      {activeFeature === idx && (
                        <motion.div
                          layoutId="activeFeature"
                          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* 3D Visualizer */}
                <div className="lg:sticky lg:top-24 h-[400px] md:h-[500px]">
                  <div 
                    className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/30 to-slate-900/15 backdrop-blur-sm border border-slate-700/20"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Navigation Buttons */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToPrevFeature}
                        className="p-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 text-slate-300 hover:text-white hover:border-blue-500/30 transition-all"
                        disabled={isAnimating}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToNextFeature}
                        className="p-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 text-slate-300 hover:text-white hover:border-blue-500/30 transition-all"
                        disabled={isAnimating}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* 3D Animated Content */}
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={activeFeature}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 200, damping: 25 },
                          opacity: { duration: 0.2 },
                          rotateY: { duration: 0.6, ease: "easeInOut" },
                          scale: { duration: 0.4, ease: "easeOut" }
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-8"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* 3D Icon */}
                        <motion.div
                          animate={{ 
                            rotateY: [0, 180, 360],
                          }}
                          transition={{
                            rotateY: {
                              duration: 12,
                              repeat: Infinity,
                              ease: "linear"
                            }
                          }}
                          className="mb-8 text-blue-300"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {features[activeFeature].icon}
                        </motion.div>

                        {/* 3D Title */}
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 text-center"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {features[activeFeature].title}
                        </motion.h3>

                        {/* 3D Description */}
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg text-slate-300 text-center max-w-md leading-relaxed"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {features[activeFeature].description}
                        </motion.p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Progress Dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                      {features.map((_, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          onClick={() => selectFeature(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === activeFeature 
                              ? "bg-gradient-to-r from-blue-400 to-cyan-400 w-6" 
                              : "bg-slate-600/50 hover:bg-slate-500/50"
                          }`}
                          disabled={isAnimating}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 md:py-32 px-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-900/15 to-slate-800/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415508_25%,transparent_25%),linear-gradient(-30deg,#33415508_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415508_75%),linear-gradient(-30deg,transparent_75%,#33415508_75%)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="relative z-10 p-8 md:p-16 text-center">
                  <motion.div
                    initial={{ rotateY: -90, scale: 0 }}
                    whileInView={{ rotateY: 0, scale: 1 }}
                    transition={{ 
                      rotateY: { duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.4, ease: "easeOut" }
                    }}
                    viewport={{ once: true }}
                    className="inline-block p-4 rounded-full bg-gradient-to-r from-slate-800/20 to-slate-900/15 border border-slate-700/20 mb-8"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div 
                      className="text-blue-300"
                      animate={{ rotateY: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-slate-100 mb-6"
                  >
                    ابدأ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">رحلتك</span> الرقمية اليوم
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                  >
                    انضم إلى آلاف العملاء الذين وثقوا بخبرتنا في تقديم حلول استضافة متميزة تعزز من نجاح مشاريعهم
                  </motion.p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href="/services"
                        className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.span>
                        <span>بدء الاستخدام المجاني</span>
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href="/contact"
                        className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-xl font-semibold text-lg border border-slate-700/30 hover:border-slate-600/40 backdrop-blur-sm transition-all duration-300"
                      >
                        طلب عرض سعر
                      </Link>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-sm md:text-base mt-8"
                  >
                    نسخة تجريبية مجانية لمدة 14 يوم • دعم فني متاح خلال الفترة التجريبية
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </section>

          <CosmicFooter />
        </main>
      </motion.div>
    </ThemeProvider>
  )
}