export default function getThemeClasses() {
  return {
    bg: "bg-[#18142C]",
    surface: "bg-[#231D3D]",
    text: "text-white",
    textSecondary: "text-slate-300",
    accentPink: "text-[#FF32D9]",
    accentLavender: "text-[#D7ADFF]",
    cardBg: "bg-[#231D3D]",
    cardBorder: "border border-[#3a3060]",
    navBg: "bg-[#18142C]/80",
    buttonPrimary:
      "bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] text-white rounded-full px-6 py-3 hover:opacity-90 transition",
    buttonOutline:
      "border border-white text-white rounded-full px-6 py-3 hover:bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] hover:text-white transition",
  };
}
