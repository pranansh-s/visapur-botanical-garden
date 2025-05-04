'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { IBlogs, IImageCard } from '@/types';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import about from '../../../public/about/about-1.webp';
import tree1 from '../../../public/tree-2.svg';

import Carousel from '@/components/Carousel';
import Button from '@/components/common/Button';

import { blogs, historicalPhoto } from '@/constants/bio';
import { zoneItems } from '@/constants/carousels';

const Bio: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Carousel
        items={zoneItems}
        itemsVisible={1}
        interval={2000}
        className=""
      />
      <Intro>
        <AboutImage src={about} alt="" />
        <Content>
          <Sub>About Us</Sub>
          <StyledHeading>
            Introduction to Shradheya Shri Atal Bihari Vajpayee Botanical Garden
          </StyledHeading>
          <p className="font-serif text-lg md:text-base md:leading-8 leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eius laborum rerum, ipsam illum in illo voluptates, cupiditate ipsum
            placeat quaerat blanditiis at inventore perferendis molestiae iste
            corporis fugit voluptatem?
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus nobis fuga possimus, fugiat ullam cum modi quae
            dolorum, illo aliquid voluptate ducimus eum excepturi beatae dolores
            cumque, ad tempora similique!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            necessitatibus voluptatibus, veritatis illum ad error fuga placeat
            nulla quidem, officia facilis eos labore. Fugiat aliquid dolores,
            accusamus natus cum obcaecati! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolore amet non inventore, sed saepe
            totam possimus nihil pariatur veritatis necessitatibus ratione ullam
            cum exercitationem. Voluptate officiis fugiat voluptatibus aut unde?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quos voluptatibus sit nisi possimus illum molestiae nam deserunt
            culpa pariatur, porro labore tempora assumenda, quaerat reiciendis
            sunt. Ea, labore velit!
            <br />
          </p>
        </Content>
      </Intro>
      <PastHistory>
        <Image
          className="-rotate-[163deg] absolute -right-10"
          width={250}
          src={tree1}
          alt=""
        />
        <Image
          className="-rotate-[12deg] absolute -left-10"
          width={250}
          src={tree1}
          alt=""
        />
        <Sub className="text-white opacity-80 text-lg md:text-base">
          Unveil the past through insights
        </Sub>
        <StyledHeading className="text-white/90 text-3xl !mb-5">
          Historical Information
        </StyledHeading>
        <p className="max-w-[60rem] px-2 text-lg md:text-base md:leading-8 leading-9 text-white/80 font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          sapiente saepe eaque labore, ipsa incidunt quibusdam obcaecati?
          Ducimus explicabo, doloremque ratione distinctio molestias aut enim
          saepe vitae dolorum quia quae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt vero earum enim, explicabo maiores
          veritatis assumenda qui. Ratione ipsum dicta cupiditate! Sit adipisci
          ratione mollitia voluptatibus perspiciatis ipsam eveniet sunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          distinctio fugiat similique nostrum omnis eaque est cupiditate qui
          quia error, nemo corporis fugit! Quam numquam nam cum optio fuga
          ullam.
        </p>
        <Link href="/about" passHref>
          <ReadMore>{t('readMore')} &gt;</ReadMore>
        </Link>
      </PastHistory>
      <SectionContainer>
        <Sub>Every photo a window to the past</Sub>
        <StyledHeading>Historical Photo</StyledHeading>
        <PhotoGrid>
          {historicalPhoto.map((photo: IImageCard, idx: number) => (
            <Card key={idx}>
              <Image
                width={500}
                height={500}
                className="h-[20rem]"
                src={photo.src}
                alt=""
              />
              <span>{photo.name}</span>
            </Card>
          ))}
        </PhotoGrid>
      </SectionContainer>
      <SectionContainer>
        <Sub>Where every stone tells a story of ancient glory</Sub>
        <StyledHeading>Photo Gallery</StyledHeading>
        <Carousel
          showArrows={false}
          dots
          items={zoneItems}
          itemsVisible={3}
          className="mx-auto !my-16"
        />
        <Button variant="light" link="/gallery">
          View More &gt;
        </Button>
      </SectionContainer>
      <SectionContainer>
        <Sub className="text-lg">
          Uncover the stories that shaped Manikgarh Fort&apos;s legendary past
        </Sub>
        <StyledHeading>Blog & News</StyledHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 !mt-16">
          {blogs.map((blog: IBlogs, idx: number) => (
            <BlogCard key={idx}>
              <Image
                width={300}
                height={300}
                className="h-1/2 w-full"
                src={blog.src}
                alt={blog.name}
              />
              <div className="p-5 text-left space-y-4">
                <span className="font-sans text-gray-700/80 font-semibold">
                  {blog.date}
                </span>
                <h5 className="font-serif text-lg font-semibold">
                  {blog.name}
                </h5>
                {blog.link ? (
                  <Link
                    className="block w-max h-max m-2 md:m-3 outline-tertiary-300 outline hover:bg-tertiary-300 group rounded-md transition-all duration-200"
                    href={blog.link}
                    passHref
                  >
                    <ReadMore className="text-tertiary-300 group-hover:text-white/80 p-1 md:p-2">
                      {t('readMore')} &gt;
                    </ReadMore>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </BlogCard>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <Sub className="text-lg">Where history, nature, and adventure meet</Sub>
        <StyledHeading>
          Visit Atal Bihari Vajpayee Botanical Garden
        </StyledHeading>
        <div className="flex flex-col md:flex-row !mt-16 w-full space-y-5 md:space-y-0 md:space-x-5 text-left">
          <iframe
            className="md:w-[60%] w-full h-[35rem] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Atal Bihari Vajpayee Botanical Garden"
          />
          <ContactContainer>
            <StyledHeading className="text-white/90 text-3xl md:text-4xl">
              Contact Information
            </StyledHeading>
            <br />
            <StyledHeading className="text-white/90 md:text-3xl text-2xl">
              Office Location
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              Manikgad Fort, Nokhari Rd, Nagrala, Jiwati, Maharashtra 442908
            </Sub>

            <StyledHeading className="text-white/90 md:text-3xl text-2xl">
              Email Drop Us
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              info@manikgarhfort.in
            </Sub>

            <StyledHeading className="text-white/90 md:text-3xl text-2xl">
              Call for Help
            </StyledHeading>
            <Sub className="text-white opacity-80 text-lg md:text-base">
              +91 8208289864
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
    text-3xl font-sans font-semibold text-tertiary-300
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

const BlogCard = tw.div`
    rounded-lg overflow-hidden shadow-lg h-[32rem] w-[35rem] lg:w-[25rem] flex flex-col items-start
`;

const ContactContainer = tw.div`
    rounded-lg bg-[#a8481fda] flex-1 px-10 py-8 space-y-10 md:pt-16 pt-12
`;

export default Bio;
