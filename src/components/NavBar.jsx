import { HiSun, HiMoon } from "react-icons/hi";

export default function NavBar({ theme, darkMode, setDarkMode }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 ${theme.navBg} backdrop-blur-md border-b border-[#3A3060]`}
    >
      {/* Logo */}
      <a href="#hero">
        <h1 className="bg-gradient-to-r from-[#D7ADFF] to-[#FF32D9] bg-clip-text text-transparent tracking-widest text-md">
          ANDREA<span className="font-semibold">BORDA</span>
        </h1>
      </a>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 tracking-widest">
        <a
          href="#projects"
          className={`${theme.textSecondary} hover:text-white transition tracking-widest text-sm`}
        >
          PROJECTS
        </a>
        <a
          href="#skills"
          className={`${theme.textSecondary} hover:text-white transition tracking-widest text-sm`}
        >
          SKILLS
        </a>
        <a
          href="#contact"
          className={`${theme.textSecondary} hover:text-white transition tracking-widest text-sm`}
        >
          CONTACT
        </a>

        {/* Light/Dark Mode toggle button */}
        <li
          onClick={() => setDarkMode(!darkMode)}
          className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors duration-300 ${
            darkMode
              ? "bg-[#231D3D] border-[#3A3060] hover:border-[#D7ADFF]"
              : "bg-[#F0EBF8] border-[#E2D9F3] hover:border-[#FF32D9]"
          }`}
        >
          {darkMode ? (
            <HiSun className="text-[#D7ADFF] text-sm" />
          ) : (
            <HiMoon className="text-[#9B6DCC] text-sm" />
          )}
        </li>
      </ul>
    </nav>
  );
}
