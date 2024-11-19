import React, { memo, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import buggy from '../../../public/Buggy.svg';
import map from '../../../public/visit-path.svg';

import '@gsap/react';

import Image from 'next/image';

import { IVisitLocation } from '@/types';
import { useScroll, useTransform } from 'framer-motion';

import { VisitLocations } from '@/constants/visit';
import Location from './Location';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const imagePoints = [0.032, 0.11, 0.22, 0.3, 0.37, 0.45, 0.57, 0.7, 0.8, 0.92];
const stopPoints = [0.23, 0.28, 0.37, 0.42, 0.48, 0.55, 0.64, 0.74, 0.82, 0.9];
const buggyPoints = [
  0.102, 0.228, 0.3, 0.36, 0.438, 0.515, 0.618, 0.742, 0.87, 1.0,
];

const AnimatedBuggy: React.FC = memo(() => {
  const imageRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const buggyPathProgress = useTransform(
    scrollYProgress,
    stopPoints,
    buggyPoints
  );

  useEffect(() => {
    const path = pathRef.current;
    const image = imageRef.current;
    const container = containerRef.current;

    ScrollTrigger.create({
      scroller: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      snap: {
        snapTo: stopPoints,
        duration: 0.7,
      },
    });

    if (path && image) {
      const updateAnimation = (yProgress: number) => {
        gsap.set(image, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: yProgress,
          },
        });
      };

      const unsubscribe = buggyPathProgress.on('change', updateAnimation);
      return () => unsubscribe();
    }
  }, [buggyPathProgress]);

  return (
    <div className="relative">
      <Image
        src={map}
        alt=""
        className="sm:scale-y-100 scale-y-[0.986] origin-top"
      />
      <svg
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full absolute top-0"
        viewBox="0 0 1315 8253"
      >
        <path
          ref={pathRef}
          d="M222.195 7714C243.695 7839 268.231 8016.77 505.195 8069.5C1037.7 8188 1270.7 8144.5 1255.2 8253M1157.2 0C1051.86 22.833 1106.2 71.5 1106.2 244C1106.2 416.5 919.194 464.5 857.691 483.5C796.188 502.5 280.694 531.5 234.194 926.5C200.694 1041 475.194 1249.5 349.694 1452.5C310.555 1515.81 223.692 1609.5 192.192 1942.5C160.692 2275.5 261.694 2380.5 349.694 2475.5C510.95 2649.58 847.671 2624.54 930.191 2855.5C1024.7 3120 1271.7 3047 1271.7 3228.5C1271.7 3455.5 1214.2 3552.5 1214.2 3659.5C1214.2 3812.81 1397.36 4079.12 1271.7 4165C873.694 4437 930.191 4578.5 930.191 4807C943.859 4956.17 865.194 5287.5 441.194 5419.5C17.1943 5551.5 -23.8057 5772.5 8.69427 5866.5C18.6953 5978.33 165.598 6170.58 655.195 6236C1126.7 6299 1078.13 6832.71 983.695 6916C725.195 7144 477.439 7049.24 314.695 7257C197.195 7407 203.195 7675 222.695 7714"
          fill="transparent"
          stroke="transparent"
        />
      </svg>
      <Image
        width={100}
        height={100}
        ref={imageRef}
        src={buggy}
        alt="Moving along path"
        className="absolute xl:scale-[1.25] lg:scale-[1] scale-[0.85] z-10"
      />
      <ul className="absolute top-0 h-full w-full">
        {VisitLocations.map((location: IVisitLocation, idx: number) => (
          <Location
            className="absolute -translate-y-1/2 origin-center"
            style={{
              top: `${imagePoints[idx] * 100}%`,
              left: `${location.left}%`,
            }}
            key={idx}
            {...location}
          />
        ))}
      </ul>
    </div>
  );
});

AnimatedBuggy.displayName = 'AnimatedBuggy';
export default AnimatedBuggy;
