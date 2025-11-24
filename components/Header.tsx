// components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingCart, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const { getCartCount } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };
    
    updateCartCount();
    
    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'printonline-cart') {
        updateCartCount();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, [getCartCount]);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        {/* ===== TOP ROW ===== */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-md flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground leading-none">Print Online ET</h1>
              <p className="text-xs text-muted-foreground">powered by Pana Promotion</p>
            </div>
          </Link>

          {/* Search (desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-6">
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="site-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for prints, banners, vinyls, t-shirt..." 
                className="w-full rounded-lg border border-border/60 bg-card py-3 pl-10 pr-4 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                aria-label="Search site"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-secondary/10 transition"
            >
              {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              {!mounted && <Sun className="h-5 w-5 opacity-70" />}
            </button>

            {/* Cart */}
            <Link href="/cart" className="p-2 rounded-md hover:bg-secondary/10 transition relative" aria-label="View cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link href="/account" className="p-2 rounded-md hover:bg-secondary/10 transition" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-secondary/10 transition"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ===== BOTTOM ROW: MAIN NAV (six items, no Home) ===== */}
        <div className="hidden md:flex items-center justify-between py-3 border-t border-border/40">
          <nav className="flex items-center gap-6">
            <Link href="/all-products" className="text-foreground hover:text-primary transition-colors font-medium">All Products</Link>
            <Link href="/digital-paper-prints" className="text-foreground hover:text-primary transition-colors">Digital Paper Prints</Link>
            <Link href="/signage-solutions" className="text-foreground hover:text-primary transition-colors">Signage Solutions</Link>
            <Link href="/flex-banners" className="text-foreground hover:text-primary transition-colors">Flex Banners</Link>
            <Link href="/vinyl-prints" className="text-foreground hover:text-primary transition-colors">Vinyl Prints & Wraps</Link>
            <Link href="/fabric-prints" className="text-foreground hover:text-primary transition-colors">Fabric Prints</Link>
            <Link href="/promotional-items" className="text-foreground hover:text-primary transition-colors">Promotional Items</Link>
          </nav>

          {/* CTA or utility actions (kept minimal to respect brief) */}
          <div className="flex items-center gap-3">
            <Link href="/catalog" className="btn-pana inline-flex items-center px-4 py-2">
              Catalog
            </Link>
          </div>
        </div>

        {/* ===== Mobile navigation (collapsible) ===== */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col space-y-2">
              <Link href="/all-products" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition font-medium">All Products</Link>
              <Link href="/digital-paper-prints" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Digital Paper Prints</Link>
              <Link href="/signage-solutions" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Signage Solutions</Link>
              <Link href="/flex-banners" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Flex Banners</Link>
              <Link href="/vinyl-prints" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Vinyl Prints & Wraps</Link>
              <Link href="/fabric-prints" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Fabric Prints</Link>
              <Link href="/promotional-items" className="py-2 px-3 rounded-md hover:bg-secondary/10 transition">Promotional Items</Link>

              {/* Mobile search */}
              <div className="mt-2 px-3">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="mobile-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-lg border border-border/60 bg-card py-2 pl-10 pr-3"
                  />
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;