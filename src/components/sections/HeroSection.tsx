"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ChevronRight, Code, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedGradient } from "@/components/shared/AnimatedGradient";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const 
      } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      <AnimatedGradient />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Le Collectif des Développeurs du Cameroun
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground"
          >
            VALORISER.<br />
            STRUCTURER.<br />
            <span className="gradient-text">PROTÉGER.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Construire un meilleur avenir pour les développeurs africains. 
            Une communauté premium pour l&apos;excellence technique et la défense de nos intérêts.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/rejoindre"
              className="group relative px-8 py-4 bg-primary text-white font-bold rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(185,28,28,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre le collectif <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/charte"
              className="flex items-center gap-2 px-8 py-4 bg-secondary/50 border border-border text-foreground font-bold rounded-2xl hover:bg-secondary transition-colors backdrop-blur-sm"
            >
              <Shield className="w-5 h-5 text-primary" />
              Lire la charte
            </Link>
          </motion.div>

          {/* Floating Icons/Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-10 md:left-0 hidden lg:block opacity-20"
          >
            <div className="p-4 bg-secondary/30 border border-border rounded-2xl backdrop-blur-sm rotate-12">
              <Code size={40} className="text-primary" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 -right-10 md:right-0 hidden lg:block opacity-20"
          >
            <div className="p-4 bg-secondary/30 border border-border rounded-2xl backdrop-blur-sm -rotate-12">
              <Terminal size={40} className="text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
