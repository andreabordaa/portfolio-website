import { HiSun, HiMoon } from "react-icons/hi";
import { useState } from "react";

export default function NavBar({ theme }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 ${theme.navBg} backdrop-blur-md border-b border-[#3A3060]`}
    >
      {/* Logo */}
      <h1 className="bg-gradient-to-r from-[#D7ADFF] to-[#FF32D9] bg-clip-text text-transparent tracking-widest text-md">
        ANDREA
        <span className="font-semibold">BORDA</span>
      </h1>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 text-md tracking widest">
        <li className="text-slate-300 hover:text-white transition cursor-pointer">
          PROJECTS
        </li>
        <li className="text-slate-300 hover:text-white transition cursor-pointer">
          SKILLS
        </li>
        <li className="text-slate-300 hover:text-white transition cursor-pointer">
          CONTACT
        </li>

        {/* Light/Dark Mode toggle button */}
        <li
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 rounded-full bg-[#231D3D] border border-[#3A3060] flex items-center justify-center cursor pointer hover:border-[#D7ADFF] transition"
        >
          {darkMode ? (
            <HiSun className="text-[#D7ADFF] text-md" />
          ) : (
            <HiMoon className="text-[#D7ADFF] text-md" />
          )}
        </li>
      </ul>
    </nav>
  );
}
