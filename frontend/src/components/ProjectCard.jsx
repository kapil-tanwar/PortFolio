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
    <div className="group sm:w-[400px] bg-zinc-900 dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform md:group-hover:scale-110 transition duration-500"
        />

        <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center gap-6">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white/50 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-primary  transition"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900  px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-primary text-white/50 transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>

      <div className="relative p-6">
        <div className="md:hidden absolute top-3 right-2 flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 shadow text-white/40 p-2 rounded-full text-[16px]"
            >
              <FaGithub />
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 shadow text-white/40 p-2 rounded-full"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-[#131616] dark:text-white">
          {title}
        </h3>

        <p className="text-[#6e7c7c] dark:text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-[#6e7c7c] dark:text-gray-400"
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
