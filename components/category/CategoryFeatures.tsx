// components/category/CategoryFeatures.tsx
"use client";

import { CheckCircle, Clock, Shield, Award, Users, TrendingUp } from 'lucide-react';

interface CategoryFeaturesProps {
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const CategoryFeatures = ({ features }: CategoryFeaturesProps) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'CheckCircle': <CheckCircle className="h-6 w-6" />,
      'Clock': <Clock className="h-6 w-6" />,
      'Shield': <Shield className="h-6 w-6" />,
      'Award': <Award className="h-6 w-6" />,
      'Users': <Users className="h-6 w-6" />,
      'TrendingUp': <TrendingUp className="h-6 w-6" />
    };
    return iconMap[iconName] || <CheckCircle className="h-6 w-6" />;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to delivering exceptional quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {getIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">4.9/5</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">24hr</p>
                <p className="text-sm text-muted-foreground">Fast Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatures;