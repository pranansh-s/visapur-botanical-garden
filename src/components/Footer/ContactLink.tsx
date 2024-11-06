'use client';

import { INamedLink } from '@/types';
import { memo } from 'react';
import { SocialIcon } from 'react-social-icons';
import tw from 'tailwind-styled-components';

const ContactLink = memo(({ href, name }: INamedLink) => {
  return (
    <ContactContainer onClick={() => window.open(href, '_blank')}>
      <SocialIcon network={name} />
    </ContactContainer>
  );
});

ContactLink.displayName = 'ContactLink';
export default ContactLink;

const ContactContainer = tw.button`
  w-max hover:opacity-80 transition-all duration-200
`;
