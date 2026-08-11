'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '@/stores/useStore';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const MiniCart = () => {
  const { isCartOpen, setCartOpen, cart, updateQuantity, removeFromCart, clearCart } = useAppStore();

  if (!isCartOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#121826] border-l border-[#1E293B] h-full overflow-y-auto p-6 z-10 flex flex-col justify-between shadow-2xl text-white">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#b8a468]" />
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Mon Panier ({cart.length})</h3>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 text-[#94A3B8] hover:text-[#b8a468] transition-colors rounded-lg hover:bg-[#1E293B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-[#1E293B] text-[#94A3B8] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-sm text-[#94A3B8]">Votre panier est actuellement vide.</p>
              <Link
                href="/achat-metaux/catalogue-achat"
                onClick={() => setCartOpen(false)}
                className="inline-block py-2.5 px-5 rounded-xl bg-[#1E293B] text-[#b8a468] hover:bg-[#b8a468] hover:text-black font-semibold text-xs transition-all"
              >
                Découvrir le Catalogue
              </Link>
            </div>
          ) : (
            <div className="py-6 space-y-4 divide-y divide-[#1E293B]">
              {cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <div className="w-16 h-16 bg-[#090D16] border border-[#1E293B] rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#b8a468] uppercase tracking-wider font-semibold">{item.category}</span>
                    <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
                    <p className="text-sm font-bold text-[#b8a468] mt-0.5">{item.price.toLocaleString('fr-FR')} €</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#1E293B] rounded-lg bg-[#090D16]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#94A3B8] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#94A3B8] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Total */}
        {cart.length > 0 && (
          <div className="pt-6 border-t border-[#1E293B] space-y-4">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-[#94A3B8]">Total Estimé (TTC)</span>
              <span className="text-xl font-bold text-[#b8a468]">{totalAmount.toLocaleString('fr-FR')} €</span>
            </div>

            <div className="space-y-2">
              <Link
                href="/devis-personnalise"
                onClick={() => setCartOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Demander un devis ferme</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-[#94A3B8] hover:text-red-400 transition-colors py-1"
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
