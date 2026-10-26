import { useState, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart, { type CartItem } from '@/components/Cart';
import Admin from '@/components/Admin';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import PackagesPage from '@/pages/PackagesPage';
import TutorialsPage from '@/pages/TutorialsPage';
import InspirationsPage from '@/pages/InspirationsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { products as defaultProducts, packages as defaultPackages, type Product, type ServicePackage } from '@/data';
import { supabase } from '@/lib/supabase';

type SiteContent = Record<string, string>;
type ManagedRow = { id: string; kind: 'product' | 'package'; data: Record<string, unknown> };

type Route = 'home' | 'produtos' | 'pacotes' | 'tutoriais' | 'inspiracoes' | 'sobre' | 'contato';

const VALID_ROUTES: Route[] = ['home', 'produtos', 'pacotes', 'tutoriais', 'inspiracoes', 'sobre', 'contato'];

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === 'admin' || !hash) return 'home';
  return (VALID_ROUTES.includes(hash as Route) ? hash : 'home') as Route;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(window.location.hash === '#admin');
  const [route, setRoute] = useState<Route>(parseHash());
  const [managedProducts, setManagedProducts] = useState<Product[]>(defaultProducts);
  const [managedPackages, setManagedPackages] = useState<ServicePackage[]>(defaultPackages);
  const [content, setContent] = useState<SiteContent>({});

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash === 'admin') {
        setAdminOpen(true);
        return;
      }
      setAdminOpen(false);
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    const loadContent = async () => {
      const [itemsResult, contentResult] = await Promise.all([
        supabase.from('managed_items').select('id, kind, data'),
        supabase.from('site_content').select('key, value'),
      ]);
      if (!itemsResult.error && itemsResult.data) {
        const rows = itemsResult.data as ManagedRow[];
        setManagedProducts(defaultProducts.map((item) => {
          const row = rows.find((candidate) => candidate.id === item.id && candidate.kind === 'product');
          return row ? { ...item, ...row.data } as Product : item;
        }));
        setManagedPackages(defaultPackages.map((item) => {
          const row = rows.find((candidate) => candidate.id === item.id && candidate.kind === 'package');
          return row ? { ...item, ...row.data } as ServicePackage : item;
        }));
      }
      if (!contentResult.error && contentResult.data) {
        setContent(Object.fromEntries(contentResult.data.map((row) => [row.key, row.value])));
      }
    };
    void loadContent();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((next: string) => {
    window.location.hash = next;
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const changeQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (route) {
      case 'produtos':
        return <ProductsPage products={managedProducts} onAddToCart={addToCart} />;
      case 'pacotes':
        return <PackagesPage packages={managedPackages} />;
      case 'tutoriais':
        return <TutorialsPage />;
      case 'inspiracoes':
        return <InspirationsPage />;
      case 'sobre':
        return <AboutPage paragraph1={content.about_paragraph_1} paragraph2={content.about_paragraph_2} />;
      case 'contato':
        return <ContactPage address={content.address} />;
      default:
        return (
          <HomePage
            content={content}
            products={managedProducts}
            packages={managedPackages}
            onAddToCart={addToCart}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-plum-950 text-white">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} currentRoute={route} onNavigate={navigate} />
      {renderPage()}
      <Footer description={content.footer_description} onNavigate={navigate} />
      <Cart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={changeQuantity}
      />
      {adminOpen && <Admin onClose={() => { window.location.hash = 'home'; setAdminOpen(false); }} />}
    </div>
  );
}

export default App;
