'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IWideCarouselItem } from '@/types';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import tw from 'tailwind-styled-components';

import place from '../../../public/icons/white-place.svg';
import tree2 from '../../../public/tree-2.svg';

import Button from '../common/Button';
import BuyTicket from '../common/BuyTicket';
import { NextArrow, PrevArrow } from './Arrows';

const WideCarousel: React.FC<{ items: IWideCarouselItem[] }> = memo(
  ({ items }) => {
    const { t } = useTranslation();
    const router = useRouter();

    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const renderCarouselItem = useCallback(
      (item: IWideCarouselItem, index: number) => {
        return (
          <CarouselItem key={index}>
            <Image
              src={item.imageSrc}
              className="object-cover min-w-[300px] object-top"
              fill
              alt={item.title}
            />
            <div className="absolute inset-0 md:bg-gradient-to-l bg-gradient-to-r from-black/40 to-transparent z-0" />
            {item.date ? (
              <TextContainer>
                <Body>
                  <span className="font-sans text-4xl md:text-6xl font-bold">
                    {t(item.title)}
                  </span>
                  <span className="font-bold text-lg md:text-2xl">
                    {t(item.date)}
                  </span>
                  <p className="text-sm md:text-base">
                    <span className="font-bold block text-base md:text-lg">
                      {t('carousel.joinUs')} {t(item.title)}
                    </span>
                    {t(item.description)}
                  </p>
                </Body>
                <BuyTicket className="md:scale-100 scale-75 h-max mx-auto md:flex hidden" />
              </TextContainer>
            ) : (
              <Text>
                <TextTitle>{t(item.title)}</TextTitle>
                <p>&quot;{t(item.description)}&quot;</p>
              </Text>
            )}
          </CarouselItem>
        );
      },
      [t]
    );

    return (
      <>
        <CarouselContainer>
          <Slider {...settings}>
            {items.map((item, index) => renderCarouselItem(item, index))}
          </Slider>
          <Tag
            onClick={() =>
              window.open('https://maps.app.goo.gl/7QCo8wcPfDzdnRBT9', '_blank')
            }
          >
            <Image
              className="mr-2 mb-1 sm:w-6 w-5"
              width={20}
              height={20}
              src={place.src}
              alt=""
            />
            GET {!items[0].date ? "GARDEN'S" : "VENUE'S"} DIRECTION
          </Tag>
        </CarouselContainer>
        {!items[0].date && (
          <PlanVisit>
            <PlanText>{t('planVisit.body')}</PlanText>
            <Button
              aria-label="plan-your-visit"
              className="sm:px-12 md:px-7 md:py-5 px-5 py-4 md:text-base text-sm h-max shadow-md"
              onClick={() => router.push('/plan-your-visit')}
              variant="light"
            >
              <DotLottieReact
                src="/lottie/butterfly.lottie"
                loop
                autoplay
                className="absolute h-12 lg:h-20 translate-x-[85%] lg:translate-x-[45%] -translate-y-5"
              />
              {t('planVisit.name')}
            </Button>
            <BackgroundImage
              src={tree2}
              alt="tree-2"
              className="w-[180px] md:w-[200px] lg:w-[270px] xl:-top-52 -top-32 !mx-0 xl:-left-lg lg:-left-md -left-sm sm:block hidden"
            />
          </PlanVisit>
        )}
      </>
    );
  }
);

WideCarousel.displayName = 'WideCarousel';
export default WideCarousel;

const PlanText = tw.p`
  font-serif md:text-lg sm:text-base text-sm flex-1 max-w-[700px] text-tertiary-200
`;

const PlanVisit = tw.div`
  flex sm:flex-row flex-col items-center justify-between sm:!mt-16 !mt-8 relative sm:gap-8 gap-5
`;

const CarouselContainer = tw.div`
  relative w-screen max-w-[1536px] sm:!mt-0 xl:-ml-lg lg:-ml-md -ml-sm
`;

const Tag = tw.span`
  bg-tertiary-200 cursor-pointer text-white flex items-center font-serif font-bold tracking-[0.1rem] md:text-xl md:text-lg sm:text-base text-sm uppercase md:py-3 sm:py-2 py-1 md:px-7 sm:px-5 px-3 rounded-b-xl absolute top-0 z-[10] sm:ml-[3%] ml-[1.5%]
`;

const Text = tw.div`
  absolute sm:bottom-16 bottom-8 md:right-36 md:left-auto sm:left-12 left-8 text-white font-serif sm:w-[300px] w-[270px]
`;

const TextContainer = tw.div`
  absolute sm:bottom-24 bottom-8 px-6 md:px-12 w-full flex items-center
`;

const Body = tw.div`
  flex flex-col md:w-[75%] w-full font-serif text-white space-y-3 lg:ml-24 sm:ml-8 ml-0
`;

const TextTitle = tw.span`
  text-2xl font-sans font-bold
`;

const CarouselItem = tw.div`
  w-full relative md:h-[600px] sm:h-[500px] h-[400px]
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
