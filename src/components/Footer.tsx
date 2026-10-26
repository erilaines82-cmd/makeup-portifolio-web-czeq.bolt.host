import { Sparkles, Instagram, Facebook, Mail, Phone, Heart } from 'lucide-react';

type FooterProps = {
  description?: string;
  onNavigate: (route: string) => void;
};

const navItems = [
  { route: 'produtos', label: 'Produtos' },
  { route: 'pacotes', label: 'Pacotes' },
  { route: 'tutoriais', label: 'Tutoriais' },
  { route: 'inspiracoes', label: 'Inspirações' },
  { route: 'sobre', label: 'Sobre' },
  { route: 'contato', label: 'Contato' },
];

export default function Footer({ description, onNavigate }: FooterProps) {
  return (
    <footer className="bg-plum-950 border-t border-purple-800/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block">Violet Beauty</span>
                <span className="text-[10px] tracking-[0.3em] text-purple-400 uppercase">Makeup & Beauty</span>
              </div>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed">
              {description || 'Maquiagem profissional para todas as ocasiões. Realçamos sua beleza com produtos de qualidade e técnicas profissionais.'}
            </p>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.route}>
                  <button onClick={() => onNavigate(item.route)} className="text-purple-300 hover:text-gold-400 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-purple-300">Maquiagem para Noivas</span></li>
              <li><span className="text-purple-300">Debutantes 15 Anos</span></li>
              <li><span className="text-purple-300">Maquiagem Artística</span></li>
              <li><span className="text-purple-300">Madrinhas & Convidadas</span></li>
              <li><span className="text-purple-300">Maquiagem Casual</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-purple-300">
                <Phone className="w-4 h-4 text-gold-400" /> Nanny Santos — (21) 99389-1418
              </li>
              <li className="flex items-center gap-2 text-purple-300">
                <Phone className="w-4 h-4 text-gold-400" /> Bruna Napoleão — (21) 99947-9675
              </li>
              <li className="flex items-center gap-2 text-purple-300">
                <Mail className="w-4 h-4 text-gold-400" /> vioeltabeauty@gmail.com
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com/violetabeauty2026" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400">
          <p>© 2026 Violet Beauty · Todos os direitos reservados</p>
          <a href="#admin" className="text-purple-500 hover:text-gold-400 transition-colors">Área da administradora</a>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-purple-500 fill-purple-500" /> para amantes de maquiagem
          </p>
        </div>
      </div>
    </footer>
  );
}
