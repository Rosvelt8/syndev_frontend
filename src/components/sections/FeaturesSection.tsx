"use client";

import React from "react";
import { GlowCard } from "@/components/shared/GlowCard";
import { Shield, FileText, Gavel, Users, Code, Zap } from "lucide-react";

const features = [
  {
    title: "Charte du Développeur",
    description: "Un standard d'excellence pour définir nos valeurs et protéger notre métier au quotidien.",
    icon: Shield,
    color: "text-primary",
  },
  {
    title: "Modèles de Contrats",
    description: "Bibliothèque de contrats juridiquement solides pour sécuriser vos prestations freelance.",
    icon: FileText,
    color: "text-accent",
  },
  {
    title: "Grille Tarifaire",
    description: "Un guide de référence pour valoriser vos compétences selon le marché local et international.",
    icon: Gavel,
    color: "text-primary",
  },
  {
    title: "Signalement d'Abus",
    description: "Un espace sécurisé pour dénoncer les mauvaises pratiques et protéger la communauté.",
    icon: Zap,
    color: "text-accent",
  },
  {
    title: "Annuaire Communautaire",
    description: "Faites-vous connaître et collaborez avec les meilleurs talents tech du Cameroun.",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Ressources Éducatives",
    description: "Articles, tutoriels et partages d'expérience pour monter en compétences continuellement.",
    icon: Code,
    color: "text-accent",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
            Tout ce dont un développeur <br />
            <span className="gradient-text">moderne a besoin.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nous construisons les outils et le réseau nécessaires pour transformer l&apos;écosystème numérique camerounais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlowCard key={index} delay={index * 0.1}>
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-border">
                <feature.icon className={feature.color} size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
