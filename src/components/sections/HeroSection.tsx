'use client';

import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/stores/useStore';
import { ArrowRight, ShieldCheck, Award, Lock, Phone } from 'lucide-react';

export const HeroSection = () => {
  const { setAppointmentOpen } = useAppStore();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#090D16] text-white overflow-hidden py-24 border-b border-[#1E293B]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://maison-joubert.fr/app/uploads/2025/09/img-hero-home-1909.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent" />

      {/* Decorative Ornaments */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#b8a468]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9d1a19]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">


        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Lieu d’attention <br />
          <span className="italic font-normal text-[#b8a468]">et d’engagement</span> <br />
          Depuis 1909
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-[#94A3B8] font-normal leading-relaxed">
          Spécialiste parisien de confiance pour l'achat et la vente d'or, d'argent d'investissement, le cabinet de numismatique et le bureau de change de devises.
        </p>

        {/* CTA Button Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <Link
            href="/achat-metaux"
            className="py-4 px-8 rounded-2xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-[#b8a468]/10 flex items-center gap-3 group"
          >
            <span>Acheter de l'Or & Argent</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/vente-metaux"
            className="py-4 px-8 rounded-2xl bg-[#121826] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-sm uppercase tracking-wider transition-all flex items-center gap-3 group"
          >
            <span>Vendre & Estimer</span>
          </Link>

          <button
            onClick={() => setAppointmentOpen(true)}
            className="py-4 px-6 rounded-2xl bg-[#121826]/80 border border-[#b8a468]/30 hover:border-[#b8a468] text-[#b8a468] font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Prendre RDV en Agence</span>
          </button>
        </div>

        {/* Highlight Stats Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#1E293B]/60 text-left">
          <div className="bg-[#121826]/60 backdrop-blur-sm p-4 rounded-2xl border border-[#1E293B]">
            <span className="font-serif text-2xl font-bold text-[#b8a468]">115+ Ans</span>
            <p className="text-xs text-[#94A3B8] mt-1">D'excellence et de tradition à Paris Bourse.</p>
          </div>
          <div className="bg-[#121826]/60 backdrop-blur-sm p-4 rounded-2xl border border-[#1E293B]">
            <span className="font-serif text-2xl font-bold text-[#b8a468]">100% Certifié</span>
            <p className="text-xs text-[#94A3B8] mt-1">Lingots neufs certifiés LBMA & sous scellés.</p>
          </div>
          <div className="bg-[#121826]/60 backdrop-blur-sm p-4 rounded-2xl border border-[#1E293B]">
            <span className="font-serif text-2xl font-bold text-[#b8a468]">40+ Devises</span>
            <p className="text-xs text-[#94A3B8] mt-1">Disponibles immédiatement au guichet.</p>
          </div>
          <div className="bg-[#121826]/60 backdrop-blur-sm p-4 rounded-2xl border border-[#1E293B]">
            <span className="font-serif text-2xl font-bold text-[#b8a468]">0€ Commission</span>
            <p className="text-xs text-[#94A3B8] mt-1">Cote nette en temps réel sans frais cachés.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
