import profileImg from "./assets/profile.jpeg";
import resume from "./assets/resume.pdf";
import frontend1 from "./assets/frontend1.jpeg";
import frontend2 from "./assets/frontend2.jpeg";
import frontend3 from "./assets/frontend3.jpeg";
import frontend4 from "./assets/frontend4.jpeg";
import backend1 from "./assets/backend1.jpeg";
import pl1 from "./assets/pl1.jpeg";
import pl2 from "./assets/pl2.jpeg";
import gen from "./assets/gen.jpeg";
import './App.css'
import { motion } from "framer-motion";
import API from "./services/api";
import { useState, useEffect } from "react";
import './App.css'
import { TypeAnimation } from "react-type-animation";

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
         await API.post("/contact", formData);

    alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
        console.log(error);

  alert(error.message);
      
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedImages, setSelectedImages] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on navbar height
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-dark-card to-black text-white min-h-screen">

      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-5">

          {/* Logo */}
          <h1 className="text-4xl font-extrabold tracking-tight cursor-pointer transition duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Swathi
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'home' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
              <a href="#home">Home</a>
            </li>

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'about' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
              <a href="#about">About</a>
            </li>

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'skills' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
              <a href="#skills">Skills</a>
            </li>

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'projects' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
              <a href="#projects">Projects</a>
            </li>

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'certificates' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
              <a href="#certificates">Certificates</a>
            </li>

            <li className={`underline-offset-4 cursor-pointer transition-colors duration-300 ${activeSection === 'contact' ? 'text-purple-400 underline' : 'hover:text-purple-400 hover:underline'}`}>
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
          <div className="md:hidden bg-black border-t border-purple-500/40">

            <ul className="flex flex-col items-center justify-center gap-8 text-center min-h-[80vh] px-6 text-xl">

              <li className={`${activeSection === 'home' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li className={`${activeSection === 'about' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>

              <li className={`${activeSection === 'skills' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>

              <li className={`${activeSection === 'projects' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li className={`${activeSection === 'certificates' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#certificates" onClick={() => setMenuOpen(false)}>
                  Certificates
                </a>
              </li>

              <li className={`${activeSection === 'contact' ? 'text-purple-400 underline underline-offset-4' : 'hover:text-purple-400 hover:underline underline-offset-4'}`}>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>

            </ul>

          </div>
        )}

      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] -mt-10 px-6 md:px-16 gap-16"
      >

        {/* Left Side Image */}
        <div className="flex-1 flex justify-center">

          {/* Profile Card */}
          <div className="relative w-96 md:w-[26rem]">

            {/* Outer glow card */}
            <div className="relative bg-dark-card border border-purple-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.3)] p-3">

              {/* Decorative dot grid — top right */}
              <div className="absolute top-4 right-4 grid grid-cols-4 gap-[5px] z-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-[4px] h-[4px] rounded-full bg-purple-400/50"></div>
                ))}
              </div>

              {/* Decorative dot grid — bottom left */}
              <div className="absolute bottom-16 left-4 grid grid-cols-3 gap-[5px] z-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-[4px] h-[4px] rounded-full bg-fuchsia-400/40"></div>
                ))}
              </div>

              {/* Profile Photo */}
              <img
                src={profileImg}
                alt="Swathi"
                className="w-full h-250 md:h-[25rem] object-cover object-top rounded-2xl"
              />


            </div>

            {/* Side glow orb */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-fuchsia-500/30 blur-2xl rounded-full pointer-events-none"></div>

          </div>

        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Swathi
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Java Programmer",
              2000,
              "DSA Enthusiast",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-purple-400 text-2xl md:text-3xl font-semibold mt-6 block"
          />

          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Passionate Web and Full Stack Developer skilled in building
            modern, responsive, and user-friendly web applications.
          </p>


          <div className="mt-8 flex flex-col items-start gap-6">

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/Swathi-engineer"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-purple-500 rounded-xl text-purple-400 text-3xl hover:bg-purple-500 hover:text-black transition duration-300"
              >
                <i className="ri-github-fill"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https:www.linkedin.com/in/swathi-s06"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-purple-500 rounded-xl text-purple-400 text-3xl hover:bg-purple-500 hover:text-black transition duration-300"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=swathis.prof@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-purple-500 rounded-xl text-purple-400 text-2xl hover:bg-purple-500 hover:text-black transition duration-300"
              >
                <i className="ri-mail-fill"></i>
              </a>

            </div>

            {/* Resume Button */}
            <a
              href={resume}
              download
              className="bg-purple-400 text-black px-8 py-3 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
            >
              Download Resume
            </a>

          </div>

        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-25 pb-20 px-4 md:px-8 scroll-mt-28">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">
          About Me
        </h2>

        <div className="bg-dark-card backdrop-blur-lg p-10 rounded-3xl border border-purple-500/40 shadow-xl max-w-7xl w-full mx-auto"  >
          <p className="text-gray-300 text-lg leading-9 tracking-wide">
            I am a passionate and self-motivated Web and Full Stack Developer
            with a strong interest in creating modern, responsive, and
            user-friendly web applications. I enjoy transforming ideas into
            interactive digital experiences using modern technologies and clean
            UI design principles.

            <br /><br />

            I have experience working with technologies like HTML, CSS,
            JavaScript, Node.js, Express.js, MongoDB,MySQL, SQL, Python, Java, and C++. Along with development, I also have knowledge in
            UI/UX Design, and problem-solving using Data
            Structures and Algorithms.

            <br /><br />

            I am continuously learning new technologies and improving my skills
            to build impactful real-world applications and grow as a software
            developer.
          </p>
        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-25 pb-20 px-6 md:px-10 scroll-mt-28">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">
          Skills
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "SQL",
            "Python",
            "Java",
            "C++",
            "DSA",
            "Problem-Solving",
            "Time-Management",
            "Communication",
          ].map((skill) => (

            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-dark-card border border-purple-500/20 rounded-3xl p-8 text-center overflow-hidden hover:-translate-y-3 hover:border-purple-400 transition duration-300 shadow-lg shadow-purple-500/10"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Skill Name */}
              <h3 className="relative text-xl md:text-2xl font-semibold text-white group-hover:text-purple-300 transition duration-300">
                {skill}
              </h3>

            </motion.div>

          ))}


        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-25 pb-20 px-6 md:px-10 scroll-mt-28">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">
          Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

          {/* Left — Project Cards */}
          <div className="flex flex-col gap-6 md:w-1/2">

            

            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-purple-500/40 rounded-3xl p-6 hover:border-purple-400 hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">STEM Quiz Platform</h3>
              <p className="text-gray-400 text-sm leading-7">Interactive quiz app with leaderboard and gamification system.</p>
            </motion.div>
<div className="mt-8">
                <a
                  href="https://github.com/Swathi-engineer/stem-quiz-platform"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 px-6 py-2.5 rounded-xl hover:bg-purple-500 hover:text-white transition duration-300 font-medium"
                >
                  <i className="ri-github-fill text-2xl"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
           

          </div>

          {/* Right — Project Description Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-dark-card backdrop-blur-lg p-8 rounded-3xl border border-purple-500/40 shadow-xl h-full">

              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Offline Gamified Learning Platform
              </h3>

              <ul className="text-gray-300 text-base leading-9 space-y-3 list-none">
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>The platform allows students to attend quizzes even in <span className="text-white font-medium">offline mode</span> using browser storage, helping them continue learning without internet connectivity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>The quiz system includes <span className="text-white font-medium">timers, XP points, streak bonuses,</span> and level-unlocking features to make learning more interactive and enjoyable for students.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Uses <span className="text-white font-medium">Node.js, Express, and MongoDB</span> to handle user login, question management, score saving, and progress tracking.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Frontend built with <span className="text-white font-medium">HTML, CSS, and JavaScript</span> — providing a simple, fast, and responsive interface for students, teachers, and administrators.</span>
                </li>
              </ul>

              
            </div>
          </motion.div>

        </div>
      </section>


      {/* Certificates Section */}
      <section
        id="certificates"
        className="min-h-screen pt-25 pb-20 px-6 md:px-10 scroll-mt-28"
      >

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {[
            {
              title: "Frontend Development",
              desc: "Completed certification focused on modern frontend web development using HTML, CSS, and JavaScript",
              links: [
                { label: "Part 1", url: frontend1 },
                { label: "Part 2", url: frontend2 },
                { label: "Part 3", url: frontend3 },
                { label: "Part 4", url: frontend4 }
              ],
            },

            {
              title: "Backend Development & Databases",
              desc: "Learned MongoDB database concepts including collections, CRUD operations, and database integration.",
              link: [
                { label: "Part 1", url: backend1 },
              ], // Add your actual certificate link here
            },

            {
              title: "Programming Languages",
              desc: "Gained knowledge in Java programming fundamentals, object-oriented programming, and problem solving.",
              link: [
                { label: "Part 1", url: pl1 },
                { label: "Part 2", url: pl2 },
              ], // Add your actual certificate link here
            },

            {
              title: "Generative AI",
              desc: "Explored Generative AI concepts, AI tools, prompt engineering, and modern AI applications.",
              link: [
                { label: "Part 1", url: gen },
              ], // Add your actual certificate link here
            },


          ].map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark-card border border-purple-500/20 rounded-3xl p-8 overflow-hidden hover:-translate-y-3 hover:border-purple-400 transition duration-300 shadow-lg shadow-purple-500/10 flex flex-col h-full min-h-[300px]"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Certificate Content */}
              <div className="relative flex flex-col flex-1">

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition duration-300">
                  {cert.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm flex-1">
                  {cert.desc}
                </p>

                {/* Button(s) */}
                {cert.links || Array.isArray(cert.link) ? (
                  <button
                    onClick={() => {
                      const items = cert.links || cert.link;
                      setSelectedImages(items.map(item => item.url));
                    }}
                    className="mt-6 border border-purple-500 text-purple-400 px-5 py-2 rounded-xl hover:bg-purple-500 hover:text-white transition duration-300 w-fit inline-block text-center cursor-pointer"
                  >
                    View Certificate
                  </button>
                ) : (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 border border-purple-500 text-purple-400 px-5 py-2 rounded-xl hover:bg-purple-500 hover:text-white transition duration-300 w-fit inline-block text-center cursor-pointer"
                    onClick={(e) => {
                      if (cert.link === "#") {
                        e.preventDefault();
                        alert("Certificate link not yet added!");
                      }
                    }}
                  >
                    View Certificate
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-25 pb-20 px-6 md:px-10 scroll-mt-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent mb-3">
            Contact Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/5 flex flex-col gap-5"
          >

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=swathis.prof@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 bg-dark-card border border-purple-500/30 rounded-2xl px-6 py-5 hover:border-purple-400 hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition duration-300">
                <i className="ri-mail-line"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Email</p>
                <p className="text-white font-medium text-sm">swathis.prof@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/swathi-s06"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 bg-dark-card border border-purple-500/30 rounded-2xl px-6 py-5 hover:border-purple-400 hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition duration-300">
                <i className="ri-linkedin-box-line"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">LinkedIn</p>
                <p className="text-white font-medium text-sm">linkedin.com/in/swathi-s06</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Swathi-engineer"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 bg-dark-card border border-purple-500/30 rounded-2xl px-6 py-5 hover:border-purple-400 hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition duration-300">
                <i className="ri-github-line"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">GitHub</p>
                <p className="text-white font-medium text-sm">github.com/Swathi-engineer</p>
              </div>
            </a>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-6 py-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-gray-300 text-sm">Available for an internship &amp; freelancing projects </p>
            </div>

          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <div className="relative bg-dark-card backdrop-blur-lg border border-purple-500/40 rounded-3xl p-8 shadow-xl">

              {/* Subtle glow behind form */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 uppercase tracking-widest mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Swathi S"
                    className="bg-black/60 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-400 text-white placeholder-gray-600 transition duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-black/60 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-400 text-white placeholder-gray-600 transition duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 uppercase tracking-widest mb-1">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="bg-black/60 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-400 text-white placeholder-gray-600 transition duration-300 resize-none"
                  ></textarea>
                </div>

                <button type="submit"
                  className="mt-2 w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 transition duration-300">
                  Send Message ✉️
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/40 py-8 text-center text-gray-400">
        © 2026 Swathi | Full Stack Developer Portfolio
      </footer>

      {/* Image Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm">
          <div className="relative bg-dark-card border border-purple-500/40 rounded-3xl p-6 sm:p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_80px_rgba(168,85,247,0.2)]">
            
            <div className="sticky top-0 right-0 flex justify-end z-10 -mt-2 -mr-2 mb-4">
              <button 
                onClick={() => setSelectedImages(null)}
                className="bg-black/50 hover:bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-purple-500/40 transition duration-300"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {selectedImages.map((imgUrl, i) => (
                <img 
                  key={i} 
                  src={imgUrl} 
                  alt={`Certificate ${i+1}`} 
                  className="w-full rounded-xl border border-purple-500/20 shadow-lg object-contain" 
                />
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default App



