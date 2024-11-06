'use client';

import Image from 'next/image';
import hero from '../../../public/support/support-hero.png';
import tw from 'tailwind-styled-components';

import place from '../../../public/icons/place.svg';
import mail from '../../../public/icons/mail.svg';
import contact from '../../../public/icons/call.svg';
import { socialLinks, support } from '@/constants';
import { IImageCard, INamedLink } from '@/types';
import ImageCard from '@/components/common/ImageCard';
import ContactLink from '@/components/Footer/ContactLink';

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
          awaits!&quot;
        </SupportBody>
        <div className="pt-12 flex">
          <ContactSubGroup className="flex-[2] !space-y-12">
            <SupportSubHeading>Have queries?</SupportSubHeading>
            <ContactField>
              <Image className="h-12 w-12" src={mail} alt="" />
              <p>
                Mail Us:&nbsp;
                <ContactValue>
                  atalbotanicalgarden@mahaforest.gov.in
                </ContactValue>
              </p>
            </ContactField>
            <ContactField>
              <Image className="h-12 w-12" src={contact} alt="" />
              <p>
                Contact no:&nbsp;
                <ContactValue>+91 94050 66433</ContactValue>
                <ContactValue className="block text-end">
                  +91 71724 58671
                </ContactValue>
              </p>
            </ContactField>
          </ContactSubGroup>
          <ContactSubGroup className="flex-1">
            <SupportSubHeading>
              How to Reach &nbsp;{' '}
              <Image className="w-9 h-9" src={place} alt="" />{' '}
            </SupportSubHeading>
            <iframe
              className="w-[333px] h-[134px] pt-4"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="font-sans font-bold text-sm">
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
        <ContactCard>
          <span>Follow us for the latest updates</span>
          <ul className="space-x-5 flex w-[200%] justify-center scale-[0.6]">
            {socialLinks.map(
              (socialLink: INamedLink, idx: number) =>
                idx != 3 && <ContactLink key={idx} {...socialLink} />
            )}
          </ul>
        </ContactCard>
      </Grid>
    );
  };

  return (
    <div className="px-lg mt-64">
      <Image src={hero} alt="" />
      {renderGetInTouch()}
      {renderCards()}
    </div>
  );
};

export default Support;

const GetInTouchContainer = tw.div`
  h-full my-24 flex flex-col space-y-5
`;

const SupportBody = tw.p`
  text-black text-lg font-serif
`;

const SupportSubHeading = tw.h3`
  text-sans font-bold text-3xl text-secondary flex
`;

const ContactSubGroup = tw.div`
  flex flex-col space-y-3
`;

const ContactValue = tw.span`
  font-serif
`;

const ContactField = tw.div`
  flex space-x-3 font-sans text-lg text-black text-bold items-center
`;

const SupportHeading = tw.h2`
  font-bold text-sans text-6xl text-tertiary-200
`;

const ContactCard = tw.div`
  flex flex-col items-center justify-center space-y-3 font-serif text-lg text-black
`;

const Grid = tw.ul`
  grid grid-rows-2 grid-cols-4 gap-x-6 gap-y-16
`;
