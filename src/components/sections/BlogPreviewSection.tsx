"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { GlowCard } from "@/components/shared/GlowCard";

import { blogPosts } from "@/data/blog";

export function BlogPreviewSection() {
  const articles = blogPosts.slice(0, 3);
  return (
    <section className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
              Derniers <span className="text-accent">articles & conseils.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Restez informé sur les tendances, les droits et les meilleures pratiques de notre industrie.
            </p>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors">
            Voir tout le blog <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <GlowCard key={index} delay={index * 0.1} className="h-full flex flex-col group">
              <div className="aspect-[16/10] w-full bg-secondary/30 rounded-xl mb-6 overflow-hidden relative border border-border">
                <img 
                  src={article.image || "/images/image.avif"} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-md">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-xs mb-6 flex-grow line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <User size={10} className="text-primary" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} className="text-primary" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${article.id}`} className="text-foreground hover:text-primary transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
