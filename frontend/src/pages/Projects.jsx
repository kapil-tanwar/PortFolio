import Footer from "../components/Footer";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio to showcase projects, skills, and experience with a clean, responsive design.",
      githubLink: "https://github.com/kapil-tanwar/PortFolio.git",
      liveLink: "#",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "portfolio.png",
    },
    {
      title: "Campus-Check-In ",
      description: "Check-In – AI-Based Attendance System",
      githubLink: "#",
      liveLink: "#",
      skills: ["React", "Node.js", "MongoDB", "Express.js","TensorFlow.js","Python",],
      image:
        "/commin-soon.png",
    },
    {
      title: "BingeBox ",
      description: "Visualize spending, monitor savings, and stay in control effortlessly.",
      githubLink: "https://github.com/kapil-tanwar/BingeBox.git",
      liveLink: "https://bingebox-lt2n.onrender.com/",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "/commin-soon.png",
    },
    {
      title: "TrackWise",
      description: "Visualize spending, monitor savings, and stay in control effortlessly.",
      githubLink: "https://github.com/kapil-tanwar/TrackWise.git",
      liveLink: "https://track-wise-three.vercel.app/",
      skills: ["TypeScript", "Node.js", "MongoDB", "Express.js"],
      image:
        "/trackwise.png",
    },
    {
      title: "JoinIN ",
      description: "A real-time chat app for seamless communication and collaboration.",
      githubLink: "https://github.com/kapil-tanwar/JoinIn.git",
      liveLink: "https://chat-in-1a0k.onrender.com/",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "/commin-soon.png",
    },
    {
      title: "fresh-finds",
      description: "@@@@@@@@@@@",
      githubLink: "https://github.com/kapil-tanwar/fresh-find.git",
      liveLink: "https://fresh-find-mocha.vercel.app/",
      skills: ["React", "Node.js", "MongoDB","Express.js"],
      image:
        "/commin-soon.png",
    },
    {
      title: "URL_shortner_mern",
      description: "A modern web app built to shorten and manage URLs efficiently.",
      githubLink: "https://github.com/kapil-tanwar/URL_shortner_mern.git",
      liveLink: "https://url-shortner-mern-1-vjpg.onrender.com/",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "/url_short.png",
    },
    {
      title: "bubble-clicker",
      description: "A fast-paced number clicking game to test speed and focus.",
      githubLink: "https://github.com/kapil-tanwar/bubble-clicker.git",
      liveLink: "https://kapil-tanwar.github.io/bubble-clicker/",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "/bubble_clicker.png",
    },
  ];
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
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@400;500;700&display=swap"
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
            "\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 1.5rem;\n        }\n        .bento-item {\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .bento-item:hover {\n            transform: translateY(-4px);\n            border-color: #498d8d;\n        }\n        .project-overlay {\n            opacity: 0;\n            transition: opacity 0.3s ease;\n        }\n        .bento-item:hover .project-overlay {\n            opacity: 1;\n        }\n        .glass-tag {\n            background: rgba(73, 141, 141, 0.15);\n            backdrop-filter: blur(4px);\n            border: 1px solid rgba(73, 141, 141, 0.3);\n        }\n    ",
        }}
      />
      <div className="layout-container flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 px-6 md:px-20 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div
                className="inline-flex items-center 
                bg-[#498d8d]/10 text-[#498d8d]
                px-3 py-1 rounded-full text-xs font-bold mb-4"
              >
                ● PROJECTS
              </div>
              <h1 className="flex md:gap-5 gap-2 flex-col md:flex-row text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                Featured <p className="text-[#498d8d]">Projects</p>
              </h1>
              <p className="text-[#6e7c7c] dark:text-gray-400 text-xl max-w-2xl leading-relaxed">
                A curation of architectural solutions where performance meets
                design. Building high-performance, scalable web ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  skills={project.skills}
                  image={project.image}
                />
              ))}
            </div>

            <div className="mt-20 border-t-1 border-gray-500 dark:border-white/40 w-full text-[12px] md:text-lg"></div>
            <Message
              heading="Interested in collaborating?"
              para="I'm currently available for freelance projects and full-time opportunities."
              buttonText1="Start a Project"
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

export default Projects;
