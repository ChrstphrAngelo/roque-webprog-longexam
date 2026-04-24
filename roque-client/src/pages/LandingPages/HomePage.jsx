import { useMemo } from 'react';
import tshirt1 from '../../assets/img/nu_tshirt1.png';
import cap1 from '../../assets/img/nu_cap1.png';
import sticker1 from '../../assets/img/nu_sticker1.png';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

const HomePage = () => {
    const stats = useMemo(() => {
        const productCount = products.length;
        const uniqueCategories = new Set(products.map(p => p.category));
        const categoryCount = uniqueCategories.size;
        return { productCount, categoryCount };
    }, []);

    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt="BulldogEx Campus Store Banner"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-zinc-900/40 to-zinc-900/70" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl transform transition-all duration-500 animate-in fade-in slide-in-from-right-4">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-300">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-zinc-50 drop-shadow-md sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 drop-shadow sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products" className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary" className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                About Store
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
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
                            {stats.productCount}
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Products
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
                            24
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Orders
                        </p>
                    </div>
                    <div className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-3xl font-bold text-zinc-900 transition-all duration-300 group-hover:scale-105">
                            03
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Pickup Slots
                        </p>
                    </div>
                </div>A
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Products Overview</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={tshirt1} 
                                alt="NU Apparel showcase - T-shirts and hoodies" 
                                className="w-full object-contain object-center transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            T‑Shirts, Hoodies, Jackets, Sweatshirts
                        </p>
                        <Button to="/products" className="mt-4 w-full justify-center transition-all duration-200 hover:shadow-md" variant="primary">View Products</Button>
                    </article>

                    <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={cap1} 
                                alt="NU Accessories showcase - caps and lanyards" 
                                className="w-full object-contain object-center transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Headwear & Accessories</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Caps, Keychains, Lanyards
                        </p>
                        <Button to="/products" className="mt-4 w-full justify-center transition-all duration-200 hover:shadow-md" variant="primary">View Products</Button>
                    </article>

                    <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src={sticker1} 
                                alt="NU Collectibles showcase - stickers and scarves" 
                                className="w-full object-contain object-center transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Collectibles & More</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Scarves, Stickers
                        </p>
                        <Button to="/products" className="mt-4 w-full justify-center transition-all duration-200 hover:shadow-md" variant="primary">View Products</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;