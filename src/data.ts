export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'rostos' | 'labios' | 'olhos' | 'acessorios' | 'fragrancias';
  rating: number;
  badge?: string;
};

export type ServicePackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  image: string;
  popular?: boolean;
};

export type Tutorial = {
  id: string;
  title: string;
  description: string;
  videoId: string;
  category: 'noivas' | 'debutantes' | 'artistica' | 'casual';
  thumbnail: string;
  duration: string;
};

export type Inspiration = {
  id: string;
  image: string;
  title: string;
  category: 'noivas' | 'debutantes' | 'artistica' | 'casual';
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Batom Líquido Matte Púrpura',
    description: 'Batom líquido de longa duração com acabamento mate aveludado. Cor púrpura intenso.',
    price: 39.9,
    oldPrice: 59.9,
    image: 'https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'labios',
    rating: 4.8,
    badge: 'Mais Vendido',
  },
  {
    id: 'p2',
    name: 'Paleta de Sombras Royal Purple',
    description: '12 tons de sombras em texturas mate e cintilante. Pigmentação intensa.',
    price: 89.9,
    oldPrice: 129.9,
    image: 'https://images.pexels.com/photos/6527697/pexels-photo-6527697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'olhos',
    rating: 4.9,
    badge: 'Novo',
  },
  {
    id: 'p3',
    name: 'Conjunto de Pincéis Profissionais',
    description: '10 pincéis profissionais para maquiagem completa. Cerda macia e precisa.',
    price: 119.9,
    oldPrice: 179.9,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'acessorios',
    rating: 4.7,
  },
  {
    id: 'p4',
    name: 'Base Líquida Cobertura Total',
    description: 'Base de alta cobertura com FPS 30. Acabamento natural e longa duração.',
    price: 69.9,
    image: 'https://images.pexels.com/photos/10044948/pexels-photo-10044948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'rostos',
    rating: 4.6,
  },
  {
    id: 'p5',
    name: 'Rímal Volume Extra Black',
    description: 'Rímal que proporciona volume e curvatura extrema. Fórmula à prova d\'água.',
    price: 34.9,
    oldPrice: 49.9,
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'olhos',
    rating: 4.8,
    badge: 'Promoção',
  },
  {
    id: 'p6',
    name: 'Delineador Líquido Ultra Preciso',
    description: 'Delineador preto intenso com ponta fina para traços perfeitos. Resistente.',
    price: 29.9,
    image: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'olhos',
    rating: 4.7,
  },
  {
    id: 'p7',
    name: 'Pó Compacto Matte',
    description: 'Pó compacto que controla a oleosidade por até 12 horas. Acabamento aveludado.',
    price: 44.9,
    oldPrice: 64.9,
    image: 'https://images.pexels.com/photos/19117855/pexels-photo-19117855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'rostos',
    rating: 4.5,
  },
  {
    id: 'p8',
    name: 'Coleção de Batons Luxo',
    description: 'Kit com 6 batons em tons nudes e púrpuras. Perfeito para presente.',
    price: 149.9,
    oldPrice: 229.9,
    image: 'https://images.pexels.com/photos/25533521/pexels-photo-25533521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'labios',
    rating: 4.9,
    badge: 'Kit Presente',
  },
  {
    id: 'p9',
    name: 'Perfume Elegance Púrpura',
    description: 'Fragrância floral amadeirada com notas de jasmim e sândalo. 50ml.',
    price: 189.9,
    oldPrice: 259.9,
    image: 'https://images.pexels.com/photos/11482458/pexels-photo-11482458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'fragrancias',
    rating: 4.8,
    badge: 'Premium',
  },
  {
    id: 'p10',
    name: 'Kit Completo Maquiagem',
    description: 'Kit completo com base, sombras, batons e pincéis. Ideal para iniciantes.',
    price: 249.9,
    oldPrice: 399.9,
    image: 'https://images.pexels.com/photos/6527699/pexels-photo-6527699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'acessorios',
    rating: 4.9,
    badge: 'Super Kit',
  },
  {
    id: 'p11',
    name: 'Batom Matte Coleção Nudes',
    description: '3 batons em tons nude para o dia a dia. Acabamento mate confortável.',
    price: 49.9,
    image: 'https://images.pexels.com/photos/25906586/pexels-photo-25906586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'labios',
    rating: 4.6,
  },
  {
    id: 'p12',
    name: 'Paleta de Contorno e Iluminador',
    description: '6 tons para contorno e 2 iluminadores cintilantes. Esculpa seu rosto.',
    price: 79.9,
    oldPrice: 109.9,
    image: 'https://images.pexels.com/photos/6233285/pexels-photo-6233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'rostos',
    rating: 4.7,
    badge: 'Promoção',
  },
];

