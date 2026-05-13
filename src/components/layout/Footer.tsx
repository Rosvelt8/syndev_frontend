import React from "react";
import Link from "next/link";
import { Code, Globe, MessageSquare, Users, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-md">
                <Code className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground">
                SYN<span className="text-primary">DEV</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Le collectif des développeurs du Cameroun. Valoriser, structurer et protéger les talents de l&apos;écosystème tech africain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary/50 hover:bg-primary/20 rounded-full transition-colors text-muted-foreground hover:text-primary">
                <Globe size={18} />
              </a>
              <a href="https://chat.whatsapp.com/C2H4r1wYDrwE4emPkQWVns" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 hover:bg-[#25D366]/20 rounded-full transition-colors text-muted-foreground hover:text-[#25D366]" title="WhatsApp Group">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="p-2 bg-secondary/50 hover:bg-primary/20 rounded-full transition-colors text-muted-foreground hover:text-primary">
                <Users size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Collectif</h4>
            <ul className="space-y-4">
              <li><Link href="/charte" className="text-muted-foreground hover:text-primary transition-colors text-sm">La Charte</Link></li>
              <li><Link href="/communaute" className="text-muted-foreground hover:text-primary transition-colors text-sm">Annuaire</Link></li>
              <li><Link href="/evenements" className="text-muted-foreground hover:text-primary transition-colors text-sm">Événements</Link></li>
              <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Notre Mission</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Ressources</h4>
            <ul className="space-y-4">
              <li><Link href="/contrats" className="text-muted-foreground hover:text-primary transition-colors text-sm">Modèles de Contrats</Link></li>
              <li><Link href="/tarifs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Guide des Tarifs</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog Tech</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span className="text-muted-foreground text-sm">contact@syndev.cm</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span className="text-muted-foreground text-sm">Douala / Yaoundé, Cameroun</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-xs text-muted-foreground mb-2">Un problème à signaler ?</p>
              <Link href="/signalement" className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Signaler un abus <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} SynDev CM. Tous droits réservés. Construit par le collectif.
          </p>
          <div className="flex gap-8">
            <Link href="/legal" className="text-muted-foreground hover:text-foreground text-xs">Mentions légales</Link>
            <Link href="/confidentialite" className="text-muted-foreground hover:text-foreground text-xs">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
