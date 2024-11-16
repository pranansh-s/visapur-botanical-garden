import React, { useState } from 'react';

import { motion, MotionConfig } from 'framer-motion';

const BurgerMenu: React.FC<{ active: boolean; setActive: any }> = ({
  active,
  setActive,
}) => {
  return (
    <div className="grid place-content-center absolute right-0 sm:hidden">
      <MotionConfig
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          initial={false}
          animate={active ? 'open' : 'closed'}
          onClick={() => setActive((pv: boolean) => !pv)}
          className="relative h-16 w-16 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-1 w-10 bg-tertiary-200"
            style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-1 w-10 bg-tertiary-200"
            style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-1 w-10 bg-tertiary-200"
            style={{
              x: '-50%',
              y: '50%',
              bottom: '35%',
            }}
          />
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default BurgerMenu;

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
    },
  },
};
