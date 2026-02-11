import Footer from "../components/Footer";
import Message from "../components/Message";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div
      className="grid-bg min-h-screen 
      bg-[#f7f7f7] dark:bg-[#1a1a1a] 
      text-[#131616] dark:text-white 
      transition-colors duration-300"
    >
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            font-family: 'Epilogue', sans-serif;\n        }\n        .timeline-container::before {\n            content: '';\n            position: absolute;\n            left: 20px;\n            top: 0;\n            bottom: 0;\n            width: 2px;\n            background: #dfe2e2;\n        }\n        .dark .timeline-container::before {\n            background: #333;\n        }\n    ",
        }}
      />
      <div className="relative flex min-h-screen w-full flex-col">
        <Navbar />
        <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 md:px-20 lg:px-10 py-12">
          <div className="mb-16">
            <div className="flex flex-col gap-4">
              <div
                className="inline-flex items-center gap-2 
                bg-[#498d8d]/10 text-[#498d8d]
                px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit"
              >
                ● ABOUT ME
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter max-w-3xl">
                Architecting Digital Solutions with <p className="text-[#498d8d]">Precision</p>
              </h1>
              <p className="text-[#6e7c7c] dark:text-gray-400 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                A deep dive into my professional journey, academic background,
                and the core philosophies that drive my code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#498d8d] dark:text-white">
                    <span className="material-symbols-outlined text-primary ">
                      person_search
                    </span>
                    Professional Summary
                  </h2>
                  <div className="space-y-6 text-[#131616] dark:text-gray-300 leading-relaxed text-lg">
                    <p>
                      I am a Full Stack Developer with a passion for building
                      robust, scalable applications that solve real-world
                      problems. My journey began with a curiosity for how the
                      internet works, which evolved into a professional career
                      focused on clean code, performance, and user experience.
                    </p>
                    <p>
                      I specialize in the MERN stack but remain
                      language-agnostic, choosing the best tool for the job.
                      Whether it's optimizing database queries or crafting
                      pixel-perfect frontend interfaces, I approach every
                      challenge with an architectural mindset—prioritizing
                      long-term maintainability over quick fixes.
                    </p>
                    <p className="border-l-4 border-primary pl-6 py-2 italic font-medium text-primary bg-primary/5 rounded-r-lg text-[#4a8080] dark:text-white">
                      "Code is not just instructions for machines; it's a form
                      of communication between developers and a service to
                      users."
                    </p>
                    <p>
                      Beyond technical skills, I am a strong advocate for
                      open-source and collaborative development. I believe that
                      the best products are built through transparency,
                      continuous feedback, and a shared vision of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[#498d8d] dark:text-white">
                  <span className="material-symbols-outlined text-primary">
                    school
                  </span>
                  Education
                </h2>
                <div className="relative timeline-container flex flex-col gap-10 pl-10 overflow-hidde">
                  <div className="relative overflow-hidde">
                    <div className="absolute top-0 right-0 w-40 sm:w-44 h-40 sm:h-36 bg-[#498d8d]/20 blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-5 bg-[#498d8d]/10 blur-[80px]" />
                    <div className="absolute -left-[30px] top-0 z-10 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
                    <div className="flex flex-col gap-1 p-5 rounded-xl border border-[#dfe2e2] dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:border-primary transition-colors">
                      <span className="text-primary font-bold text-xs uppercase">
                        2023 — 2027
                      </span>
                      <h3 className="font-bold text-lg leading-snug">
                        B.Tech in Information Technology (IT)
                      </h3>
                      <p className="text-[#6e7c7c] dark:text-gray-400 font-medium">
                        Indian Institute of Information Technology, Sonepat
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded">
                          CGPA 9.15/10
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="absolute -left-[30px] top-1 z-10 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
                    <div className="absolute top-0 right-0 w-40 sm:w-44 h-40 sm:h-36 bg-[#498d8d]/20 blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-56 bg-[#498d8d]/10 blur-[80px]" />
                    <div className="flex flex-col gap-1 p-5 rounded-xl border border-[#dfe2e2] dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:border-primary transition-colors">
                      <span className="text-primary font-bold text-xs uppercase">
                        2021 — 2022
                      </span>
                      <h3 className="font-bold text-lg leading-snug">
                        Higher Secondary Education
                      </h3>
                      <p className="text-[#6e7c7c] dark:text-gray-400 font-medium">
                        RPS Public School, Rewari
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded">
                          Percentage: 92%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-[#498d8d] dark:text-white">
                Beyond the Code
              </h2>
              <p className="text-[#6e7c7c] dark:text-gray-400">
                What keeps me inspired outside of my terminal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 relative overflow-hidden border border-[#dfe2e2] dark:border-gray-700 flex flex-col gap-4 group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 w-40 sm:w-44 h-40 sm:h-36 bg-[#498d8d]/20 blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-5 bg-[#498d8d]/10 blur-[80px]" />
                <div className="flex  items-center ">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">What Drives Me</h3>
                </div>
                <p className="text-[#6e7c7c] dark:text-gray-400 text-sm leading-relaxed">
                  The challenge of transforming complex ideas into intuitive
                  digital interfaces. I'm motivated by projects that have a
                  tangible impact on human productivity.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 relative overflow-hidden border border-[#dfe2e2] dark:border-gray-700 flex flex-col gap-4 group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 w-40 sm:w-44 h-40 sm:h-36 bg-[#498d8d]/20 blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-56 bg-[#498d8d]/10 blur-[80px]" />
                <div className="flex items-center ">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <h3 className="text-xl font-bold">Current Focus</h3>
                </div>

                <p className="text-[#6e7c7c] dark:text-gray-400 text-sm leading-relaxed">
                  Currently diving into Artificial Intelligence and Machine
                  Learning, exploring data-driven models, real-world
                  applications, and intelligent system design to solve complex
                  problems efficiently.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 relative overflow-hidden border border-[#dfe2e2] dark:border-gray-700 flex flex-col gap-4 group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 w-40 sm:w-44 h-40 sm:h-56 bg-[#498d8d]/20 blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-56 bg-[#498d8d]/10 blur-[80px]" />
                <div className="flex items-center ">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">camera</span>
                  </div>
                  <h3 className="text-xl font-bold">Creative Outlets</h3>
                </div>

                <p className="text-[#6e7c7c] dark:text-gray-400 text-sm leading-relaxed">
                  When not at my desk, I enjoy exploring visual storytelling,
                  discovering creative narratives, and improving my culinary
                  skills to maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative items-center justify-center flex-col flex">
            <div className="border-[0.7px] dark:border-white/60 border-[#498d8d] w-[90%]"></div>
            <Message
              heading="Interested in working together?"
              para="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
              buttonText1="Get In Touch"
              buttonText2="Resume"
              download={true}
              link1="/contacts"
              link2="https://drive.google.com/file/d/1gbS6O4ebeuftEchGKNYWNX_qRRqzFdIM/view?usp=sharing"
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
