// types/product.ts
export interface Product {
    id: number;
    name: string;
    originalPrice?: number;
    description: string;
    price: number;
    category: string;
    subcategory?: string;
    image?: string;
    images: string[];
    tags?: string[];
    badge?: string;
    features?: string[];
    rating: number;
    reviews: number;
    designStyles: string[];
    templates: string[];
    specifications: {
      label: string;
      value: string;
    }[];
    inStock: boolean;
    stockQuantity?: number;
    sku: string;
    discount?: number;
    attributes?: Record<string, unknown>;
  }
  
  export interface ProductCategory {
    id: string;
    name: string;
    description?: string;
    image?: string;
    subcategories?: ProductSubcategory[];
  }
  
  export interface ProductSubcategory {
    id: string;
    name: string;
    description?: string;
    image?: string;
    categoryId: string;
  }
  
  export interface CartItem {
    id: string;
    productId: string;
    product: Product;
    quantity: number;
    price: number;
    customizations?: Record<string, unknown>;
  }
  
  export interface Order {
    id: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    items: OrderItem[];
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    totalAmount: number;
    shippingAddress?: Address;
    billingAddress?: Address;
    paymentMethod?: string;
    paymentStatus?: 'pending' | 'paid' | 'failed' | 'refunded';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface OrderItem {
    productId: string;
    product: Product;
    quantity: number;
    price: number;
    customizations?: Record<string, unknown>;
  }
  
  export interface Address {
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country: string;
  }