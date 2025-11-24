// // hooks/data/useProductsQuery.ts
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { Product, ProductCategory, ProductSubcategory } from "@/types/product";
// import { toast } from "sonner";

// // Mock data for now (will be replaced with API calls tomorrow)
// const mockProducts: Product[] = [
//   {
//     id: "1",
//     name: "Business Cards Premium",
//     description: "High-quality business cards with premium finish. Perfect for making a professional impression.",
//     price: 45.99,
//     category: "Digital Paper Prints",
//     subcategory: "Business Cards",
//     image: "/images/products/business-cards.jpg",
//     images: [
//       "/images/products/business-cards-1.jpg",
//       "/images/products/business-cards-2.jpg",
//     ],
//     tags: ["business", "professional", "premium"],
//     inStock: true,
//     stockQuantity: 500,
//     sku: "BC-PREMIUM-001",
//     attributes: {
//       paperType: "Premium Cardstock",
//       finish: "Matte",
//       size: "Standard (90mm x 50mm)",
//       quantity: 100
//     }
//   },
//   {
//     id: "2",
//     name: "Vinyl Banner",
//     description: "Durable weather-resistant vinyl banners for outdoor advertising. High-quality printing with vibrant colors.",
//     price: 120.00,
//     category: "Flex Banners",
//     subcategory: "Outdoor Banners",
//     image: "/images/products/vinyl-banner.jpg",
//     images: [
//       "/images/products/vinyl-banner-1.jpg",
//       "/images/products/vinyl-banner-2.jpg",
//     ],
//     tags: ["banner", "outdoor", "advertising"],
//     inStock: true,
//     stockQuantity: 50,
//     sku: "VB-OUT-001",
//     attributes: {
//       material: "Heavy-duty Vinyl",
//       finish: "Glossy",
//       size: "Custom (up to 3m x 3m)",
//       weatherResistant: true,
//       uvProtection: true
//     }
//   },
//   {
//     id: "3",
//     name: "Custom T-Shirt",
//     description: "High-quality custom printed t-shirts with your design. Comfortable fabric and durable print.",
//     price: 25.99,
//     category: "Promotional Items",
//     subcategory: "Apparel",
//     image: "/images/products/tshirt.jpg",
//     images: [
//       "/images/products/tshirt-1.jpg",
//       "/images/products/tshirt-2.jpg",
//     ],
//     tags: ["apparel", "custom", "cotton"],
//     inStock: true,
//     stockQuantity: 200,
//     sku: "TS-CUSTOM-001",
//     attributes: {
//       material: "100% Cotton",
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       printMethod: "Direct-to-Garment",
//       careInstructions: "Machine wash cold, tumble dry low"
//     }
//   }
// ];

// const mockCategories: ProductCategory[] = [
//   {
//     id: "1",
//     name: "Digital Paper Prints",
//     description: "High-quality printing for all your paper needs",
//     image: "/images/categories/digital-paper.jpg",
//     subcategories: [
//       { id: "1-1", name: "Business Cards", categoryId: "1" },
//       { id: "1-2", name: "Flyers", categoryId: "1" },
//       { id: "1-3", name: "Brochures", categoryId: "1" },
//       { id: "1-4", name: "Posters", categoryId: "1" },
//     ]
//   },
//   {
//     id: "2",
//     name: "Signage Solutions",
//     description: "Professional signage for businesses and events",
//     image: "/images/categories/signage.jpg",
//     subcategories: [
//       { id: "2-1", name: "Illuminated Signs", categoryId: "2" },
//       { id: "2-2", name: "Directional Panels", categoryId: "2" },
//       { id: "2-3", name: "Billboards", categoryId: "2" },
//       { id: "2-4", name: "Custom Displays", categoryId: "2" },
//     ]
//   },
//   {
//     id: "3",
//     name: "Flex Banners",
//     description: "Durable and vibrant flex banners for promotional needs",
//     image: "/images/categories/flex-banners.jpg",
//     subcategories: [
//       { id: "3-1", name: "Roll-Up Banners", categoryId: "3" },
//       { id: "3-2", name: "Backlit Banners", categoryId: "3" },
//       { id: "3-3", name: "Mesh Banners", categoryId: "3" },
//     ]
//   },
//   {
//     id: "4",
//     name: "Vinyl Prints & Wraps",
//     description: "Modern branding solutions for vehicles and spaces",
//     image: "/images/categories/vinyl-prints.jpg",
//     subcategories: [
//       { id: "4-1", name: "Vehicle Wraps", categoryId: "4" },
//       { id: "4-2", name: "Wall Graphics", categoryId: "4" },
//       { id: "4-3", name: "Window Decals", categoryId: "4" },
//     ]
//   },
//   {
//     id: "5",
//     name: "Fabric Prints",
//     description: "Vibrant fabric printing for events and textiles",
//     image: "/images/categories/fabric-prints.jpg",
//     subcategories: [
//       { id: "5-1", name: "Promotional Flags", categoryId: "5" },
//       { id: "5-2", name: "Tablecloths", categoryId: "5" },
//       { id: "5-3", name: "Event Backdrops", categoryId: "5" },
//     ]
//   },
//   {
//     id: "6",
//     name: "Promotional Items",
//     description: "Branded merchandise to leave a lasting impression",
//     image: "/images/categories/promotional-items.jpg",
//     subcategories: [
//       { id: "6-1", name: "T-Shirts", categoryId: "6" },
//       { id: "6-2", name: "Mugs", categoryId: "6" },
//       { id: "6-3", name: "Pens", categoryId: "6" },
//       { id: "6-4", name: "Tote Bags", categoryId: "6" },
//     ]
//   }
// ];

