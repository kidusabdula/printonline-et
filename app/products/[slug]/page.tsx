// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import { getProductBySlug, getAllProducts } from '@/lib/products';

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.id.toString(),
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Await params first
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }
  
  return {
    title: `${product.name} | Print Online ET`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

// Main page component
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params to ensure it's fully resolved
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetailPage product={product} />;
}