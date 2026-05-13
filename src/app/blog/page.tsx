"use client";

import React, { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import { Search, Clock, User, ArrowRight, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
            <Bookmark size={200} />
        </div>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
            Blog & <span className="text-primary">Actualités</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Conseils, retours d&apos;expérience et analyses sur le métier de développeur au Cameroun.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border",
                  selectedCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground border-border hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <GlowCard className="h-full flex flex-col group cursor-pointer">
                    <div className="aspect-[16/10] w-full bg-secondary/30 rounded-xl mb-4 overflow-hidden relative border border-border">
                      <img 
                        src={post.image || "/images/image.avif"} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-xs mb-6 flex-grow leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                          <User size={10} className="text-primary" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                          <Clock size={10} className="text-primary" />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-40">
            <p className="text-muted-foreground italic text-lg">Désolé, aucun article ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
