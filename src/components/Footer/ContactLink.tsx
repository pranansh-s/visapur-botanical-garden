'use client';

import { memo } from 'react';

import { INamedLink } from '@/types';
import { SocialIcon } from 'react-social-icons';
import tw from 'tailwind-styled-components';

const ContactLink = memo(({ href, name }: INamedLink) => {
  return (
    <ContactContainer target="_blank" href={href}>
      <SocialIcon className="scale-[0.8]" network={name} />
    </ContactContainer>
  );
});

ContactLink.displayName = 'ContactLink';
export default ContactLink;

const ContactContainer = tw.a`
  w-max transition-all duration-200 hover:brightness-75
`;
