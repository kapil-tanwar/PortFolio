import Footer from "../components/Footer";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Fake News Detector",
      description: "ML powered web app to detect fake news.",
      githubLink: "https://github.com/yourname/fake-news",
      liveLink: "https://fake-news.vercel.app",
      skills: ["React", "Python", "ML", "Flask"],
      image:
        "https://imgs.search.brave.com/fPIB1mLW-WfMTZ0YuHiS0kAmZjo07l27PBj4g6bmYYI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGVt/b24tc2xheWVyLTRr/LXBpY3R1cmVzLW9w/NTZ3amFpdzVkZ3Y0/MXQuanBn",
    },
    {
      title: "Attendance System",
      description: "Role-based attendance dashboard.",
      githubLink: "https://github.com/yourname/attendance",
      liveLink: "https://attendance.vercel.app",
      skills: ["React", "Node", "MongoDB"],
      image:
        "https://imgs.search.brave.com/McQldqpQ4y5VQ3ce2VGB4lTm10TEzCOvQQEizKzSC8c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjQx/MjgzNy5qcGc",
    },
    {
      title: "AI Fake News Detector",
      description: "ML powered web app to detect fake news.",
      githubLink: "https://github.com/yourname/fake-news",
      liveLink: "https://fake-news.vercel.app",
      skills: ["React", "Python", "ML", "Flask"],
      image:
        "https://imgs.search.brave.com/fPIB1mLW-WfMTZ0YuHiS0kAmZjo07l27PBj4g6bmYYI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGVt/b24tc2xheWVyLTRr/LXBpY3R1cmVzLW9w/NTZ3amFpdzVkZ3Y0/MXQuanBn",
    },
    {
      title: "Attendance System",
      description: "Role-based attendance dashboard.",
      githubLink: "https://github.com/yourname/attendance",
      liveLink: "https://attendance.vercel.app",
      skills: ["React", "Node", "MongoDB"],
      image:
        "https://imgs.search.brave.com/McQldqpQ4y5VQ3ce2VGB4lTm10TEzCOvQQEizKzSC8c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjQx/MjgzNy5qcGc",
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
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                Portfolio 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                Featured Projects
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

            <div className="mt-20 border-t-1 border-white/40 w-full text-[12px] md:text-lg"></div>
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
