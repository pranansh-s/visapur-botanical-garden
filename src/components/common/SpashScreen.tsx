'use client';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { animationPreset } from '@/utils/anim';

const SplashScreen: React.FC = () => {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <motion.div
      initial={{ y: '-10vh', opacity: 1 }}
      animate={{ y: '100%', opacity: 0 }}
      transition={{ duration: 1.25, delay: 1.5, ease: animationPreset.ease }}
      style={{
        background:
          'linear-gradient(to top, white 0%, white 90%, transparent 100%)',
      }}
      className="fixed inset-0 flex items-center justify-center h-[120vh] w-screen z-[200] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="h-24 w-24 bg-black rounded-full"
      />
    </motion.div>
  );
};

export default SplashScreen;
