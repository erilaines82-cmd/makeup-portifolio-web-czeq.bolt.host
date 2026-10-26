import { useEffect, useState } from 'react';
import { Check, LockKeyhole, LogOut, Save, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { products, packages, type Product, type ServicePackage } from '@/data';

const OWNER_EMAIL = 'vioeltabeauty@gmail.com';
type AdminItem = (Product | ServicePackage) & { kind: 'product' | 'package' };
type Content = Record<string, string>;

type AdminProps = {
  onClose: () => void;
};

const initialItems: AdminItem[] = [
  ...products.map((item) => ({ ...item, kind: 'product' as const })),
  ...packages.map((item) => ({ ...item, kind: 'package' as const })),
];

export default function Admin({ onClose }: AdminProps) {
  const [email, setEmail] = useState(OWNER_EMAIL);
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [items, setItems] = useState<AdminItem[]>(initialItems);
  const [content, setContent] = useState<Content>({
    hero_description: 'Maquiagem profissional para noivas, debutantes, festas e o dia a dia. Produtos, tutoriais e pacotes exclusivos para você arrasar em qualquer ocasião.',
    services_description: 'Oferecemos maquiagem profissional para todos os momentos da sua vida.',
    about_paragraph_1: '',
    about_paragraph_2: '',
    footer_description: '',
    address: 'Rua Victor Hugo, 250 — Comendador Soares, Nova Iguaçu, RJ',
  });
  const [activeTab, setActiveTab] = useState<'items' | 'content'>('items');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const currentEmail = data.session?.user.email ?? null;
      setSessionEmail(currentEmail === OWNER_EMAIL ? currentEmail : null);
    });
  }, []);

  useEffect(() => {
    if (!sessionEmail) return;
    Promise.all([
      supabase.from('managed_items').select('id, kind, data'),
      supabase.from('site_content').select('key, value'),
    ]).then(([itemsResult, contentResult]) => {
      if (!itemsResult.error && itemsResult.data) {
        setItems((current) => current.map((item) => {
          const override = itemsResult.data.find((row) => row.id === item.id)?.data as Partial<AdminItem> | undefined;
          return override ? { ...item, ...override } : item;
        }));
      }
      if (!contentResult.error && contentResult.data) {
        setContent((current) => Object.fromEntries(contentResult.data.map((row) => [row.key, row.value])) as Content);
      }
    });
  }, [sessionEmail]);

  const showMessage = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 3000);
  };

  const handleAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    const result = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (result.error) {
      setMessage(result.error.message.includes('Invalid login') ? 'E-mail ou senha incorretos.' : result.error.message);
      return;
    }
    if (email !== OWNER_EMAIL) {
      await supabase.auth.signOut();
      setMessage('Este acesso é exclusivo da administradora.');
      return;
    }
    setSessionEmail(OWNER_EMAIL);
    setMessage(isSignUp ? 'Conta criada. Você já pode administrar o site.' : 'Acesso autorizado.');
  };

  const updateItem = (id: string, field: string, value: string) => {
    setItems((current) => current.map((item) => item.id === id ? {
      ...item,
      [field]: field === 'price' || field === 'oldPrice' ? Number(value) : value,
    } : item));
  };

  const saveItem = async (item: AdminItem) => {
    setLoading(true);
    const { kind, ...data } = item;
    const { error } = await supabase.from('managed_items').upsert({ id: item.id, kind, data });
    setLoading(false);
    showMessage(error ? 'Não foi possível salvar este item.' : 'Alteração salva no site.');
  };

  const saveContent = async (key: string) => {
    setLoading(true);
    const { error } = await supabase.from('site_content').upsert({ key, value: content[key] });
    setLoading(false);
    showMessage(error ? 'Não foi possível salvar este texto.' : 'Texto atualizado no site.');
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSessionEmail(null);
  };

  if (!sessionEmail) {
    return (
      <div className="fixed inset-0 z-[120] bg-plum-950/95 backdrop-blur-md flex items-center justify-center p-4">
        <div className="w-full max-w-md card-gradient rounded-3xl gold-border p-7 shadow-2xl">
          <button onClick={onClose} className="text-purple-300 hover:text-white text-sm mb-8">Voltar ao site</button>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center mb-5">
            <LockKeyhole className="w-7 h-7 text-plum-950" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white">Área da administradora</h1>
          <p className="text-purple-200 text-sm mt-2 mb-6">Entre com seu e-mail e senha para editar o site.</p>
          <form onSubmit={handleAuth} className="space-y-4">
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-xl bg-plum-950/60 border border-purple-700/40 text-white" />
            <input type="password" required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Sua senha" className="w-full px-4 py-3 rounded-xl bg-plum-950/60 border border-purple-700/40 text-white" />
            <button disabled={loading} className="w-full py-3 rounded-xl btn-primary text-white font-semibold flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5" /> {isSignUp ? 'Criar acesso' : 'Entrar'}
            </button>
          </form>
          {message && <p className="text-gold-300 text-sm mt-4">{message}</p>}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-purple-300 hover:text-gold-300 text-sm mt-5">{isSignUp ? 'Já tenho uma conta' : 'Ainda não tenho uma conta'}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] bg-plum-950 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em]">Violet Beauty</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">Painel da administradora</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-full glass text-white text-sm">Ver site</button>
            <button onClick={logout} className="px-4 py-2 rounded-full bg-red-500/20 text-red-200 text-sm flex items-center gap-2"><LogOut className="w-4 h-4" /> Sair</button>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <button onClick={() => setActiveTab('items')} className={`px-5 py-2.5 rounded-full text-sm ${activeTab === 'items' ? 'btn-primary text-white' : 'glass text-purple-200'}`}>Produtos e pacotes</button>
          <button onClick={() => setActiveTab('content')} className={`px-5 py-2.5 rounded-full text-sm ${activeTab === 'content' ? 'btn-primary text-white' : 'glass text-purple-200'}`}>Textos e endereço</button>
        </div>

        {message && <div className="mb-5 rounded-xl bg-green-500/15 border border-green-400/30 text-green-200 px-4 py-3 text-sm">{message}</div>}

        {activeTab === 'items' ? (
          <div className="grid lg:grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item.id} className="card-gradient rounded-2xl gold-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-gold-400">{item.kind === 'product' ? 'Produto' : 'Pacote'}</span>
                  <span className="text-xs text-purple-400">{item.id}</span>
                </div>
                <div className="space-y-3">
                  <input value={item.name} onChange={(event) => updateItem(item.id, 'name', event.target.value)} className="admin-input" aria-label="Nome" />
                  <textarea value={item.description} onChange={(event) => updateItem(item.id, 'description', event.target.value)} className="admin-input min-h-20" aria-label="Descrição" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" step="0.01" value={item.price} onChange={(event) => updateItem(item.id, 'price', event.target.value)} className="admin-input" aria-label="Preço" />
                    <input type="text" value={'duration' in item ? item.duration : ''} onChange={(event) => updateItem(item.id, 'duration', event.target.value)} className="admin-input" placeholder="Duração (pacote)" aria-label="Duração" />
                  </div>
                  <input value={item.image} onChange={(event) => updateItem(item.id, 'image', event.target.value)} className="admin-input" aria-label="Foto" placeholder="URL da foto" />
                  <button onClick={() => saveItem(item)} disabled={loading} className="w-full py-2.5 rounded-xl bg-green-600 text-white font-medium flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Salvar alteração</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl space-y-5">
            {Object.entries(content).map(([key, value]) => (
              <div key={key} className="card-gradient rounded-2xl gold-border p-5">
                <label className="block text-sm text-gold-300 mb-2">{key.replace(/_/g, ' ')}</label>
                <textarea value={value} onChange={(event) => setContent((current) => ({ ...current, [key]: event.target.value }))} className="admin-input min-h-24" />
                <button onClick={() => saveContent(key)} disabled={loading} className="mt-3 py-2.5 px-5 rounded-xl bg-green-600 text-white font-medium flex items-center gap-2"><Check className="w-4 h-4" /> Salvar texto</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
