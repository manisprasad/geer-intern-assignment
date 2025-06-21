'use client';

import ProductCard from "@/component/ProductCard";
import { type Product } from "@/data/products";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  // Filter states
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<{
          limit: number;
          products: Product[];
          total: number;
          start: number;
        }>("/api/products");
        setData(response.data.products);
        setFilteredData(response.data.products);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          console.error("Unexpected error:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Apply filtering whenever search/category changes
  useEffect(() => {
    let filtered = data;

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredData(filtered);
  }, [search, category, data]);

  // Unique categories for dropdown
  const categories = Array.from(new Set(data.map((p) => p.category))).sort();

  return (
    <div className="p-6 space-y-4">
      {/* Filter controls */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-60"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Loading/Error */}
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}
