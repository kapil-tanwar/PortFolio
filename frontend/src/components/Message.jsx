import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Message({
  heading,
  para,
  buttonText1,
  buttonText2,
  download = false,
  link1,
  link2,
}) {
  return (
    <section className="w-full pt-12 px-4">
      <div className="max-w-[1200px] mx-auto ">
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 text-white px-6 sm:px-10 md:px-16 lg:px-24 py-14 text-center lg:h-[350px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#498d8d]/20 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#498d8d]/10 blur-[90px]" />

          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
            {heading}
          </h2>

          <p className="relative z-10 mt-4 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            {para}
          </p>

          <div className="relative z10 mt-10 flex justify-center gap-4 flex-nowrap">
            
            {link1 && link1.startsWith("/") ? (
              <NavLink to={link1}>
                <button
                  className="
                  group relative overflow-hidden
                  bg-[#498d8d] text-white
                  px-5 sm:px-6 py-3 sm:py-4
                  rounded-xl font-bold
                  text-sm sm:text-base
                  transition-all duration-300
                  hover:shadow-xl
                  min-w-[140px]
                "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <span className="relative z-10">{buttonText1}</span>
                </button>
              </NavLink>
            ) : (
              <a href={link1}>
                <button
                className="
                  group relative overflow-hidden
                  bg-[#498d8d] text-white
                  px-5 sm:px-6 py-3 sm:py-4
                  rounded-xl font-bold
                  text-sm sm:text-base
                  transition-all duration-300
                  hover:shadow-xl
                  min-w-[140px]
                "
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <span className="relative z-10">{buttonText1}</span>
              </button>
              </a>
            )}

            
            {link2 && link2.startsWith("/") && !download ? (
              <NavLink to={link2}>
                <button
                  className="
                  group relative overflow-hidden
                  bg-[#498d8d] text-white
                  px-5 sm:px-6 py-3 sm:py-4
                  rounded-xl font-bold
                  text-sm sm:text-base
                  transition-all duration-300
                  hover:shadow-xl
                  min-w-[140px]
                "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {download && <MdOutlineFileDownload className="text-lg" />}
                    {buttonText2}
                  </span>
                </button>
              </NavLink>
            ) : (
              <a href={link2} target={download ? "_blank" : "_self"}>
                <button
                className="
                  group relative overflow-hidden
                  bg-[#498d8d] text-white
                  px-5 sm:px-6 py-3 sm:py-4
                  rounded-xl font-bold
                  text-sm sm:text-base
                  transition-all duration-300
                  hover:shadow-xl
                  min-w-[140px]
                "
              >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {download && <MdOutlineFileDownload className="text-lg" />}
                    {buttonText2}
                  </span>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
