"use client";

import React, { useState } from "react";
import { UserPlus, CheckCircle2, Rocket, Code, Heart, Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full p-12 bg-card border border-border rounded-[40px] text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-3xl mx-auto mb-8 flex items-center justify-center border border-primary/30">
            <Rocket className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight">Bienvenue dans le collectif !</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Votre demande d&apos;adhésion a été reçue. Notre équipe va examiner votre profil et vous recevrez un email de confirmation très prochainement.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Retour à l&apos;accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Rejoindre l&apos;élite tech</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
                Devenir <span className="text-primary">Membre</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Rejoignez le mouvement et participez à la construction d&apos;un avenir meilleur pour les développeurs du Cameroun.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Progress bar */}
        <div className="flex items-center justify-center gap-4 mb-16">
            {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                    <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-black transition-all",
                        step >= s ? "bg-primary text-white" : "bg-secondary text-muted-foreground border border-border"
                    )}>
                        {s}
                    </div>
                    {s < 3 && <div className={cn("w-20 h-1 rounded-full", step > s ? "bg-primary" : "bg-white/10")} />}
                </div>
            ))}
        </div>

        <div className="bg-card border border-border rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <UserPlus className="text-primary" size={24} />
                            <h2 className="text-2xl font-black text-foreground">Informations Personnelles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Nom Complet</label>
                                <input required type="text" placeholder="Samuel Ndoumbe" className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email Professionnel</label>
                                <input required type="email" placeholder="samuel@dev.cm" className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Localisation</label>
                                <select className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none appearance-none">
                                    <option className="bg-secondary">Douala</option>
                                    <option className="bg-secondary">Yaoundé</option>
                                    <option className="bg-secondary">Bafoussam</option>
                                    <option className="bg-secondary">Garoua</option>
                                    <option className="bg-secondary">Autre / Diaspora</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Années d&apos;expérience</label>
                                <input required type="number" placeholder="5" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-primary/50 outline-none" />
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <Code className="text-primary" size={24} />
                            <h2 className="text-2xl font-black text-foreground">Profil Technique</h2>
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Stack Technologique Principale</label>
                            <input required type="text" placeholder="React, Node.js, AWS..." className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Lien GitHub / Portfolio</label>
                            <input required type="url" placeholder="https://github.com/votre-compte" className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Dernière réalisation majeure</label>
                            <textarea rows={4} placeholder="Décrivez brièvement un projet dont vous êtes fier..." className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:border-primary/50 outline-none resize-none" />
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <Heart className="text-primary" size={24} />
                            <h2 className="text-2xl font-black text-foreground">Engagement</h2>
                        </div>
                        <div className="p-8 bg-primary/10 border border-primary/20 rounded-3xl space-y-6">
                            <div className="flex gap-4">
                                <input required type="checkbox" className="mt-1" id="charte" />
                                <label htmlFor="charte" className="text-sm text-muted-foreground leading-relaxed">
                                    Je confirme avoir lu et accepté la <a href="/charte" className="text-primary underline">Charte du Développeur</a> de SynDev CM.
                                </label>
                            </div>
                            <div className="flex gap-4">
                                <input required type="checkbox" className="mt-1" id="ethique" />
                                <label htmlFor="ethique" className="text-sm text-muted-foreground leading-relaxed">
                                    Je m&apos;engage à promouvoir des pratiques éthiques et à respecter la confidentialité de mes futurs confrères.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/5">
                    {step > 1 ? (
                        <button type="button" onClick={() => setStep(step - 1)} className="text-muted-foreground hover:text-foreground font-bold transition-colors">Précédent</button>
                    ) : <div />}
                    
                    {step < 3 ? (
                        <button type="button" onClick={() => setStep(step + 1)} className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-transform">Suivant</button>
                    ) : (
                        <button type="submit" className="px-12 py-5 bg-primary text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                            Confirmer mon adhésion <Send size={20} />
                        </button>
                    )}
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
