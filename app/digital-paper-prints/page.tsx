// app/digital-paper-prints/page.tsx
import CategoryTemplate from '@/components/category/CategoryTemplate';
import { getProductsByCategory } from '@/lib/products';

const categoryData = {
  title: "Digital Paper Prints",
  subtitle: "Professional printing solutions for all your business paper needs. From business cards to brochures, we deliver premium quality with fast turnaround times.",
  image: "/sample25.jpg",
  productCount: 500,
  features: [
    {
      icon: "CheckCircle",
      title: "Premium Quality Materials",
      description: "We use only the finest paper stocks and printing technology to ensure your materials look professional and impressive."
    },
    {
      icon: "Clock",
      title: "Fast Turnaround",
      description: "Most orders are completed within 24-48 hours, with express delivery options available for urgent needs."
    },
    {
      icon: "Shield",
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right."
    },
    {
      icon: "Award",
      title: "Award Winning Design",
      description: "Our design team has won multiple awards for creating impactful and effective print materials."
    },
    {
      icon: "Users",
      title: "Expert Consultation",
      description: "Get personalized advice from our printing experts to ensure your materials achieve maximum impact."
    },
    {
      icon: "TrendingUp",
      title: "Competitive Pricing",
      description: "Get premium quality printing at prices that fit your budget without compromising on excellence."
    }
  ]
};

export default function DigitalPaperPrintsPage() {
  const products = getProductsByCategory("Digital Paper Prints");
  
  return (
    <CategoryTemplate 
      categoryData={categoryData} 
      products={products} 
    />
  );
}