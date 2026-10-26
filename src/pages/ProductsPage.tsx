import Products from '@/components/Products';
import type { Product } from '@/data';

type ProductsPageProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function ProductsPage({ products, onAddToCart }: ProductsPageProps) {
  return (
    <div className="pt-28">
      <Products products={products} onAddToCart={onAddToCart} />
    </div>
  );
}
