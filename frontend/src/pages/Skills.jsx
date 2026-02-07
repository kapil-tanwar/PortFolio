import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaTools,
  FaBook,
  FaUsers,
  FaProjectDiagram,
  FaBrain,
  FaCuttlefish,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaCloud,
  FaLaptopCode,
  FaKey,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiRedux,
  SiMui,
  SiGooglecloud,
  SiJupyter,
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
} from "react-icons/si";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#131616] dark:text-white">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 md:px-20 lg:px-40 py-14">        
        <div className="mb-14">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
            Capabilities
          </p>
          <h1 className="text-5xl font-black mb-4">
            Updated Professional Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of my technical expertise, from low-level
            programming to modern cloud infrastructure and core computer science
            fundamentals.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6">          
          <div className="experience-card col-span-12 lg:col-span-8 bg-white dark:bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-10">              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-primary text-2xl text-[#6ccdcd]" />
                  <h2 className="text-2xl font-bold text-[#6ccdcd]">
                    Languages
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Skill icon={<FaCuttlefish />} label="C++" />
                  <Skill icon={<FaJava />} label="Java" />
                  <Skill icon={<FaPython />} label="Python" />
                  <Skill icon={<FaJs />} label="JavaScript" />
                  <Skill icon={<FaHtml5 />} label="HTML5" />
                  <Skill icon={<FaCss3Alt />} label="CSS3" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaLayerGroup className="text-primary text-2xl text-[#6ccdcd]" />
                  <h2 className="text-2xl font-bold text-[#6ccdcd]">
                    Frameworks
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Skill icon={<FaReact />} label="React.js" />
                  <Skill icon={<FaNodeJs />} label="Node.js" />
                  <Skill icon={<SiNextdotjs />} label="Next.js" />
                  <Skill icon={<SiExpress />} label="Express.js" />
                  <Skill icon={<SiFlask />} label="Flask" />
                  <Skill icon={<SiFastapi />} label="FastAPI" />
                  <Skill icon={<SiRedux />} label="Redux" />
                  <Skill icon={<SiMui />} label="Material-UI" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 bg-primary text-white p-8 rounded-2xl bg-[#326161]">
            <div className="flex items-center gap-3 mb-6">
              <FaDatabase className="text-3xl" />
              <h2 className="text-2xl font-bold">Database</h2>
            </div>

            <div className="space-y-4">
              <RowSkill icon={<FaDatabase />} label="MySQL" />
              <RowSkill icon={<FaDatabase />} label="MongoDB" />
              <RowSkill icon={<FaDatabase />} label="PostgreSQL" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6 mt-6">          
          <div className="col-span-12 lg:col-span-4 experience-card bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaBook className="text-primary text-xl text-[#6ccdcd]" />
              <h2 className="text-xl font-bold text-[#6ccdcd]">Libraries</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <GridSkill icon={<FaBrain />} label="pandas" />
              <GridSkill icon={<FaBrain />} label="NumPy" />
              <GridSkill icon={<FaKey />} label="JWT" />
              <GridSkill icon={<FaKey />} label="bcrypt" />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-8   experience-card bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="text-primary text-xl text-[#6ccdcd]" />
              <h2 className="text-xl font-bold text-[#6ccdcd]">
                Developer Tools
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Tool icon={<FaGithub />} label="Git & GitHub" />
              <Tool icon={<FaDocker />} label="Docker" />
              <Tool icon={<SiGooglecloud />} label="GCP" />
              <Tool icon={<FaLaptopCode />} label="VS Code" />
              <Tool icon={<SiJupyter />} label="Jupyter" />
              <Tool icon={<SiPostman />} label="Postman" />
              <Tool icon={<SiIntellijidea />} label="IntelliJ IDEA" />
              <Tool icon={<SiEclipseide />} label="Eclipse" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6 mt-6">          
          <div className="col-span-12 lg:col-span-6  experience-card bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaProjectDiagram className="text-primary text-xl text-[#6ccdcd]" />
              <h2 className="text-xl font-bold text-[#6ccdcd]">
                Core Competencies
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <GridSkill icon={<FaProjectDiagram />} label="DSA" />
              <GridSkill icon={<FaBrain />} label="Operating System" />
              <GridSkill icon={<FaCode />} label="OOPs" />
              <GridSkill icon={<FaDatabase />} label="DBMS" />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 experience-card bg-zinc-900/90 dark:bg-background-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaUsers className="text-primary text-xl text-[#6ccdcd]" />
              <h2 className="text-xl font-bold text-[#6ccdcd]">Soft Skills</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Pill icon={<FaUsers />} label="Communication" />
              <Pill icon={<FaUsers />} label="Teamwork" />
              <Pill icon={<FaBrain />} label="Problem-Solving" />
              <Pill icon={<FaBrain />} label="Adaptability" />
              <Pill icon={<FaKey />} label="Time Management" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};


const Skill = ({ icon, label }) => (
  <span className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 text-primary text-sm font-semibold rounded-lg">
    {icon}
    {label}
  </span>
);

const RowSkill = ({ icon, label }) => (
  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl font-bold">
    {icon}
    {label}
  </div>
);

const GridSkill = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#333] rounded-lg font-medium text-sm">
    {icon}
    {label}
  </div>
);

const Tool = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 border border-dashed rounded-xl font-bold text-sm hover:bg-primary/5 transition">
    {icon}
    {label}
  </div>
);

const Pill = ({ icon, label }) => (
  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#333] rounded-lg font-medium">
    {icon}
    {label}
  </span>
);

export default Skills;
