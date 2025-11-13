// hooks/domain/useProductValidation.ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  subcategory: z.string().optional(),
  image: z.string().url("Invalid image URL"),
  images: z.array(z.string().url()).optional(),
  tags: z.array(z.string()).optional(),
  inStock: z.boolean().default(true),
  stockQuantity: z.number().min(0).optional(),
  sku: z.string().min(1, "SKU is required"),
  attributes: z.record(z.any()).optional(),
});

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  customizations: z.record(z.any()).optional(),
});

export const orderSchema = z.object({
  customerName: z.string().min(2, "Customer name is required"),
  customerEmail: z.string().email("Valid email is required"),
  customerPhone: z.string().optional(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1),
    customizations: z.record(z.any()).optional(),
  })).min(1, "At least one item is required"),
  shippingAddress: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().min(1, "Country is required"),
  }).optional(),
  billingAddress: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().min(1, "Country is required"),
  }).optional(),
  paymentMethod: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
export type CartItemFormValues = z.infer<typeof cartItemSchema>;
export type OrderFormValues = z.infer<typeof orderSchema>;