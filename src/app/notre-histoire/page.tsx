import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Image from 'next/image';
import { History, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function NotreHistoirePage() {
  const milestones = [
    { year: "1909", title: "Fondation à Paris Bourse", desc: "Création du comptoir de change et d'or au 10 rue de la Bourse à Paris par la famille Joubert." },
    { year: "1945", title: "L'Après-Guerre & la Numismatique", desc: "Développement du cabinet spécialisé en monnaies anciennes et pièces royales de collection." },
    { year: "1980", title: "Démocratisation de l'Or de Bourse", desc: "Implantation forte comme acteur incontournable du Napoléon et des lingots d'investissement." },
    { year: "2026", title: "Modernité & Sécurité Mondiale", desc: "Combinaison unique d'expertise physique centenaire et de services digitaux de garde en coffre fort." },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-16 text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Plus d'un siècle d'engagement
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Notre Histoire depuis 1909
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8] leading-relaxed">
              Installee au 10 rue de la Bourse à Paris depuis plus de 115 ans, la Maison Joubert incarne la transmission des valeurs de confiance, d'intégrité et de discrétion dans le secteur des métaux précieux et des monnaies de collection.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-[#1E293B] hidden md:block">
            {milestones.map((m, idx) => (
              <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div className="w-1/2 p-6 bg-[#121826] border border-[#1E293B] rounded-3xl space-y-2">
                  <span className="font-serif text-3xl font-bold text-[#b8a468]">{m.year}</span>
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{m.desc}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#b8a468] border-4 border-[#090D16] z-10 shrink-0" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>

          {/* Mobile Timeline view */}
          <div className="space-y-6 md:hidden">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 bg-[#121826] border border-[#1E293B] rounded-3xl space-y-2">
                <span className="font-serif text-2xl font-bold text-[#b8a468]">{m.year}</span>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-[#94A3B8]">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
