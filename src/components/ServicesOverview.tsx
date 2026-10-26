import { Sparkles, Crown, Palette, Calendar, Gem, Home } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Maquiagem para Noivas',
    description: 'Look perfeito para o seu grande dia com produtos de longa duração e acabamento impecável.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Sparkles,
    title: 'Debutantes 15 Anos',
    description: 'Maquiagem especial para a festa dos seus sonhos, com brilho e glamour em púrpura.',
    color: 'from-fuchsia-500 to-purple-700',
  },
  {
    icon: Palette,
    title: 'Maquiagem Artística',
    description: 'Criações exclusivas para produções, fotografias e eventos temáticos.',
    color: 'from-purple-400 to-fuchsia-600',
  },
  {
    icon: Calendar,
    title: 'Maquiagem Casual',
    description: 'Make leve e natural para o dia a dia, trabalho e ocasiões especiais.',
    color: 'from-purple-600 to-purple-900',
  },
  {
    icon: Gem,
    title: 'Festas & Eventos',
    description: 'Glamour e sofisticação para festas, formaturas e celebrações inesquecíveis.',
    color: 'from-fuchsia-600 to-purple-800',
  },
  {
    icon: Sparkles,
    title: 'Madrinhas & Convidadas',
    description: 'Elegância e durabilidade para você brilhar como madrinha ou convidada especial.',
    color: 'from-purple-500 to-fuchsia-700',
  },
];

type ServicesOverviewProps = { description?: string };

export default function ServicesOverview({ description }: ServicesOverviewProps) {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Nossos Serviços</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Beleza para <span className="text-gradient-purple">Cada Ocasião</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            {description || 'Oferecemos maquiagem profissional para todos os momentos da sua vida.'}
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-600/20 to-purple-700/20 gold-border">
            <Home className="w-5 h-5 text-gold-400" />
            <span className="text-sm text-white font-medium">Atendemos a domicílio — vamos até você!</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-hover card-gradient rounded-2xl p-7 gold-border group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-purple-200 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
