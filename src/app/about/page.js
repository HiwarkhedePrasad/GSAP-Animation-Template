"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

const About = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const cardRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    // Create particles
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-1 h-1 bg-blue-400 rounded-full opacity-30";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        containerRef.current?.appendChild(particle);
        particles.push(particle);
      }
      particlesRef.current = particles;
    };

    createParticles();

    // Animate particles floating
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: `random(-200, 200)`,
        y: `random(-200, 200)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    // Main heading animation sequence
    const tl = gsap.timeline();

    // Split text into letters for individual animation
    const heading = headingRef.current;
    if (heading) {
      const text = heading.textContent;
      heading.innerHTML = "";

      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.className = "inline-block";
        heading.appendChild(span);
      });

      const letters = heading.querySelectorAll("span");

      // Initial state
      gsap.set(letters, {
        opacity: 0,
        y: 100,
        rotateX: 90,
        scale: 0.3,
        filter: "blur(20px)",
      });

      // Animate letters individually
      tl.to(letters, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "back.out(2)",
        stagger: {
          each: 0.08,
          from: "center",
        },
      })
        .to(
          letters,
          {
            color: "#3b82f6",
            textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            duration: 0.5,
            stagger: 0.03,
          },
          "-=0.5"
        )
        .to(
          letters,
          {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
          },
          "+=0.5"
        );
    }

    // Background gradient animation
    gsap.to(containerRef.current, {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating geometric shapes
    const shapes = [];
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement("div");
      const shapeTypes = ["w-8 h-8", "w-6 h-12", "w-12 h-6"];
      const colors = [
        "bg-purple-400",
        "bg-pink-400",
        "bg-blue-400",
        "bg-green-400",
      ];

      shape.className = `absolute ${
        shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      } ${
        colors[Math.floor(Math.random() * colors.length)]
      } rounded-lg opacity-20 blur-sm`;
      shape.style.left = Math.random() * 100 + "vw";
      shape.style.top = Math.random() * 100 + "vh";

      containerRef.current?.appendChild(shape);
      shapes.push(shape);
      floatingElementsRef.current.push(shape);

      // Animate floating shapes
      gsap.to(shape, {
        x: `random(-300, 300)`,
        y: `random(-300, 300)`,
        rotation: 360,
        duration: `random(8, 15)`,
        repeat: -1,
        ease: "none",
      });
    }

    // Card animation
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateY: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 1,
        }
      );
    }
  }, []);

  // Parallax effect on mouse move
  useGSAP(() => {
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        x: mousePosition.x,
        y: mousePosition.y * 0.5,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    floatingElementsRef.current.forEach((element, i) => {
      gsap.to(element, {
        x: mousePosition.x * (0.2 + i * 0.1),
        y: mousePosition.y * (0.1 + i * 0.05),
        duration: 1,
        ease: "power2.out",
      });
    });
  }, [mousePosition]);

  // Hover animations
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (headingRef.current) {
      gsap.to(headingRef.current.querySelectorAll("span"), {
        scale: 1.1,
        color: "#f59e0b",
        textShadow: "0 0 30px rgba(245, 158, 11, 0.8)",
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.02,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (headingRef.current) {
      gsap.to(headingRef.current.querySelectorAll("span"), {
        scale: 1,
        color: "#3b82f6",
        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.02,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden relative"
      style={{ perspective: "1000px" }}
    >
      {/* Main heading */}
      <div className="text-center z-10">
        <h1
          ref={headingRef}
          className="text-6xl md:text-9xl font-bold text-blue-500 tracking-wide cursor-pointer select-none"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
        </h1>

        {/* Animated card below the heading */}
        <div
          ref={cardRef}
          className="mt-12 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl max-w-md mx-auto"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-lg">
                Interactive Experience
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-white/80 text-lg">GSAP Powered</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <span className="text-white/80 text-lg">Responsive Design</span>
            </div>
          </div>

          {/* Progress bar animation */}
          <div className="mt-6 w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
              style={{
                animation: "progress 3s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Interactive elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 right-10 w-1 h-24 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-50"></div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20"></div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
