"use client";

import React, { useState } from "react";
import { pricingData, pricingDisclaimer } from "@/data/pricing";
import { Gavel, Info, Briefcase, Calendar, TrendingUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [viewMode, setViewMode] = useState<"daily" | "monthly">("daily");

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <TrendingUp size={200} />
        </div>
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-primary rounded-[20px] flex items-center justify-center shadow-[0_0_30px_rgba(185,28,28,0.3)]">
              <Gavel className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-2">
                Guide des <span className="text-primary">Tarifs</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Valorisez votre expertise à sa juste valeur, tout en tenant compte des réalités du marché local.
              </p>
            </div>
          </div>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-4 bg-primary/10 border border-primary/20 rounded-2xl">
            <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Note Contextuelle</span>
            <p className="text-sm text-foreground/80">
              Ces tarifs sont optimisés pour le <strong className="text-primary">marché local (Cameroun)</strong>. Pour des clients internationaux ou la diaspora, une majoration de 30% à 100% est généralement appliquée.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Toggle & Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex bg-secondary/50 p-1.5 rounded-2xl border border-border">
            <button
              onClick={() => setViewMode("daily")}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2",
                viewMode === "daily" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Calendar size={16} /> TJM (Jour)
            </button>
            <button
              onClick={() => setViewMode("monthly")}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2",
                viewMode === "monthly" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Briefcase size={16} /> Mensuel (CDI/CDD)
            </button>
          </div>
          
          <div className="flex items-center gap-3 px-6 py-4 bg-secondary/50 border border-border rounded-2xl max-w-xl">
            <Info className="text-primary shrink-0" size={20} />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {pricingDisclaimer}
            </p>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {pricingData.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-sm group hover:border-primary/30 transition-all"
            >
              <div className="p-8 border-b border-border bg-card">
                <h3 className="text-2xl font-black text-foreground flex items-center gap-3">
                  <TrendingUp className="text-primary" size={24} />
                  {role.role}
                </h3>
              </div>
              <div className="p-2">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <th className="px-6 py-4">Niveau d&apos;Expérience</th>
                      <th className="px-6 py-4 text-right">Fourchette (FCFA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {role.levels.map((level, lIdx) => (
                      <tr key={lIdx} className="group/row hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-6 text-sm font-bold text-foreground/80">{level.type}</td>
                        <td className="px-6 py-6 text-right">
                          <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-black text-sm border border-primary/20">
                            {viewMode === "daily" ? level.daily : level.monthly}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-secondary/10 text-center border-t border-border">
                <button className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2 mx-auto">
                  <HelpCircle size={14} /> Voir le détail des compétences requises
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calculator CTA Placeholder */}
        <div className="mt-24 p-12 bg-card border border-border rounded-[40px] text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-primary/5 opacity-10" />
          <h2 className="text-3xl font-black text-foreground mb-6 relative z-10">Calculateur de TJM Intelligent</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto relative z-10">
            Estimez précisément votre tarif selon votre stack technique, votre localisation et la durée du projet.
          </p>
          <button className="px-12 py-5 bg-primary text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all relative z-10">
            Accéder au Calculateur (Beta)
          </button>
        </div>
      </div>
    </div>
  );
}
