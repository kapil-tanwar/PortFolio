import { MdOutlineTerminal } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import Navbar from "../components/Navbar";
import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "../components/Footer";
import Message from "../components/Message";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="grid-bg min-h-screen 
      bg-[#f7f7f7] dark:bg-[#1a1a1a] 
      text-[#131616] dark:text-white 
      transition-colors duration-300"
    >
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root ">
        <div className="layout-container flex h-full grow flex-col">
          <Navbar />

          <section className="max-w-[1200px] mx-auto px-4 pl-6 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-1 lg:order-2 flex justify-center relative">
                <div
                  className="
                    absolute 
                    w-[255px] sm:w-[330px] lg:w-[400px]
                    aspect-square
                    rounded-2xl
                    bg-[#498d8d]
                    blur-2xl
                    opacity-20
                    z-0
                "
                ></div>

                <div
                  className="
                    absolute 
                    w-[260px] sm:w-[340px] lg:w-[420px]
                    aspect-square
                    rounded-2xl
                    bg-[#e5eeee] dark:bg-[#2a2a2a]
                    rotate-[-4deg]
                    translate-x-0.5 translate-y-0.5
                    z-10
                "
                ></div>

                <div
                  className="
                    relative z-20
                    w-[260px] sm:w-[340px] lg:w-[420px]
                    aspect-square
                    rounded-2xl overflow-hidden
                    border-4 border-white dark:border-zinc-800
                    shadow-2xl
                    rotate-3 hover:rotate-0
                    transition-transform duration-500
                "
                >
                  <img
                    className="w-full h-full object-cover"
                    src="/kapil1.jpeg"
                    alt="profile"
                  />
                </div>
              </div>

              <div className="order-2 lg:order-1 space-y-6">
                <div
                  className="inline-flex items-center gap-2 
                  bg-[#498d8d]/10 text-[#498d8d]
                  px-3 py-1 rounded-full text-xs font-bold"
                >
                  ● AVAILABLE FOR NEW PROJECTS
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black">
                  Kapil Tanwar — <br />
                  <span className="text-[#498d8d]">Full Stack</span> Developer
                </h1>

                <p className="text-[#6e7c7c] dark:text-zinc-400 max-w-xl">
                  Building scalable web applications with an architectural
                  mindset and a focus on user experience. Precision-engineered
                  code meets editorial design.
                </p>

                <div className="flex gap-4">
                  <NavLink to="/projects">
                    <button
                      className="
                      group
                      relative
                      overflow-hidden
                      bg-[#498d8d]
                      text-white
                      px-5 py-4
                      rounded-lg
                      text-md font-bold
                      transition-all duration-300
                      hover:shadow-lg
                      flex items-center justify-between
                      min-w-[110px] cursor-pointer
                    "
                    >
                      <span className="absolute inset-0 *:bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />

                      <span
                        className="
                        bg-white/70
                        absolute left-0 top-0 h-full w-1
                          scale-y-0
                          group-hover:scale-y-100
                          transition-transform duration-300
                          origin-top
                        "
                      />

                      <span className="relative z-10 md:text-[15px] text-sm">
                        View Projects
                      </span>
                    </button>
                  </NavLink>

                  <a href="https://drive.google.com/file/d/1gbS6O4ebeuftEchGKNYWNX_qRRqzFdIM/view?usp=sharing">
                    <button
                      className="
                        group
                        relative
                        overflow-hidden
                        bg-[#498d8d]
                        text-white
                        px-5 py-4
                        rounded-lg
                        text-md font-bold
                        transition-all duration-300
                        hover:shadow-lg
                        flex items-center justify-between
                        min-w-[110px] dark:bg-zinc-800 cursor-pointer
                      "
                    >
                      <span
                        className="
                          absolute inset-0
                          bg-gradient-to-r
                          from-[#498d8d] to-[#2f6f6f]
                          translate-x-[-100%]
                          group-hover:translate-x-0
                          transition-transform duration-300
                        "
                      />

                      <span
                        className="
                          absolute left-0 top-0 h-full w-1
                          bg-white/70
                          scale-y-0
                          group-hover:scale-y-100
                          transition-transform duration-300
                          origin-top
                        "
                      />

                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-[15px]">
                        <div className="text-xl font-bold">
                          <MdOutlineFileDownload />
                        </div>
                        Download Resume
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1200px] mx-auto px-2 sm:px-6 pb-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              Architecting the digital future
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-2/3 dark:bg-zinc-900 border dark:border-white/10 border-gray-200 dark:border-gray-800 shadow-sm p-6 rounded-2xl">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">Core Technologies</h3>
                  <span className="text-[#498d8d] text-sm">
                    <MdOutlineTerminal className="text-xl" />
                  </span>
                </div>

                <div className="p-1 thin-scroll flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-2">
                  {[
                    "C++",
                    "Java",
                    "Python",
                    "JS",
                    "HTML5",
                    "CSS3",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "Flask",
                    "FastAPI",
                    "Redux",
                    "Material-UI",
                    "pandas",
                    "NumPy",
                    "JWT",
                    "bcrypt",
                    "MySQL",
                    "MongoDB",
                    "PostgreSQL",
                    "Git",
                    "GitHub",
                    "Docker",
                    "Google Cloud Platform",
                    "VS Code",
                    "IntelliJ",
                    "Eclipse",
                    "Jupyter",
                    "Postman",
                    "Nodemon",
                    "DSA",
                    "OS",
                    "OOP’s",
                    "DBMS",
                    "Communication",
                    "Teamwork",
                    "Problem-Solving",
                    "Adaptability",
                    "Time Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-400/25 dark:bg-zinc-800 px-3 py-1 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/3 bg-[#498d8d] text-white p-6 rounded-2xl flex sm:flex-col justify-between items-center sm:items-start">
                <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                  <MdWorkOutline className="text-xl" />
                </div>

                <div>
                  <p className="text-4xl font-black">00</p>
                  <p className="uppercase text-xs tracking-widest opacity-80">
                    Years Professional
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
            <div className="col-span-12 lg:col-span-4 experience-card bg-white dark:bg-zinc-900/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm w-full md:w-1/3">
              <div className="flex mb-2 flex-col w-full md:w-1/3">
                <p className="text-[#498d8d] text-lg uppercase mb-2 font-bold">
                  Architecture
                </p>
                <h3 className="font-bold w-[300px]">My Philosophy</h3>
              </div>

              <div className=" gap-3">
                
                <p className="text-sm text-zinc-400 leading-relaxed">
                  I believe in clean code that's easy to read and systems that
                  are built to scale. Aesthetics should never sacrifice
                  performance.
                </p>
              </div>
          </div>

              <div className="w-full md:w-2/3 relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpX9jBa9Q6z8DP52WhiyaoNRDPuwLD-D-xby6FeqQsrferYW1d4Fu73W7mdA-v0Dj56eIfz5ku2nv0T2fzxVpz4C3n3MDiFKeIVT2nZZe43L6ozNqosduykSkILYe7T9lp-psItDtffKcw5JpVPgyRyPxD7eKn_IEwsz7l6pfWSHq92rEdbuRI95jqL6GXbiaiNszWBuKjgFMj1hHeA4halw3oGMimh8cf-QlIA2qcvED_6WNM7XUvyT99PPEubc-sPED6HeO49tn8"
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-[#498d8d]/40 flex items-center justify-center">
                  <p className="text-white text-xl sm:text-2xl font-black">
                    DESIGN SYSTEM MINDSET
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="relative items-center justify-center flex-col flex px-7 mb-7">
            <div className="border-[0.5px] border-gray-400/50 dark:border-white/60 w-[90%]"></div>
            <Message
              heading="Ready to build something extraordinary?"
              para="Let's collaborate on your next project. Whether it's a complex web app or a high-performance landing page, I'm here to bring it to life."
              buttonText1="Start a Project"
              buttonText2="Say Hello"
              link1="/contacts"
              link2="/contacts"
            />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-bold">{value}</p>
      <p className="text-xs uppercase text-[#6e7c7c] dark:text-zinc-400">
        {label}
      </p>
    </div>
  );
}
