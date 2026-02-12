import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Experiences", link: "/experiences" },
    { name: "Skills", link: "/skills" },
    { name: "About", link: "/about" },
    { name: "Contacts", link: "/contacts" },
  ];

  const buttonBase = `
    group relative overflow-hidden
    bg-[#498d8d] text-white
    px-6 py-2 rounded-lg
    text-sm font-bold
    transition-all duration-300
    hover:shadow-lg
    flex items-center justify-center
    cursor-pointer
  `;

  return (
    <>
      <header className="sticky top-0 z-50 border-b  border-gray-400/80 dark:border-[#333] bg-[#498d8d]/25 dark:bg-[#1a1a1a]/80 backdrop-blur">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">          
          <NavLink to="/" className="flex items-center gap-2">
            <div className="size-8 bg-[#498d8d] rounded-lg flex items-center justify-center text-white font-bold">
              KT
            </div>
          </NavLink>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {links.map(({ name, link }) => (
              <NavLink
                key={name}
                to={link}
                className={({ isActive }) =>
                  `transition hover:text-[#498d8d] ${
                    isActive ? "text-[#498d8d] border-b-2 border-[#498d8d]" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">            
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg bg-[#498d8d] text-white/70 dark:bg-zinc-800  dark:border-[#333] hover:border-[#498d8d] transition text-lg"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>
            
            <NavLink to="/contacts">
              <button className={buttonBase}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <span className="relative z-10 mr-3 group-hover:-translate-x-2 transition-transform duration-300">
                  Hire Me
                </span>

                <span className="absolute right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 text-xl font-bold">
                  →
                </span>
              </button>
            </NavLink>
            
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-xl"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>
      
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#a7b5b5] dark:bg-zinc-900 shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-600/80">
          <span className="font-bold text-[#498d8d]">Menu</span>
          <button onClick={() => setOpen(false)} className="text-xl text-black/70">
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-5 text-sm font-medium">
          {links.map(({ name, link }) => (
            <NavLink
              key={name}
              to={link}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group relative overflow-hidden px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  isActive
                    ? "bg-[#498d8d] text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-white"
                }`
              }
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">{name}</span>
              <span className="relative z-10 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
