// components/category/CategoryHero.tsx
"use client";

import { useState } from 'react';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CategoryHeroProps {
  title: string;
  subtitle: string;
  image: string;
  productCount: number;
}

const CategoryHero = ({ title, subtitle, image, productCount }: CategoryHeroProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
              {productCount} Products Available
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            {subtitle}
          </p>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div className="flex gap-2">
              <button className="bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg hover:bg-white/30 transition-colors inline-flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
              
              <div className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-white/30' : ''} transition-colors`}
                >
                  <Grid className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-white/30' : ''} transition-colors`}
                >
                  <List className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;