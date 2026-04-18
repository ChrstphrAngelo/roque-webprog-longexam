import { Link } from 'react-router-dom';
import nuLogo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  return (
    /*<div className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-zinc-50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-zinc-300">Campus essentials, simple ordering.</p>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
          Products | Cart | Pickup
        </p>
      </div>
    </div> */

    <footer className="border-y-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={nuLogo} alt="NU Logo" className="h-8 w-auto" />
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-50">
                BulldogEx Shop
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-zinc-50">
              Campus essentials, simple ordering.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Explore
            </h3>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-700">
                <Link to="/" className="hover:text-blue-900 hover:underline">Home</Link>
                <span className="text-zinc-400">|</span>
               <Link to="/about" className="hover:text-blue-900 hover:underline">About</Link>
                <span className="text-zinc-400">|</span>
              <Link to="/products" className="hover:text-blue-900 hover:underline">Products</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
