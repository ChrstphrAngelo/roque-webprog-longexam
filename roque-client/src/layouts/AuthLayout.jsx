import { Outlet } from 'react-router-dom';
import authCoverImg from '../assets/img/authcover_image.png';
import nuLogo from '../assets/img/nubdexchange_logo.png'

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="hidden lg:flex items-center justify-center border-b-2 border-zinc-300 bg-white p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16">
          <img
            src={nuLogo}
            alt="Auth visual"
            className="absolute h-24 w-24 top-5 left-5"
          />
          <img
            src={authCoverImg}
            alt="Auth visual"
            className="max-h-[80%] max-w-[80%] object-contain"
          />
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
