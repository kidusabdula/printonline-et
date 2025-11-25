// components/product/ProductDetailPage.tsx
"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Heart, Share2, Shield, Truck, Clock, CheckCircle, 
  Minus, Plus, Package, FileText, Ruler, Palette, Upload,
  X, Info
} from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { getProductFormType } from './ProductFormTypes';
import { getProductFormSchema } from './ProductFormSchemas';
import { SelectField, RadioField, RadioVisualField, CheckboxField, MultiSelectField } from './FormFields';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductTabContent, ProductTabContent } from './ProductTabContent';

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
  tabs?: ProductTabContent;
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('product-details');
  const [showSizeChart, setShowSizeChart] = useState(false);
  const { addToCart } = useCart();

  // Get form schema based on product name
  const formSchema = useMemo(() => getProductFormSchema(product.name), [product.name]);
  const formType = useMemo(() => getProductFormType(product.name), [product.name]);
  const tabContent = useMemo(() => product.tabs ?? getProductTabContent(product.name), [product]);

  // Form state management
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    Object.values(formSchema.fields).forEach((field: any) => {
      if (field.type === 'checkbox' && field.defaultChecked) {
        initial[field.key] = field.defaultChecked;
      } else if (field.type === 'multi-select') {
        initial[field.key] = {};
      }
    });
    return initial;
  });

  // Field enabled/disabled state based on conditional logic
  const [fieldStates, setFieldStates] = useState<Record<string, boolean>>(() => {
    const states: Record<string, boolean> = {};
    Object.values(formSchema.fields).forEach((field: any) => {
      states[field.key] = !field.disabled;
    });
    return states;
  });

  // Update field states based on conditional logic
  useEffect(() => {
    if (!formSchema.conditionalLogic) return;

    const newStates = { ...fieldStates };
    Object.entries(formSchema.conditionalLogic).forEach(([fieldKey, conditions]) => {
      conditions.forEach((condition) => {
        const dependsOnValue = formData[condition.dependsOn];
        const shouldEnable = condition.condition(dependsOnValue);

        if (condition.action === 'enable') {
          newStates[fieldKey] = shouldEnable;
        } else if (condition.action === 'disable') {
          newStates[fieldKey] = !shouldEnable;
        }
      });
    });

    // Handle field dependencies (disablesOtherFields)
    Object.values(formSchema.fields).forEach((field: any) => {
      if (field.disablesOtherFields && formData[field.key]) {
        field.disablesOtherFields.forEach((otherFieldKey: string) => {
          newStates[otherFieldKey] = false;
        });
      }
    });

    setFieldStates(newStates);
  }, [formData, formSchema]);

  const handleFieldChange = (fieldKey: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));

    // Enable dependent fields when parent field is selected
    const field = formSchema.fields[fieldKey] as any;
    if (field?.disablesOtherFields && value) {
      setFieldStates((prev) => {
        const newStates = { ...prev };
        field.disablesOtherFields!.forEach((otherKey: string) => {
          newStates[otherKey] = true;
        });
        return newStates;
      });
    }
  };

  const calculatePrice = () => {
    let basePrice = product.price;
    
    // Apply price modifiers from form fields
    Object.entries(formData).forEach(([key, value]) => {
      const field = formSchema.fields[key];
      if (!field || !value) return;

      if (field.type === 'select' && field.options) {
        const option = field.options.find((opt: any) => opt.value === value);
        if (option?.price) {
          basePrice += option.price;
        }
      }

      if (field.type === 'radio' && field.options) {
        const option = field.options.find((opt: any) => opt.value === value);
        if (option?.priceModifier) {
          basePrice *= option.priceModifier;
        }
      }
    });

    return basePrice;
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    Object.values(formSchema.fields).forEach((field: any) => {
      if (field.required && !formData[field.key]) {
        errors.push(`${field.label} is required`);
      }
    });

    return errors;
  };

  const handleAddToCart = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      toast.error('Please complete all required fields', {
        description: errors.join(', '),
      });
      return;
    }

    const finalPrice = calculatePrice();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.images[0],
      category: product.category,
      quantity: formData.quantity || 1,
      designStyle: formData.designStyle || product.designStyles[0],
      template: formData.template || product.templates[0],
      customOptions: formData,
    });

    toast.success(`${product.name} added to cart!`, {
      description: `Customized with your selected options`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      }
    });
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

  const renderFormField = (fieldKey: string) => {
    const field = formSchema.fields[fieldKey];
    if (!field) return null;

    const value = formData[fieldKey];
    const disabled = !fieldStates[fieldKey];

    switch (field.type) {
      case 'select':
        return (
          <SelectField
            key={fieldKey}
            field={field}
            value={value}
            onChange={(val) => handleFieldChange(fieldKey, val)}
            disabled={disabled}
          />
        );
      case 'radio':
        return (
          <RadioField
            key={fieldKey}
            field={field}
            value={value}
            onChange={(val) => handleFieldChange(fieldKey, val)}
            disabled={disabled}
          />
        );
      case 'radio-visual':
        return (
          <RadioVisualField
            key={fieldKey}
            field={field}
            value={value}
            onChange={(val) => handleFieldChange(fieldKey, val)}
            disabled={disabled}
          />
        );
      case 'checkbox':
        return (
          <CheckboxField
            key={fieldKey}
            field={field}
            value={value}
            onChange={(val) => handleFieldChange(fieldKey, val)}
            disabled={disabled}
          />
        );
      case 'multi-select':
        return (
          <MultiSelectField
            key={fieldKey}
            field={field}
            value={formData}
            onChange={(val) => setFormData(val)}
            disabled={disabled}
          />
        );
      case 'modal-link':
        if (fieldKey === 'sizeChart') {
          return (
            <div key={fieldKey} className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {field.label}
              </label>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowSizeChart(true)}
                className="btn-pana px-4 py-2 inline-flex items-center gap-2"
              >
                <Ruler className="h-4 w-4" />
                View Size Chart
              </motion.button>
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-50"
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            
            {/* Badge */}
            {product.badge && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-4 left-4 z-10"
              >
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.badge}
                </span>
              </motion.div>
            )}
            
            {/* Discount Badge */}
            {product.discount && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-4 right-4 z-10"
              >
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  -{product.discount}%
                </span>
              </motion.div>
            )}
          </motion.div>
          
          {/* Thumbnail Gallery */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  selectedImage === index ? 'border-primary ring-2 ring-primary/30' : 'border-transparent hover:border-primary/50'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
          {/* Information Tabs (moved here, below image) */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full gap-1">
            <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 p-0 bg-transparent rounded-none border-b border-border mt-1 mb-2">
              {formSchema.tabs.map((tab) => {
                const tabValue = tab.toLowerCase().replace(/\s+/g, '-');
                return (
                  <TabsTrigger
                    key={tab}
                    value={tabValue}
                    className="relative data-[state=active]:bg-background/90 data-[state=active]:shadow-none data-[state=active]:text-primary/90 hover:bg-muted/50 transition-colors py-3"
                  >
                    {tab}
                    {activeTab === tabValue && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full transition-all duration-300" />
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="relative border-x border-b border-border bg-card p-4 h-[calc(100dvh-12rem)] overflow-hidden rounded-b-lg">

            {formSchema.tabs.includes('Product Details') && (
              <TabsContent
                forceMount
                value="product-details"
                className="transition-opacity duration-300 mt-0 pt-0 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:pointer-events-none data-[state=active]:pointer-events-auto absolute inset-0 p-4 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  {tabContent?.productDetails && (
                    <div className="space-y-6">
                      {tabContent.productDetails.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={sectionIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: sectionIndex * 0.1 }}
                          className="p-6 rounded-lg border border-border bg-card"
                        >
                          <h4 className="text-lg font-semibold text-foreground mb-3">{section.heading}</h4>
                          {section.note && (
                            <p className="text-sm text-muted-foreground mb-3 italic">{section.note}</p>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {section.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center space-x-2 p-2 rounded hover:bg-secondary/50 transition-colors"
                              >
                                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                <span className="text-sm text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {product.features && product.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

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
                </motion.div>
              </TabsContent>
            )}

            {formSchema.tabs.includes('Paper Stocks') && (
              <TabsContent
                forceMount
                value="paper-stocks"
                className="transition-opacity duration-300 mt-0 pt-0 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:pointer-events-none data-[state=active]:pointer-events-auto absolute inset-0 p-4 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {tabContent?.paperStocks ? (
                    <>
                      {tabContent.paperStocks.categories.map((category, catIndex) => (
                        <motion.div
                          key={catIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: catIndex * 0.1 }}
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-bold text-foreground border-b border-primary/30 pb-2">
                            {category.name}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.materials.map((material, matIndex) => (
                              <motion.div
                                key={matIndex}
                                whileHover={{ scale: 1.02 }}
                                className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
                              >
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <p className="font-semibold text-foreground">{material.name}</p>
                                  {material.thickness && (
                                    <p><span className="font-medium">Thickness:</span> {material.thickness}</p>
                                  )}
                                  {material.weight && (
                                    <p><span className="font-medium">Weight:</span> {material.weight}</p>
                                  )}
                                  <p><span className="font-medium">Finish:</span> {material.finish}</p>
                                  <p className="mt-2 text-foreground">{material.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                      {tabContent.paperStocks.notes && tabContent.paperStocks.notes.length > 0 && (
                        <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                          <h4 className="font-semibold text-foreground mb-2">Important Notes:</h4>
                          <ul className="space-y-1">
                            {tabContent.paperStocks.notes.map((note, noteIndex) => (
                              <li key={noteIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="mr-2">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">Paper stock information not available for this product.</div>
                  )}
                </motion.div>
              </TabsContent>
            )}

            {formSchema.tabs.includes('File Setup') && (
              <TabsContent
                forceMount
                value="file-setup"
                className="transition-opacity duration-300 mt-0 pt-0 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:pointer-events-none data-[state=active]:pointer-events-auto absolute inset-0 p-4 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {tabContent?.fileSetup ? (
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground mb-3">File Setup Guidelines</h3>
                      <div className="p-4 rounded-lg border border-border bg-card space-y-3">
                        {tabContent.fileSetup.specs.map((spec, specIndex) => (
                          <motion.div
                            key={specIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: specIndex * 0.05 }}
                            className="flex items-start justify-between py-3 border-b border-border/50 last:border-0"
                          >
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{spec.label}</p>
                              {spec.note && (
                                <p className="text-xs text-muted-foreground mt-1 italic">{spec.note}</p>
                              )}
                            </div>
                            <p className="font-medium text-primary ml-4">{spec.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">File setup information not available for this product.</div>
                  )}
                </motion.div>
              </TabsContent>
            )}

            {formSchema.tabs.includes('Templates') && (
              <TabsContent
                forceMount
                value="templates"
                className="transition-opacity duration-300 mt-0 pt-0 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:pointer-events-none data-[state=active]:pointer-events-auto absolute inset-0 p-4 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {tabContent?.templates ? (
                    <div className="space-y-6">
                      {tabContent.templates.instruction && (
                        <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                          <p className="text-sm text-foreground">{tabContent.templates.instruction}</p>
                        </div>
                      )}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">Available Templates</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {tabContent.templates.sizes.map((template, templateIndex) => (
                            <motion.div
                              key={templateIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: templateIndex * 0.1 }}
                              className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
                            >
                              <h4 className="font-semibold text-foreground mb-3">{template.size}</h4>
                              <div className="flex flex-wrap gap-2">
                                {template.formats.map((format, formatIndex) => (
                                  <span
                                    key={formatIndex}
                                    className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium"
                                  >
                                    {format}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      {tabContent.templates.additional && tabContent.templates.additional.length > 0 && (
                        <div className="p-4 rounded-lg border border-border bg-card">
                          <h4 className="font-semibold text-foreground mb-3">Additional Options</h4>
                          {tabContent.templates.additional.map((additional, addIndex) => (
                            <div key={addIndex} className="mb-2 last:mb-0">
                              <p className="font-medium text-foreground">{additional.name}</p>
                              {additional.radius && (
                                <p className="text-sm text-muted-foreground">Radius: {additional.radius}</p>
                              )}
                              {additional.availableFor && (
                                <p className="text-sm text-muted-foreground">
                                  Available for: {additional.availableFor.join(', ')}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">Templates not available for this product.</div>
                  )}
                </motion.div>
              </TabsContent>
            )}

            {formSchema.tabs.includes('Size Chart') && (
              <TabsContent value="size-chart" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-foreground">Size Chart</h3>
                  <p className="text-muted-foreground">Select your size based on measurements below.</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowSizeChart(true)}
                    className="btn-pana px-6 py-3"
                  >
                    View Full Size Chart
                  </motion.button>
                </motion.div>
              </TabsContent>
            )}
            </div>
          </Tabs>
        </div>
        
        {/* Product Details & Form */}
        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            
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
              <span className="text-3xl font-bold text-foreground">ETB {calculatePrice().toFixed(2)}</span>
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
          </motion.div>

          {/* Order Form (functional, independent from tabs) */}
          <div className="space-y-6">
            <div className="space-y-6">
              {Object.keys(formSchema.fields).map((fieldKey) => {
                if (fieldKey === 'sizeChart') return null;
                return renderFormField(fieldKey);
              })}
            </div>
          </div>











          
          
          {/* Add to Cart & Actions */}
          <div className="space-y-4 pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-pana py-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
              >
                Add to Cart - ETB {calculatePrice().toFixed(2)}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleWishlist}
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={shareProduct}
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </motion.button>
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

      {/* Size Chart Modal */}
      <AnimatePresence>
        {showSizeChart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSizeChart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Size Chart</h3>
                <button
                  onClick={() => setShowSizeChart(false)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">Size measurements in inches</p>
                {/* Size chart table would go here */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Size</th>
                        <th className="text-left p-3 font-semibold">Chest</th>
                        <th className="text-left p-3 font-semibold">Length</th>
                        <th className="text-left p-3 font-semibold">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                        <tr key={size} className="border-b border-border/50">
                          <td className="p-3 font-medium">{size}</td>
                          <td className="p-3 text-muted-foreground">38-40"</td>
                          <td className="p-3 text-muted-foreground">28"</td>
                          <td className="p-3 text-muted-foreground">8.5"</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailPage;
