'use client';

import { memo } from 'react';

import { INamedLink } from '@/types';
import { SocialIcon } from 'react-social-icons';
import tw from 'tailwind-styled-components';

const ContactLink = memo(({ href, name }: INamedLink) => {
  return (
    <ContactContainer onClick={() => window.open(href, '_blank')}>
      <SocialIcon className="scale-[0.8]" network={name} />
    </ContactContainer>
  );
});

ContactLink.displayName = 'ContactLink';
export default ContactLink;

const ContactContainer = tw.button`
  w-max transition-all duration-200 hover:brightness-75
`;
