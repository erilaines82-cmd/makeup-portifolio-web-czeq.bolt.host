import { Check, Clock, Star } from 'lucide-react';
import { type ServicePackage } from '@/data';

type PackagesProps = { packages: ServicePackage[] };

export default function Packages({ packages }: PackagesProps) {
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section id="servicos" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Pacotes Especiais</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Pacotes para <span className="text-gradient-purple">Cada Celebração</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            Pacotes completos de maquiagem profissional para noivas, madrinhas, debutantes e mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`card-hover rounded-3xl overflow-hidden flex flex-col ${
                pkg.popular
                  ? 'gold-border bg-gradient-to-b from-purple-700/40 to-plum-900/60 shadow-2xl shadow-purple-700/30'
                  : 'card-gradient gold-border'
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/30 to-transparent" />
                {pkg.popular && (
                  <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-gold-400 text-plum-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 fill-plum-900" /> Popular
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-xs text-purple-200">{pkg.duration}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-purple-200 text-sm mb-5 leading-relaxed">{pkg.description}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-purple-100">
                      <div className="w-5 h-5 rounded-full bg-purple-600/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-purple-700/30 pt-5">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-purple-300 text-xs uppercase tracking-wider">A partir de</span>
                    <span className="text-3xl font-bold text-gradient-gold">{formatPrice(pkg.price)}</span>
                  </div>

                  <a
                    href={`https://wa.me/5521993891418?text=${encodeURIComponent(`Olá! Tenho interesse no *${pkg.name}* (a partir de ${formatPrice(pkg.price)}). Gostaria de agendar.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block py-3.5 rounded-xl text-center text-sm font-semibold tracking-wide uppercase transition-all ${
                      pkg.popular ? 'btn-gold' : 'btn-primary text-white'
                    }`}
                  >
                    Agendar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
