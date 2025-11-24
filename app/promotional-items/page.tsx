// app/promotional-items/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Promotional Items",
  subtitle: "Branded merchandise that leaves a lasting impression. From apparel to accessories, our promotional items help increase brand recall and create meaningful connections with your audience.",
  image: "/sample30.jpg",
  productCount: 400,
  features: [
    {
      icon: "Award",
      title: "Quality Products",
      description: "We source only high-quality promotional items that reflect well on your brand and last."
    },
    {
      icon: "CheckCircle",
      title: "Custom Branding",
      description: "Expert branding services ensure your logo looks perfect on any promotional item."
    },
    {
      icon: "Users",
      title: "Wide Selection",
      description: "Extensive catalog of promotional items to suit any budget and marketing objective."
    },
    {
      icon: "Clock",
      title: "Fast Delivery",
      description: "Quick production and delivery ensures you have your promotional items when needed."
    },
    {
      icon: "Shield",
      title: "Bulk Discounts",
      description: "Competitive pricing with attractive discounts for larger quantity orders."
    },
    {
      icon: "TrendingUp",
      title: "Brand Impact",
      description: "Strategic promotional items that increase brand visibility and customer loyalty."
    }
  ]
};

export default function PromotionalItemsPage() {
  const products = getProductsByCategory("Promotional Items");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}