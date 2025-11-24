// app/account/page.tsx
"use client";

import { useState } from 'react';
import { User, Package, CreditCard, MapPin, LogOut, Eye } from 'lucide-react';
import Link from 'next/link';

interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  total: number;
  items: number;
}

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'payment'>('orders');
  
  // Mock order data
  const orders: Order[] = [
    {
      id: 'ORD-123456',
      date: '2024-01-15',
      status: 'Delivered',
      total: 225.97,
      items: 2
    },
    {
      id: 'ORD-123455',
      date: '2024-01-10',
      status: 'Shipped',
      total: 149.99,
      items: 1
    },
    {
      id: 'ORD-123454',
      date: '2024-01-05',
      status: 'Processing',
      total: 89.99,
      items: 3
    }
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-100';
      case 'Shipped': return 'text-blue-600 bg-blue-100';
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'orders' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Order History</span>
            </button>
            
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'profile' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
            
            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'addresses' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span>Addresses</span>
            </button>
            
            <button
              onClick={() => setActiveTab('payment')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'payment' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <CreditCard className="h-5 w-5" />
              <span>Payment Methods</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary text-red-600 transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Order History */}
          {activeTab === 'orders' && (
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Order History</h2>
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <p className="font-medium text-foreground">{order.id}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {order.date} • {order.items} items • ${order.total}
                        </p>
                      </div>
                      
                      <Link 
                        href={`/order-confirmation?id=${order.id}`}
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">View</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === 'profile' && (
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Profile Information</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+251 911 00 52 55"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <button className="btn-pana py-3">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Addresses */}
          {activeTab === 'addresses' && (
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Shipping Addresses</h2>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">Home Address</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    123 Bole Road<br />
                    Addis Ababa, Ethiopia 1000
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <button className="text-sm text-primary hover:text-primary/80">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-800">Remove</button>
                  </div>
                </div>
                
                <button className="w-full border-2 border-dashed border-border rounded-lg p-4 hover:border-primary transition-colors">
                  + Add New Address
                </button>
              </div>
            </div>
          )}

          {/* Payment Methods */}
          {activeTab === 'payment' && (
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Payment Methods</h2>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  <div className="flex space-x-2 mt-3">
                    <button className="text-sm text-primary hover:text-primary/80">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-800">Remove</button>
                  </div>
                </div>
                
                <button className="w-full border-2 border-dashed border-border rounded-lg p-4 hover:border-primary transition-colors">
                  + Add Payment Method
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}