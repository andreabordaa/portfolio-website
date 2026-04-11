export default function Hero({ theme }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF32D9] opacity-20 blur-[120px] top-[-100px] left-[-100px] animate-blob" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D7ADFF] opacity-20 blur-[120px] top-[-100px] right-[-100px] animate-blob animation-delay-2000" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FDF8A1] opacity-10 blur-[100px] top-[40%] left-[40%] animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <h1
          className={`text-4xl font-light tracking-widest ${theme.textSecondary}`}
        >
          hi, my name is{" "}
          <span className={`font-semibold text-white`}>andrea</span>
        </h1>

        <p className={`text-xl tracking-wide ${theme.textSecondary}`}>
          Software Engineer | Web and Mobile Application Developer
        </p>
        <div className="flex gap-4 mt-4">
          <button className={theme.buttonPrimary}>View Projects</button>
          <button className={theme.buttonOutline}>Contact</button>
        </div>
      </div>
    </section>
  );
}
