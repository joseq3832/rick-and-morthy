import { Logo } from '@/components';
import { BsArrowUpCircle, BsCode } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-rick-black-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 pt-16">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="text-white flex items-center gap-2 cursor-pointer">
            Volver al inicio
            <BsArrowUpCircle className="h-6 w-auto" />
          </div>
        </div>
        <div className="border-t border-white mt-8 py-5 flex items-center justify-between">
          <span className="text-white">copy 2023</span>
          <div className="flex items-center text-white">
            <BsCode className="text-rick-primary mr-2 h-6 w-auto" />
            Desarrollado por &nbsp;
            <Link to="/" className=" text-rick-primary">
              José Alarcón
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
