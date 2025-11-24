// app/LayoutClient.tsx (Client Component)
"use client";

import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import { CartProvider } from '@/context/CartContext';

export default function LayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CartProvider>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </CartProvider>
    </ThemeProvider>
  );
}