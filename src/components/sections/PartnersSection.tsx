"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, Zap, Code, Terminal, Cpu } from "lucide-react";

const partners = [
  { name: "Tech Hub Cameroon", icon: Terminal },
  { name: "Digital Academy", icon: Cpu },
  { name: "Cameroon Dev", icon: Code },
  { name: "Open Source Africa", icon: Globe },
  { name: "Innovation Lab", icon: Zap },
  { name: "Safe Code Initiative", icon: Shield },
];

export function PartnersSection() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black text-xs uppercase tracking-widest mb-4"
          >
            Écosystème
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            Ils soutiennent le <span className="text-primary">collectif.</span>
          </motion.h2>
        </div>

        <div className="relative group">
          {/* First Row of Partners */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer group/logo"
              >
                <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center group-hover/logo:border-primary/50 group-hover/logo:shadow-lg transition-all">
                  <partner.icon className="text-muted-foreground group-hover/logo:text-primary transition-colors" size={20} />
                </div>
                <span className="text-lg font-black tracking-tighter text-muted-foreground group-hover/logo:text-foreground transition-colors">
                  {partner.name.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
