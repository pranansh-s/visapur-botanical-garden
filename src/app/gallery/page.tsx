'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import Lightbox from 'react-18-image-lightbox';

import 'react-18-image-lightbox/style.css';

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shuffledImages = shuffleArray(galleryImages);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % shuffledImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex + shuffledImages.length - 1) % shuffledImages.length
    );
  };

  return (
    <Container>
      {shuffledImages.map((src: string, idx: number) => (
        <Image
          className="flex-1 h-[20rem] object-cover w-max cursor-pointer"
          key={idx}
          onClick={() => openLightbox(idx)}
          width={300}
          height={200}
          src={src}
          quality={100}
          alt={`Image ${idx}`}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={shuffledImages[currentIndex]}
          nextSrc={shuffledImages[(currentIndex + 1) % shuffledImages.length]}
          prevSrc={
            shuffledImages[
              (currentIndex + shuffledImages.length - 1) % shuffledImages.length
            ]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </Container>
  );
};

export default Gallery;

const Container = tw.div`
    xl:px-lg lg:px-md px-sm
    sm:mt-[12rem] mt-[7rem]
    flex flex-wrap gap-6 justify-center
`;
