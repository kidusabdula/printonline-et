// // app/catalog/page.tsx
// "use client";

// import { useState } from "react";
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Input } from '@/components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Search, Filter, Grid, List } from 'lucide-react'
// import { useProductsQuery, useCategoriesQuery } from '@/hooks/data/useProductsQuery'
// import { Skeleton } from '@/components/ui/skeleton'
// import Link from 'next/link'
// import { motion } from 'framer-motion'

// export default function CatalogPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("")
//   const [selectedSubcategory, setSelectedSubcategory] = useState("")
//   const [sortBy, setSortBy] = useState("name")
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

//   const { data: productsData, isLoading } = useProductsQuery({
//     category: selectedCategory,
//     subcategory: selectedSubcategory,
//     search: searchTerm,
//     sortBy,
//     sortOrder
//   })
  
//   const { data: categoriesData } = useCategoriesQuery()

//   const products = productsData?.products || []
//   const categories = categoriesData?.categories || []

//   // Get subcategories for selected category
//   const selectedCategoryData = categories.find(cat => cat.name === selectedCategory)
//   const subcategories = selectedCategoryData?.subcategories || []

//   const handleResetFilters = () => {
//     setSearchTerm("")
//     setSelectedCategory("")
//     setSelectedSubcategory("")
//     setSortBy("name")
//     setSortOrder("asc")
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col space-y-6">
//         {/* Header */}
//         <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
//           <h1 className="text-3xl font-bold">Product Catalog</h1>
//           <div className="flex items-center space-x-2">
//             <Button
//               variant={viewMode === "grid" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setViewMode("grid")}
//             >
//               <Grid className="h-4 w-4" />
//             </Button>
//             <Button
//               variant={viewMode === "list" ? "default" : "outline"}
//               size="sm"
//               onClick={() => setViewMode("list")}
//             >
//               <List className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         {/* Filters */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center">
//               <Filter className="mr-2 h-5 w-5" />
//               Filters
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//               <div className="space-y-2">
//                 <label htmlFor="search" className="text-sm font-medium">
//                   Search
//                 </label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     id="search"
//                     placeholder="Search products..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label htmlFor="category" className="text-sm font-medium">
//                   Category
//                 </label>
//                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                   <SelectTrigger id="category">
//                     <SelectValue placeholder="All categories" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="">All categories</SelectItem>
//                     {categories.map((category) => (
//                       <SelectItem key={category.id} value={category.name}>
//                         {category.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <label htmlFor="subcategory" className="text-sm font-medium">
//                 Subcategory
//               </label>
//               <Select 
//                 value={selectedSubcategory} 
//                 onValueChange={setSelectedSubcategory}
//                 disabled={!selectedCategory}
//               >
//                 <SelectTrigger id="subcategory">
//                   <SelectValue placeholder="All subcategories" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="">All subcategories</SelectItem>
//                   {subcategories.map((subcategory) => (
//                     <SelectItem key={subcategory.id} value={subcategory.name}>
//                       {subcategory.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <div className="space-y-2">
//               <label htmlFor="sort" className="text-sm font-medium">
//                 Sort By
//               </label>
//               <div className="flex space-x-2">
//                 <Select value={sortBy} onValueChange={setSortBy}>
//                   <SelectTrigger id="sort" className="flex-1">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="name">Name</SelectItem>
//                     <SelectItem value="price">Price</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Select value={sortOrder} onValueChange={(value: "asc" | "desc") => setSortOrder(value)}>
//                   <SelectTrigger className="w-20">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="asc">A-Z</SelectItem>
//                     <SelectItem value="desc">Z-A</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
            
//             <div className="flex items-end">
//               <Button variant="outline" onClick={handleResetFilters}>
//                 Reset
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Products */}
//         {isLoading ? (
//           <div className={viewMode === "grid" 
//             ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
//             : "space-y-4"
//           }>
//             {[...Array(6)].map((_, index) => (
//               <Card key={index} className="h-full">
//                 <CardHeader className="p-0">
//                   <Skeleton className="h-40 w-full" />
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <Skeleton className="h-4 w-full mb-2" />
//                   <Skeleton className="h-4 w-3/4 mb-2" />
//                   <Skeleton className="h-8 w-1/2" />
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         ) : products.length === 0 ? (
//           <Card className="py-12 text-center">
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">No products found</h3>
//               <p className="text-muted-foreground mb-4">
//                 Try adjusting your filters or search terms
//               </p>
//               <Button onClick={handleResetFilters}>
//                 Reset Filters
//               </Button>
//             </CardContent>
//           </Card>
//         ) : (
//           <motion.div 
//             className={viewMode === "grid" 
//               ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
//               : "space-y-4"
//             }
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 {viewMode === "grid" ? (
//                   <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
//                     <CardHeader className="p-0">
//                       <div className="h-40 bg-muted relative overflow-hidden">
//                         <img 
//                           src={product.image} 
//                           alt={product.name}
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-4">
//                       <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
//                       <CardDescription className="text-sm mb-4 line-clamp-2">
//                         {product.description}
//                       </CardDescription>
//                       <div className="flex items-center justify-between">
//                         <p className="text-xl font-semibold text-foreground">
//                           ETB {product.price.toFixed(2)}
//                         </p>
//                         <Button size="sm" asChild>
//                           <Link href={`/product/${product.id}`}>
//                             View Details
//                           </Link>
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
//                     <CardContent className="p-0">
//                       <div className="flex flex-col md:flex-row">
//                         <div className="h-40 md:h-auto md:w-40 bg-muted relative overflow-hidden">
//                           <img 
//                             src={product.image} 
//                             alt={product.name}
//                             className="h-full w-full object-cover"
//                           />
//                         </div>
//                         <div className="p-4 flex-1">
//                           <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
//                           <CardDescription className="text-sm mb-4">
//                             {product.description}
//                           </CardDescription>
//                           <div className="flex items-center justify-between">
//                             <p className="text-xl font-semibold text-foreground">
//                               ETB {product.price.toFixed(2)}
//                             </p>
//                             <Button size="sm" asChild>
//                               <Link href={`/product/${product.id}`}>
//                                 View Details
//                               </Link>
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }