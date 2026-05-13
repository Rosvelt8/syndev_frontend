"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, TrendingUp, Users2, Zap, MessageCircle, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Protection & Défense",
    desc: "Bénéficiez d'un soutien en cas de litige avec des clients ou employeurs abusifs.",
    icon: ShieldCheck,
  },
  {
    title: "Network d'Élite",
    desc: "Collaborez avec les meilleurs développeurs du Cameroun et d'Afrique.",
    icon: Users2,
  },
  {
    title: "Standards Professionnels",
    desc: "Accédez à des ressources pour structurer votre activité et augmenter vos revenus.",
    icon: TrendingUp,
  },
  {
    title: "Opportunités Exclusives",
    desc: "Accès prioritaire à des missions, meetups et hackathons premium.",
    icon: Zap,
  },
];

export function WhyJoinSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground tracking-tight">
                Pourquoi rejoindre le <br />
                <span className="text-primary">collectif SynDev ?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Être développeur au Cameroun ne doit plus être un parcours solitaire et risqué. 
                Ensemble, nous créons un cadre où le talent est respecté et justement rémunéré.
              </p>

              <div className="space-y-8 mb-12">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="mt-1 w-10 h-10 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <reason.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold mb-2">{reason.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
                  Devenir membre
                </button>
                <a 
                  href="https://chat.whatsapp.com/C2H4r1wYDrwE4emPkQWVns" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-secondary text-foreground font-black rounded-2xl hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 border border-border"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  Groupe WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Professional Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            {/* Main Branding Card */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-card group">
              <img 
                src="/images/image.avif" 
                alt="SynDev Collective Branding" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/5 opacity-80" />
           
              

              {/* Bottom Branding Banner */}
              <div className="absolute bottom-10 left-0 right-0 px-8">
                <div className="p-8 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Excellence Tech</span>
                  </div>
                  <h3 className="text-2xl font-black text-foreground tracking-tight leading-tight">
                    Le futur de la tech <br /> 
                    <span className="text-primary italic">se construit ici.</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            
            {/* Floating Stat Card (Branding) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -right-6 md:-right-10 p-5 bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Users2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Collectif</p>
                  <p className="text-foreground font-bold">+300 Membres</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-6 md:-left-10 p-5 bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                  <ShieldCheck className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Standards</p>
                  <p className="text-foreground font-bold">100% respectés</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
