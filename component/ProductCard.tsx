// components/ProductCard.tsx

'use client';

import React from 'react';
import { Product } from '@/data/products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition duration-200 cursor-pointer">
        <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-2">{product.description}</p>

          <div className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Brand:</span> {product.brand}
          </div>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Category:</span> {product.category}
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-indigo-600">Rs.{product.price}</span>
            <span
              className={`text-sm px-2 py-1 rounded-full ${
                product.stock > 0
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            ⭐ {product.rating?.toFixed(1)} / 5
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
