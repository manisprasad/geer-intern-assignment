import { notFound } from 'next/navigation';
import { products } from '@/data/products'; // adjust path as needed
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
   searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound(); // Next.js 13+ built-in 404 handler
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600 mt-2">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          {product.brand && (
            <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          )}
          <p className="text-sm text-gray-600">In Stock: {product.stock}</p>
          {product.tags && (
            <p className="text-sm text-gray-600 mt-2">
              Tags: {product.tags.join(', ')}
            </p>
          )}
          {product.rating && (
            <p className="text-sm text-yellow-600 mt-1">Rating: {product.rating} / 5</p>
          )}
          {product.discountPercent && (
            <p className="text-sm text-red-500 mt-1">Discount: {product.discountPercent}%</p>
          )}
        </div>
      </div>
    </div>
  );
}
