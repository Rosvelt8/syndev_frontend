"use client";

import React, { useState } from "react";
import { ShieldAlert, Info, Send, Lock, EyeOff, AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SignalementPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);

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
            <CheckCircle2 className="text-primary" size={40} />
          </div>
          <h2 className="text-3xl font-black text-foreground mb-6 tracking-tight">Signalement Reçu</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Votre signalement a été enregistré avec succès et transmis à notre équipe de médiation. 
            Nous traiterons ces informations avec la plus grande confidentialité.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Retour au formulaire
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldAlert className="text-white" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Signaler un <span className="text-primary">Abus</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Un espace sécurisé et confidentiel pour protéger vos droits et assainir notre écosystème.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-[32px] p-8 md:p-12 shadow-sm">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Anonymity Toggle */}
                <div className="p-6 bg-secondary/50 border border-border rounded-2xl flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center border border-border">
                      <EyeOff className="text-muted-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold text-sm">Rester Anonyme</h4>
                      <p className="text-xs text-muted-foreground">Vos coordonnées ne seront pas transmises.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={cn(
                      "w-14 h-8 rounded-full p-1 transition-colors relative",
                      isAnonymous ? "bg-primary" : "bg-secondary"
                    )}
                  >
                    <div className={cn(
                      "w-6 h-6 bg-white rounded-full transition-transform shadow-sm",
                      isAnonymous ? "translate-x-6" : "translate-x-0"
                    )} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">Type d&apos;abus</label>
                    <select className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                      <option className="bg-card">Impayé / Retard de paiement</option>
                      <option className="bg-card">Rupture abusive de contrat</option>
                      <option className="bg-card">Dumping tarifaire imposé</option>
                      <option className="bg-card">Conditions de travail illégales</option>
                      <option className="bg-card">Autre</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">Entreprise / Client concerné</label>
                    <input
                      required
                      type="text"
                      placeholder="Nom de la structure"
                      className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {!isAnonymous && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
                  >
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-white uppercase tracking-wider">Votre Nom Complet</label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-white uppercase tracking-wider">Email de contact</label>
                      <input
                        type="email"
                        placeholder="jean@exemple.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wider">Description des faits</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Détaillez précisément la situation, les dates et les montants concernés..."
                    className="w-full px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground resize-none"
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wider">Pièces Jointes (Facultatif)</label>
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer bg-secondary/10">
                    <p className="text-sm text-muted-foreground mb-2">Glissez vos captures d&apos;écran ou fichiers PDF ici</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Taille max: 5 Mo</p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    Envoyer le Signalement <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Info Panels */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-primary" size={20} />
                <h4 className="text-foreground font-bold">Confidentialité</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Vos données sont chiffrées et ne seront partagées qu&apos;avec les membres accrédités de notre commission juridique.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary font-bold">
                <CheckCircle2 size={14} /> Données conformes RGPD
              </div>
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-primary" size={20} />
                <h4 className="text-foreground font-bold">Conseils Juridiques</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  Gardez toujours une trace écrite de vos échanges.
                </li>
                <li className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  Ne signez jamais de document sous la contrainte.
                </li>
                <li className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  Le collectif peut vous accompagner en médiation.
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card border border-border rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                <Info size={20} />
                <h4 className="text-foreground font-bold">Pourquoi signaler ?</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Le signalement nous permet de constituer une base de données sur les pratiques abusives et, si nécessaire, de blacklister certains acteurs de l&apos;écosystème pour protéger vos confrères.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
