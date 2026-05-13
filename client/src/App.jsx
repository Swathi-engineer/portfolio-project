
import resume from "./assets/resume.pdf";
import './App.css'
import { motion } from "framer-motion";
import API from "./services/api";
import { useState } from "react";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/contact", formData);

    alert(res.data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    alert("Message failed");
  }
};
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">

    {/* Navbar */}
{/* Navbar */}
<nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-5">

    {/* Logo */}
    <h1 className="text-4xl font-extrabold tracking-tight">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Swathi
      </span>
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

      <li className="hover:text-cyan-400 transition duration-300">
        <a href="#home">Home</a>
      </li>

      <li className="hover:text-cyan-400 transition duration-300">
        <a href="#about">About</a>
      </li>

      <li className="hover:text-cyan-400 transition duration-300">
        <a href="#skills">Skills</a>
      </li>

      <li className="hover:text-cyan-400 transition duration-300">
        <a href="#projects">Projects</a>
      </li>

      <li className="hover:text-cyan-400 transition duration-300">
        <a href="#contact">Contact</a>
      </li>

    </ul>

    {/* Mobile Button */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-black border-t border-gray-800">

      <ul className="flex flex-col items-center gap-6 py-6 text-lg">

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

      </ul>

    </div>
  )}

</nav>

      {/* Hero Section */}
      <motion.section id="home"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center h-[85vh] px-6 scroll-mt-24"
      >
        <h2 className="text-6xl font-bold leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Swathi
</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Passionate Web and Full Stack Developer skilled in building
          modern, responsive, and user-friendly web applications.
        </p>

        
          <div className="mt-8 flex flex-wrap justify-center gap-4">

  <a
    href={resume}
    download
    className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
  >
    Download Resume
  </a>

  <a
    href="https://github.com/Swathi-engineer"
    target="_blank"
    rel="noreferrer"
    className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/swathi-s06"
    target="_blank"
    rel="noreferrer"
    className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300"
  >
    LinkedIn
  </a>

</div>
         
      </motion.section>

      {/* About Section */}
      <motion.section
  id="about"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
       className="min-h-screen py-24 px-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

       <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl border border-gray-800 shadow-xl">
          <p className="text-gray-300 text-lg leading-8">
            Passionate Web and Full Stack Developer skilled in building
            modern, responsive, and user-friendly web applications.
            Interested in creating clean UI designs and interactive
            digital experiences using modern web technologies.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
     <section id="skills" className="min-h-screen py-24 px-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Figma",
          ].map((skill) => (
            
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
              key={skill}
              className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-24 px-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
         <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              className="w-full h-52 object-cover"
              alt="project"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Hospital Management System
              </h3>
              <p className="text-gray-400">
                Healthcare system with appointments and admin dashboard.
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}
     <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              className="w-full h-52 object-cover"
              alt="project"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                STEM Quiz Platform
              </h3>
              <p className="text-gray-400">
                Interactive quiz app with leaderboard system.
              </p>
            </div>
          </motion.div>

          {/* Project 3 */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              className="w-full h-52 object-cover"
              alt="project"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                E-Commerce Website
              </h3>
              <p className="text-gray-400">
                Full stack shopping platform with authentication.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact Section */}
     <motion.section
  id="contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
     className="min-h-screen py-24 px-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 max-w-3xl mx-auto">

         <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
/>
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
/>

            <textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message"
  className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
></textarea>

            <button className="bg-cyan-400 text-black px-6 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Send Message
            </button>

          </form>

        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        © 2026 Swathi | Full Stack Developer Portfolio
      </footer>

    </div>
  )
}

export default App