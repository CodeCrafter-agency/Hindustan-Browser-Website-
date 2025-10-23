import { motion } from "motion/react";
import { Eye } from "lucide-react";

const screenshots = [
  {
    title: "New Tab Page",
    description: "Clean, modern interface with quick access to Study Mode, VPN, and Split Screen",
    category: "Home",
  },
  {
    title: "Study Mode",
    description: "Integrated Pomodoro timer, notes, and task management for focused learning",
    category: "Productivity",
  },
  {
    title: "VPN Interface",
    description: "Simple server selection with one-click connection for secure browsing",
    category: "Privacy",
  },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4169E1] mb-4 block">SCREENSHOTS</span>
          <h2 className="text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of Hindustan Browser's clean interface and powerful features designed for productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl">
                {/* Screenshot placeholder */}
                <div className="aspect-[4/3] relative bg-gradient-to-br from-[#FFE5D9] via-[#FFF9F5] to-[#D4F1DD] flex items-center justify-center">
                  {/* Browser window mockup */}
                  <div className="absolute inset-4 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Browser chrome */}
                    <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF6B35]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#4169E1]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                      </div>
                      <div className="flex-1 mx-2 h-5 bg-white rounded border border-gray-200"></div>
                    </div>
                    {/* Content area */}
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-16 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 rounded"></div>
                        <div className="h-16 bg-gradient-to-br from-[#4169E1]/20 to-[#4169E1]/10 rounded"></div>
                        <div className="h-16 bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Eye className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                    {screenshot.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <h3 className="text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Screenshots are representative. Actual interface may vary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
