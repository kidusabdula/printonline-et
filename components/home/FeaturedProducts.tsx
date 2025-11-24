"use client";

import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Premium Business Stationery",
      description:
        "Complete professional branding package with business cards, letterheads, and envelopes",
      image: "/sample18.jpg",
      features: ["Premium Paper", "Custom Design", "Fast Delivery"],
      price: 89,
      link: "/digital-paper-prints",
    },
    {
      id: 2,
      title: "Outdoor Signage Solutions",
      description:
        "Durable weather-resistant signs for maximum visibility and impact",
      image: "/sample24.jpg",
      features: ["UV Resistant", "Weather Proof", "LED Options"],
      price: 199,
      link: "/signage-solutions",
    },
    {
      id: 3,
      title: "Event Branding Package",
      description:
        "Complete event setup with banners, backdrops, and promotional materials",
      image: "/sample13.jpg",
      features: ["All-in-One", "Custom Sizes", "Quick Setup"],
      price: 299,
      link: "/flex-banners",
    },
  ];

  return (
    <section className="py-16 hidden lg:block">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Featured Collections
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Curated Printing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked combinations designed to meet your specific business needs
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-200 mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                      ETB {product.price.toLocaleString("en-ET")}
                    </span>
                    <a
                      href={product.link}
                      className="btn-pana text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Quality Guaranteed
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium materials and printing technology for exceptional results
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick turnaround times with reliable shipping across Ethiopia
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Custom Design</h3>
              <p className="text-sm text-muted-foreground">
                Professional design services to bring your vision to life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
