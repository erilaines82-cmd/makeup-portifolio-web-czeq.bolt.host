import { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import { tutorials, tutorialCategories } from '@/data';

export default function Tutorials() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = activeCategory === 'todos'
    ? tutorials
    : tutorials.filter((t) => t.category === activeCategory);

  const openVideo = (videoId: string) => setActiveVideo(videoId);
  const closeVideo = () => setActiveVideo(null);

  return (
    <section id="tutoriais" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Aprenda Conosco</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Tutoriais em <span className="text-gradient-gold">Vídeo</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            Tutoriais reais de maquiagem para noivas, debutantes, maquiagem artística e casual.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tutorialCategories.map((cat) => (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((tutorial) => (
            <div
              key={tutorial.id}
              className="card-hover card-gradient rounded-2xl overflow-hidden gold-border group"
            >
              <div
                className="relative h-52 cursor-pointer overflow-hidden"
                onClick={() => openVideo(tutorial.videoId)}
              >
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-plum-950/50 flex items-center justify-center group-hover:bg-plum-950/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-purple-600/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-400 transition-all">
                    <Play className="w-7 h-7 text-white group-hover:text-plum-900 fill-current ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg glass-strong text-xs text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {tutorial.duration}
                </span>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-medium uppercase tracking-wider">
                  {tutorial.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white mb-2">{tutorial.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeVideo}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white text-2xl hover:bg-purple-700/50"
            onClick={closeVideo}
            aria-label="Fechar"
          >
            ×
          </button>
          <div className="w-full max-w-4xl aspect-video-yt rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Tutorial de Maquiagem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
