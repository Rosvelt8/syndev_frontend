"use client";

import React, { useState } from "react";
import { developers } from "@/data/developers";
import { Search, MapPin, Briefcase, Globe, Users, ExternalLink, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevs = developers.filter((dev) => 
    dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dev.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dev.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Annuaire <span className="text-primary">Communautaire</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Découvrez et collaborez avec les meilleurs talents de l&apos;écosystème tech camerounais.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Search */}
        <div className="max-w-2xl mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher par nom, rôle ou technologie (ex: React, Laravel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDevs.map((dev) => (
              <motion.div
                key={dev.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <GlowCard className="h-full flex flex-col">
                  {/* Avatar / Initials */}
                  <div className="flex items-start justify-between mb-6">
  
                    <div className="flex gap-2">
                        {dev.badges.map((badge, bIdx) => (
                            <span key={bIdx} className="px-2 py-1 bg-secondary/50 border border-border rounded-lg text-[8px] font-black uppercase tracking-widest text-primary">
                                {badge}
                            </span>
                        ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-foreground mb-1">{dev.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">{dev.role}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin size={14} className="text-primary" />
                        {dev.location}, Cameroun
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Briefcase size={14} className="text-primary" />
                        {dev.experience} d&apos;expérience
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {dev.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-secondary/50 rounded-lg text-xs font-medium text-muted-foreground border border-border">
                            {tech}
                        </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex gap-3">
                        <button className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all"><Globe size={16} /></button>
                        <button className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all"><Users size={16} /></button>
                    </div>
                    <button className="text-xs font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1">
                        Voir profil <ExternalLink size={12} />
                    </button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredDevs.length === 0 && (
          <div className="text-center py-40">
            <p className="text-muted-foreground italic">Aucun développeur trouvé pour cette recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
