// app/fabric-prints/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Fabric Prints",
  subtitle: "Vibrant fabric printing solutions for events, promotions, and branding. From flags to tablecloths, our fabric products deliver stunning visuals with professional quality.",
  image: "/sample29.jpg",
  productCount: 180,
  features: [
    {
      icon: "CheckCircle",
      title: "Vibrant Color Reproduction",
      description: "Advanced dye-sublimation printing ensures brilliant, long-lasting colors that won't fade."
    },
    {
      icon: "Shield",
      title: "Durable Materials",
      description: "Premium fabrics that withstand repeated use, washing, and various weather conditions."
    },
    {
      icon: "Clock",
      title: "Quick Production",
      description: "Fast turnaround times for events and promotions with rush delivery options available."
    },
    {
      icon: "Award",
      title: "Custom Finishing",
      description: "Professional finishing including hemming, grommets, and pole pockets for easy installation."
    },
    {
      icon: "Users",
      title: "Event Expertise",
      description: "Specialized solutions for trade shows, conferences, and promotional events."
    },
    {
      icon: "TrendingUp",
      title: "Eco-Friendly Options",
      description: "Sustainable fabric choices and water-based inks for environmentally conscious branding."
    }
  ]
};

export default function FabricPrintsPage() {
  const products = getProductsByCategory("Fabric Prints");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}