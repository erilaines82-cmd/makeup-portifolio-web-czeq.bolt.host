import { Sparkles, Award, Heart, Users } from 'lucide-react';

type AboutProps = { paragraph1?: string; paragraph2?: string };

export default function About({ paragraph1, paragraph2 }: AboutProps) {
  const stats = [
    { icon: Users, value: '2.500+', label: 'Clientes Atendidas' },
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
    { icon: Heart, value: '98%', label: 'Satisfação' },
    { icon: Sparkles, value: '50+', label: 'Serviços Realizados' },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/15530661/pexels-photo-15530661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Maquiadora profissional"
                  className="rounded-2xl h-48 w-full object-cover gold-border"
                />
                <img
                  src="https://images.pexels.com/photos/1383537/pexels-photo-1383537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Maquiagem profissional"
                  className="rounded-2xl h-64 w-full object-cover gold-border"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/5149734/pexels-photo-5149734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Estúdio de maquiagem"
                  className="rounded-2xl h-64 w-full object-cover gold-border"
                />
                <img
                  src="https://images.pexels.com/photos/29901721/pexels-photo-29901721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Aplicação de maquiagem"
                  className="rounded-2xl h-48 w-full object-cover gold-border"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Sobre Nós</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Paixão pela <span className="text-gradient-gold">Beleza</span>
            </h2>
            <p className="text-purple-200 leading-relaxed mb-5">
              {paragraph1 || 'A Violet Beauty nasceu do amor pela maquiagem e da vontade de fazer cada mulher se sentir única e especial. Há mais de 15 anos, nossa equipe de maquiadoras profissionais transforma rostos e cria memórias inesquecíveis.'}
            </p>
            <p className="text-purple-200 leading-relaxed mb-8">
              {paragraph2 || 'Especializada em maquiagem para noivas, debutantes, festas e produções artísticas, utilizamos apenas produtos de alta qualidade para garantir resultados impecáveis e duradouros. Nossa missão é realçar a sua beleza natural com toque de glamour.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="card-gradient rounded-xl p-4 text-center gold-border">
                  <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-purple-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
