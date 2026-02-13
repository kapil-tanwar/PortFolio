import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineFileDownload } from "react-icons/md";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://portfolio-dejk.onrender.com";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNO: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
        return;
      }

      toast.success("Message sent successfully"); 

      setFormData({
        firstName: "",
        lastName: "",
        phoneNO: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Server error. Please try again later."); 
    }
  };


  const buttonClass = `
    group relative overflow-hidden
    bg-[#498d8d] text-white
    px-5 py-3 rounded-lg
    font-bold
    transition-all duration-300
    hover:shadow-lg
    flex items-center gap-2
    cursor-pointer
  `;

  const hoverBg = `
    absolute inset-0
    bg-gradient-to-r from-[#498d8d] to-[#2f6f6f]
    -translate-x-full
    group-hover:translate-x-0
    transition-transform duration-300
  `;

  const leftBar = `
    absolute left-0 top-0 h-full w-1
    bg-white/70
    scale-y-0
    group-hover:scale-y-100
    transition-transform duration-300
    origin-top
  `;
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

  const inputClass =
    "input-focus-teal w-full px-4 py-3 rounded-lg border border-gray-600/60 dark:border-gray-700 bg-transparent text-sm transition-all  dark:text-gray-200 ";

  return (
    <div className="grid-bg min-h-screen bg-[#f0f4f4] dark:bg-[#1a1a1a] text-[#131616] dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 
            bg-[#498d8d]/10 text-[#498d8d]
            px-3 py-1 rounded-full text-xs font-bold"
          >
            ● CONTACTS
          </div>
          <h1 className="text-5xl font-black mb-4 flex flex-col md:flex-row gap-3">Resume <p className="text-[#498d8d]">& Contact</p></h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            I'm currently looking for new challenges as a Full Stack Developer.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Professional Resume</h3>

              <a
                href="https://drive.google.com/file/d/1gbS6O4ebeuftEchGKNYWNX_qRRqzFdIM/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={buttonClass}>
                  <span className={hoverBg} />
                  <span className={leftBar} />
                  <MdOutlineFileDownload className="relative z-10 text-xl" />
                  <span className="relative z-10 md:block hidden">Download Resume</span>
                  <span className="relative z-10 md:hidden block">Resume</span>
                </button>
              </a>
            </div>

            <div className="relative h-[75vh] rounded-xl overflow-hidden border dark:border-[#333] bg-[#111]">
              <img src="templet.jpeg" alt="img" className="block blur-[4px] w-full h-full object-contain object-center"/>

  
              <NavLink to="/resume.pdf " target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/30" >
                <button className={buttonBase}>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#498d8d] to-[#2f6f6f] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute left-0 top-0 h-full w-1 bg-white/70 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="relative z-10 mr-3 group-hover:-translate-x-2 transition-transform duration-300 text-lg">
                    View Full Resume
                  </span>

                  <span className="absolute right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 text-xl font-bold">
                    →
                  </span>
                </button>
            </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's Build Something Together
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5  dark:bg-[#252525] p-8 rounded-xl border dark:border-[#333]"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className={inputClass}
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  className={inputClass}
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className={inputClass}
                  placeholder="Phone Number"
                  name="phoneNO"
                  value={formData.phoneNO}
                  onChange={handleChange}
                  required
                />
                <input
                  className={inputClass}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                className={inputClass}
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows={5}
                className="input-focus-teal w-full px-4 py-3 rounded-lg border border-gray-600/60 dark:border-gray-700 bg-transparent text-sm transition-all placeholder-gray-600 dark:placeholder-gray-500"
                placeholder="Tell me about your project..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="flex justify-center">
                <button type="submit" className={buttonClass}>
                  <span className={hoverBg} />
                  <span className={leftBar} />
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
