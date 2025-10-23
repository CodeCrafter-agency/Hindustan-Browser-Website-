import { motion } from "motion/react";
import { Code, Layers, Cpu, Check } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "PyQt5", value: "Python Shell", color: "#FF6B35" },
    { label: "React", value: "TypeScript UI", color: "#4169E1" },
    { label: "Chromium", value: "Web Engine", color: "#22C55E" },
    { label: "Flask", value: "Backend", color: "#8B5CF6" },
  ];

  const highlights = [
    "Custom-built for Indian students and developers",
    "Combines Python power with React elegance",
    "Privacy-focused with no data collection",
    "Regular updates and active development",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#4169E1] mb-4 block">ABOUT</span>
            <h2 className="text-gray-900 mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-gray-600 mb-8">
              Hindustan Browser is a custom web browser built from the ground up using Python and PyQt5, 
              with internal pages crafted in React and TypeScript. Powered by the Chromium engine and 
              served via Flask, it offers the perfect blend of performance and functionality.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4169E1] to-[#22C55E] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color }}></div>
                    <span className="text-gray-900">{stat.label}</span>
                  </div>
                  <p className="text-gray-500">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] p-8 rounded-2xl text-white shadow-xl">
              <Code className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-white mb-3">
                Python & PyQt5
              </h3>
              <p className="text-white/90">
                The browser shell is built with Python and PyQt5, leveraging QtWebEngine for powerful and native performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4169E1] to-[#5B7FE8] p-8 rounded-2xl text-white shadow-xl">
              <Layers className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-white mb-3">
                React & TypeScript
              </h3>
              <p className="text-white/90">
                Internal pages and interfaces are crafted with React and TypeScript, ensuring type-safety and modern UX.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#22C55E] to-[#48D77D] p-8 rounded-2xl text-white shadow-xl">
              <Cpu className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-white mb-3">
                Chromium Engine
              </h3>
              <p className="text-white/90">
                Powered by Chromium's engine, ensuring compatibility with all modern web standards and blazing-fast performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
