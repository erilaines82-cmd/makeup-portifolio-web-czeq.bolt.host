import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Products from '@/components/Products';
import Packages from '@/components/Packages';
import type { Product, ServicePackage } from '@/data';

type HomePageProps = {
  content: Record<string, string>;
  products: Product[];
  packages: ServicePackage[];
  onAddToCart: (product: Product) => void;
};

export default function HomePage({ content, products, packages, onAddToCart }: HomePageProps) {
  return (
    <>
      <Hero description={content.hero_description} />
      <ServicesOverview description={content.services_description} />
      <Products products={products} onAddToCart={onAddToCart} />
      <Packages packages={packages} />
    </>
  );
}
