// components/home/Testimonials.tsx
"use client";

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Marketing Director, TechCorp",
      avatar: "/sample17.jpg",
      rating: 5,
      text: "Outstanding quality and service! Our new business cards and brochures look professional and have received numerous compliments. The team was helpful throughout the entire process.",
      project: "Business Cards & Brochures"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "CEO, StartupHub",
      avatar: "/sample18.jpg",
      rating: 5,
      text: "Fast delivery and exceptional print quality. We needed event materials on short notice and they delivered beyond our expectations. Will definitely use their services again.",
      project: "Event Branding Package"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Operations Manager, RetailCo",
      avatar: "/sample19.jpg",
      rating: 5,
      text: "The vehicle wraps transformed our company vans into moving billboards. The quality is exceptional and the colors are vibrant even after months of exposure.",
      project: "Vehicle Wraps"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses across Ethiopia
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].company}</p>
                  <p className="text-sm text-primary mt-1">Project: {testimonials[activeTestimonial].project}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-1">98%</p>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-1">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-1">2,000+</p>
            <p className="text-sm text-muted-foreground">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground mb-1">85%</p>
            <p className="text-sm text-muted-foreground">Return Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;