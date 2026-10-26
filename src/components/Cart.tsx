import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Product } from '@/data';

export type CartItem = Product & { quantity: number };

type CartProps = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
};

export default function Cart({ open, items, onClose, onRemove, onQuantityChange }: CartProps) {
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if (open) setCheckout(false);
  }, [open]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[90] flex justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />

          <div className="relative w-full max-w-md glass-strong h-full overflow-y-auto shadow-2xl animate-slide-up">
            <div className="sticky top-0 glass-strong border-b border-purple-700/30 p-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold text-white">Seu Carrinho</h3>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-purple-700/40">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
                <div className="w-20 h-20 rounded-full bg-purple-800/40 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-purple-200 font-medium mb-2">Seu carrinho está vazio</p>
                <p className="text-purple-400 text-sm">Adicione produtos para continuar</p>
              </div>
            ) : checkout ? (
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-white mb-6">Finalizar Compra</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400" />
                  <input type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400" />
                  <input type="tel" placeholder="Telefone" className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400" />
                  <input type="text" placeholder="Endereço de entrega" className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400" />
                </div>

                <div className="mt-6 p-4 rounded-xl bg-purple-900/40 border border-purple-700/30">
                  <div className="flex justify-between text-sm text-purple-200 mb-2">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-purple-200 mb-2">
                    <span>Frete</span>
                    <span>Grátis</span>
                  </div>
                  <div className="border-t border-purple-700/30 pt-2 mt-2 flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-gradient-gold">{formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckout(false)}
                  className="w-full mt-6 py-4 rounded-xl btn-gold text-sm font-semibold tracking-wide uppercase"
                >
                  Confirmar Pedido
                </button>
                <button
                  onClick={() => setCheckout(false)}
                  className="w-full mt-2 py-3 rounded-xl glass text-purple-200 text-sm hover:bg-purple-700/30"
                >
                  Voltar
                </button>
              </div>
            ) : (
              <>
                <div className="p-5 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 card-gradient rounded-xl p-3 gold-border">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm font-medium line-clamp-2">{item.name}</h4>
                        <p className="text-gradient-gold font-bold text-sm mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onQuantityChange(item.id, -1)}
                              className="w-7 h-7 rounded-lg glass flex items-center justify-center hover:bg-purple-700/40"
                            >
                              <Minus className="w-3 h-3 text-white" />
                            </button>
                            <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onQuantityChange(item.id, 1)}
                              className="w-7 h-7 rounded-lg glass flex items-center justify-center hover:bg-purple-700/40"
                            >
                              <Plus className="w-3 h-3 text-white" />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-purple-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sticky bottom-0 glass-strong border-t border-purple-700/30 p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-200 text-sm">Total</span>
                    <span className="text-2xl font-bold text-gradient-gold">{formatPrice(total)}</span>
                  </div>
                  <button
                    onClick={() => setCheckout(true)}
                    className="w-full py-4 rounded-xl btn-gold text-sm font-semibold tracking-wide uppercase"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
