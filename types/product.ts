// types/product.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    subcategory?: string;
    image: string;
    images?: string[];
    tags?: string[];
    inStock: boolean;
    stockQuantity?: number;
    sku: string;
    attributes?: Record<string, any>;
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
    customizations?: Record<string, any>;
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
    customizations?: Record<string, any>;
  }
  
  export interface Address {
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country: string;
  }