'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { IImageCard } from '@/types';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import manikgarh from '../../../public/fort/manikgarh.webp';
import tree1 from '../../../public/tree-2.svg';

import Carousel from '@/components/Carousel';
import Button from '@/components/common/Button';

import { historicalPhoto } from '@/constants/bio';
import { glimpsesItems, zoneItems } from '@/constants/carousels';

const Bio: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Intro>
        <AboutImage src={manikgarh} alt="" />
        <Content>
          <Sub>{t('quickLinks.aboutUs')}</Sub>
          <StyledHeading className="md:mr-auto">
            {t('fort.intro')}
          </StyledHeading>
          <p className="font-serif text-lg md:text-base md:leading-8 leading-9">
            {t('fort.content.part1')}
            <br />
            <br />
            {t('fort.content.part2')}
            <br />
            {t('fort.content.part3')}
          </p>
        </Content>
      </Intro>
      <PastHistory>
        <Image
          className="-rotate-[163deg] absolute -right-10 md:block hidden"
          width={250}
          src={tree1}
          alt=""
        />
        <Image
          className="-rotate-[12deg] absolute -left-10 md:block hidden"
          width={250}
          src={tree1}
          alt=""
        />
        <Sub className="text-white opacity-80 text-lg md:text-base">
          {t('fort.past.sub')}
        </Sub>
        <StyledHeading className="text-white/90 text-3xl !mb-5">
          {t('fort.past.name')}
        </StyledHeading>
        <p className="max-w-[60rem] px-2 text-lg md:text-base md:leading-8 leading-9 text-white/80 font-serif">
          {t('fort.past.content')}
        </p>
        <Link href="/about" passHref>
          <ReadMore>{t('readMore')} &gt;</ReadMore>
        </Link>
      </PastHistory>
      <SectionContainer>
        <Sub>{t('fort.historical.sub')}</Sub>
        <StyledHeading>{t('fort.historical.name')}</StyledHeading>
        <PhotoGrid>
          {historicalPhoto.map((photo: IImageCard, idx: number) => (
            <Card key={idx}>
              <Image
                width={500}
                height={500}
                className="h-[20rem]"
                src={photo.src}
                alt={photo.name}
              />
              <span>{photo.name}</span>
            </Card>
          ))}
        </PhotoGrid>
      </SectionContainer>
      <SectionContainer>
        <Sub>{t('fort.photo.sub')}</Sub>
        <StyledHeading>{t('fort.photo.name')}</StyledHeading>
        <Carousel
          showArrows={false}
          dots
          items={glimpsesItems}
          itemsVisible={3}
          className="mx-auto !my-16"
        />
        <Button variant="light" link="/gallery">
          View More &gt;
        </Button>
      </SectionContainer>
      <SectionContainer>
        <Sub className="text-lg">{t('fort.contact.sub')}</Sub>
        <StyledHeading>{t('fort.contact.name')}</StyledHeading>
        <div className="flex flex-col md:flex-row !mt-16 w-full space-y-5 md:space-y-0 md:space-x-5 text-left">
          <iframe
            className="md:w-[60%] w-full h-[35rem] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15027.474864763695!2d79.1273975!3d19.6756056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2c6dc8fef5ac5%3A0xb84742419dc315e7!2sManikgad%20Fort!5e0!3m2!1sen!2sin!4v1724584000963!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Atal Bihari Vajpayee Botanical Garden"
          />
          <ContactContainer>
            <StyledHeading className="text-white/90 text-2xl md:text-3xl">
              {t('fort.contact.title')}
            </StyledHeading>
            <br />
            <StyledHeading className="text-white/90 md:text-2xl text-xl">
              {t('fort.contact.location.name')}
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              {t('fort.contact.location.value')}
            </Sub>

            <StyledHeading className="text-white/90 md:text-2xl text-xl">
              {t('fort.contact.email.name')}
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              {t('fort.contact.email.value')}
            </Sub>

            <StyledHeading className="text-white/90 md:text-2xl text-xl">
              {t('fort.contact.call.name')}
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              {t('fort.contact.call.value')}
            </Sub>
          </ContactContainer>
        </div>
      </SectionContainer>
    </Container>
  );
};

const Container = tw.div`
    xl:px-lg lg:px-md px-sm
    lg:pt-[14rem] sm:pt-[12rem] pt-[9rem]
    space-y-24
`;

const Intro = tw.div`
    flex flex-col md:flex-row
`;

const AboutImage = tw(Image)`
    max-w-[50rem] md:w-[35vw] w-full h-auto
`;

const StyledHeading = tw.h3`
    text-3xl font-sans font-semibold text-tertiary-300 !mb-2
`;

const Content = tw.div`
    md:mx-12 my-6 space-y-4 md:space-y-3 flex flex-col md:text-left items-center text-center
`;

const Sub = tw.span`
    font-serif font-bold text-secondary opacity-70 md:text-lg text-xl w-full
`;

const PastHistory = tw.div`
    xl:-mx-lg lg:-mx-md -mx-sm py-12 bg-[#a8481fda] flex items-center justify-center text-center flex-col space-y-5 relative
`;

const ReadMore = tw.span`
    block w-max !mt-12 text-white font-sans font-bold text-lg md:text-base
`;

const SectionContainer = tw.div`
    flex flex-col items-center justify-center text-center space-y-5
`;

const PhotoGrid = tw.div`
    !mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12
`;

const Card = tw.div`
    flex flex-col space-y-8 font-serif font-semibold
`;

const ContactContainer = tw.div`
    rounded-lg bg-[#a8481fda] flex-1 px-10 py-8 space-y-10 md:pt-16 pt-12
`;

export default Bio;
