'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Button from '../common/Button';

import place from '../../../public/icons/white-place.svg';
import tree2 from '../../../public/tree-2.svg';

interface CarouselItem {
  imageSrc: string;
  title: string;
  description: string;
}

const WideCarousel: React.FC<{ items: CarouselItem[] }> = memo(({ items }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <>
      <CarouselContainer>
        <CarouselTrack
          style={{
            transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-screen overflow-hidden"
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent z-0" />
              <Tag>
                <Image
                  className="inline mr-2 mb-1"
                  width={20}
                  height={20}
                  src={place.src}
                  alt=""
                />
                GET GARDEN&apos;S DIRECTION
              </Tag>

              <Text>
                <TextTitle>{item.title}</TextTitle>
                <p>&quot;{item.description}&quot;</p>
              </Text>
            </motion.div>
          ))}
        </CarouselTrack>

        <ArrowButton className="left-16" onClick={prevSlide}>
          &lt;
        </ArrowButton>
        <ArrowButton className="right-16" onClick={nextSlide}>
          &gt;
        </ArrowButton>
      </CarouselContainer>
      <PlanVisit>
        <PlanText>
          We offer a serene escape into the world of flora and fauna. Discover
          rare plants, enjoy scenic walks, and immerse yourself in the beauty of
          nature.
        </PlanText>
        <Button
          className="px-12"
          onClick={() => router.push('/plan-your-visit')}
          variant="base"
        >
          Plan Your Visit
        </Button>
        <BackgroundImage
          src={tree2}
          alt="tree-2"
          className="w-[180px] md:w-[200px] lg:w-[270px] xl:-top-52 -top-32 xl:-left-lg lg:-left-md -left-sm"
        />
      </PlanVisit>
    </>
  );
});

WideCarousel.displayName = 'WideCarousel';
export default WideCarousel;

const PlanText = tw.p`
  font-serif text-lg w-2/3 text-tertiary-200
`;

const PlanVisit = tw.div`
  flex justify-between !mb-72 !mt-16 relative
`;

const CarouselContainer = tw.div`
  relative flex w-screen xl:-ml-lg lg:-ml-md -ml-sm overflow-hidden h-[500px]
`;

const ArrowButton = tw.button`
  absolute z-50 text-tertiary-100 text-4xl font-bold scale-y-[3] px-3 top-1/2 -translate-y-1/2
`;

const Tag = tw.span`
  bg-tertiary-200 text-white font-serif text-xl uppercase py-3 px-6 rounded-b-xl absolute top-0 z-[10] ml-12
`;

const Text = tw.div`
  absolute bottom-16 right-36 text-white font-serif w-[300px]
`;

const CarouselTrack = tw(motion.div)`
  flex transition-transform duration-500
`;

const TextTitle = tw.span`
  text-2xl font-sans font-bold
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