export const packages: ServicePackage[] = [
  {
    id: 'pkg-noivas',
    name: 'Pacote Noivas Premium',
    description: 'Maquiagem completa para o seu dia mais especial. Inclui teste prévio e retoque.',
    price: 599.9,
    duration: '3 horas',
    features: [
      'Maquiagem completa e duradoura',
      'Teste prévio de maquiagem',
      'Penteado incluso',
      'Retoque durante a festa',
      'Cílios postizos premium',
      'Iluminação e contorno profissional',
    ],
    image: 'https://images.pexels.com/photos/31945321/pexels-photo-31945321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 'pkg-madrinhas',
    name: 'Pacote Madrinhas',
    description: 'Maquiagem elegante para madrinhas de casamento. Look sofisticado e duradouro.',
    price: 249.9,
    duration: '1.5 horas',
    features: [
      'Maquiagem completa',
      'Cílios postizos',
      'Contorno e iluminação',
      'Penteado simples',
      'Produtos premium',
    ],
    image: 'https://images.pexels.com/photos/37710473/pexels-photo-37710473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pkg-debutantes',
    name: 'Pacote Debutantes 15 Anos',
    description: 'Maquiagem especial para a festa de 15 anos. Look jovem e glamouroso em púrpura.',
    price: 349.9,
    duration: '2 horas',
    features: [
      'Maquiagem completa temática',
      'Cílios postizos',
      'Brilho e glitter incluídos',
      'Penteado infantil/debutante',
      'Retoque durante a festa',
      'Consultoria de look',
    ],
    image: 'https://images.pexels.com/photos/13602682/pexels-photo-13602682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 'pkg-festa',
    name: 'Pacote Festa & Eventos',
    description: 'Maquiagem para festas, formaturas e eventos especiais. Glamour e durabilidade.',
    price: 179.9,
    duration: '1 hora',
    features: [
      'Maquiagem completa',
      'Cílios postizos',
      'Contorno profissional',
      'Acabamento longa duração',
    ],
    image: 'https://images.pexels.com/photos/15530661/pexels-photo-15530661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pkg-casual',
    name: 'Pacote Maquiagem Casual',
    description: 'Maquiagem leve para o dia a dia, trabalho e encontros. Natural e elegante.',
    price: 89.9,
    duration: '45 min',
    features: [
      'Maquiagem natural',
      'Base e corretivo',
      'Sombra leve',
      'Batom nude',
    ],
    image: 'https://images.pexels.com/photos/361755/pexels-photo-361755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pkg-artistica',
    name: 'Pacote Maquiagem Artística',
    description: 'Maquiagem artística para produções, fotos e eventos temáticos. Criação exclusiva.',
    price: 429.9,
    duration: '3 horas',
    features: [
      'Maquiagem artística personalizada',
      'Técnicas de face painting',
      'Glitter e pedrarias',
      'Consultoria criativa',
      'Resistência para fotos',
    ],
    image: 'https://images.pexels.com/photos/13018457/pexels-photo-13018457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const tutorials: Tutorial[] = [
  {
    id: 't1',
    title: 'Maquiagem para Noivas — Passo a Passo Completo',
    description: 'Aprenda a fazer uma maquiagem duradoura e linda para o dia do seu casamento.',
    videoId: 'Q3v1XUNPk_I',
    category: 'noivas',
    thumbnail: 'https://images.pexels.com/photos/20181205/pexels-photo-20181205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '12:34',
  },
  {
    id: 't2',
    title: 'Maquiagem para Debutantes — Look para 15 Anos',
    description: 'Tutorial completo de maquiagem para festa de debutantes, com brilho e glamour.',
    videoId: 'fPbjFYmpR0o',
    category: 'debutantes',
    thumbnail: 'https://images.pexels.com/photos/12643957/pexels-photo-12643957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '15:20',
  },
  {
    id: 't3',
    title: 'Maquiagem Artística — Técnica Passo a Passo',
    description: 'Aprenda técnicas de maquiagem artística para criar looks incríveis e criativos.',
    videoId: 'va5orbX5SC0',
    category: 'artistica',
    thumbnail: 'https://images.pexels.com/photos/32155471/pexels-photo-32155471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '18:45',
  },
  {
    id: 't4',
    title: 'Maquiagem Casual para o Dia a Dia',
    description: 'Make leve e natural para usar no trabalho e em encontros do dia a dia.',
    videoId: '7eADwBCAmHs',
    category: 'casual',
    thumbnail: 'https://images.pexels.com/photos/361755/pexels-photo-361755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '08:12',
  },
  {
    id: 't5',
    title: 'Maquiagem para Madrinhas de Casamento',
    description: 'Look elegante e sofisticado perfeito para madrinhas em casamentos.',
    videoId: 'azBofjC9tAc',
    category: 'noivas',
    thumbnail: 'https://images.pexels.com/photos/31141635/pexels-photo-31141635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '10:28',
  },
  {
    id: 't6',
    title: 'Maquiagem Artística com Glitter e Cores',
    description: 'Crie produções artísticas com glitter, cores vibrantes e efeitos especiais.',
    videoId: 'ACtKf7XYxDg',
    category: 'artistica',
    thumbnail: 'https://images.pexels.com/photos/15605697/pexels-photo-15605697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '22:10',
  },
];

export const inspirations: Inspiration[] = [
  {
    id: 'i1',
    image: 'https://images.pexels.com/photos/31945321/pexels-photo-31945321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Noiva Elegante Clássica',
    category: 'noivas',
  },
  {
    id: 'i2',
    image: 'https://images.pexels.com/photos/30354704/pexels-photo-30354704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Noiva com Coroa e Maquiagem Sofisticada',
    category: 'noivas',
  },
  {
    id: 'i3',
    image: 'https://images.pexels.com/photos/34250444/pexels-photo-34250444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Noiva Glamour com Buquê',
    category: 'noivas',
  },
  {
    id: 'i4',
    image: 'https://images.pexels.com/photos/13602682/pexels-photo-13602682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Debutante em Vestido Púrpura',
    category: 'debutantes',
  },
  {
    id: 'i5',
    image: 'https://images.pexels.com/photos/17931321/pexels-photo-17931321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Debutante Glamour Púrpura',
    category: 'debutantes',
  },
  {
    id: 'i6',
    image: 'https://images.pexels.com/photos/12643957/pexels-photo-12643957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Debutante Lilás com Velas',
    category: 'debutantes',
  },
  {
    id: 'i7',
    image: 'https://images.pexels.com/photos/31482007/pexels-photo-31482007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Debutante Lavanda ao Ar Livre',
    category: 'debutantes',
  },
  {
    id: 'i8',
    image: 'https://images.pexels.com/photos/13018457/pexels-photo-13018457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Maquiagem Artística com Pincel',
    category: 'artistica',
  },
  {
    id: 'i9',
    image: 'https://images.pexels.com/photos/29072916/pexels-photo-29072916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Arte Facial Vibrante',
    category: 'artistica',
  },
  {
    id: 'i10',
    image: 'https://images.pexels.com/photos/7292442/pexels-photo-7292442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Maquiagem Artística Colorida',
    category: 'artistica',
  },
  {
    id: 'i11',
    image: 'https://images.pexels.com/photos/15605697/pexels-photo-15605697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Neon Artístico Escuro',
    category: 'artistica',
  },
  {
    id: 'i12',
    image: 'https://images.pexels.com/photos/25559312/pexels-photo-25559312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Maquiagem Casual Elegante',
    category: 'casual',
  },
];

export const productCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'rostos', label: 'Rosto' },
  { id: 'olhos', label: 'Olhos' },
  { id: 'labios', label: 'Lábios' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'fragrancias', label: 'Fragrâncias' },
];

export const tutorialCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'noivas', label: 'Noivas' },
  { id: 'debutantes', label: 'Debutantes' },
  { id: 'artistica', label: 'Artística' },
  { id: 'casual', label: 'Casual' },
];

export const inspirationCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'noivas', label: 'Noivas' },
  { id: 'debutantes', label: 'Debutantes' },
  { id: 'artistica', label: 'Artística' },
  { id: 'casual', label: 'Casual' },
];
