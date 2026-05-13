"use client";

import React, { useState, useEffect } from "react";
import { charterContent } from "@/data/charter";
import { Shield, ChevronRight, Bookmark, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CharterPage() {
  const [activeSection, setActiveSection] = useState(charterContent[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = charterContent.map((s) => document.getElementById(s.id));
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="text-white" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Charte du <span className="text-primary">Développeur</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Les principes fondamentaux qui guident le collectif SynDev CM pour une tech camerounaise d&apos;excellence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2 p-6 bg-card border border-border rounded-3xl backdrop-blur-sm shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-6 px-4 flex items-center gap-2">
                <ScrollText size={14} className="text-primary" /> Sommaire
              </h4>
              {charterContent.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group",
                    activeSection === section.id
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {section.title}
                  <ChevronRight size={14} className={cn(
                    "transition-transform",
                    activeSection === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="lg:w-3/4 space-y-24">
            {charterContent.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Bookmark className="text-primary" size={20} />
                  <h2 className="text-3xl font-black text-foreground tracking-tight">{section.title}</h2>
                </div>
                
                {section.content && (
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {section.content}
                  </p>
                )}

                {section.sections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.sections.map((sub, sIdx) => (
                      <div key={sIdx} className="p-8 bg-card border border-border rounded-3xl hover:border-primary/30 transition-colors group shadow-sm">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {sub.subtitle}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {idx < charterContent.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </motion.section>
            ))}

            {/* Final CTA */}
            <div className="p-12 bg-primary rounded-[40px] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield size={200} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Engagement Solennel</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">
                En rejoignant SynDev CM, vous vous engagez à respecter ces principes pour le bien de la communauté.
              </p>
              <Link href="/rejoindre">
                <button className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform relative z-10">
                  Signer la charte & Rejoindre
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
