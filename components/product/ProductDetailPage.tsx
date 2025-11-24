// components/product/ProductDetailPage.tsx
"use client";

import { useState } from 'react';
import { Star, Heart, Share2, Shield, Truck, Clock, CheckCircle, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  images: string[];
  badge?: string;
  features?: string[];
  description: string;
  inStock: boolean;
  discount?: number;
  designStyles: string[];
  templates: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedDesignStyle, setSelectedDesignStyle] = useState(product.designStyles[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(product.templates[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      quantity,
      designStyle: selectedDesignStyle,
      template: selectedTemplate
    });
    
    toast.success(`${product.name} added to cart!`, {
      description: `${quantity} item(s) with ${selectedDesignStyle} design and ${selectedTemplate} template`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      }
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-50">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
            )}
            
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{product.discount}%
                </span>
              </div>
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-foreground">ETB {product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ETB {product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
                  Save {product.discount}%
                </span>
              )}
            </div>
            
            {/* Stock Status */}
            <div className="flex items-center space-x-2 mb-6">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
          
          {/* Design Style Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Design Style</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.designStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedDesignStyle(style)}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedDesignStyle === style
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          
          {/* Template Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Template</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.templates.map((template) => (
                <button
                  key={template}
                  onClick={() => setSelectedTemplate(template)}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedTemplate === template
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {template}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-16 text-center border border-border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-pana py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button
                onClick={toggleWishlist}
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
              <button
                onClick={shareProduct}
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Specifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Specifications</h3>
            <div className="space-y-2">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="text-foreground font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Quality Guarantee</p>
                <p className="text-sm text-muted-foreground">Premium materials</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Fast Delivery</p>
                <p className="text-sm text-muted-foreground">24-48 hours</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Quick Turnaround</p>
                <p className="text-sm text-muted-foreground">Same day printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;