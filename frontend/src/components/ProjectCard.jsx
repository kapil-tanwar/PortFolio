import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  liveLink,
  githubLink,
  skills = [],
  image,
}) => {
  return (
    <div className="group w-full bg-white dark:bg-zinc-900/90 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#498d8d]/40 dark:hover:border-[#498d8d]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-[#498d8d]/15 dark:bg-[#498d8d]/15 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-900 text-[#498d8d] px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-[#498d8d] hover:text-white transition-colors shadow-lg"
            >
              <FaGithub size={18} /> GitHub
            </a>
          )}

          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-900 text-[#498d8d] px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-[#498d8d] hover:text-white transition-colors shadow-lg"
            >
              <FaExternalLinkAlt size={16} /> Live
            </a>
          )}
        </div>
      </div>

      <div className="p-6 relative">
        <div className="md:hidden absolute right-2 top-2 flex gap-1 ">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur p-2 rounded-lg text-[#498d8d] shadow-md"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          )}
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur p-2.5 rounded-lg text-[#498d8d] shadow-md"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#131616] dark:text-white group-hover:text-[#498d8d] dark:group-hover:text-[#6dd0d0] transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#498d8d]/10 dark:bg-[#498d8d]/20 text-[#498d8d] dark:text-[#6dd0d0] rounded-lg text-xs font-medium border border-[#498d8d]/20 dark:border-[#498d8d]/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
