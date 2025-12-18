// components/home/CategoryShowcase.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Digital Paper Prints",
      description: "Business cards, flyers, brochures, and more",
      image: "/sample11.jpg",
      count: "500+ Products",
      link: "/digital-paper-prints",
    },
    {
      id: 2,
      name: "Signage Solutions",
      description: "Indoor and outdoor signage for maximum impact",
      image: "/sample12.jpg",
      count: "200+ Products",
      link: "/signage-solutions",
    },
    {
      id: 3,
      name: "Flex Banners",
      description: "Durable banners for events and promotions",
      image: "/sample13.jpg",
      count: "150+ Products",
      link: "/flex-banners",
    },
    {
      id: 4,
      name: "Vinyl Prints & Wraps",
      description: "Vehicle wraps and custom vinyl graphics",
      image: "/sample14.jpg",
      count: "300+ Products",
      link: "/vinyl-prints",
    },
    {
      id: 5,
      name: "Fabric Prints",
      description: "Custom fabric printing for events and textiles",
      image: "/sample15.jpg",
      count: "180+ Products",
      link: "/fabric-prints",
    },
    {
      id: 6,
      name: "Promotional Items",
      description: "Branded merchandise and corporate gifts",
      image: "/sample16.jpg",
      count: "400+ Products",
      link: "/promotional-items",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-3 block">
            Our Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Shop by Category
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of printing and branding solutions
            suited for every business need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.a
              key={category.id}
              href={category.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Category count badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">
                    {category.count}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary mb-3 origin-left transform scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300"></div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {category.description}
                  </p>

                  <div className="flex items-center text-white font-medium text-sm md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                    <span className="mr-2">Explore Collection</span>
                    <div className="bg-primary rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
