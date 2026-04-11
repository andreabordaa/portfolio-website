export default function getThemeClasses(darkMode) {
  return {
    bg: darkMode ? "bg-[#18142C]" : "bg-[#EBE0F5]",
    surface: darkMode ? "bg-[#231D3D]" : "bg-[#DBCDE8]",
    cardBg: darkMode ? "bg-[#231D3D]" : "bg-[#DBCDE8]/80",
    cardBorder: darkMode
      ? "border border-[#3a3060]"
      : "border border-[#E2D9F3]",
    navBg: darkMode ? "bg-[#18142C]/80" : "bg-[#F7EBFD]/80",
    text: darkMode ? "text-white" : "text-[#231D3D]",
    textSecondary: darkMode ? "text-slate-300" : "text-[#9B6DCC]",
    accentPink: "text-[#FF32D9]",
    accentLavender: "text-[#D7ADFF]",

    buttonPrimary:
      "bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] text-white rounded-full px-6 py-3 hover:opacity-90 transition",
    buttonOutline: darkMode
      ? "border border-white text-white rounded-full px-6 py-3 hover:bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] hover:text-white transition"
      : "border border-[#1A1030] text-[#1A1030] rounded-full px-6 py-3 hover:bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] hover:text-white transition",
  };
}
