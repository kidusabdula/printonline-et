// components/product/ProductTabContent.ts
// Product tab content data for paper products

export interface ProductTabContent {
  productDetails?: {
    sections: {
      heading: string;
      items: string[];
      note?: string;
    }[];
  };
  paperStocks?: {
    categories: {
      name: string;
      materials: {
        name: string;
        thickness?: string;
        finish: string;
        weight?: string;
        description: string;
        special?: boolean;
      }[];
    }[];
    notes?: string[];
  };
  fileSetup?: {
    specs: {
      label: string;
      value: string;
      note?: string;
    }[];
  };
  templates?: {
    instruction?: string;
    sizes: {
      size: string;
      formats: string[];
    }[];
    additional?: {
      name: string;
      radius?: string;
      availableFor?: string[];
    }[];
  };
}

export const productTabContent: Record<string, ProductTabContent> = {
  "Business Cards": {
    productDetails: {
      sections: [
        {
          heading: "Sizes",
          items: [
            '2" x 3.5" - Standard',
            '2.17" x 3.35" - European',
            '1.75" x 3.5" - Slim',
            '1.75" x 3"',
            '2" x 3"'
          ]
        },
        {
          heading: "Print Options",
          items: [
            "Full Color Both Sides",
            "Full Color Front, Grayscale Back",
            "Full Color Front, Blank Back"
          ]
        },
        {
          heading: "Specialty Finishes",
          note: "(only applicable for 16 pt. Premium Matte Cover)",
          items: [
            "Raised Print UV",
            "Raised Print Foil",
            "Gold",
            "Silver",
            "Rose Gold"
          ]
        }
      ]
    },
    paperStocks: {
      categories: [
        {
          name: "Standard",
          materials: [
            { name: "14 pt. Gloss Cover", thickness: "14 pt", finish: "Glossy", description: "Bright vibrant finish with UV coating" },
            { name: "14 pt. Uncoated Cover", thickness: "14 pt", finish: "Matte", description: "Classic professional matte appearance" },
            { name: "100 lb. Matte Cover", thickness: "Premium", finish: "Matte", description: "Elegant matte with substantial feel" }
          ]
        },
        {
          name: "Premium",
          materials: [
            { name: "13 pt. Premium Linen", thickness: "13 pt", finish: "Linen textured", description: "Sophisticated crosshatch pattern" },
            { name: "16 pt. Premium Matte", thickness: "16 pt", finish: "Matte", description: "Eligible for specialty finishes", special: true },
            { name: "18 pt. Premium Kraft", thickness: "18 pt", finish: "Kraft", description: "Eco-friendly natural appearance" }
          ]
        },
        {
          name: "Ultra Premium",
          materials: [
            { name: "18 pt. Ultra Premium Pearl", thickness: "18 pt", finish: "Pearl", description: "Luxurious pearlescent finish" },
            { name: "18 pt. Ultra Premium Smooth White", thickness: "18 pt", finish: "Smooth", description: "Premium bright white surface" }
          ]
        },
        {
          name: "Ultra Thick",
          materials: [
            { name: "24 pt. Trifecta Green with Velvet Finish", thickness: "24 pt", finish: "Velvet", description: "Extra thick with soft velvet touch" },
            { name: "38 pt. Trifecta Black with Velvet Finish", thickness: "38 pt", finish: "Velvet", description: "Maximum premium impact" },
            { name: "38 pt. Trifecta Blue with Velvet Finish", thickness: "38 pt", finish: "Velvet", description: "Ultra thick blue with velvet texture" },
            { name: "38 pt. Trifecta Red with Velvet Finish", thickness: "38 pt", finish: "Velvet", description: "Ultra thick red with velvet texture" }
          ]
        }
      ]
    },
    fileSetup: {
      specs: [
        { label: "Bleed", value: '0.1"', note: "Rounded corners: 2\" x 3.5\" require 0.325\" bleed" },
        { label: "Resolution", value: "350 DPI" },
        { label: "Color Mode", value: "CMYK" },
        { label: "File Formats", value: "TIF, TIFF, EPS, AI, PSD, BMP, GIF, JPG, PNG, PDF" },
        { label: "Max File Upload", value: "75MB" },
        { label: "Specialty Prints", value: "See detailed instructions for Raised UV/Foil" },
        { label: "Instant Online Proof", value: "Available - may add time to order" }
      ]
    },
    templates: {
      instruction: "To reduce file size, upload in .jpg format. Use downloadable templates - all have correct dimensions including bleed.",
      sizes: [
        { size: '2" x 3.5" - Standard', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '2.17" x 3.35" - European', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '1.75" x 3.5" - Slim', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '1.75" x 3"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '2" x 3"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] }
      ],
      additional: [
        { name: "Rounded Corners", radius: '0.25"', availableFor: ["Rectangle", "Square"] }
      ]
    }
  },
  "Flyers": {
    productDetails: {
      sections: [
        {
          heading: "Sizes",
          items: [
            '2.5" x 4"', '3.5" x 8.5"', '3.75" x 8.25"', '4" x 6"', '4" x 9"',
            '4.25" x 5.5"', '4.25" x 11"', '5" x 7"', '5.5" x 8.5"', '6" x 6"',
            '6" x 9"', '8" x 8"', '8" x 10"', '8.5" x 11"', '8.5" x 14"',
            '9" x 12"', '11" x 17"', '12" x 12"'
          ]
        },
        {
          heading: "Print Options",
          items: [
            "Full Color Both Sides",
            "Full Color Front, Blank Back"
          ]
        },
        {
          heading: "Paper Stocks",
          items: [
            "100 lb. Gloss Book", "100 lb. Gloss Cover", "100 lb. Matte Cover",
            "14 pt. Gloss", "14 pt. Uncoated", "70 lb. Opaque Smooth White",
            "80 lb. Gloss Book", "80 lb. Matte Text", "13 pt. Premium Linen",
            "18 pt. Premium Kraft", "18 pt. Ultra Premium Pearl",
            "18 pt. Ultra Premium Smooth White"
          ]
        }
      ]
    },
    paperStocks: {
      categories: [
        {
          name: "Standard",
          materials: [
            { name: "100 lb. Gloss Book", finish: "Glossy", weight: "100 lb", description: "Bright vibrant for promotional" },
            { name: "100 lb. Gloss Cover", finish: "Glossy", weight: "100 lb", description: "Premium gloss coverage" },
            { name: "100 lb. Matte Cover", finish: "Matte", weight: "100 lb", description: "Professional matte appearance" },
            { name: "14 pt. Gloss", thickness: "14 pt", finish: "Glossy", description: "Bright gloss coating" },
            { name: "14 pt. Uncoated", thickness: "14 pt", finish: "Uncoated", description: "Textured look" },
            { name: "70 lb. Opaque Smooth White", weight: "70 lb", finish: "Smooth", description: "Textured vintage appearance" },
            { name: "80 lb. Gloss Book", weight: "80 lb", finish: "Glossy", description: "Value glossy option" },
            { name: "80 lb. Matte Text", weight: "80 lb", finish: "Matte", description: "Matte value option" }
          ]
        },
        {
          name: "Premium",
          materials: [
            { name: "13 pt. Premium Linen", finish: "Linen", description: "Sophisticated texture" },
            { name: "18 pt. Premium Kraft", finish: "Kraft", description: "Eco-friendly option" }
          ]
        },
        {
          name: "Ultra Premium",
          materials: [
            { name: "18 pt. Ultra Premium Pearl", finish: "Pearl", description: "Luxurious pearlescent" },
            { name: "18 pt. Ultra Premium Smooth White", finish: "Smooth", description: "Premium bright white" }
          ]
        }
      ],
      notes: [
        "Premium Kraft and Ultra Premium Pearl may slightly vary in thickness & color",
        "14 pt. Gloss: High Gloss UV Coating applied to color sides unless otherwise selected",
        "250+ quantities on gloss stocks: Aqueous coating applied",
        "100 or fewer on gloss stocks: Digital printed with no coating"
      ]
    },
    fileSetup: {
      specs: [
        { label: "Bleed", value: '0.25"' },
        { label: "Resolution", value: "300 DPI" },
        { label: "Color Mode", value: "CMYK" },
        { label: "File Formats", value: "TIF, TIFF, EPS, AI, PSD, BMP, GIF, JPG, PNG, PDF" },
        { label: "Max File Upload", value: "100MB" }
      ]
    },
    templates: {
      instruction: "Download templates with correct dimensions and bleed included.",
      sizes: [
        { size: '4" x 6"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '5" x 7"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '5.5" x 8.5"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '6" x 9"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '8.5" x 11"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] }
      ]
    }
  },
  "Postcards": {
    productDetails: {
      sections: [
        {
          heading: "Sizes",
          items: ['4" x 6"', '5" x 7"', '6" x 9"', '6" x 11"']
        },
        {
          heading: "Print Options",
          items: [
            "Full Color Front Only",
            "Full Color Both Sides"
          ]
        },
        {
          heading: "Paper Stock",
          items: [
            "14 pt. Gloss",
            "14 pt. Uncoated"
          ]
        }
      ]
    },
    paperStocks: {
      categories: [
        {
          name: "Standard",
          materials: [
            { name: "14 pt. Gloss", finish: "Glossy", description: "Bright vibrant postcards" },
            { name: "14 pt. Uncoated", finish: "Matte", description: "Classic professional look" }
          ]
        }
      ]
    },
    fileSetup: {
      specs: [
        { label: "Bleed", value: '0.125"' },
        { label: "Resolution", value: "300 DPI" },
        { label: "Color Mode", value: "CMYK" },
        { label: "File Formats", value: "TIF, TIFF, EPS, AI, PSD, BMP, GIF, JPG, PNG, PDF" },
        { label: "Max File Upload", value: "100MB" }
      ]
    },
    templates: {
      sizes: [
        { size: '4" x 6"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '5" x 7"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '6" x 9"', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] }
      ]
    }
  },
  "Brochures": {
    productDetails: {
      sections: [
        {
          heading: "Sizes",
          items: ['8.5" x 11" Tri-Fold', '8.5" x 14" Bi-Fold']
        },
        {
          heading: "Paper Options",
          items: [
            "80 lb. Gloss Book",
            "100 lb. Gloss Cover",
            "80 lb. Matte Text",
            "100 lb. Matte Cover"
          ]
        }
      ]
    },
    paperStocks: {
      categories: [
        {
          name: "Standard",
          materials: [
            { name: "80 lb. Gloss Book", finish: "Glossy", description: "Value glossy option" },
            { name: "100 lb. Gloss Cover", finish: "Glossy", weight: "100 lb", description: "Premium gloss" },
            { name: "80 lb. Matte Text", finish: "Matte", weight: "80 lb", description: "Value matte" },
            { name: "100 lb. Matte Cover", finish: "Matte", weight: "100 lb", description: "Premium matte" }
          ]
        }
      ]
    },
    fileSetup: {
      specs: [
        { label: "Bleed", value: '0.25"' },
        { label: "Resolution", value: "300 DPI" },
        { label: "Color Mode", value: "CMYK" },
        { label: "File Formats", value: "TIF, TIFF, EPS, AI, PSD, BMP, GIF, JPG, PNG, PDF" }
      ]
    },
    templates: {
      sizes: [
        { size: '8.5" x 11" Tri-Fold', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] },
        { size: '8.5" x 14" Bi-Fold', formats: ["AI", "PSD", "PDF", "InDD", "JPG"] }
      ]
    }
  }
};

export function getProductTabContent(productName: string): ProductTabContent | undefined {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const singularize = (s: string) =>
    s
      .replace(/\bbusiness cards\b/g, "business card")
      .replace(/\bflyers\b/g, "flyer")
      .replace(/\bpostcards\b/g, "postcard")
      .replace(/\bbrochures\b/g, "brochure");

  const pn = singularize(normalize(productName));

  if (productTabContent[productName]) {
    return productTabContent[productName];
  }

  for (const [key, content] of Object.entries(productTabContent)) {
    const kn = singularize(normalize(key));
    if (pn === kn || pn.includes(kn) || kn.includes(pn)) {
      return content;
    }
  }

  return undefined;
}

