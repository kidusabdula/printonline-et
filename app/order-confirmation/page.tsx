// app/order-confirmation/page.tsx
"use client";

import { useState } from "react";
import { CheckCircle, Package, Truck, Mail, Phone, MapPin, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface OrderDetails {
  id: string;
  date: string;
  status: string;
  estimatedDelivery: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  total: number;
  shipping: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  payment: {
    method: string;
    status: string;
  };
}

export default function OrderConfirmationPage() {
  const [orderDetails] = useState<OrderDetails>(() => {
    const initialOrder: OrderDetails = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      estimatedDelivery: "3-5 Business Days",
      items: [
        {
          name: "Premium Business Cards (500 pack)",
          quantity: 1,
          price: 45.99,
          image: "/sample1.jpg",
        },
        {
          name: "Roll-Up Banner Stand (2x3m)",
          quantity: 2,
          price: 89.99,
          image: "/sample7.jpg",
        },
      ],
      total: 225.97,
      shipping: {
        address: "123 Bole Road",
        city: "Addis Ababa",
        postalCode: "1000",
        country: "Ethiopia",
      },
      payment: {
        method: "Credit Card",
        status: "Paid",
      },
    };
    return initialOrder;
  });

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Thank you for your purchase. Your order has been received.
          </p>
          <p className="text-sm text-muted-foreground">
            Order ID: <span className="font-mono font-semibold">{orderDetails.id}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Status & Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Order Status</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Order Placed</p>
                    <p className="text-sm text-muted-foreground">{orderDetails.date}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Processing</p>
                    <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 opacity-50">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Shipped</p>
                    <p className="text-sm text-muted-foreground">
                      Estimated: {orderDetails.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Order Items</h2>
              <div className="space-y-4">
                {orderDetails.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 pb-4 border-b border-border last:border-0"
                  >
                    {/* Fixed image wrapper */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium text-foreground">${item.price} each</p>
                    </div>
                    <p className="font-semibold text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between font-semibold text-lg text-foreground">
                  <span>Total</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping & Payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Shipping Address</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-foreground">{orderDetails.shipping.address}</p>
                      <p className="text-muted-foreground">
                        {orderDetails.shipping.city}, {orderDetails.shipping.postalCode}
                      </p>
                      <p className="text-muted-foreground">{orderDetails.shipping.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Payment Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Method: {orderDetails.payment.method}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">Status: {orderDetails.payment.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Support */}
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a
                  href="tel:+251116686940"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+251 116 68 69 40</span>
                </a>
                <a
                  href="mailto:panapromotionplc@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">What&apos;s Next?</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• You&apos;ll receive an email confirmation shortly</p>
                <p>• We&apos;ll notify you when your order ships</p>
                <p>• Track your order status online</p>
                <p>• Estimated delivery: {orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                href="/account"
                className="w-full btn-pana py-3 inline-flex items-center justify-center"
              >
                View Order History
              </Link>
              <Link
                href="/catalog"
                className="w-full border border-border rounded-lg py-3 inline-flex items-center justify-center hover:bg-secondary transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
