import { BookOpen, Shield, Columns2, Zap, Layout, Lock } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "Study Mode",
    description: "Boost your productivity with integrated study tools including Pomodoro timer, quick notes, and task management.",
    color: "#FF6B35",
    gradient: "from-[#FF6B35] to-[#FF8C5A]",
  },
  {
    icon: Shield,
    title: "Built-in VPN",
    description: "Browse securely with integrated VPN service. Easy server selection and encryption for privacy-conscious users.",
    color: "#4169E1",
    gradient: "from-[#4169E1] to-[#5B7FE8]",
  },
  {
    icon: Columns2,
    title: "Split Screen",
    description: "View and interact with two web pages side-by-side. Perfect for research, comparison, and multitasking.",
    color: "#22C55E",
    gradient: "from-[#22C55E] to-[#48D77D]",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by Chromium engine for maximum performance and compatibility with all modern web standards.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
  },
  {
    icon: Layout,
    title: "Modern Interface",
    description: "Beautiful, clean UI built with React and TypeScript. Intuitive design that gets out of your way.",
    color: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays yours. No tracking, no telemetry, just pure browsing experience focused on your needs.",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4169E1] mb-4 block">FEATURES</span>
          <h2 className="text-gray-900 mb-4">
            Everything You Need, Built Right In
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hindustan Browser combines powerful productivity tools with privacy features to create the ultimate browsing experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
