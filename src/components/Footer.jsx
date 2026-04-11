export default function Footer({ theme }) {
  return (
    <footer
      className={`${theme.navBg} border-t border-[#3A3060] py-6 text-center`}
    >
      <p className="text-slate-500 text-sm">© 2026 Andrea Borda</p>
    </footer>
  );
}
