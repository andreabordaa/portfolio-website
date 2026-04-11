import { FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, theme }) {
  return (
    <div
      className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl overflow-hidden flex flex-col hover:border-[#D7ADFF] hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="h-1 w-full" style={{ background: project.color }} />
      {/* Image placeholder */}
      <div className="w-full h-40 bg-[#2D2550] flex items-center justify-center">
        <span className="text-slate-500 text-md">preview</span>
      </div>

      {/* Card content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className={`text-sm leading-relazed ${theme.textSecondary}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-[#18142C] text-[#D7ADFF] border border-[#3A3060]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-[#3A3060]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center
          gap-2 text-sm text-slate-300 hover:text-white translation"
          >
            <FiGithub /> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
