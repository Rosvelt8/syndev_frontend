"use client";

import React, { useState } from "react";
import { contracts, contractCategories } from "@/data/contracts";
import { FileText, Download, Search, Filter, Info, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";

export default function ContractsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContracts = contracts.filter((contract) => {
    const matchesCategory = selectedCategory === "Tous" || contract.category === selectedCategory;
    const matchesSearch = contract.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="text-black" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Modèles de <span className="text-accent">Contrats</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Sécurisez vos prestations avec notre bibliothèque de documents juridiques conçus pour les développeurs tech.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher un modèle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {contractCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border",
                  selectedCategory === cat
                    ? "bg-accent text-black border-accent shadow-lg shadow-accent/20"
                    : "bg-secondary/50 text-muted-foreground border-border hover:border-accent/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12 p-6 bg-primary/10 border border-primary/20 rounded-3xl flex gap-4 items-start">
          <Info className="text-primary shrink-0 mt-1" size={20} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Note importante :</strong> Ces modèles sont fournis à titre indicatif pour vous aider à structurer vos relations contractuelles. Nous vous recommandons de les faire valider par un conseil juridique pour les adapter à vos besoins spécifiques.
          </p>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredContracts.map((contract) => (
              <motion.div
                key={contract.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlowCard className="h-full flex flex-col hover:border-accent/50">
                  <div className="mb-6 flex justify-between items-start">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent">
                      {contract.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                      {contract.fileSize}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight flex-grow">
                    {contract.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {contract.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 px-4 py-3 bg-foreground text-background text-xs font-black rounded-xl hover:bg-accent hover:text-black transition-colors flex items-center justify-center gap-2">
                      <Download size={14} /> Télécharger
                    </button>
                    <button className="px-4 py-3 bg-secondary border border-border text-foreground text-xs font-black rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
                      <Eye size={14} /> Aperçu
                    </button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredContracts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground italic">Aucun modèle ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
