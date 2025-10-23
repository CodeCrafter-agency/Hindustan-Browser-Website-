import { motion } from "motion/react";
import { Download, Github, ExternalLink } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4169E1]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Download Hindustan Browser today and experience a browsing experience designed specifically for Indian students and developers.
          </p>

          {/* Download cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#3557C1] flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-3">
                Windows
              </h3>
              <p className="text-gray-300 mb-6">
                Download for Windows 10/11
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all w-full flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download .exe
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-3">
                Source Code
              </h3>
              <p className="text-gray-300 mb-6">
                View on GitHub
              </p>
              <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all w-full flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                View Repository
              </button>
            </motion.div>
          </div>

          {/* System requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-white mb-6">
              System Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-gray-400 mb-2">Operating System</div>
                <div className="text-white">Windows 10/11</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">RAM</div>
                <div className="text-white">4GB minimum</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Storage</div>
                <div className="text-white">500MB free space</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-6 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
              <span>Free & Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4169E1]"></div>
              <span>Regular Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
              <span>Made in India</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
