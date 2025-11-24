// lib/products.ts
export interface Product {
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
  sku: string;
}

export const products: Product[] = [
  {
    id: 1,
    sku: "BCC001",
    name: "Premium Business Cards (500 pack)",
    category: "Digital Paper Prints",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 234,
    images: ["/sample1.jpg", "/sample2.jpg", "/sample3.jpg"],
    badge: "Best Seller",
    features: ["Premium Paper", "Glossy Finish", "Fast Delivery"],
    description: "High-quality business cards printed on premium 350gsm cardstock with vibrant colors. Perfect for networking events and professional meetings.",
    inStock: true,
    discount: 23,
    designStyles: ["Modern", "Classic", "Minimalist", "Creative", "Corporate"],
    templates: ["Standard", "Folded", "Rounded Corners", "Spot UV", "Embossed"],
    specifications: [
      { label: "Material", value: "350gsm Premium Cardstock" },
      { label: "Size", value: "90mm x 54mm (Standard)" },
      { label: "Print Type", value: "Full Color Digital" },
      { label: "Finish", value: "Glossy or Matte" },
      { label: "Turnaround", value: "2-3 Business Days" }
    ]
  },
  {
    id: 2,
    sku: "SHS001",
    name: "LED Illuminated Shop Sign",
    category: "Signage Solutions",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 156,
    images: ["/sample4.jpg", "/sample5.jpg", "/sample6.jpg"],
    badge: "Best Seller",
    features: ["LED Lighting", "Weather Proof", "Custom Design"],
    description: "Eye-catching illuminated shop signs with energy-efficient LED lighting that make your business stand out day and night.",
    inStock: true,
    discount: 25,
    designStyles: ["Modern", "Classic", "Neon", "Minimalist", "3D Effect"],
    templates: ["Rectangular", "Circular", "Custom Shape", "Boxed", "Hanging"],
    specifications: [
      { label: "Material", value: "Acrylic with LED Backlight" },
      { label: "Size", value: "Custom (up to 2m x 1m)" },
      { label: "Light Type", value: "Energy-efficient LED" },
      { label: "Installation", value: "Wall-mounted or Hanging" },
      { label: "Warranty", value: "2 Years" }
    ]
  },
  {
    id: 3,
    sku: "FLB001",
    name: "Roll-Up Banner Stand (2x3m)",
    category: "Flex Banners",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 234,
    images: ["/sample7.jpg", "/sample8.jpg", "/sample9.jpg"],
    badge: "Best Seller",
    features: ["Portable", "Easy Setup", "Carry Case"],
    description: "Professional roll-up banner stand perfect for trade shows and presentations. Easy to set up in seconds and comes with a durable carry case.",
    inStock: true,
    discount: 25,
    designStyles: ["Corporate", "Event", "Promotional", "Informational", "Minimalist"],
    templates: ["Standard", "Double-sided", "Telescopic", "Retractable", "X-Frame"],
    specifications: [
      { label: "Material", value: "Premium PVC Banner" },
      { label: "Size", value: "2m x 3m" },
      { label: "Stand Type", value: "Retractable" },
      { label: "Base", value: "Aluminum with Stability Feet" },
      { label: "Included", value: "Carry Case" }
    ]
  },
  {
    id: 4,
    sku: "VPW001",
    name: "Full Vehicle Wrap",
    category: "Vinyl Prints & Wraps",
    price: 899.99,
    originalPrice: 1299.99,
    rating: 4.9,
    reviews: 234,
    images: ["/sample10.jpg", "/sample11.jpg", "/sample12.jpg"],
    badge: "Best Seller",
    features: ["Full Coverage", "3M Vinyl", "5 Year Warranty"],
    description: "Complete vehicle wrap that transforms your car into a mobile billboard. Made with premium 3M vinyl for durability and vibrant colors.",
    inStock: true,
    discount: 31,
    designStyles: ["Corporate", "Creative", "Minimalist", "Bold", "Photographic"],
    templates: ["Full Wrap", "Partial Wrap", "Spot Graphics", "Lettering Only", "Custom Design"],
    specifications: [
      { label: "Material", value: "Premium 3M Vinyl" },
      { label: "Coverage", value: "Full Vehicle" },
      { label: "Durability", value: "5+ Years" },
      { label: "Finish", value: "Matte or Glossy" },
      { label: "Installation", value: "Professional Service Available" }
    ]
  },
  {
    id: 5,
    sku: "FBP001",
    name: "Promotional Flags (3x2m)",
    category: "Fabric Prints",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 234,
    images: ["/sample13.jpg", "/sample14.jpg", "/sample15.jpg"],
    badge: "Best Seller",
    features: ["Polyester", "Weather Resistant", "Vibrant Colors"],
    description: "Eye-catching promotional flags perfect for outdoor events and advertising. Made with weather-resistant polyester fabric.",
    inStock: true,
    discount: 25,
    designStyles: ["Corporate", "Event", "National", "Promotional", "Custom"],
    templates: ["Teardrop", "Feather", "Rectangular", "Square", "Custom Shape"],
    specifications: [
      { label: "Material", value: "110gsm Polyester" },
      { label: "Size", value: "3m x 2m" },
      { label: "Print Type", value: "Dye Sublimation" },
      { label: "Finish", value: "Single or Double-sided" },
      { label: "Hardware", value: "Pole and Base Included" }
    ]
  },
  {
    id: 6,
    sku: "PRM001",
    name: "Custom T-Shirts (Pack of 25)",
    category: "Promotional Items",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 234,
    images: ["/sample16.jpg", "/sample17.jpg", "/sample18.jpg"],
    badge: "Best Seller",
    features: ["100% Cotton", "Screen Print", "All Sizes"],
    description: "High-quality custom t-shirts perfect for team events and promotions. Made with 100% cotton for comfort and durability.",
    inStock: true,
    discount: 29,
    designStyles: ["Corporate", "Casual", "Sport", "Fashion", "Minimalist"],
    templates: ["Crew Neck", "V-Neck", "Long Sleeve", "Polo", "Custom"],
    specifications: [
      { label: "Material", value: "100% Cotton" },
      { label: "Print Method", value: "Screen Printing" },
      { label: "Sizes", value: "XS to 3XL" },
      { label: "Colors", value: "Wide Range Available" },
      { label: "Print Locations", value: "Front, Back, Sleeves" }
    ]
  },
  {
    id: 7,
    sku: "FLY001",
    name: "Professional Flyers (A5, 1000 pack)",
    category: "Digital Paper Prints",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 156,
    images: ["/sample19.jpg", "/sample20.jpg", "/sample21.jpg"],
    badge: "Popular",
    features: ["Glossy/Matte", "Full Color", "Quick Turnaround"],
    description: "Eye-catching flyers perfect for promotions and events. High-quality printing on premium paper stock.",
    inStock: true,
    discount: 25,
    designStyles: ["Modern", "Classic", "Minimalist", "Creative", "Corporate"],
    templates: ["A5", "A6", "DL", "Square", "Custom"],
    specifications: [
      { label: "Material", value: "150gsm Glossy Paper" },
      { label: "Size", value: "A5 (148mm x 210mm)" },
      { label: "Print Type", value: "Full Color Digital" },
      { label: "Finish", value: "Glossy or Matte" },
      { label: "Quantity", value: "1000 pieces" }
    ]
  },
  {
    id: 8,
    sku: "ADS001",
    name: "Acrylic Directional Signs",
    category: "Signage Solutions",
    price: 149.99,
    rating: 4.8,
    reviews: 89,
    images: ["/sample22.jpg", "/sample23.jpg", "/sample24.jpg"],
    badge: "Premium",
    features: ["Clear Acrylic", "Laser Cut", "Professional"],
    description: "Crystal clear directional signs perfect for offices and buildings. Professional appearance with excellent visibility.",
    inStock: true,
    designStyles: ["Modern", "Minimalist", "Corporate", "Elegant", "Custom"],
    templates: ["Arrow", "Text Only", "Icon + Text", "Custom", "ADA Compliant"],
    specifications: [
      { label: "Material", value: "Clear Acrylic" },
      { label: "Thickness", value: "5mm" },
      { label: "Mounting", value: "Standoff or Adhesive" },
      { label: "Finish", value: "Clear or Tinted" },
      { label: "Customization", value: "Full Color Print" }
    ]
  },
  {
    id: 9,
    sku: "DPP002",
    name: "Custom Brochures (A4, 500 pack)",
    category: "Digital Paper Prints",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviews: 180,
    images: ["/sample25.jpg", "/sample26.jpg"],
    badge: "New Arrival",
    features: ["Bi-Fold", "Tri-Fold", "Glossy/Matte Finish"],
    description: "Professionally printed custom brochures on high-quality paper, perfect for marketing and informational purposes.",
    inStock: true,
    discount: 20,
    designStyles: ["Corporate", "Informational", "Minimalist"],
    templates: ["Bi-Fold", "Tri-Fold", "Z-Fold"],
    specifications: [
      { label: "Material", value: "170gsm Art Paper" },
      { label: "Size", value: "A4 (210mm x 297mm)" },
      { label: "Print Type", value: "Full Color Digital" },
      { label: "Finish", value: "Glossy or Matte" },
      { label: "Quantity", value: "500 pieces" }
    ]
  },
  {
    id: 10,
    sku: "SHS002",
    name: "3D Lettering Shop Sign",
    category: "Signage Solutions",
    price: 450.00,
    originalPrice: 550.00,
    rating: 4.9,
    reviews: 110,
    images: ["/sample27.jpg", "/sample28.jpg"],
    badge: "Premium",
    features: ["Custom Fonts", "Weather Resistant", "LED Option"],
    description: "High-quality 3D letter signs for striking shopfront branding, available in various materials and finishes.",
    inStock: true,
    discount: 18,
    designStyles: ["Modern", "Elegant", "Industrial"],
    templates: ["Front-Lit", "Back-Lit", "Halo-Lit"],
    specifications: [
      { label: "Material", value: "Acrylic, Stainless Steel, PVC" },
      { label: "Thickness", value: "Up to 50mm" },
      { label: "Mounting", value: "Flush-mount or Standoff" },
      { label: "Lighting", value: "Optional LED" },
      { label: "Customization", value: "Any Font/Logo" }
    ]
  },
  {
    id: 11,
    sku: "FLB002",
    name: "Outdoor PVC Banner (Custom Size)",
    category: "Flex Banners",
    price: 65.00,
    originalPrice: 80.00,
    rating: 4.7,
    reviews: 200,
    images: ["/sample29.jpg", "/sample30.jpg"],
    badge: "Durable",
    features: ["Weatherproof", "UV Resistant", "Reinforced Edges"],
    description: "Custom-sized outdoor PVC banners for long-lasting advertising in any weather conditions.",
    inStock: true,
    discount: 19,
    designStyles: ["Event", "Promotional", "Construction"],
    templates: ["Eyelets", "Pole Pockets", "Hemmed Edges"],
    specifications: [
      { label: "Material", value: "440gsm PVC Vinyl" },
      { label: "Size", value: "Custom" },
      { label: "Print Type", value: "Full Color Digital" },
      { label: "Durability", value: "Outdoor 3-5 Years" },
      { label: "Fixing", value: "Eyelets every 50cm" }
    ]
  },
  {
    id: 12,
    sku: "VPW002",
    name: "Window Graphics (Per Sq Meter)",
    category: "Vinyl Prints & Wraps",
    price: 35.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviews: 160,
    images: ["/sample1.jpg", "/sample2.jpg"], // Reuse images
    badge: "Flexible",
    features: ["Perforated", "Clear Vinyl", "Easy Application"],
    description: "Custom window graphics for storefronts, offices, and vehicles, offering privacy and branding.",
    inStock: true,
    discount: 22,
    designStyles: ["Promotional", "Informational", "Decorative"],
    templates: ["Full Coverage", "Contour Cut", "Etched Effect"],
    specifications: [
      { label: "Material", value: "Perforated Vinyl, Clear Vinyl" },
      { label: "Size", value: "Custom per Sq Meter" },
      { label: "Application", value: "External or Internal" },
      { label: "Finish", value: "Matte or Glossy" },
      { label: "Removal", value: "Clean Removal" }
    ]
  },
  {
    id: 13,
    sku: "FBP002",
    name: "Tablecloth Prints (Custom)",
    category: "Fabric Prints",
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.7,
    reviews: 95,
    images: ["/sample3.jpg", "/sample4.jpg"], // Reuse images
    badge: "Professional",
    features: ["Washable Fabric", "Full Color Print", "Custom Sizes"],
    description: "Branded tablecloths for trade shows, conferences, and corporate events.",
    inStock: true,
    discount: 20,
    designStyles: ["Corporate", "Event", "Trade Show"],
    templates: ["Fitted", "Throw", "Stretch"],
    specifications: [
      { label: "Material", value: "Polyester Fabric" },
      { label: "Size", value: "Custom" },
      { label: "Print Type", value: "Dye Sublimation" },
      { label: "Care", value: "Machine Washable" },
      { label: "Options", value: "Table Runners Available" }
    ]
  },
  {
    id: 14,
    sku: "PRM002",
    name: "Custom Mugs (Pack of 12)",
    category: "Promotional Items",
    price: 75.00,
    originalPrice: 90.00,
    rating: 4.9,
    reviews: 300,
    images: ["/sample5.jpg", "/sample6.jpg"], // Reuse images
    badge: "Gift Idea",
    features: ["Ceramic", "Dishwasher Safe", "Full Color Print"],
    description: "Personalized ceramic mugs for corporate gifts, events, or brand promotion.",
    inStock: true,
    discount: 17,
    designStyles: ["Logo", "Text", "Photo"],
    templates: ["Standard Mug", "Travel Mug", "Espresso Cup"],
    specifications: [
      { label: "Material", value: "High-Quality Ceramic" },
      { label: "Capacity", value: "330ml (11oz)" },
      { label: "Print Method", value: "Sublimation" },
      { label: "Durability", value: "Dishwasher & Microwave Safe" },
      { label: "Colors", value: "White, Black, Color-Rimmed" }
    ]
  },
  {
    id: 15,
    sku: "DPP003",
    name: "Invoice Books (A5, Carbonless)",
    category: "Digital Paper Prints",
    price: 35.00,
    originalPrice: 40.00,
    rating: 4.5,
    reviews: 100,
    images: ["/sample7.jpg", "/sample8.jpg"], // Reuse images
    badge: "Essential",
    features: ["Duplicate/Triplicate", "Numbered", "Perforated"],
    description: "Custom printed carbonless invoice books for professional billing and record-keeping.",
    inStock: true,
    discount: 12,
    designStyles: ["Standard", "Custom Layout"],
    templates: ["Invoice", "Receipt", "Delivery Note"],
    specifications: [
      { label: "Paper", value: "Carbonless NCR" },
      { label: "Size", value: "A5" },
      { label: "Copies", value: "Duplicate, Triplicate" },
      { label: "Binding", value: "Glued or Stapled" },
      { label: "Options", value: "Numbered, Perforated" }
    ]
  },
  {
    id: 16,
    sku: "SHS003",
    name: "Pavement Signs (A1)",
    category: "Signage Solutions",
    price: 95.00,
    originalPrice: 110.00,
    rating: 4.6,
    reviews: 130,
    images: ["/sample9.jpg", "/sample10.jpg"], // Reuse images
    badge: "Outdoor",
    features: ["Waterproof", "Interchangeable Posters", "Stable Base"],
    description: "Durable pavement signs for outdoor advertising, perfect for attracting walk-in customers.",
    inStock: true,
    discount: 14,
    designStyles: ["Poster Frame", "Chalkboard", "Waterbase"],
    templates: ["A-Board", "Swing Sign", "Forecourt Sign"],
    specifications: [
      { label: "Material", value: "Aluminum, Steel, PVC" },
      { label: "Size", value: "A1 (594x841mm)" },
      { label: "Display", value: "Double-sided" },
      { label: "Weather", value: "Weather Resistant" },
      { label: "Stability", value: "Heavy Base Option" }
    ]
  },
  {
    id: 17,
    sku: "FLB003",
    name: "Mesh Banners (Large Format)",
    category: "Flex Banners",
    price: 80.00,
    originalPrice: 100.00,
    rating: 4.7,
    reviews: 110,
    images: ["/sample11.jpg", "/sample12.jpg"], // Reuse images
    badge: "Wind Resistant",
    features: ["Permeable", "UV Printed", "Reinforced Hems"],
    description: "Mesh banners designed for large outdoor displays where wind resistance is crucial.",
    inStock: true,
    discount: 20,
    designStyles: ["Building Wraps", "Scaffolding", "Fencing"],
    templates: ["Custom Size", "Eyelets", "Pole Pockets"],
    specifications: [
      { label: "Material", value: "300gsm Mesh PVC" },
      { label: "Size", value: "Custom Large Format" },
      { label: "Print Type", value: "UV Digital" },
      { label: "Wind Resistance", value: "High" },
      { label: "Fixing", value: "Eyelets every 50cm" }
    ]
  },
  {
    id: 18,
    sku: "VPW003",
    name: "Floor Graphics (Anti-Slip)",
    category: "Vinyl Prints & Wraps",
    price: 40.00,
    originalPrice: 50.00,
    rating: 4.8,
    reviews: 80,
    images: ["/sample13.jpg", "/sample14.jpg"], // Reuse images
    badge: "Safety First",
    features: ["R10 Anti-Slip", "Durable", "Custom Shapes"],
    description: "High-traction floor graphics for retail, events, and directional signage.",
    inStock: true,
    discount: 20,
    designStyles: ["Directional", "Promotional", "Decorative"],
    templates: ["Round", "Square", "Custom Shape"],
    specifications: [
      { label: "Material", value: "Textured Vinyl with Anti-Slip Laminate" },
      { label: "Size", value: "Custom per Sq Meter" },
      { label: "Durability", value: "Indoor High Traffic" },
      { label: "Certification", value: "R10 Anti-Slip" },
      { label: "Application", value: "Smooth Floor Surfaces" }
    ]
  },
  {
    id: 19,
    sku: "FBP003",
    name: "Custom Flags (Teardrop)",
    category: "Fabric Prints",
    price: 70.00,
    originalPrice: 90.00,
    rating: 4.7,
    reviews: 120,
    images: ["/sample15.jpg", "/sample16.jpg"], // Reuse images
    badge: "Dynamic",
    features: ["Wind Resistant", "Vibrant Print", "Portable Pole"],
    description: "Eye-catching teardrop flags for outdoor events, promotions, and branding.",
    inStock: true,
    discount: 22,
    designStyles: ["Brand Logo", "Event Promotion", "Informational"],
    templates: ["Single Sided", "Double Sided"],
    specifications: [
      { label: "Material", value: "110gsm Knitted Polyester" },
      { label: "Size", value: "Small, Medium, Large" },
      { label: "Print Type", value: "Dye Sublimation" },
      { label: "Hardware", value: "Pole & Ground Spike" },
      { label: "Shape", value: "Teardrop" }
    ]
  },
  {
    id: 20,
    sku: "PRM003",
    name: "Branded Pens (Pack of 50)",
    category: "Promotional Items",
    price: 50.00,
    originalPrice: 60.00,
    rating: 4.8,
    reviews: 250,
    images: ["/sample17.jpg", "/sample18.jpg"], // Reuse images
    badge: "Giveaway",
    features: ["Full Color Logo", "Smooth Writing", "Bulk Discount"],
    description: "Custom branded pens, an effective and affordable promotional giveaway.",
    inStock: true,
    discount: 17,
    designStyles: ["Classic", "Modern", "Eco-Friendly"],
    templates: ["Ballpoint", "Gel", "Rollerball"],
    specifications: [
      { label: "Material", value: "Plastic, Metal, Eco-Friendly" },
      { label: "Ink Color", value: "Blue, Black" },
      { label: "Print Method", value: "Pad Print, Digital Print" },
      { label: "Quantity", value: "50 pieces" },
      { label: "Color Options", value: "Various Barrel Colors" }
    ]
  },
  {
    id: 21,
    sku: "DPP004",
    name: "Restaurant Menus (Laminated)",
    category: "Digital Paper Prints",
    price: 40.00,
    originalPrice: 50.00,
    rating: 4.9,
    reviews: 150,
    images: ["/sample19.jpg", "/sample20.jpg"], // Reuse images
    badge: "Durable",
    features: ["Waterproof", "Tear Resistant", "Custom Design"],
    description: "Laminated menus for restaurants and cafes, durable and easy to clean.",
    inStock: true,
    discount: 20,
    designStyles: ["Modern", "Elegant", "Casual"],
    templates: ["A4", "A3", "DL"],
    specifications: [
      { label: "Material", value: "250gsm Silk with Matt/Gloss Lamination" },
      { label: "Size", value: "A4, A3, DL" },
      { label: "Finish", value: "Matt or Gloss Lamination" },
      { label: "Pages", value: "Single, Bi-Fold, Tri-Fold" },
      { label: "Durability", value: "Waterproof, Tear Resistant" }
    ]
  },
  {
    id: 22,
    sku: "SHS004",
    name: "Vehicle Magnets (Pair)",
    category: "Signage Solutions",
    price: 60.00,
    originalPrice: 75.00,
    rating: 4.7,
    reviews: 90,
    images: ["/sample21.jpg", "/sample22.jpg"], // Reuse images
    badge: "Removable",
    features: ["Strong Magnetic", "Custom Print", "Weather Resistant"],
    description: "Removable vehicle magnets for temporary branding on cars and vans.",
    inStock: true,
    discount: 20,
    designStyles: ["Corporate", "Simple Logo", "Contact Info"],
    templates: ["Rectangular", "Custom Shape"],
    specifications: [
      { label: "Material", value: "0.85mm Thick Magnetic Sheeting" },
      { label: "Size", value: "Custom" },
      { label: "Print Type", value: "UV Full Color" },
      { label: "Durability", value: "Outdoor Use" },
      { label: "Quantity", value: "Pair (2 magnets)" }
    ]
  },
  {
    id: 23,
    sku: "FLB004",
    name: "Pop-Up Display Stand (3x3m)",
    category: "Flex Banners",
    price: 350.00,
    originalPrice: 420.00,
    rating: 4.8,
    reviews: 70,
    images: ["/sample23.jpg", "/sample24.jpg"], // Reuse images
    badge: "Event Ready",
    features: ["Easy Setup", "Portable", "Vibrant Graphics"],
    description: "Large format pop-up display for trade shows and exhibitions, with custom printed graphics.",
    inStock: true,
    discount: 17,
    designStyles: ["Backdrop", "Photo Booth"],
    templates: ["Curved", "Straight"],
    specifications: [
      { label: "Material", value: "Fabric Graphics" },
      { label: "Size", value: "3m x 3m" },
      { label: "Frame", value: "Lightweight Aluminum" },
      { label: "Transport", value: "Carry Bag Included" },
      { label: "Setup Time", value: "Under 10 minutes" }
    ]
  },
  {
    id: 24,
    sku: "VPW005",
    name: "Vinyl Stickers (Die-Cut)",
    category: "Vinyl Prints & Wraps",
    price: 25.00,
    originalPrice: 30.00,
    rating: 4.9,
    reviews: 200,
    images: ["/sample25.jpg", "/sample26.jpg"], // Reuse images
    badge: "Customizable",
    features: ["Weatherproof", "UV Resistant", "Any Shape"],
    description: "Custom die-cut vinyl stickers for branding, products, and promotions.",
    inStock: true,
    discount: 17,
    designStyles: ["Logo", "Illustrations", "Text"],
    templates: ["Die-Cut", "Kiss-Cut", "Sheet"],
    specifications: [
      { label: "Material", value: "Glossy White Vinyl" },
      { label: "Size", value: "Custom" },
      { label: "Finish", value: "Glossy or Matte" },
      { label: "Durability", value: "Outdoor Use" },
      { label: "Application", value: "Easy Peel" }
    ]
  },
  {
    id: 25,
    sku: "FBP004",
    name: "Custom Banners (Fabric)",
    category: "Fabric Prints",
    price: 55.00,
    originalPrice: 70.00,
    rating: 4.6,
    reviews: 110,
    images: ["/sample27.jpg", "/sample28.jpg"], // Reuse images
    badge: "Lightweight",
    features: ["Crease Resistant", "Washable", "Vibrant Print"],
    description: "Lightweight and versatile fabric banners for indoor and short-term outdoor use.",
    inStock: true,
    discount: 21,
    designStyles: ["Events", "Exhibitions", "Retail"],
    templates: ["Hemmed", "Pole Pockets", "Silicone Edge Graphics (SEG)"],
    specifications: [
      { label: "Material", value: "200gsm Display Fabric" },
      { label: "Size", value: "Custom" },
      { label: "Print Type", value: "Dye Sublimation" },
      { label: "Care", value: "Machine Washable" },
      { label: "Features", value: "Crease Resistant" }
    ]
  }
];

// Helper functions
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  // Try to parse the slug as an integer ID
  const id = parseInt(slug);
  
  // If it's a valid number, search by ID
  if (!isNaN(id)) {
    return getProductById(id);
  }
  
  // Otherwise return undefined
  return undefined;
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getCategories(): string[] {
  return [...new Set(products.map(product => product.category))];
}