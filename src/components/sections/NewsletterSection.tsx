"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative z-10 max-w-5xl mx-auto bg-card border border-border rounded-[40px] p-12 md:p-20 overflow-hidden shadow-xl">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
                <Mail className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground tracking-tight">
                Restez connecté à <br />
                <span className="text-primary">l&apos;écosystème.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-0">
                Recevez nos dernières ressources, alertes juridiques et opportunités directement dans votre boîte mail. Pas de spam, promis.
              </p>
            </div>

            <div>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="votre-email@exemple.com"
                  className="flex-grow px-6 py-4 bg-secondary/50 border border-border rounded-2xl text-foreground focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground"
                />
                <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                  S&apos;abonner <Send size={18} />
                </button>
              </form>
              <p className="text-[10px] text-muted-foreground mt-4 text-center sm:text-left">
                En vous abonnant, vous acceptez notre politique de confidentialité et le traitement de vos données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
