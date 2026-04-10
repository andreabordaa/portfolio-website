import getThemeClasses from "./utils/theme";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const theme = getThemeClasses();

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      <NavBar theme={theme} />
      <Hero theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
