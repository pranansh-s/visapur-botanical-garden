import { NextPage } from 'next';
import Image from 'next/image';

import { galleryImages } from '@/constants';
import tw from 'tailwind-styled-components';

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery: NextPage = () => {
  return (
    <Container>
      {shuffleArray(galleryImages).map((src: string, idx: number) => (
        <Image
          className="rounded-md flex-1 h-[20rem] object-cover w-max"
          key={idx}
          width={300}
          height={200}
          src={src}
          alt=""
        />
      ))}
    </Container>
  );
};

export default Gallery;

const Container = tw.div`
    xl:px-lg lg:px-md px-sm
    sm:mt-[12rem] mt-[7rem]
    flex flex-wrap gap-6 justify-center
`;
