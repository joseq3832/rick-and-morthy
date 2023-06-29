import React from 'react';
import * as LogoSVG from '@/assets/Rick_and_Morty.svg';

export const Logo = () => {
  return <img className="h-20 w-auto" src={LogoSVG.default} alt="Logo" />;
};
