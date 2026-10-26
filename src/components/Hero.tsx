import { Sparkles, Star, ArrowDown, Home } from 'lucide-react';
import heroImage from '@/components/meu_meu.jpg';

type HeroProps = { description?: string };

export default function Hero({ description }: HeroProps) {
  return (
    <section id="topo" className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
        <div className="text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs tracking-wider uppercase text-purple-200">Beleza que transforma</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white text-shadow-lg mb-6">
            Realce sua
            <span className="block text-gradient-gold">Beleza Violeta</span>
          </h1>

          <p className="text-lg text-purple-100 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {description || 'Maquiagem profissional para noivas, debutantes, festas e o dia a dia. Produtos, tutoriais e pacotes exclusivos para você arrasar em qualquer ocasião.'}
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-600/25 to-purple-700/25 gold-border mb-6">
            <Home className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white font-medium">Atendemos a domicílio — vamos até você!</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#produtos" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide uppercase">
              Ver Produtos
            </a>
            <a href="#pacotes" className="px-8 py-4 rounded-full glass text-white font-semibold text-sm tracking-wide uppercase hover:bg-purple-700/40 transition-all">
              Nossos Pacotes
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-sm text-purple-200">+2.500 clientes satisfeitas</span>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50">
            <img
              src={heroImage}
              alt="Maquiagem profissional Violet Beauty"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/60 to-transparent" />
          </div>


        </div>
      </div>

      <a href="#produtos" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-300 animate-bounce hidden md:block">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
