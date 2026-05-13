"use client";

import React from "react";
import { Shield, Target, Eye, Globe, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";

const values = [
  {
    title: "Excellence",
    desc: "Nous visons les standards internationaux dans chaque ligne de code produite.",
    icon: Zap,
  },
  {
    title: "Solidarité",
    desc: "Un développeur n'est jamais seul face à un défi ou une injustice.",
    icon: Heart,
  },
  {
    title: "Transparence",
    desc: "Nous promouvons des relations saines et claires entre clients et prestataires.",
    icon: Eye,
  },
  {
    title: "Impact",
    desc: "Nous utilisons la tech pour transformer durablement l'économie locale.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight mb-8">
              Plus qu&apos;un collectif, <br />
              <span className="text-primary">un mouvement.</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              SynDev CM est né de la volonté de structurer et de valoriser le métier de développeur au Cameroun et en Afrique.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-secondary/10 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-black text-foreground mb-6">Notre Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Apporter un cadre professionnel rigoureux pour protéger les intérêts des développeurs tout en garantissant aux entreprises une expertise technique de haut niveau.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nous travaillons sur la normalisation des tarifs, la sécurisation des contrats et la montée en compétence continue de nos membres.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20">
                <Eye className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-black text-foreground mb-6">Notre Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Faire du Cameroun un hub technologique majeur en Afrique, où le talent local est reconnu, respecté et capable de compétir à l&apos;échelle mondiale.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nous croyons en une Afrique numérique souveraine, portée par des professionnels éthiques et passionnés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-foreground tracking-tight mb-4 text-center">Nos Valeurs</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <GlowCard key={idx} delay={idx * 0.1}>
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 border border-border group-hover:border-primary/50 transition-all">
                  <val.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Panafrican Banner */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="p-16 bg-primary rounded-[40px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/africa-map.svg')] opacity-10 bg-center bg-no-repeat bg-contain" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-white/80 font-black text-xs uppercase tracking-widest mb-6">
                  <Globe size={16} />
                  Ambition Panafricaine
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Par les développeurs,<br /> pour l&apos;Afrique.
                </h2>
                <p className="text-white/80 text-lg">
                  Bien que basé au Cameroun, notre modèle est pensé pour être décliné dans toute la zone CEMAC et au-delà. L&apos;union fait la force.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-12 py-5 bg-white text-black font-black rounded-2xl shadow-2xl hover:scale-105 transition-all">
                  Nous soutenir
                </button>
                <a 
                  href="https://chat.whatsapp.com/C2H4r1wYDrwE4emPkQWVns" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-[#25D366] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Groupe WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
