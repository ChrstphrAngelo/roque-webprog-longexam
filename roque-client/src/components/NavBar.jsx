import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import Button from '../components/Button'; // Import the Button component

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-blue-800 bg-blue-800 text-white'
      : 'border-transparent text-zinc-500 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border-2 border-blue-800 bg-zinc-50 object-contain"
          />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-blue-900">BulldogEx Shop</p>
          </div>
        </NavLink>

        {/* Navigation Links + Auth Buttons */}
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Button to="/auth/signin" variant="secondary" className="!px-3 !py-1.5 text-[10px]">
              Sign In
            </Button>
            <Button to="/auth/signup" variant="primary" className="!px-3 !py-1.5 text-[10px]">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;