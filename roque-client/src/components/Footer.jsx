import { Link } from 'react-router-dom';
import nuLogo from '../assets/img/nubdexchange_logo.png';
import mailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';
import fbIcon from '../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <footer className="bg-[#35408E] text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        <div className="grid gap-10 md:grid-cols-3">
          
          <div className="flex items-start gap-4">
            <img src={nuLogo} alt="NU Logo" className="h-16 w-auto" />
            <div>
              <h2 className="text-lg font-semibold tracking-wide">
                BulldogEx Shop
              </h2>
              <p className="mt-1 text-sm text-zinc-200 max-w-xs">
                Campus essentials made easy. Fast, simple, and built for NU students.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-200">
              Explore
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-blue-300 transition">Home</Link>
              <Link to="/about" className="hover:text-blue-300 transition">About</Link>
              <Link to="/products" className="hover:text-blue-300 transition">Products</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-200">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-200">
              
              <div className="flex items-center gap-2">
                <img src={mailIcon} alt="Email" className="h-4 w-4" />
                <span>support@bulldogex.com</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="Phone" className="h-4 w-4" />
                <span>+63 912 345 6789</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={fbIcon} alt="Facebook" className="h-4 w-4" />
                <span>BulldogEx Shop</span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-zinc-300">
          © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;