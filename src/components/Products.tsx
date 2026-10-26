import { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { products, productCategories, type Product } from '@/data';

type ProductsSectionProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function Products({ products, onAddToCart }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const filtered = activeCategory === 'todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section id="produtos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Loja</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Produtos à <span className="text-gradient-gold">Venda</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            Produtos originais e de qualidade profissional para você compor o seu kit de maquiagem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'btn-primary text-white shadow-lg shadow-purple-600/40'
                  : 'glass text-purple-200 hover:bg-purple-700/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="card-hover card-gradient rounded-2xl overflow-hidden gold-border group flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-400 text-plum-900 text-xs font-bold uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                {product.oldPrice && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-bold">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span className="text-xs text-purple-200">{product.rating.toFixed(1)}</span>
                </div>

                <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                <p className="text-purple-300 text-xs mb-4 line-clamp-2 flex-1">{product.description}</p>

                <div className="flex items-end justify-between mb-3">
                  <div>
                    {product.oldPrice && (
                      <span className="text-xs text-purple-400 line-through block">{formatPrice(product.oldPrice)}</span>
                    )}
                    <span className="text-xl font-bold text-gradient-gold">{formatPrice(product.price)}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    added[product.id]
                      ? 'bg-green-500 text-white'
                      : 'btn-primary text-white'
                  }`}
                >
                  {added[product.id] ? (
                    <>
                      <Check className="w-4 h-4" /> Adicionado!
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Adicionar
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
