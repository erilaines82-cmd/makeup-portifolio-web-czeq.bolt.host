import { useState } from 'react';
import { inspirations, inspirationCategories } from '@/data';

export default function Inspirations() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'todos'
    ? inspirations
    : inspirations.filter((i) => i.category === activeCategory);

  return (
    <section id="inspiracoes" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Galeria</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Inspirações de <span className="text-gradient-purple">Maquiagem</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            Ideias e referências de maquiagem para noivas, debutantes, produções artísticas e looks casuais.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {inspirationCategories.map((cat) => (
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((insp) => (
            <div
              key={insp.id}
              className="relative group rounded-2xl overflow-hidden gold-border cursor-pointer card-hover"
              onClick={() => setLightbox(insp.image)}
            >
              <img
                src={insp.image}
                alt={insp.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs text-gold-400 uppercase tracking-wider block mb-1">
                  {insp.category}
                </span>
                <p className="text-white font-medium text-sm">{insp.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white text-2xl hover:bg-purple-700/50"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <img src={lightbox} alt="Inspiração de maquiagem" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
