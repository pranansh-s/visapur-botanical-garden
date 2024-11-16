'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { motion, useInView, useScroll } from 'framer-motion';

import buggy from '../../../public/Buggy.svg';
import map from '../../../public/visit-path.svg';

const AnimatedBuggy = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pathLength, setPathLength] = useState(0);
  const [position, setPosition] = useState({ x: 0 });

  const isInView = useInView(containerRef, { margin: '0px 0px -500px 0px' });
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView || !pathRef.current) return;

      const lengthAtProgress = scrollYProgress.get() * pathLength;
      const { x } = pathRef.current.getPointAtLength(lengthAtProgress);

      setPosition({ x });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathLength, isInView, scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-hidden xl:-mx-lg lg:-mx-md -mx-sm"
    >
      <Image src={map} alt="Map background" className="w-full h-auto" />
      <svg className="absolute left-1/2 top-0 -translate-x-1/2">
        <path
          ref={pathRef}
          d="M1160.5 2.5C1055.16 25.3333 1109.5 74 1109.5 246.5C1109.5 419 922.499 467 860.996 486C799.493 505 283.999 534 237.499 929C203.999 1043.5 478.499 1252 352.999 1455C313.86 1518.31 226.997 1612 195.497 1945C163.997 2278 264.999 2383 352.999 2478C514.255 2652.08 850.976 2627.04 933.496 2858C1028 3122.5 1275 3049.5 1275 3231C1275 3458 1217.5 3555 1217.5 3662C1217.5 3815.31 1400.66 4081.62 1275 4167.5C876.999 4439.5 933.496 4581 933.496 4809.5C947.164 4958.67 868.499 5290 444.499 5422C20.499 5554 -20.501 5775 11.999 5869C21.9997 5980.83 168.903 6173.08 658.5 6238.5C1130 6301.5 1081.43 6835.21 987 6918.5C728.5 7146.5 480.744 7051.74 318 7259.5C200.5 7409.5 206.5 7677.5 226 7716.5"
          fill="none"
          stroke="transparent"
        />
      </svg>

      {isInView && (
        <motion.div
          className="fixed left-16 -mx-20 top-32"
          style={{
            translateX: position.x,
          }}
        >
          <Image
            src={buggy}
            className="lg:scale-100 md:scale-[0.8] scale-[0.6]"
            alt="Moving buggy"
          />
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedBuggy;
