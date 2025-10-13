import React from 'react';
import LiquidGlassCard from './LiquidGlass.jsx';

const NavbarGlassWrapper = ({ children, glassBgClass }) => {
  return (
    <LiquidGlassCard
      glassBgClass={glassBgClass}
      enable3DEffect={false}
      clipContent={false}
      className="h-full w-full rounded-lg"
    >
      {children}
    </LiquidGlassCard>
  );
};

export default NavbarGlassWrapper;