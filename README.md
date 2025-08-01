
# Next.js Product Catalog for geer.in

A full-featured Next.js application showcasing a product catalog with filtering, detailed product pages, and RESTful API routes for managing products.

---

## Features

* Server-side API endpoints for products (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`)
* Client-side fetching with Axios
* Product filtering by name, category, stock status, featured, and sorting by price, rating, name
* Pagination support
* Dynamic product detail page (`/products/[id]`)
* Responsive product card component
* Image optimization using Next.js `<Image />` component
* Configured to allow external image domains (`images.unsplash.com`)
* Error handling and loading states

---

## Getting Started

### Prerequisites

* Node.js v18 or above
* npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manisprasad/geer-intern-assignment.git
   cd geer-intern-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure external image domains in `next.config.js` (already done):

   ```js
   module.exports = {
     images: {
       domains: ['images.unsplash.com'],
     },
   };
   ```

4. Start development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser at `http://localhost:3000`

---

## Project Structure

```
/app
  /api
    /products
      route.ts           # API routes: GET, POST, PUT, DELETE, PATCH
  /products
    [id]
      page.tsx           # Single product detail page
/components
  ProductCard.tsx        # Product card UI component
/data
  products.ts            # Sample products data and types
/pages
  index.tsx              # Product listing page with filters and pagination
/public
  ...                    # Static assets
next.config.js           # Next.js config for image domains
README.md
package.json
```

---

## API Endpoints

### `GET /api/products`

Query parameters:

* `limit` (number): Number of products to fetch (default: 10)
* `start` (number): Pagination start index (default: 0)
* `instock` (boolean): Filter to only in-stock products
* `isfeature` (boolean): Filter featured products
* `bestselling` (boolean): Filter best selling products (if implemented)
* `sortby` (string): Sort by `price-asc`, `price-desc`, `rating-asc`, `rating-desc`, `name-asc`, `name-desc`

Returns paginated, filtered product list and total count.

### `POST /api/products`

Add a new product.

Request body: JSON of product data.

### `PUT /api/products`

Update an existing product.

Request body: JSON with product id and updated fields.

### `DELETE /api/products`

Delete a product by id.

Request body: JSON with product id.

### `PATCH /api/products`

Partial update of product fields.

Request body: JSON with product id and fields to update.

---

## Usage

* Visit the homepage to see paginated products.
* Use the search box and filters to refine the list.
* Click on any product card to view detailed info on `/product/[id]`.
* API endpoints can be tested via tools like Postman or frontend calls.

---

## Customization

* Update `/data/products.ts` to add your product data.
* Adjust filtering/sorting logic in `/app/api/products/route.ts`.
* Style components via TailwindCSS (or your preferred CSS framework).
* Extend API routes with authentication, database integration, etc.

---

## Troubleshooting

### Invalid `src` prop in `<Image />`

If you see:

```
Error: Invalid src prop ... hostname "images.unsplash.com" is not configured under images in your next.config.js
```

Make sure your `next.config.js` includes:

```js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
};
```

Then restart your development server.

---

## Dependencies

* Next.js
* React
* Axios
* TailwindCSS (optional, for styling)

---