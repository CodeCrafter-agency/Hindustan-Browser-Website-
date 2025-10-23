import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Download, ArrowRight, Sparkles, BookOpen, Shield, Columns2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(66, 153, 225, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(66, 153, 225, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `perspective(1000px) rotateX(60deg) translateZ(-100px)`,
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random() * 0.5 + 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        style={{
          transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-white/90">Made in India, for India</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white mb-4"
            >
              The Browser Built for
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-6"
            >
              Indian Students
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 mb-4 max-w-xl"
            >
              Experience powerful study tools, built-in VPN, and innovative features designed specifically for productivity and learning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-gray-400 mb-8"
            >
              सरल • सशक्त • सुरक्षित
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Free
              </button>
              <button
                onClick={scrollToFeatures}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Feature Pills with 3D effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: BookOpen, label: "Study Mode", color: "from-orange-500 to-orange-600" },
                { icon: Shield, label: "Built-in VPN", color: "from-blue-500 to-blue-600" },
                { icon: Columns2, label: "Split Screen", color: "from-green-500 to-green-600" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-r ${feature.color} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer`}
                  style={{
                    transform: `translateZ(${i * 10}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-white">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              className="relative"
              animate={{
                rotateY: mousePosition.x * 10,
                rotateX: -mousePosition.y * 10,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Main Browser Window */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Browser Chrome */}
                <div className="h-12 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border-b border-white/20 flex items-center px-4 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg"></div>
                  </div>
                  <div className="flex-1 mx-2 h-7 bg-white/10 rounded-lg border border-white/20 flex items-center px-3">
                    <div className="w-full h-2 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded"></div>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="p-6 space-y-4">
                  {/* Hero section inside browser */}
                  <div className="space-y-2">
                    <div className="h-6 bg-gradient-to-r from-white/30 to-white/10 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-white/20 to-white/5 rounded-lg w-1/2"></div>
                  </div>

                  {/* Feature cards grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div
                      className="h-24 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-xl border border-orange-400/30 backdrop-blur-sm"
                      animate={{
                        y: [0, -10, 0],
                        rotateZ: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
                    >
                      <div className="p-3">
                        <BookOpen className="w-6 h-6 text-orange-300 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="h-24 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-xl border border-blue-400/30 backdrop-blur-sm"
                      animate={{
                        y: [0, -10, 0],
                        rotateZ: [0, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
                    >
                      <div className="p-3">
                        <Shield className="w-6 h-6 text-blue-300 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="h-24 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-xl border border-green-400/30 backdrop-blur-sm"
                      animate={{
                        y: [0, -10, 0],
                        rotateZ: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
                    >
                      <div className="p-3">
                        <Columns2 className="w-6 h-6 text-green-300 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content lines */}
                  <div className="space-y-2 pt-2">
                    <div className="h-3 bg-gradient-to-r from-white/20 to-transparent rounded w-full"></div>
                    <div className="h-3 bg-gradient-to-r from-white/20 to-transparent rounded w-5/6"></div>
                    <div className="h-3 bg-gradient-to-r from-white/20 to-transparent rounded w-4/6"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating feature cards around browser */}
              <motion.div
                className="absolute -left-20 top-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(80px)",
                }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -right-20 bottom-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-2xl"
                animate={{
                  y: [0, 15, 0],
                  rotateZ: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(60px)",
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -left-16 bottom-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 shadow-2xl"
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(70px)",
                }}
              >
                <Download className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
