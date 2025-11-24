// components/home/CategoryShowcase.tsx
"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Digital Paper Prints",
      description: "Business cards, flyers, brochures, and more",
      image: "/sample11.jpg",
      count: "500+ Products",
      link: "/digital-paper-prints"
    },
    {
      id: 2,
      name: "Signage Solutions",
      description: "Indoor and outdoor signage for maximum impact",
      image: "/sample12.jpg",
      count: "200+ Products",
      link: "/signage-solutions"
    },
    {
      id: 3,
      name: "Flex Banners",
      description: "Durable banners for events and promotions",
      image: "/sample13.jpg",
      count: "150+ Products",
      link: "/flex-banners"
    },
    {
      id: 4,
      name: "Vinyl Prints & Wraps",
      description: "Vehicle wraps and custom vinyl graphics",
      image: "/sample14.jpg",
      count: "300+ Products",
      link: "/vinyl-prints"
    },
    {
      id: 5,
      name: "Fabric Prints",
      description: "Custom fabric printing for events and textiles",
      image: "/sample15.jpg",
      count: "180+ Products",
      link: "/fabric-prints"
    },
    {
      id: 6,
      name: "Promotional Items",
      description: "Branded merchandise and corporate gifts",
      image: "/sample16.jpg",
      count: "400+ Products",
      link: "/promotional-items"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of printing and branding solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category count badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-foreground">{category.count}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <div className="flex items-center text-primary font-medium">
                  <span>Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;