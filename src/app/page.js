"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function App() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box");

    // Mobile-responsive scale factors
    const scale = isMobile ? 0.6 : 1;
    const moveDistance = isMobile ? screenSize.width * 0.4 : 600;
    const verticalDistance = isMobile ? screenSize.height * 0.2 : 80;

    // Create a master timeline
    const masterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: isMobile ? 0.5 : 1,
    });

    // 🎆 Sequence 1: Explosive entrance
    const entranceTl = gsap.timeline();
    entranceTl
      .fromTo(
        boxes,
        {
          scale: 0,
          rotation: 0,
          x: 0,
          y: 0,
          opacity: 0,
        },
        {
          scale: scale,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
          stagger: 0.1,
        }
      )
      .to(
        boxes,
        {
          rotation: 360,
          scale: scale * 1.3,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3"
      );

    // 🌊 Sequence 2: Wave motion
    const waveTl = gsap.timeline();
    waveTl
      .to(boxes, {
        y: -verticalDistance,
        x: moveDistance * 0.33,
        rotation: 180,
        borderRadius: "50%",
        backgroundColor: "#ff6b6b",
        boxShadow: "0 20px 40px rgba(255, 107, 107, 0.4)",
        duration: isMobile ? 1.5 : 1.2,
        ease: "sine.inOut",
        stagger: 0.2,
      })
      .to(boxes, {
        y: verticalDistance,
        x: moveDistance * 0.67,
        rotation: 360,
        scale: scale * 0.7,
        backgroundColor: "#4ecdc4",
        boxShadow: "0 10px 30px rgba(78, 205, 196, 0.6)",
        duration: isMobile ? 1.2 : 1,
        ease: "sine.inOut",
        stagger: 0.2,
      })
      .to(boxes, {
        y: -verticalDistance * 0.5,
        x: moveDistance,
        rotation: 540,
        scale: scale * 1.5,
        backgroundColor: "#ffe66d",
        borderRadius: "25%",
        duration: isMobile ? 1.2 : 1,
        ease: "sine.inOut",
        stagger: 0.2,
      });

    // 🎯 Sequence 3: Spiral dance (simplified for mobile)
    const spiralTl = gsap.timeline();
    if (isMobile) {
      // Simplified circular motion for mobile
      spiralTl.to(boxes, {
        rotation: 720,
        x: moveDistance * 0.5,
        y: -verticalDistance * 0.8,
        scale: scale * 0.8,
        backgroundColor: "#ff9ff3",
        borderRadius: "30%",
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.3,
      });
    } else {
      boxes.forEach((box, i) => {
        spiralTl.to(
          box,
          {
            motionPath: {
              path: `M0,0 Q${150 + i * 50},${-100 - i * 20} ${300 + i * 30},${
                50 + i * 15
              } T${500 + i * 40},${-80 + i * 25}`,
              autoRotate: true,
            },
            scale: 0.8 + i * 0.1,
            backgroundColor:
              i === 0 ? "#ff9ff3" : i === 1 ? "#54a0ff" : "#5f27cd",
            borderRadius: "30%",
            duration: 2.5,
            ease: "power1.inOut",
          },
          i * 0.3
        );
      });
    }

    // 🎨 Sequence 4: Morphing shapes
    const morphTl = gsap.timeline();
    const boxSize = isMobile ? 40 : 60;
    morphTl
      .to(boxes, {
        width: boxSize * 1.3,
        height: boxSize * 2,
        borderRadius: "40px",
        backgroundColor: "#a55eea",
        rotation: 0,
        x: moveDistance * 1.2,
        y: 0,
        scale: scale,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
      })
      .to(boxes, {
        width: boxSize * 2.5,
        height: boxSize * 0.7,
        borderRadius: "20px",
        backgroundColor: "#26de81",
        skewX: isMobile ? 10 : 15,
        duration: 1.2,
        ease: "back.inOut(1.7)",
        stagger: 0.15,
      })
      .to(boxes, {
        width: boxSize,
        height: boxSize,
        borderRadius: "50%",
        backgroundColor: "#fd79a8",
        skewX: 0,
        scale: scale * 1.8,
        boxShadow: "0 0 30px rgba(253, 121, 168, 0.8)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });

    // 🌟 Sequence 5: Particle explosion effect
    const explosionTl = gsap.timeline();
    explosionTl
      .to(boxes, {
        scale: scale * 3,
        opacity: 0.3,
        rotation: 720,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
      })
      .to(boxes, {
        scale: 0.1,
        opacity: 0,
        y: -verticalDistance * 2.5,
        duration: 0.8,
        ease: "power3.in",
        stagger: 0.1,
      })
      .set(boxes, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: scale,
        width: isMobile ? 40 : 50,
        height: isMobile ? 40 : 50,
        borderRadius: "8px",
        backgroundColor: (i) =>
          i === 0 ? "#ef4444" : i === 1 ? "#22c55e" : "#3b82f6",
        boxShadow: "none",
        skewX: 0,
        opacity: 1,
      });

    // 🎭 Add all sequences to master timeline
    masterTl
      .add(entranceTl)
      .add(waveTl, "+=0.5")
      .add(spiralTl, "+=0.3")
      .add(morphTl, "+=0.2")
      .add(explosionTl, "+=0.5");

    // 🔠 Enhanced text animation (mobile-optimized)
    const text = textRef.current;
    if (text) {
      const letters = text.querySelectorAll("span");

      const textTl = gsap.timeline({
        repeat: -1,
        repeatDelay: isMobile ? 1 : 2,
      });

      textTl
        .fromTo(
          letters,
          {
            y: isMobile ? 50 : 100,
            opacity: 0,
            rotateX: 90,
            scale: 0.5,
            filter: "blur(10px)",
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: isMobile ? 1.2 : 1.5,
            ease: "back.out(1.7)",
            stagger: isMobile ? 0.06 : 0.08,
          }
        )
        .to(
          letters,
          {
            color: "#ff6b6b",
            scale: isMobile ? 1.05 : 1.1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.03,
            yoyo: true,
            repeat: 1,
          },
          "+=1"
        )
        .to(
          letters,
          {
            rotateY: 180,
            color: "#4ecdc4",
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.05,
          },
          "+=0.5"
        )
        .to(letters, {
          rotateY: 360,
          color: "#ffe66d",
          scale: isMobile ? 1.1 : 1.2,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.04,
        })
        .to(
          letters,
          {
            y: isMobile ? -30 : -50,
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.in",
            stagger: 0.05,
          },
          "+=1"
        )
        .set(letters, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          color: "#374151",
          filter: "blur(0px)",
        });
    }

    // 🎪 Add floating background elements
    gsap.to(containerRef.current, {
      background:
        "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [isMobile, screenSize]);

  // Split text into spans
  const animatedText = "GSAP Practice!".split("").map((char, i) => (
    <span key={i} className="inline-block perspective-1000">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  return (
    <>
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-white font-bold text-xl drop-shadow-lg">MyApp</div>
        <div className="space-x-6 hidden sm:flex">
          <a
            href="home"
            className="text-white/90 hover:text-white transition duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white/90 hover:text-white transition duration-300 font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white transition duration-300 font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* 🌈 Animated Hero Section */}
      <div
        ref={containerRef}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden relative"
      >
        {/* Animated Text */}
        <div
          ref={textRef}
          className={`${
            isMobile ? "text-4xl sm:text-5xl mb-6" : "text-8xl mb-8"
          } font-bold text-gray-800 tracking-wider z-10 drop-shadow-lg px-4 text-center`}
          style={{ perspective: "1000px" }}
        >
          {animatedText}
        </div>

        {/* Animated Boxes Container */}
        <div
          className={`absolute ${
            isMobile ? "top-16 left-4" : "top-20 left-20"
          }`}
        >
          <div
            className={`box ${
              isMobile ? "w-10 h-10" : "w-12 h-12"
            } bg-red-500 rounded-lg shadow-lg border-2 border-white/20`}
          />
          <div
            className={`box ${
              isMobile ? "w-10 h-10" : "w-12 h-12"
            } bg-green-500 rounded-lg shadow-lg border-2 border-white/20 mt-2`}
          />
          <div
            className={`box ${
              isMobile ? "w-10 h-10" : "w-12 h-12"
            } bg-blue-500 rounded-lg shadow-lg border-2 border-white/20 mt-2`}
          />
        </div>

        {/* Decorative Pulsing Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute ${
              isMobile ? "top-5 left-1/4" : "top-10 left-1/4"
            } w-2 h-2 bg-white/30 rounded-full animate-pulse`}
          ></div>
          <div
            className={`absolute ${
              isMobile ? "top-1/4 right-1/4" : "top-1/3 right-1/4"
            } w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300`}
          ></div>
          <div
            className={`absolute ${
              isMobile ? "bottom-1/3 left-1/3" : "bottom-1/4 left-1/3"
            } w-3 h-3 bg-white/20 rounded-full animate-pulse delay-700`}
          ></div>
          <div
            className={`absolute ${
              isMobile ? "bottom-5 right-5" : "bottom-10 right-10"
            } w-2 h-2 bg-white/35 rounded-full animate-pulse delay-1000`}
          ></div>
        </div>

        {/* Mobile Optimization Text */}
        {isMobile && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-xs">
            Mobile Optimized
          </div>
        )}
      </div>
    </>
  );
}
