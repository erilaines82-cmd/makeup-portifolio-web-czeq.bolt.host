import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, Check, Clock, Home } from 'lucide-react';

const PARTNERS = [
  { name: 'Nanny Santos', phone: '(21) 99389-1418', whatsapp: '5521993891418' },
  { name: 'Bruna Napoleão', phone: '(21) 99947-9675', whatsapp: '5521999479675' },
];
const WHATSAPP_NUMBER = PARTNERS[0].whatsapp;
const EMAIL = 'vioeltabeauty@gmail.com';
const INSTAGRAM = 'violetabeauty2026';

type ContactProps = { address?: string };

export default function Contact({ address }: ContactProps) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabels: Record<string, string> = {
      noivas: 'Maquiagem para Noivas',
      debutantes: 'Debutantes 15 Anos',
      madrinhas: 'Madrinhas & Convidadas',
      artistica: 'Maquiagem Artística',
      casual: 'Maquiagem Casual',
      festa: 'Festas & Eventos',
    };
    const text =
      `*Novo Agendamento — Violet Beauty*%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Serviço:* ${serviceLabels[form.service] || form.service}%0A` +
      `*Data desejada:* ${form.date || 'A combinar'}%0A` +
      `*Mensagem:* ${form.message || '—'}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', service: '', date: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: 'Endereço', value: address || 'Rua Victor Hugo, 250 — Comendador Soares, Nova Iguaçu, RJ' },
    { icon: Instagram, label: 'Instagram', value: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}` },
  ];

  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Fale Conosco</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Agende pelo <span className="text-gradient-purple">WhatsApp</span>
          </h2>
          <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
            Preencha o formulário e enviamos seu pedido direto no nosso WhatsApp. Resposta rápida e garantida!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-3">
              {PARTNERS.map((partner) => (
                <a
                  key={partner.whatsapp}
                  href={`https://wa.me/${partner.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-gradient rounded-2xl p-6 gold-border card-hover group bg-gradient-to-r from-green-600/20 to-purple-800/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-300 uppercase tracking-wider">Agende com a sócia</p>
                      <p className="text-white font-bold text-lg">{partner.name}</p>
                      <p className="text-purple-200 text-sm mt-0.5">{partner.phone}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {contactInfo.map((info, i) => (
              <div key={i} className="card-gradient rounded-2xl p-5 gold-border flex items-center gap-4 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-purple-300 uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-gold-400 transition-colors break-all">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card-gradient rounded-2xl p-6 gold-border mt-6 bg-gradient-to-r from-green-600/15 to-purple-800/15">
              <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Home className="w-5 h-5 text-gold-400" /> Atendimento a Domicílio
              </h3>
              <p className="text-sm text-purple-200 leading-relaxed mb-4">
                Vamos até a sua casa, salão ou local do evento! Não precisa se preocupar com deslocamento — a beleza vem até você.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar um atendimento a domicílio.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-300 hover:text-green-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Solicitar atendimento a domicílio
              </a>
            </div>

            <div className="card-gradient rounded-2xl p-6 gold-border mt-6">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-400" /> Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-sm text-purple-200">
                <div className="flex justify-between"><span>Segunda a Sexta</span><span>9h às 19h</span></div>
                <div className="flex justify-between"><span>Sábado</span><span>9h às 18h</span></div>
                <div className="flex justify-between"><span>Domingo</span><span>Sob agendamento</span></div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-green-700/40 transition-all">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href={`mailto:${EMAIL}`} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all">
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-purple-700/40 transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-gradient rounded-2xl p-7 gold-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-purple-300 uppercase tracking-wider mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-xs text-purple-300 uppercase tracking-wider mb-2">Telefone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-purple-300 uppercase tracking-wider mb-2">Serviço de Interesse</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="noivas">Maquiagem para Noivas</option>
                  <option value="debutantes">Debutantes 15 Anos</option>
                  <option value="madrinhas">Madrinhas & Convidadas</option>
                  <option value="artistica">Maquiagem Artística</option>
                  <option value="casual">Maquiagem Casual</option>
                  <option value="festa">Festas & Eventos</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-purple-300 uppercase tracking-wider mb-2">Data Desejada</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-purple-300 uppercase tracking-wider mb-2">Mensagem</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-plum-950/50 border border-purple-700/40 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                placeholder="Conte-nos sobre o evento, horário e detalhes..."
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all flex items-center justify-center gap-2 ${
                sent ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:shadow-green-600/40 hover:-translate-y-0.5'
              }`}
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Enviado ao WhatsApp!
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" /> Agendar via WhatsApp
                </>
              )}
            </button>

            <p className="text-center text-xs text-purple-400">
              Ao enviar, você será redirecionada para o WhatsApp com a mensagem pronta.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
