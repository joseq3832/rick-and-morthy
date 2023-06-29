import { Logo } from '@/components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';
import { CgMenuRightAlt } from 'react-icons/cg';

export const Navigation = () => {
  return (
    <header className="w-screen py-4 px-6 sm:px-4 md:px-2">
      <div className="mx-auto container flex items-center justify-center relative">
        <span className="block h-44 w-44 rounded-full absolute left-20 -top-1/2 -translate-y-1/2 bg-[#F53A1C]"></span>
        <Link to="/">
          <Logo />
        </Link>
        <div className="absolute right-0">
          <div className="flex items-center justify-end gap-4">
            <span>
              <FaFacebookF className="h-6 w-auto" />
            </span>
            <span>
              <FaGithub className="h-6 w-auto" />
            </span>
            <span>
              <FaInstagram className="h-6 w-auto" />
            </span>
            <div>
              <span>
                <CgMenuRightAlt className="h-6 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
