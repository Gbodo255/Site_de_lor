'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#06080F] text-slate-300 border-t border-[#1E293B] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantees / Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#1E293B]">
          <div className="flex items-center gap-4 bg-[#121826]/80 p-5 rounded-2xl border border-[#1E293B]">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Expertise & Discrétion</h4>
              <p className="text-xs text-[#94A3B8] mt-1">Maison fondée en 1909 au cœur du quartier Bourse de Paris.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#121826]/80 p-5 rounded-2xl border border-[#1E293B]">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Cours en Direct LBMA</h4>
              <p className="text-xs text-[#94A3B8] mt-1">Cotations officielles en temps réel et lingots certifies LBMA.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#121826]/80 p-5 rounded-2xl border border-[#1E293B]">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Garde Sécurisée en Coffre</h4>
              <p className="text-xs text-[#94A3B8] mt-1">Stockage sécurisé hors du système bancaire traditionnel.</p>
            </div>
          </div>
        </div>

        {/* Navigation Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          {/* Col 1: Brand & Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo Joubert"
                width={50}
                height={50}
                className="w-11 sm:w-12 h-auto"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-widest uppercase">Maison Joubert</span>
                <span className="text-[10px] text-[#94A3B8] tracking-widest uppercase">Spécialiste Or & Change</span>
              </div>
            </Link>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Achat, vente d'or, d'argent, monnaies de collection et change de devises internationales depuis 1909.
            </p>
            <div className="space-y-2 text-xs text-[#94A3B8] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b8a468]" />
                <span>10 rue de la Bourse, 75002 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b8a468]" />
                <a href="tel:0142362039" className="hover:text-white transition-colors">01 42 36 20 39</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b8a468]" />
                <span>Du Lundi au Vendredi: 09h00 - 18h00</span>
              </div>
            </div>
          </div>

          {/* Col 2: Or & Argent */}
          <div>
            <h5 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#1E293B] pb-2">
              Achat & Vente Or
            </h5>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><Link href="/achat-metaux" className="hover:text-[#b8a468] transition-colors">Cours de l'Or en temps réel</Link></li>
              <li><Link href="/achat-metaux/catalogue-achat" className="hover:text-[#b8a468] transition-colors">Acheter Lingots & Pièces</Link></li>
              <li><Link href="/achat-metaux/stockage" className="hover:text-[#b8a468] transition-colors">Stockage en coffre fort</Link></li>
              <li><Link href="/vente-metaux/catalogue-rachat" className="hover:text-[#b8a468] transition-colors">Rachat Or & Argent</Link></li>
              <li><Link href="/vente-metaux/fiscalite" className="hover:text-[#b8a468] transition-colors">Fiscalité de l'Or (TMP & TPVP)</Link></li>
            </ul>
          </div>

          {/* Col 3: Numismatique & Devises */}
          <div>
            <h5 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#1E293B] pb-2">
              Numismatique & Devises
            </h5>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><Link href="/cabinet-numismatique/collection" className="hover:text-[#b8a468] transition-colors">Monnaies Anciennes & Collection</Link></li>
              <li><Link href="/cabinet-numismatique/expertiser" className="hover:text-[#b8a468] transition-colors">Demande d'Expertise Gratuite</Link></li>
              <li><Link href="/cabinet-numismatique/nous-missionner" className="hover:text-[#b8a468] transition-colors">Recherche de Pièce Rare</Link></li>
              <li><Link href="/devises/catalogue" className="hover:text-[#b8a468] transition-colors">Bureau de Change Devises</Link></li>
              <li><Link href="/devis-personnalise" className="hover:text-[#b8a468] transition-colors">Devis Personnalisé Sur-Mesure</Link></li>
            </ul>
          </div>

          {/* Col 4: Informations & Agence */}
          <div>
            <h5 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#1E293B] pb-2">
              Maison Joubert
            </h5>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><Link href="/notre-histoire" className="hover:text-[#b8a468] transition-colors">Notre Histoire depuis 1909</Link></li>
              <li><Link href="/actualites" className="hover:text-[#b8a468] transition-colors">Actualités Économiques & Métaux</Link></li>
              <li><Link href="/faq" className="hover:text-[#b8a468] transition-colors">Foire Aux Questions (FAQ)</Link></li>
              <li><Link href="/contactez-nous" className="hover:text-[#b8a468] transition-colors">Plan d'accès Agence Paris Bourse</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Sub-footer */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Maison Joubert. Tous droits réservés. Expertise Or, Argent et Change à Paris.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/faq" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
            <Link href="/faq" className="hover:text-white transition-colors">CGV & CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
