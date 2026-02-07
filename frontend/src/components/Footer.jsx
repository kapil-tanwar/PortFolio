import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-6 justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">KT.</span>
          <span className="text-zinc-400">Kapil Tanwar.</span>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/kapil-tanwar"
            target="_blank"
            className="text-zinc-400 hover:text-[#498d8d] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kapil-tanwar-686436279/"
            target="_blank"
            className="text-zinc-400 hover:text-[#498d8d] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-zinc-400 hover:text-[#498d8d] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
