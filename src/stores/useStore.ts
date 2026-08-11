import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

export interface MetalRate {
  name: string;
  buyPrice: number;
  sellPrice: number;
  change24h: number;
  unit: string;
}

export interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  buyRate: number;
  sellRate: number;
}

interface AppState {
  // Navigation & UI States
  isNavOpen: boolean;
  setNavOpen: (open: boolean) => void;
  toggleNav: () => void;

  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  toggleCart: () => void;

  isAppointmentOpen: boolean;
  setAppointmentOpen: (open: boolean) => void;

  isQuoteModalOpen: boolean;
  setQuoteModalOpen: (open: boolean) => void;

  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;

  // Live Market Data
  metalRates: MetalRate[];
  currencyRates: CurrencyRate[];
}

export const useAppStore = create<AppState>((set) => ({
  isNavOpen: false,
  setNavOpen: (open) => set({ isNavOpen: open }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),

  isCartOpen: false,
  setCartOpen: (open) => set({ isCartOpen: open }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  isAppointmentOpen: false,
  setAppointmentOpen: (open) => set({ isAppointmentOpen: open }),

  isQuoteModalOpen: false,
  setQuoteModalOpen: (open) => set({ isQuoteModalOpen: open }),

  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isCartOpen: true,
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }], isCartOpen: true };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, delta) =>
    set((state) => ({
      cart: state.cart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[],
    })),

  clearCart: () => set({ cart: [] }),

  metalRates: [
    { name: "Or Pur (Lingot 1kg)", buyPrice: 78450.00, sellPrice: 76800.00, change24h: +1.24, unit: "€/Lingot" },
    { name: "20 Francs Napoléon", buyPrice: 462.50, sellPrice: 448.00, change24h: +0.85, unit: "€/Pièce" },
    { name: "Argent Pur (Lingot 1kg)", buyPrice: 895.00, sellPrice: 850.00, change24h: +2.10, unit: "€/Lingot" },
    { name: "Krugerrand 1oz", buyPrice: 2480.00, sellPrice: 2410.00, change24h: +0.95, unit: "€/Pièce" },
    { name: "50 Francs Hercule (Argent)", buyPrice: 32.50, sellPrice: 29.80, change24h: -0.40, unit: "€/Pièce" },
  ],

  currencyRates: [
    { code: "USD", name: "Dollar Américain", flag: "🇺🇸", buyRate: 1.0850, sellRate: 1.0990 },
    { code: "GBP", name: "Livre Sterling", flag: "🇬🇧", buyRate: 0.8540, sellRate: 0.8680 },
    { code: "CHF", name: "Franc Suisse", flag: "🇨🇭", buyRate: 0.9420, sellRate: 0.9580 },
    { code: "CAD", name: "Dollar Canadien", flag: "🇨🇦", buyRate: 1.4820, sellRate: 1.5050 },
    { code: "JPY", name: "Yen Japonais", flag: "🇯🇵", buyRate: 161.20, sellRate: 164.80 },
    { code: "AUD", name: "Dollar Australien", flag: "🇦🇺", buyRate: 1.6450, sellRate: 1.6780 },
    { code: "AED", name: "Dirham E.A.U.", flag: "🇦🇪", buyRate: 3.9850, sellRate: 4.0500 },
  ],
}));
