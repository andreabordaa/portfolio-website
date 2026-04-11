import { TypeAnimation } from "react-type-animation";

export default function Hero({ theme }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute w-[600px] h-[500px] rounded-full bg-[#FF32D9] opacity-20 blur-[140px] top-[-150px] left-[-150px] animate-blob" />
      <div className="absolute w-[600px] h-[500px] rounded-full bg-[#D7ADFF] opacity-20 blur-[140px] top-[-150px] right-[-150px] animate-blob animation-delay-2000" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FDF8A1] opacity-20 blur-[120px] top-[40%] left-[35%] animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <h1
          className={`text-4xl md:text-6xl font-semibold ${theme.text} min-h-[1.2em]`}
        >
          hi{""}
          <TypeAnimation
            sequence={[", my name is Andrea.", 2000, "", 500]}
            wrapper="span"
            speed={5}
            deletionSpeed={10}
            repeat={Infinity}
          />
        </h1>

        <p className={`text-xl tracking-wide ${theme.textSecondary}`}>
          Software Engineer | Web and Mobile Application Developer
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#projects" className={theme.buttonPrimary}>
            View Projects
          </a>

          <a href="#contact" className={theme.buttonOutline}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
