// app/flex-banners/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Flex Banners",
  subtitle: "Durable, vibrant banners designed for maximum impact in any environment. Perfect for events, promotions, and outdoor advertising that withstands the test of time and weather.",
  image: "/sample27.jpg",
  productCount: 150,
  features: [
    {
      icon: "Shield",
      title: "Weather Resistant",
      description: "Our flex banners are made with UV-resistant inks and durable materials that withstand sun, rain, and wind."
    },
    {
      icon: "Clock",
      title: "Fast Production",
      description: "Quick turnaround times ensure your banners are ready when you need them, even for urgent events."
    },
    {
      icon: "CheckCircle",
      title: "High Resolution",
      description: "State-of-the-art printing technology delivers sharp, vibrant images that grab attention from afar."
    },
    {
      icon: "Award",
      title: "Custom Finishing",
      description: "Professional finishing options including hemming, eyelets, and pole pockets for easy installation."
    },
    {
      icon: "Users",
      title: "Event Expertise",
      description: "Specialized solutions for trade shows, conferences, and promotional events."
    },
    {
      icon: "TrendingUp",
      title: "Cost Effective",
      description: "Get maximum advertising impact at budget-friendly prices with our competitive banner solutions."
    }
  ]
};

export default function FlexBannersPage() {
  const products = getProductsByCategory("Flex Banners");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}