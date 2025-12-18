"use client";

import { Star, ShoppingCart, Heart, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const formatter = new Intl.NumberFormat("en-ET", {
  style: "currency",
  currency: "ETB",
  maximumFractionDigits: 2,
});

const TopSellers = () => {
  const products = [
    {
      id: 1,
      name: "Premium Business Cards",
      category: "Digital Paper Prints",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 234,
      image: "/sample4.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Vinyl Vehicle Wrap",
      category: "Vinyl Prints & Wraps",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 156,
      image: "/sample5.jpg",
      badge: "Hot Deal",
    },
    {
      id: 3,
      name: "Roll-Up Banner Stand",
      category: "Flex Banners",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 189,
      image: "/sample6.jpg",
      badge: "25% OFF",
    },
    {
      id: 4,
      name: "Custom T-Shirts (Pack of 10)",
      category: "Promotional Items",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 412,
      image: "/sample7.jpg",
      badge: "Popular",
    },
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Top Selling Products
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular printing solutions trusted by thousands of
            businesses for their quality and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => {
            const savings = product.originalPrice - product.price;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/40 h-full flex flex-col">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-red-500 shadow-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </button>

                  {/* Image area */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 bg-black/60 md:bg-linear-to-t md:from-black/60 md:to-transparent flex gap-2 justify-center pb-6">
                      <button
                        className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                        aria-label="Quick View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col grow">
                    <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50 flex items-end justify-between">
                      <div>
                        {savings > 0 && (
                          <span className="text-xs text-muted-foreground line-through block mb-1">
                            {formatter.format(product.originalPrice)}
                          </span>
                        )}
                        <span className="text-xl font-bold text-primary block">
                          {formatter.format(product.price)}
                        </span>
                      </div>

                      <button
                        className="bg-secondary p-2.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg"
                        aria-label="Add to Cart"
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/products"
            className="btn-pana inline-flex items-center px-8 py-3 rounded-full text-base font-semibold shadow-lg shadow-primary/20"
          >
            View All Best Sellers
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
