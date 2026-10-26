import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ShoppingBag } from 'lucide-react';

type HeaderProps = {
  cartCount: number;
  onCartClick: () => void;
  currentRoute: string;
  onNavigate: (route: string) => void;
};

const navLinks = [
  { route: 'produtos', label: 'Produtos' },
  { route: 'pacotes', label: 'Pacotes' },
  { route: 'tutoriais', label: 'Tutoriais' },
  { route: 'inspiracoes', label: 'Inspirações' },
  { route: 'sobre', label: 'Sobre' },
  { route: 'contato', label: 'Contato' },
];

export default function Header({ cartCount, onCartClick, currentRoute, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-purple-950/30' : 'glass-strong py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-600/40 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="leading-none">
            <span className="font-display text-xl font-bold text-white block">Violet Beauty</span>
            <span className="text-[10px] tracking-[0.3em] text-purple-300 uppercase">Makeup & Beauty</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNav(link.route)}
              className={`text-sm font-medium transition-colors relative group ${
                currentRoute === link.route ? 'text-gold-300' : 'text-purple-100 hover:text-gold-300'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                currentRoute === link.route ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all"
            aria-label="Carrinho"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-400 text-plum-900 text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-11 h-11 rounded-full glass flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden glass-strong mt-3 mx-4 rounded-2xl p-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNav(link.route)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentRoute === link.route ? 'bg-purple-700/40 text-gold-300' : 'text-purple-100 hover:bg-purple-700/30'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
