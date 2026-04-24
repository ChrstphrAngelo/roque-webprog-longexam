import { useMemo } from 'react';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import products from '../../assets/product-content.js';

import tshirt from '../../assets/img/nu_tshirt1.png';
import lanyard from '../../assets/img/nu_lanyard1.png';
import hoodie from '../../assets/img/nu_hoodie1.png';
import cap from '../../assets/img/nu_cap1.png';

const AboutPage = () => {
  const stats = useMemo(() => {
    const productCount = products.length;
    const uniqueCategories = new Set(products.map(p => p.category));
    const categoryCount = uniqueCategories.size;
    const orderCount = 24;
    const pickupSlots = 3;
    return { productCount, categoryCount, orderCount, pickupSlots };
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6 transition-all duration-300 hover:border-zinc-500 hover:shadow-md">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-zinc-200 to-zinc-300">
              <img
                src={logo}
                alt="BulldogEx"
                className="h-32 w-32 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="transform transition-all duration-500 animate-in fade-in slide-in-from-right-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                Back Home
              </Button>
              <Button to="/products" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                Open Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
              {stats.productCount}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
              {stats.categoryCount}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
              {stats.pickupSlots}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
              {stats.orderCount}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="transform transition-all duration-500 animate-in fade-in slide-in-from-left-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-700 transition">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-700 transition">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-700 transition">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={tshirt}
                  alt="NU T-shirt"
                  className="w-full object-contain object-center"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={hoodie}
                  alt="NU Hoodie"
                  className="w-full object-contain object-center"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={lanyard}
                  alt="NU Lanyard"
                  className="w-full object-contain object-center"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={cap}
                  alt="NU Cap"
                  className="w-full object-contain object-center"
                />
              </div>
            </div>
            <Button to="/products" className="mt-5 w-full justify-center transition-all duration-200 hover:scale-105 hover:shadow-md">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;