'use client';

import React, { useState } from 'react';
import { useAppStore } from '@/stores/useStore';
import { ArrowLeftRight, TrendingUp, DollarSign, Calculator, RefreshCw } from 'lucide-react';

export const CurrencyExchangeWidget = () => {
  const { currencyRates, metalRates } = useAppStore();
  
  // Currency Calculator state
  const [amount, setAmount] = useState<number>(1000);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [direction, setDirection] = useState<'buy' | 'sell'>('buy'); // buy = User buys FX with EUR

  const currentFx = currencyRates.find((c) => c.code === selectedCurrency) || currencyRates[0];

  const convertedAmount = direction === 'buy'
    ? amount * currentFx.buyRate
    : amount / currentFx.sellRate;

  return (
    <section className="py-20 bg-[#090D16] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Live Gold & Silver Ticker */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Cours des Métaux Précieux</h3>
                  <p className="text-xs text-[#94A3B8]">Cotations LBMA en direct • Mise à jour continue</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                EN DIRECT
              </span>
            </div>

            <div className="space-y-4">
              {metalRates.map((metal, idx) => (
                <div 
                  key={idx}
                  className="bg-[#090D16] border border-[#1E293B] rounded-2xl p-4 flex items-center justify-between hover:border-[#b8a468]/50 transition-all"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white">{metal.name}</h4>
                    <span className="text-[10px] text-[#94A3B8]">{metal.unit}</span>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-bold text-[#b8a468]">
                      {metal.buyPrice.toLocaleString('fr-FR')} €
                    </div>
                    <span className={`text-[10px] font-semibold ${metal.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {metal.change24h >= 0 ? '+' : ''}{metal.change24h}% (24h)
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-center">
              <a
                href="/achat-metaux#graphs-rates-metals"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#b8a468] hover:text-white transition-colors"
              >
                <span>Voir les graphiques historiques complets</span>
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Currency Exchange Calculator */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Bureau de Change & Devises</h3>
                  <p className="text-xs text-[#94A3B8]">Simulateur de conversion sans frais cachés</p>
                </div>
              </div>
            </div>

            {/* Toggle Direction */}
            <div className="grid grid-cols-2 gap-2 bg-[#090D16] p-1.5 rounded-2xl border border-[#1E293B] mb-6">
              <button
                onClick={() => setDirection('buy')}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  direction === 'buy'
                    ? 'bg-[#b8a468] text-black shadow-lg'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                J'achète des Devises (EUR ➔ {selectedCurrency})
              </button>
              <button
                onClick={() => setDirection('sell')}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  direction === 'sell'
                    ? 'bg-[#b8a468] text-black shadow-lg'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Je vends des Devises ({selectedCurrency} ➔ EUR)
              </button>
            </div>

            <div className="space-y-4">
              {/* Amount Input */}
              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                  Montant en {direction === 'buy' ? 'Euros (€)' : currentFx.code}
                </label>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-lg font-bold text-white focus:outline-none focus:border-[#b8a468]"
                />
              </div>

              {/* Currency Selection */}
              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">Devise Internationale</label>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus:border-[#b8a468]"
                >
                  {currencyRates.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code} - {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result Card */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#1E293B]/80 to-[#090D16] border border-[#b8a468]/30">
                <span className="text-xs text-[#94A3B8] uppercase font-semibold">Montant Estimé à recevoir</span>
                <div className="text-2xl sm:text-3xl font-bold text-[#b8a468] mt-1">
                  {convertedAmount.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}{' '}
                  {direction === 'buy' ? currentFx.code : '€'}
                </div>
                <p className="text-[11px] text-[#94A3B8] mt-2">
                  Taux appliqué: 1 EUR = {currentFx.buyRate} {currentFx.code} • Zéro commission additionnelle.
                </p>
              </div>

              <a
                href="/devises/catalogue"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center block mt-4"
              >
                Réserver ma devise en agence
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
