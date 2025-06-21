import { NextRequest, NextResponse } from 'next/server';
import { products, Product } from '@/data/products'; // adjust import path accordingly




export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const limitParam = searchParams.get('limit');
  const startParam = searchParams.get('start');
  const inStockParam = searchParams.get('instock');
  const sortBy = searchParams.get('sortby');
  const isFeaturedParam = searchParams.get('isfeature');
  const bestSellingParam = searchParams.get('bestselling');

  // Parse params with defaults
  const limit = limitParam ? parseInt(limitParam, 10) : 20; // default 10 items
  const start = startParam ? parseInt(startParam, 10) : 0;  // default start at 0

  // Defensive check for invalid input
  if (isNaN(limit) || limit < 1) {
    return NextResponse.json({ error: 'Invalid limit parameter' }, { status: 400 });
  }
  if (isNaN(start) || start < 0) {
    return NextResponse.json({ error: 'Invalid start parameter' }, { status: 400 });
  }

  let filteredProducts: Product[] = [...products];

  // Filtering: in stock
  if (inStockParam !== null && inStockParam.toLowerCase() === 'true') {
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  }

  // Filtering: is featured
  if (isFeaturedParam !== null && isFeaturedParam.toLowerCase() === 'true') {
    filteredProducts = filteredProducts.filter(product => product.isFeatured === true);
  }

  // Filtering: best selling
//   if (bestSellingParam !== null && bestSellingParam.toLowerCase() === 'true') {
//     filteredProducts = filteredProducts.filter(product => product.bestSelling === true);
//   }

  // Sorting
  if (sortBy) {
    const [field, order] = sortBy.split('-'); 
    const asc = order === 'asc';

    if (field === 'price') {
      filteredProducts.sort((a, b) => asc ? a.price - b.price : b.price - a.price);
    } else if (field === 'rating') {
      filteredProducts.sort((a, b) => asc ? (a.rating ?? 0) - (b.rating ?? 0) : (b.rating ?? 0) - (a.rating ?? 0));
    } else if (field === 'name') {
      filteredProducts.sort((a, b) =>
        asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
    }
  }

  const total = filteredProducts.length;

  // Pagination: slice products from start to start+limit
  const paginatedProducts = filteredProducts.slice(start, start + limit);

  return NextResponse.json({
    total,
    start,
    limit,
    products: paginatedProducts,
  });
}
export async function POST(request: NextRequest) {
  const body = await request.json();

  const newProduct: Product = {
    id: uuidv4(),
    name: body.name,
    price: body.price,
    imageUrl: body.imageUrl,
    category: body.category,
    stock: body.stock,
    description: body.description ?? '',
    brand: body.brand ?? '',
    rating: body.rating ?? 0,
    isFeatured: body.isFeatured ?? false,
    tags: body.tags ?? [],
    releaseDate: body.releaseDate ?? new Date().toISOString(),
    discountPercent: body.discountPercent ?? 0,
  };

  products.push(newProduct);

  return NextResponse.json({ message: 'Product created', product: newProduct }, { status: 201 });
}

// PUT - Replace a product (full update)
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const id = body.id;

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const updatedProduct: Product = {
    ...body,
    id, // ensure ID doesn't change
  };

  products[index] = updatedProduct;

  return NextResponse.json({ message: 'Product replaced', product: updatedProduct });
}

// DELETE - Delete a product by id from query
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
  }

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  products.splice(index, 1);

  return NextResponse.json({ message: 'Product deleted successfully' });
}

// PATCH - Partial update
export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const id = body.id;

  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  Object.assign(product, body); // merge updates

  return NextResponse.json({ message: 'Product updated', product });
}