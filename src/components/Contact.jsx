import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";

export default function Contact({ theme }) {
  return (
    <section
      id="contact"
      className={`${theme.cardBg} ${theme.cardBorder} px-8 py-24 flex flex-col items-center justify-center gap-12`}
    >
      {/* Contact Heading */}
      <div className="flex flex-col gap-3">
        <h2 className={`text-4xl font-semibold ${theme.text}`}>
          LET'S CONNECT
        </h2>
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#FF32D9] to-[#D7ADFF] rounded-full mx-auto" />
      </div>

      <p
        className={`text-sm text-center leading-relaxed max-w-md ${theme.textSecondary}`}
      >
        I'm currently open to any opportunities in software engineering, web or
        mobile development. Whether you have a question, a project in mind, or
        just want to say hi — my inbox is always open!
      </p>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <a
          href="mailto:anborda18@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9937DF] to-[#D30EAF] text-white text-sm font-medium hover:opacity-90 transition"
        >
          <MdEmail className="text-base" /> Email
        </a>

        <a
          href="https://linkedin.com/in/andreaborda/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-6 py-3 rounded-full border border-[#D30EAF] ${theme.textSecondary} text-sm hover:bg-[#D30EAF] hover:text-white transition`}
        >
          <FaLinkedinIn className="text-base" /> LinkedIn
        </a>

        <a
          href="https://github.com/andreabordaa"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-6 py-3 rounded-full border border-[#9937DF] ${theme.textSecondary} text-sm hover:bg-[#9937DF] hover:text-white transition`}
        >
          <FaGithub className="text-base" /> GitHub
        </a>

        {/* Resume — outline */}
        <a
          href="/AndreaBordaResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-6 py-3 rounded-full border border-[#8D83BB] ${theme.textSecondary} text-sm hover:bg-[#8D83BB] hover:text-white transition`}
        >
          <HiOutlineDocument className="text-base" /> Resume
        </a>
      </div>
    </section>
  );
}
