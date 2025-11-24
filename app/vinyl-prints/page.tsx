// app/vinyl-prints/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Vinyl Prints & Wraps",
  subtitle: "Transform surfaces with premium vinyl graphics. From vehicle wraps that turn heads to wall graphics that inspire, our vinyl solutions offer endless possibilities for branding and decoration.",
  image: "/sample28.jpg",
  productCount: 300,
  features: [
    {
      icon: "Shield",
      title: "Premium 3M Vinyl",
      description: "We use only the highest quality 3M vinyl materials that ensure durability and vibrant colors."
    },
    {
      icon: "Award",
      title: "Professional Installation",
      description: "Expert installation team ensures flawless application with no bubbles or imperfections."
    },
    {
      icon: "CheckCircle",
      title: "Custom Design",
      description: "Our design team creates stunning custom graphics that perfectly represent your brand."
    },
    {
      icon: "Clock",
      title: "Quick Turnaround",
      description: "Fast production and installation services to meet your tight deadlines."
    },
    {
      icon: "Users",
      title: "Versatile Applications",
      description: "Vinyl solutions for vehicles, walls, windows, floors, and almost any surface imaginable."
    },
    {
      icon: "TrendingUp",
      title: "Mobile Advertising",
      description: "Vehicle wraps provide cost-effective mobile advertising that reaches thousands daily."
    }
  ]
};

export default function VinylPrintsPage() {
  const products = getProductsByCategory("Vinyl Prints & Wraps");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}