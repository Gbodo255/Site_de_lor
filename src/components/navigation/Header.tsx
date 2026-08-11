'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppStore } from '@/stores/useStore';
import { 
  Phone, 
  Send, 
  User, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Coins,
  DollarSign,
  History,
  HelpCircle,
  Newspaper
} from 'lucide-react';

export const Header = () => {
  const { isNavOpen, toggleNav, setNavOpen, cart, toggleCart, setAppointmentOpen } = useAppStore();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navMenuItems = [
    {
      title: "Cours Or & Argent",
      href: "/achat-metaux#graphs-rates-metals",
      icon: TrendingUp,
    },
    {
      title: "Achat Or et Argent",
      href: "/achat-metaux",
      icon: Coins,
      subItems: [
        { label: "Je veux acheter (Catalogue)", href: "/achat-metaux/catalogue-achat" },
        { label: "Je veux stocker en coffre", href: "/achat-metaux/stockage" },
        { label: "Je veux un devis sur-mesure", href: "/devis-personnalise" },
      ],
    },
    {
      title: "Vente Or et Argent",
      href: "/vente-metaux",
      icon: Coins,
      subItems: [
        { label: "Je veux vendre (Cours de rachat)", href: "/vente-metaux/catalogue-rachat" },
        { label: "Demande de rachat en ligne", href: "/vente-metaux/demande-de-rachat" },
        { label: "Demande d'estimation gratuite", href: "/vente-metaux/estimer" },
        { label: "Information fiscalité (TMP & TPVP)", href: "/vente-metaux/fiscalite" },
      ],
    },
    {
      title: "Numismatique",
      href: "/cabinet-numismatique",
      icon: History,
      subItems: [
        { label: "Collection & Monnaies Rares", href: "/cabinet-numismatique/collection" },
        { label: "Recherche de pièce spécifique", href: "/cabinet-numismatique/nous-missionner" },
        { label: "Expertise & Certification", href: "/cabinet-numismatique/expertiser" },
      ],
    },
    {
      title: "Devises",
      href: "/devises",
      icon: DollarSign,
      subItems: [
        { label: "Bureau de change & Devises", href: "/devises/catalogue" },
      ],
    },
    {
      title: "Actualités",
      href: "/actualites",
      icon: Newspaper,
    },
    {
      title: "Notre Histoire",
      href: "/notre-histoire",
      icon: History,
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: HelpCircle,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#090D16]/95 backdrop-blur-md border-b border-[#1E293B] shadow-2xl">
        {/* Top Ticker Bar */}
        <div className="bg-[#121826] border-b border-[#1E293B]/60 text-xs py-1.5 px-4 text-[#94A3B8] hidden md:flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Marchés ouverts • Or: 78 450,00 €/kg (+1.24%)
            </span>
            <span>Agence Paris Bourse: 10 rue de la Bourse, 75002 Paris</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setAppointmentOpen(true)}
              className="hover:text-[#b8a468] transition-colors flex items-center gap-1 text-[#b8a468] font-medium"
            >
              Prendre Rendez-vous
            </button>
            <span>•</span>
            <a href="tel:0142362039" className="hover:text-white font-medium flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#b8a468]" />
              <span>01 42 36 20 39</span>
            </a>
          </div>
        </div>

        {/* Main Bar: Logo, Burger & Actions */}
        <div className="relative flex min-h-20 w-full items-center justify-between px-4 sm:px-12 py-3">
          {/* Left: Burger Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleNav}
              aria-label="Ouvrir le menu"
              className="p-2 text-white hover:text-[#b8a468] transition-colors cursor-pointer rounded-xl bg-[#121826] border border-[#1E293B] flex items-center gap-2"
            >
              <Menu className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider font-bold hidden sm:inline-block">Menu</span>
            </button>
          </div>

          {/* Center: Maison Joubert Logo */}
          <div className="flex justify-center items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Logo Maison Joubert"
                width={55}
                height={55}
                priority
                className="w-10 sm:w-12 h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-white group-hover:text-[#b8a468] transition-colors uppercase">
                  Maison Joubert
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-[#94A3B8] uppercase">Depuis 1909 • Paris Bourse</span>
              </div>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex justify-end items-center gap-3 sm:gap-4">
            <button
              onClick={() => setAppointmentOpen(true)}
              className="hidden lg:flex py-2 px-4 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Rendez-vous
            </button>

            <Link
              href="/compte"
              title="Mon Compte"
              className="p-2 text-[#94A3B8] hover:text-white transition-colors rounded-xl bg-[#121826] border border-[#1E293B]"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={toggleCart}
              title="Mon Panier"
              className="relative p-2 text-[#94A3B8] hover:text-white transition-colors rounded-xl bg-[#121826] border border-[#1E293B]"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9d1a19] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#090D16]">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Navigation Bar */}
        <nav className="hidden lg:block bg-[#090D16] border-t border-[#1E293B]/60 px-8 py-2">
          <ul className="flex items-center justify-center gap-8 text-xs uppercase font-bold tracking-wider">
            {navMenuItems.map((item, idx) => (
              <li
                key={idx}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-[#b8a468] transition-colors"
                >
                  <span>{item.title}</span>
                  {item.subItems && <ChevronDown className="w-3.5 h-3.5 text-[#b8a468]" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.title && (
                  <div className="absolute left-0 top-full w-64 bg-[#121826] border border-[#1E293B] rounded-2xl p-3 shadow-2xl space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        className="block px-3 py-2.5 rounded-xl text-xs text-[#94A3B8] hover:text-white hover:bg-[#090D16] transition-all normal-case font-normal"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Global Slide-out Navigation Drawer (Fixed Overlay - High Z-Index) */}
      {isNavOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setNavOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#121826] border-r border-[#1E293B] h-full overflow-y-auto p-6 z-10 flex flex-col justify-between shadow-2xl text-white">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#1E293B]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="Logo Joubert"
                    width={45}
                    height={45}
                    className="w-9 h-auto"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold text-white tracking-wider">Maison Joubert</span>
                    <span className="text-[10px] text-[#94A3B8]">Depuis 1909</span>
                  </div>
                </div>
                <button
                  onClick={() => setNavOpen(false)}
                  className="p-2 text-[#94A3B8] hover:text-[#b8a468] transition-colors rounded-xl bg-[#090D16] border border-[#1E293B]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Contacts Box */}
              <div className="my-6 p-4 rounded-2xl bg-[#090D16] border border-[#1E293B] space-y-3">
                <a
                  href="tel:0142362039"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#b8a468] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#b8a468]" />
                  <span className="font-semibold text-white">01 42 36 20 39</span>
                </a>
                <Link
                  href="/contactez-nous"
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#b8a468] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#b8a468]" />
                  <span>Agence 10 rue de la Bourse, 75002 Paris</span>
                </Link>
              </div>

              {/* Navigation Links */}
              <ul className="space-y-4">
                {navMenuItems.map((item, idx) => (
                  <li key={idx} className="border-b border-[#1E293B]/60 pb-3">
                    <Link
                      href={item.href}
                      onClick={() => setNavOpen(false)}
                      className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white hover:text-[#b8a468] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-[#b8a468]" />
                        <span>{item.title}</span>
                      </div>
                    </Link>

                    {item.subItems && (
                      <ul className="mt-2.5 pl-7 space-y-2">
                        {item.subItems.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              href={sub.href}
                              onClick={() => setNavOpen(false)}
                              className="flex items-center gap-2 text-xs text-[#94A3B8] hover:text-white transition-colors py-1"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-[#b8a468]" />
                              <span>{sub.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-[#1E293B]">
              <button
                onClick={() => {
                  setNavOpen(false);
                  setAppointmentOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center"
              >
                Prendre Rendez-vous en Agence
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
