import React from 'react';
import * as LogoSVG from '@/assets/logo.svg';

export const Logo = () => {
  return <img className="h-16 w-auto" src={LogoSVG.default} alt="Logo" />;
};
