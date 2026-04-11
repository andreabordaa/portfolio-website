import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function NavBar({ theme, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-md border-b border-[#3A3060] transition-colors duration-300`}
    >
      {/* Nav bar */}
      <div className="flex justify-between items-center px-8 py-4">
        <a href="#hero">
          <h1 className="bg-gradient-to-r from-[#D7ADFF] to-[#FF32D9] bg-clip-text text-transparent tracking-widest text-md">
            ANDREA<span className="font-semibold">BORDA</span>
          </h1>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 tracking-widest">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${theme.textSecondary} hover:text-white transition tracking-widest text-md`}
            >
              {link.label}
            </a>
          ))}

          {/* Dark/Light Mode */}
          <li
            onClick={() => setDarkMode(!darkMode)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#231D3D] border-[#3A3060] hover:border-[#D7ADFF]"
                : "bg-[#F0EBF8] border-[#E2D9F3] hover:border-[#FF32D9]"
            }`}
          >
            {darkMode ? (
              <HiSun className="text-[#D7ADFF] text-md" />
            ) : (
              <HiMoon className="text-[#9B6DCC] text-md" />
            )}
          </li>
        </ul>

        {/* Mobile links */}
        <div className="flex md:hidden items-center gap-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#231D3D] border-[#3A3060]"
                : "bg-[#F0EBF8] border-[#E2D9F3]"
            }`}
          >
            {darkMode ? (
              <HiSun className="text-[#D7ADFF] text-md" />
            ) : (
              <HiMoon className="text-[#9B6DCC] text-md" />
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${theme.textSecondary} hover:text-white transition`}
          >
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-end px-8 py-4 gap-4 border-t border-[#3A3060] ${theme.navBg}`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${theme.textSecondary} hover:text-white transition tracking-widest text-sm py-1`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
