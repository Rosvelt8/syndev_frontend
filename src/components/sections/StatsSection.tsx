"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Développeurs", value: "300+", sub: "Inscrits" },
  { label: "Contrats types", value: "5+", sub: "Téléchargeables" },
  { label: "Communautés", value: "8", sub: "Régions" },
  { label: "Expertises", value: "100%", sub: "Locales" },
];

export function StatsSection() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
