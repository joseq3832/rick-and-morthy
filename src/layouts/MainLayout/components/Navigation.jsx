import { Link, useLocation } from 'react-router-dom';
import { classNames } from '@/core/utils';
import { Logo } from '@/components';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';
import { CgMenuRightAlt } from 'react-icons/cg';

export const Navigation = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/';

  return (
    <header
      className={classNames(
        'w-screen py-16 px-4 sm:px-4 lg:px-6',
        isRoot ? 'bg-black' : 'bg-rick-black-200'
      )}>
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center justify-end gap-4 text-white">
            <span>
              <FaFacebookF className="h-6 w-auto" />
            </span>
            <span>
              <FaGithub className="h-6 w-auto" />
            </span>
            <span>
              <FaInstagram className="h-6 w-auto" />
            </span>
          </div>
          <span className="text-white">
            <CgMenuRightAlt className="h-6 w-auto" />
          </span>
        </div>
      </div>
    </header>
  );
};
