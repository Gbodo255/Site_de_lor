'use client';

import React from 'react';
import { useAppStore } from '@/stores/useStore';
import { MapPin, Phone, Clock, Mail, Shield, CalendarCheck, Navigation } from 'lucide-react';

export const AgencyMapSection = () => {
  const { setAppointmentOpen } = useAppStore();

  return (
    <section className="py-24 bg-[#06080F] text-white border-b border-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Card */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#b8a468] font-semibold bg-[#121826] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Agence Paris Bourse
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Bienvenue chez <br />
              <span className="text-[#b8a468] italic font-normal">Maison Joubert à Paris</span>
            </h2>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Située au cœur du 2ème arrondissement de Paris dans le quartier historique de la Bourse, notre agence vous accueille en toute discrétion dans des salons privés pour vos transactions d'or, d'argent, de monnaies et de devises.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121826] border border-[#1E293B]">
                <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Adresse de l'Agence</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">10 rue de la Bourse, 75002 Paris (Métro Bourse / Quatre-Septembre)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121826] border border-[#1E293B]">
                <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Téléphone Direct</h4>
                  <a href="tel:0142362039" className="text-xs text-[#b8a468] font-semibold hover:underline mt-0.5 block">
                    01 42 36 20 39
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121826] border border-[#1E293B]">
                <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horaires d'Ouverture</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Du Lundi au Vendredi de 09h00 à 18h00 sans interruption</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setAppointmentOpen(true)}
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Prendre RDV au Guichet</span>
              </button>

              <a
                href="https://maps.google.com/?q=10+rue+de+la+Bourse+75002+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-[#121826] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#b8a468]" />
                <span>Itinéraire Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative rounded-3xl overflow-hidden border border-[#1E293B] shadow-2xl h-96 sm:h-[450px]">
            <iframe
              title="Carte Agence Maison Joubert Paris Bourse"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.527376378417!2d2.3396558768789316!3d48.86720497133333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c03565e31%3A0x6b633bf3d077b960!2s10%20Rue%20de%20la%20Bourse%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#090D16]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#1E293B] flex items-center justify-between text-xs">
              <span className="font-semibold text-white">10 rue de la Bourse, 75002 Paris</span>
              <span className="text-[#b8a468] font-bold">Métro 3 (Bourse)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
