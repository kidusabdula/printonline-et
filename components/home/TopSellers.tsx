"use client";

import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
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
    <section className="py-16 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Top Selling Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular printing solutions trusted by thousands of
            businesses
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product, idx) => {
            const savings = product.originalPrice - product.price;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.45, type: "spring", stiffness: 120 }}
              >
                <article
                className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                tabIndex={0}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-linear-to-r from-primary to-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist */}
                <button
                  aria-label="Add to wishlist"
                  className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Image area with parallax on hover */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 160, damping: 14 }}
                  >
                    <div className="absolute inset-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-foreground">{formatter.format(product.price)}</span>
                        <span className="text-sm text-muted-foreground line-through">{formatter.format(product.originalPrice)}</span>
                      </div>
                      {savings > 0 && (
                        <p className="text-sm text-success/90 mt-1">
                          Save {formatter.format(savings)}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-xs text-muted-foreground">Inc. VAT</div>
                  </div>

                  {/* Actions with micro interactions */}
                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ translateY: -3 }}
                      className="flex-1 btn-pana text-sm p-2 inline-flex items-center justify-center"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                      aria-label={`Quick view ${product.name}`}
                    >
                      <Eye className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </article>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <motion.a
            whileHover={{ translateY: -3 }}
            href="/products"
            className="btn-pana inline-flex items-center p-4"
          >
            View All Products
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
