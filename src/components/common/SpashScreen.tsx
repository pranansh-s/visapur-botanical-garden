'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const SplashScreen: React.FC = () => {
  const pathname = usePathname();

  if (pathname !== '/') return;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-[200] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="h-24 w-24 bg-black rounded-full"
      />
    </motion.div>
  );
};

export default SplashScreen;
