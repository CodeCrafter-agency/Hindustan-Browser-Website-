import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-slate-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] via-[#4169E1] to-[#22C55E] flex items-center justify-center">
              <span className="text-white">H</span>
            </div>
            <span className="hidden sm:block">
              <span className={isScrolled ? "text-gray-900" : "text-white"}>Hindustan Browser</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className={`transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              Features
            </button>
            <button onClick={() => scrollToSection("about")} className={`transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              About
            </button>
            <button onClick={() => scrollToSection("screenshots")} className={`transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="bg-gradient-to-r from-[#4169E1] to-[#3557C1] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className={`md:hidden py-4 space-y-4 border-t ${isScrolled ? "border-gray-100" : "border-white/20"}`}>
            <button onClick={() => scrollToSection("features")} className={`block w-full text-left ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              Features
            </button>
            <button onClick={() => scrollToSection("about")} className={`block w-full text-left ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              About
            </button>
            <button onClick={() => scrollToSection("screenshots")} className={`block w-full text-left ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="bg-gradient-to-r from-[#4169E1] to-[#3557C1] text-white px-6 py-2 rounded-full flex items-center gap-2 w-full justify-center"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
