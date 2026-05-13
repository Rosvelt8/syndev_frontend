"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "SynDev CM est-il un syndicat officiel ?",
    answer: "Pas encore. Pour l'instant, nous sommes un collectif de professionnels structurés en association de fait. L'objectif est de bâtir une base solide avant d'entamer les démarches de syndicalisation officielle.",
  },
  {
    question: "Combien coûte l'adhésion au collectif ?",
    answer: "L'accès aux ressources de base (contrats, tarifs, blog) est gratuit pour tous les développeurs camerounais. Une adhésion Premium avec services d'assistance juridique sera bientôt disponible.",
  },
  {
    question: "Comment puis-je contribuer au collectif ?",
    answer: "Vous pouvez contribuer en partageant votre expérience sur le blog, en aidant à la relecture des contrats types, ou en organisant des meetups dans votre région.",
  },
  {
    question: "Que faire en cas d'impayé par un client ?",
    answer: "Utilisez notre page de signalement d'abus. Si vous avez utilisé un de nos contrats types, notre commission juridique pourra vous orienter sur les démarches à suivre.",
  },
  {
    question: "Le collectif s'adresse-t-il aussi aux designers ?",
    answer: "Absolument. Tout professionnel de la création numérique (UI/UX Designers, Product Managers, DevOps, etc.) est le bienvenu. Nous sommes l'écosystème tech global.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Foire aux <span className="text-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur le collectif SynDev CM et son fonctionnement.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
                key={idx} 
                className={cn(
                    "border border-white/10 rounded-2xl overflow-hidden transition-all",
                    openIndex === idx ? "bg-white/5 border-primary/30 shadow-xl" : "bg-transparent hover:bg-white/[0.02]"
                )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-muted-foreground" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 mt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 p-12 bg-primary/5 border border-primary/20 rounded-[40px] text-center">
            <MessageSquare className="text-primary mx-auto mb-6" size={40} />
            <h3 className="text-2xl font-black text-white mb-4">Vous avez une autre question ?</h3>
            <p className="text-muted-foreground mb-8">
                Notre équipe est à votre écoute pour vous répondre personnellement.
            </p>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all">
                Nous contacter par email
            </button>
        </div>
      </div>
    </div>
  );
}
