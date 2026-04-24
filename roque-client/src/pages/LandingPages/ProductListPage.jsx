import { useState, useMemo } from 'react';
import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map(p => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);


  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="transform transition-all duration-500 animate-in fade-in slide-in-from-right-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Products
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Shop campus essentials in a simple product grid
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
            Browse practical items for class, study, commute, and everyday campus routines.
          </p>

          <div className="mt-6">
            <Button to="/" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
              Back Home
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Product card grid</h2>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 border-t border-zinc-200 pt-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200 hover:scale-105 hover:shadow-md ${
                selectedCategory === cat
                  ? 'border-yellow-400 bg-yellow-400 text-blue-900'
                  : 'border-zinc-900 bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1 text-[10px] opacity-70">
                  ({products.filter(p => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mb-4 flex justify-between items-center">
          {selectedCategory !== 'All' && (
            <p className="text-sm text-zinc-500">
              Showing {filteredProducts.length} item(s) in <span className="font-semibold text-zinc-900">{selectedCategory}</span>
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-8 text-center">
            <p className="text-lg text-zinc-600">No products found in this category.</p>
            <Button onClick={() => setSelectedCategory('All')} className="mt-4">
              Show All Products
            </Button>
          </div>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </section>
    </div>
  );
};

export default ProductListPage;