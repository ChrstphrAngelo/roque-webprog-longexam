import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.name !== product.name)
      .slice(0, 4);
  }, [product]);

  const increaseQty = () => {
    if (product && quantity < 10) setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product?.title} to cart`);
  };

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  const isInStock = product.stock === 'In Stock';

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products" className="transition-all duration-200 hover:scale-105">← Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-2xl font-bold text-zinc-900">{product.price}</span>
            <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
              isInStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {product.stock}
            </span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 bg-white p-2 h-[350px]">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full rounded-[1.25rem] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <div className="flex flex-wrap items-center gap-4">
              {isInStock && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-700">Qty:</span>
                  <div className="flex items-center border-2 border-zinc-900 rounded-full">
                    <button
                      onClick={decreaseQty}
                      className="px-3 py-1 text-lg font-bold hover:bg-zinc-200 transition rounded-l-full"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                    <button
                      onClick={increaseQty}
                      className="px-3 py-1 text-lg font-bold hover:bg-zinc-200 transition rounded-r-full"
                      disabled={quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                  <Button
                    variant="primary"
                    onClick={handleAddToCart}
                    className="transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    Add to Cart
                  </Button>
                </div>
              )}
              {!isInStock && (
                <Button
                  variant="secondary"
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  Out of Stock
                </Button>
              )}
              <Button to="/products" className="transition-all duration-200 hover:scale-105">
                Browse More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;