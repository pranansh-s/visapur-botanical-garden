'use client';

import Image from 'next/image';

import { support } from '@/constants';
import { IImageCard, INamedLink } from '@/types';
import tw from 'tailwind-styled-components';

import contact from '../../../public/icons/call.svg';
import mail from '../../../public/icons/mail.svg';
import place from '../../../public/icons/place.svg';
import hero from '../../../public/support/support-hero.webp';

import ImageCard from '@/components/common/ImageCard';

const Support: React.FC = () => {
  const renderGetInTouch = () => {
    return (
      <GetInTouchContainer>
        <SupportHeading>Get in touch</SupportHeading>
        <SupportBody>
          We welcome your inquiries, feedback, and suggestions. Connect with us
          to learn more about our offerings, plan your visit, or share your
          experiences. Our team is here to assist you and ensure your journey
          through nature is unforgettable. Reach out today, and let&apos;s
          explore the beauty of the natural world together. Your adventure
          awaits!
        </SupportBody>
        <div className="pt-12 flex flex-col md:flex-row">
          <ContactSubGroup className="flex-[2] space-y-6 md:space-y-12">
            <SupportSubHeading>Have queries?</SupportSubHeading>
            <ContactField>
              <Image className="h-10 w-10 sm:h-12 sm:w-12" src={mail} alt="" />
              <p>
                Mail Us:&nbsp;
                <ContactValue>
                  atalbotanicalgarden@mahaforest.gov.in
                </ContactValue>
              </p>
            </ContactField>
            <ContactField>
              <Image
                className="h-10 w-10 sm:h-12 sm:w-12"
                src={contact}
                alt=""
              />
              <p>
                Contact no:&nbsp;
                <ContactValue>+91 94050 66433</ContactValue>
                <ContactValue className="block text-end">
                  +91 71724 58671
                </ContactValue>
              </p>
            </ContactField>
          </ContactSubGroup>
          <ContactSubGroup className="flex-1 mt-10 md:mt-0">
            <SupportSubHeading>
              How to Reach &nbsp;{' '}
              <Image className="w-7 h-7 sm:w-9 sm:h-9" src={place} alt="" />{' '}
            </SupportSubHeading>
            <iframe
              className="w-full sm:w-[333px] h-[134px] pt-4"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="font-sans font-bold text-sm sm:text-base mt-4 block">
              Shradheya Atal Bihari Vajpayee Botanical Garden,
              <br /> Ballarshah Rd, Visapur, Maharashtra 442701
            </span>
          </ContactSubGroup>
        </div>
      </GetInTouchContainer>
    );
  };

  const renderCards = () => {
    return (
      <Grid>
        {support.map((supportCard: IImageCard, idx: number) => (
          <ImageCard key={idx} {...supportCard} />
        ))}
      </Grid>
    );
  };

  return (
    <div className="xl:px-lg lg:px-md px-sm sm:mt-48 mt-28 max-w-[1536px] mx-auto">
      <Image src={hero} alt="" className="w-full" />
      {renderGetInTouch()}
      {renderCards()}
    </div>
  );
};

export default Support;

const GetInTouchContainer = tw.div`
  my-16 md:my-24 flex flex-col space-y-5
`;

const SupportHeading = tw.h2`
  font-bold text-sans text-4xl sm:text-5xl md:text-6xl text-tertiary-200
`;

const SupportBody = tw.p`
  text-black text-base sm:text-lg md:text-xl font-serif
`;

const SupportSubHeading = tw.h3`
  text-sans font-bold text-2xl sm:text-3xl text-secondary flex
`;

const ContactSubGroup = tw.div`
  flex flex-col space-y-4 md:space-y-6
`;

const ContactValue = tw.span`
  font-serif text-sm sm:text-base md:text-lg
`;

const ContactField = tw.div`
  flex space-x-3 font-sans text-base sm:text-lg md:text-xl text-black font-bold items-center
`;

const ContactCard = tw.div`
  flex flex-col items-center justify-center text-center space-y-3 font-serif text-lg text-black
`;

const Grid = tw.ul`
  grid grid-rows-2 grid-cols-1 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4
`;
