// app/signage-solutions/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Signage Solutions",
  subtitle: "Transform your space with professional indoor and outdoor signage. From illuminated shop fronts to massive billboards, we create signs that capture attention and strengthen your brand identity.",
  image: "/sample26.jpg",
  productCount: 200,
  features: [
    {
      icon: "Shield",
      title: "Weather Resistant",
      description: "All our outdoor signs are built with weather-resistant materials that withstand harsh conditions and maintain visibility."
    },
    {
      icon: "Award",
      title: "Custom Design",
      description: "Our design team creates unique signage solutions that perfectly represent your brand and attract customers."
    },
    {
      icon: "Zap",
      title: "LED Technology",
      description: "Energy-efficient LED lighting solutions that make your signs stand out day and night while reducing power costs."
    },
    {
      icon: "CheckCircle",
      title: "Premium Materials",
      description: "We use only the highest quality materials including acrylic, aluminum, and premium vinyl for lasting durability."
    },
    {
      icon: "Users",
      title: "Expert Installation",
      description: "Professional installation services ensure your signs are properly mounted and positioned for maximum impact."
    },
    {
      icon: "TrendingUp",
      title: "High Visibility",
      description: "Strategic design and placement ensure your signs get noticed and drive customer engagement."
    }
  ]
};

export default function SignageSolutionsPage() {
  const products = getProductsByCategory("Signage Solutions");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}