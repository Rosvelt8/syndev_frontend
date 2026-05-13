"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedGradient() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background transition-colors duration-500" />
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 150, 0],
          y: [0, 80, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[100px] md:blur-[150px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -120, 0],
          y: [0, -100, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[100px] md:blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [0.8, 1.1, 0.8],
          x: [-50, 50, -50],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"
      />

      {/* Grid Pattern */}
      <div className={
        `absolute inset-0 bg-[url('/grid.svg')] bg-center transition-opacity duration-500
        ${theme === 'dark' ? 'opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' : 'opacity-10 [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]'}`
      } />
      
      {/* Moving Particles (CSS only for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "100%"],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
}
