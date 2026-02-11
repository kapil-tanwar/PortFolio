import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-400/80 dark:border-white/10 mt-6 bg-[#498d8d]/20 dark:bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-6 justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#498d8d] dark:text-white">KT.</span>
          <span className="dark:text-zinc-400 font-bold text-[#498d8d]">Kapil Tanwar.</span>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/kapil-tanwar"
            target="_blank"
            className="dark:text-zinc-400 text-[#498d8d] hover:text-[#498d8d] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kapil-tanwar-686436279/"
            target="_blank"
            className="dark:text-zinc-400 text-[#498d8d] hover:text-[#498d8d] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="dark:text-zinc-400 text-[#498d8d] hover:text-[#498d8d] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
