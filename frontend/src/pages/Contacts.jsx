import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineFileDownload } from "react-icons/md";
import toast from "react-hot-toast"; 

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
      const res = await fetch("https://portfolio-dejk.onrender.com/api/contact", {
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

  const inputClass =
    "input-focus-teal w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm transition-all";

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#131616] dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4">Resume & Contact</h1>
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
                  <span className="relative z-10">Download Resume</span>
                </button>
              </a>
            </div>

            <div className="relative h-[75vh] rounded-xl overflow-hidden border dark:border-[#333] bg-[#111]">
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full blur-[2px] opacity-80 pointer-events-none"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-[#498d8d] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
                >
                  View Full Resume
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's Build Something Together
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white dark:bg-[#252525] p-8 rounded-xl border dark:border-[#333]"
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
                className={`${inputClass} resize-none`}
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
