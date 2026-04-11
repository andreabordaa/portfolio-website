import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiCanva,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiVercel,
  SiRender,
  SiReact,
  SiGnubash,
} from "react-icons/si";
import {
  TbBrandMysql,
  TbBrandCSharp,
  TbBrandVisualStudio,
} from "react-icons/tb";

const technicalSkills = [
  // Languages
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "C#", icon: TbBrandCSharp, color: "#9b4993" },
  { name: "MySQL", icon: TbBrandMysql, color: "#4479a1" },
  // Frameworks & Libraries
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  // Tools
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "VS Code", icon: TbBrandVisualStudio, color: "#007acc" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Figma", icon: FaFigma, color: "#f24e1e" },
  { name: "Linux", icon: FaLinux, color: "#fcc624" },
  { name: "Bash", icon: SiGnubash, color: "#4eaa25" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  // Platforms
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Render", icon: SiRender, color: "#46e3b7" },
];

const softSkills = [
  { name: "Critical Thinking", emoji: "🧠" },
  { name: "Detail Oriented", emoji: "🔍" },
  { name: "Problem Solving", emoji: "⚙️" },
  { name: "Organization", emoji: "🗂️" },
  { name: "Time Management", emoji: "⏱️" },
  { name: "Teamwork", emoji: "🤝" },
  { name: "Bilingual (EN/ES)", emoji: "🌐" },
];

export default function Skills({ theme }) {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 py-24 flex flex-col items-center gap-12"
    >
      {/* Skills Heading */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-4xl font-semibold text-white">SKILLS</h2>
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] rounded-full" />

        <div className="flex flex-col gap-12 w-full max-w-4xl">
          {/* Technical Skills */}
          <h3 className="text-[#D7ADFF] text-md tracking-widest font-medium">
            Technical Skills
          </h3>
          <div
            className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl p-8 flex flex-col gap-6`}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {technicalSkills.map((skill) => (
                <SkillBlock key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills Container */}
          <h3 className="text-[#D7ADFF] text-md tracking-widest font-medium">
            Soft Skills
          </h3>
          <div
            className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl p-8 flex flex-col gap-6`}
          >
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#18142C] border border-[#3a3060] text-slate-300 text-sm hover:border-[#FF32D9] hover:text-white transition-all duration-300"
                >
                  <span>{skill.emoji}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBlock({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#231D3D] border border-[3A3060] hover:border-[#D7ADFF] hover:-translate-y-1 transistion-all duration-300 cursor-default">
      <Icon style={{ color: skill.color }} className="text-3xl" />
      <span className="text-xs text-slate-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}
