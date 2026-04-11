import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ theme }) {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-24 flex flex-col items-center gap-12"
    >
      {/* Projects Heading */}
      <div className="flex flex-col items-center gap-3">
        <h2 className={`text-4xl font-semibold ${theme.text}`}>PROJECTS</h2>
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} theme={theme} />
        ))}
      </div>
    </section>
  );
}
