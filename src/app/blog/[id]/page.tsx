"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticleDetail() {
  const params = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article non trouvé</h1>
          <button onClick={() => router.push("/blog")} className="text-primary hover:underline">
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background pb-32">
      {/* Header Image / Pattern */}
      <div className="h-[40vh] w-full bg-secondary/30 relative overflow-hidden flex items-center justify-center border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <Bookmark size={150} className="text-primary/5 relative z-10" />
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Post Content Wrapper */}
          <div className="bg-card border border-border rounded-[40px] p-8 md:p-16 shadow-2xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button 
                onClick={() => router.back()}
                className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-all text-muted-foreground"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-black uppercase tracking-widest">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 mb-12 py-8 border-y border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Auteur</p>
                  <p className="text-foreground font-bold">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Calendar size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Date</p>
                  <p className="text-foreground font-bold">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Clock size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Lecture</p>
                  <p className="text-foreground font-bold">{post.readTime}</p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="prose dark:prose-invert prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-black prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 max-w-none">
              {post.content.split('\n').map((para, i) => {
                if (para.startsWith('###')) {
                  return <h3 key={i}>{para.replace('###', '').trim()}</h3>;
                }
                return para.trim() ? <p key={i}>{para.trim()}</p> : null;
              })}
            </div>

            {/* Actions */}
            <div className="mt-20 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Partager</span>
                    <div className="flex gap-2">
                        <button className="p-3 bg-white/5 hover:bg-primary/20 rounded-xl transition-all"><Share2 size={18} /></button>
                        <button className="p-3 bg-white/5 hover:bg-primary/20 rounded-xl transition-all"><Code size={18} /></button>
                    </div>
                </div>
                <Link 
                    href="/blog" 
                    className="px-8 py-4 bg-secondary border border-border rounded-2xl text-foreground font-bold hover:bg-secondary/80 transition-all"
                >
                    Retour à la liste
                </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
