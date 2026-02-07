import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experiences = () => {
  return (
    <div
      className='className="grid-bg min-h-screen 
      bg-[#f7f7f7] dark:bg-[#1a1a1a] 
      text-[#131616] dark:text-white 
      transition-colors duration-300"'
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
            "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            font-family: 'Epilogue', sans-serif;\n        }\n        .experience-card:hover {\n            box-shadow: 0 10px 30px -10px rgba(73, 141, 141, 0.1);\n            border-color: #498d8d40;\n        }\n    ",
        }}
      />
      <div className="layout-container flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10 py-12">
          <div className="mb-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-[#131616] dark:text-white">
                Professional <span className="text-primary">Experience</span>
              </h1>
              <p className="text-[#6e7c7c] dark:text-gray-400 text-lg max-w-2xl">
                A decade of building scalable web architectures, leading
                cross-functional teams, and shipping production-ready code for
                global enterprises and fast-moving startups.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-32 flex flex-col gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#6e7c7c] mb-6">
                    Timeline
                  </h3>
                  <div className="flex flex-col gap-1">
                    <a
                      className="group flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-bold"
                      href="#present"
                    >
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      <span>Present</span>
                    </a>

                    <a
                      className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      href="#2025"
                    >
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        school
                      </span>
                      <span className="text-sm font-medium">2025</span>
                    </a>
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-xs font-semibold text-primary uppercase mb-2">
                    Availability
                  </p>
                  <p className="text-sm text-[#6e7c7c] dark:text-gray-400">
                    Open to select freelance architecture projects.
                  </p>
                </div>
              </div>
            </aside>

            <div className="flex flex-col gap-12">
              <section
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 mb-12"
                id={2025}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-background-dark" />
                <div className="experience-card bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
                  <div className="flex flex-wrap justify-between  gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#131616] dark:text-white flex items-center">
                        <h2 className="text-lg md:text-xl mr-2">
                          Web Developer Intern |{" "}
                        </h2>
                        <a
                          href="#"
                          className="text-[14px] underline text-gray-400 mt-1"
                        >
                          Link
                        </a>
                      </h3>
                      <p className="text-[#6e7c7c] dark:text-gray-400 font-semibold text-base">
                        Elevate Labs
                      </p>
                    </div>
                    <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-[#6e7c7c] dark:text-gray-400 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 flex justify-center items-center">
                      Nov 2025 - Dec 2025
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-[#131616] dark:text-gray-300 leading-relaxed">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        check_circle
                      </span>
                      <span>
                        Developed full-stack web applications using the MERN
                        stack (MongoDB, Express, React, Node.js) with clean and
                        scalable code.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[#131616] dark:text-gray-300 leading-relaxed">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        check_circle
                      </span>
                      <span>
                        Built responsive user interfaces, secure REST APIs, and
                        implemented authentication with database integration.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[#131616] dark:text-gray-300 leading-relaxed">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                        check_circle
                      </span>
                      <span>
                        Deployed real-world projects with live demos and
                        maintained complete source code documentation on GitHub.
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-[#6e7c7c] dark:text-gray-400">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-[#6e7c7c] dark:text-gray-400">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-[#6e7c7c] dark:text-gray-400">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-[#6e7c7c] dark:text-gray-400">
                      Express.js
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Experiences;
