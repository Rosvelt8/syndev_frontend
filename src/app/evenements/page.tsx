"use client";

import React from "react";
import { events } from "@/data/events";
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/shared/GlowCard";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="text-black" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Événements <span className="text-accent">& Meetups</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Rejoignez-nous pour échanger, apprendre et construire ensemble le futur de la tech camerounaise.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-5">
            <Sparkles size={200} />
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlowCard className="p-0 overflow-hidden flex flex-col lg:flex-row">
                <div className="lg:w-1/3 aspect-video lg:aspect-auto bg-gradient-to-br from-primary to-secondary relative flex items-center justify-center">
                    <Calendar size={80} className="text-white/10" />
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-background/80 backdrop-blur-md text-foreground text-xs font-black uppercase tracking-widest rounded-xl border border-border">
                            {event.type}
                        </span>
                    </div>
                </div>
                
                <div className="lg:w-2/3 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest">
                            <Calendar size={16} />
                            {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Clock size={16} />
                            {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <MapPin size={16} />
                            {event.location}
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-foreground mb-6 tracking-tight group-hover:text-primary transition-colors">
                        {event.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl">
                        {event.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-8">
                        <div className="flex items-center gap-3">
                            <Ticket className="text-accent" size={24} />
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Tarif</p>
                                <p className="text-foreground font-bold">{event.price}</p>
                            </div>
                        </div>
                        <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            Réserver ma place <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="mt-24 p-12 bg-card border border-border rounded-[40px] text-center shadow-xl">
            <h3 className="text-2xl font-black text-foreground mb-4">Vous souhaitez organiser un événement ?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Le collectif peut vous aider à trouver des speakers, un lieu ou à promouvoir votre meetup tech.
            </p>
            <button className="px-8 py-4 bg-secondary text-foreground font-bold rounded-2xl hover:bg-secondary/80 transition-all border border-border">
                Nous contacter
            </button>
        </div>
      </div>
    </div>
  );
}
