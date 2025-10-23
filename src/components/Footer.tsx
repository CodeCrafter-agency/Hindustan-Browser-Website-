import { Github, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] via-[#4169E1] to-[#22C55E] flex items-center justify-center">
                <span className="text-white">H</span>
              </div>
              <span className="text-white">Hindustan Browser</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A custom web browser built for Indian students and developers, combining powerful study tools with privacy features.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-white transition-colors">Features</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">About</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Screenshots</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Download</button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-white transition-colors">Documentation</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">GitHub</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Support</button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">Privacy Policy</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hindustan Browser. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
