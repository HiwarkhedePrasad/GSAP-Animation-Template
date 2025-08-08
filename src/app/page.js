"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const HomePage = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Simple scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center animate-on-scroll"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Prasad Hiwarkhede
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              A passionate developer creating beautiful and functional web
              experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                href="#about"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="animate-on-scroll"
              style={{
                opacity: 0,
                transform: "translateX(-30px)",
                transition: "all 0.8s ease-out",
              }}
            >
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a dedicated developer with a passion for creating innovative
                solutions. With expertise in modern web technologies, I bring
                ideas to life through clean code and intuitive design.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the community.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="animate-on-scroll"
              style={{
                opacity: 0,
                transform: "translateX(30px)",
                transition: "all 0.8s ease-out",
              }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-12 animate-on-scroll"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I work with a variety of technologies to create robust and
              scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "GSAP",
                ],
                icon: "🎨",
              },
              {
                title: "Backend Development",
                skills: [
                  "Node.js",
                  "Express",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                ],
                icon: "⚙️",
              },
              {
                title: "Tools & Platforms",
                skills: ["Git", "Docker", "AWS", "Vercel", "Figma"],
                icon: "🛠️",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "all 0.8s ease-out",
                }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="animate-on-scroll"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phiwarkhede@gmail"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://github.com/HiwarkhedePrasad"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Prasad Hiwarkhede. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
