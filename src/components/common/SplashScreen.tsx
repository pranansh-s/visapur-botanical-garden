'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

import { animationPreset } from '@/utils/anim';
import Loader from './Loader';

const SplashScreen: React.FC = () => {
  const pathname = usePathname();
  const [isLottieLoaded, setIsLottieLoaded] = useState<boolean>(false);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const observer = new MutationObserver(() => {
      if (canvas) {
        const { width, height } = canvas.getBoundingClientRect();

        if (width > 0 && height > 0) {
          setTimeout(() => setIsLottieLoaded(true), 100);
          observer.disconnect();
        }
      }
    });

    if (canvas) {
      observer.observe(canvas, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
  }, []);

  if (pathname !== '/') return null;

  return (
    <motion.div
      initial={{ y: '-10vh', opacity: 1 }}
      animate={{ y: '100%', opacity: 0 }}
      transition={{ duration: 1.25, delay: 3, ease: animationPreset.ease }}
      style={{
        background:
          'linear-gradient(to top, white 0%, white 90%, transparent 100%)',
      }}
      className="fixed inset-0 flex items-center justify-center h-[120vh] w-screen z-[200] pointer-events-none"
    >
      {!isLottieLoaded ? <Loader /> : null}
      <DotLottieReact
        src="/lottie/tiger.lottie"
        loop
        autoplay
        className="w-48 h-48"
      />
    </motion.div>
  );
};

export default SplashScreen;