// // Fetch all products with filters
// export function useProductsQuery(filters?: {
//   category?: string;
//   subcategory?: string;
//   search?: string;
//   sortBy?: string;
//   sortOrder?: 'asc' | 'desc';
// }) {
//   return useQuery({
//     queryKey: ["products", filters],
//     queryFn: async () => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       let filteredProducts = [...mockProducts];
      
//       // Apply filters
//       if (filters?.category) {
//         filteredProducts = filteredProducts.filter(product => 
//           product.category === filters.category
//         );
//       }
      
//       if (filters?.subcategory) {
//         filteredProducts = filteredProducts.filter(product => 
//           product.subcategory === filters.subcategory
//         );
//       }
      
//       if (filters?.search) {
//         const searchLower = filters.search.toLowerCase();
//         filteredProducts = filteredProducts.filter(product => 
//           product.name.toLowerCase().includes(searchLower) ||
//           product.description.toLowerCase().includes(searchLower) ||
//           product.tags?.some(tag => tag.toLowerCase().includes(searchLower))
//         );
//       }
      
//       // Apply sorting
//       if (filters?.sortBy) {
//         filteredProducts.sort((a, b) => {
//           const aValue = a[filters.sortBy as keyof Product];
//           const bValue = b[filters.sortBy as keyof Product];
          
//           if (typeof aValue === 'string' && typeof bValue === 'string') {
//             return filters.sortOrder === 'desc' 
//               ? bValue.localeCompare(aValue)
//               : aValue.localeCompare(bValue);
//           }
          
//           if (typeof aValue === 'number' && typeof bValue === 'number') {
//             return filters.sortOrder === 'desc' 
//               ? bValue - aValue
//               : aValue - bValue;
//           }
          
//           return 0;
//         });
//       }
      
//       return { products: filteredProducts };
//     },
//     staleTime: 60 * 1000, // 1 minute
//   });
// }

// // Fetch a single product by ID
// export function useProductQuery(id: string) {
//   return useQuery({
//     queryKey: ["product", id],
//     queryFn: async () => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       const product = mockProducts.find(p => p.id === id);
//       if (!product) {
//         throw new Error("Product not found");
//       }
      
//       return product;
//     },
//     enabled: !!id,
//     staleTime: 60 * 1000, // 1 minute
//   });
// }

// // Fetch all categories
// export function useCategoriesQuery() {
//   return useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 300));
      
//       return { categories: mockCategories };
//     },
//     staleTime: 10 * 60 * 1000, // 10 minutes
//   });
// }

// // Add to cart mutation
// export function useAddToCartMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ productId, quantity }: { productId: string; quantity: number }) => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       const product = mockProducts.find(p => p.id === productId);
//       if (!product) {
//         throw new Error("Product not found");
//       }
      
//       // Get current cart from localStorage
//       const currentCart = JSON.parse(localStorage.getItem('pana-cart') || '[]');
      
//       // Check if product already in cart
//       const existingItemIndex = currentCart.findIndex((item: any) => item.productId === productId);
      
//       if (existingItemIndex >= 0) {
//         // Update quantity
//         currentCart[existingItemIndex].quantity += quantity;
//       } else {
//         // Add new item
//         currentCart.push({
//           id: Date.now().toString(),
//           productId,
//           product,
//           quantity,
//           price: product.price
//         });
//       }
      
//       // Save to localStorage
//       localStorage.setItem('pana-cart', JSON.stringify(currentCart));
      
//       return { success: true };
//     },
//     onSuccess: () => {
//       toast.success("Product added to cart");
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//     onError: (error) => {
//       toast.error(`Failed to add to cart: ${error.message}`);
//     },
//   });
// }

// // Get cart items
// export function useCartQuery() {
//   return useQuery({
//     queryKey: ["cart"],
//     queryFn: async () => {
//       // Get cart from localStorage
//       const cart = JSON.parse(localStorage.getItem('pana-cart') || '[]');
      
//       // Calculate total
//       const total = cart.reduce((sum: number, item: any) => 
//         sum + (item.price * item.quantity), 0
//       );
      
//       return { items: cart, total };
//     },
//     staleTime: 0, // Always refetch
//   });
// }

// // Remove from cart mutation
// export function useRemoveFromCartMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (itemId: string) => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 300));
      
//       // Get current cart from localStorage
//       const currentCart = JSON.parse(localStorage.getItem('pana-cart') || '[]');
      
//       // Remove item
//       const updatedCart = currentCart.filter((item: any) => item.id !== itemId);
      
//       // Save to localStorage
//       localStorage.setItem('pana-cart', JSON.stringify(updatedCart));
      
//       return { success: true };
//     },
//     onSuccess: () => {
//       toast.success("Item removed from cart");
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//     onError: (error) => {
//       toast.error(`Failed to remove from cart: ${error.message}`);
//     },
//   });
// }

// // Update cart item quantity mutation
// export function useUpdateCartQuantityMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ itemId, quantity }: { itemId: string; quantity: number }) => {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 300));
      
//       // Get current cart from localStorage
//       const currentCart = JSON.parse(localStorage.getItem('pana-cart') || '[]');
      
//       // Find and update item
//       const itemIndex = currentCart.findIndex((item: any) => item.id === itemId);
      
//       if (itemIndex >= 0) {
//         currentCart[itemIndex].quantity = quantity;
        
//         // Save to localStorage
//         localStorage.setItem('pana-cart', JSON.stringify(currentCart));
        
//         return { success: true };
//       } else {
//         throw new Error("Item not found in cart");
//       }
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//     onError: (error) => {
//       toast.error(`Failed to update quantity: ${error.message}`);
//     },
//   });
// }