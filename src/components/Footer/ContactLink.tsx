'use client';

import { memo } from 'react';

import { INamedLink } from '@/types';
import { SocialIcon } from 'react-social-icons';

const ContactLink = memo(({ href, name }: INamedLink) => {
  return (
    <SocialIcon
      target="_blank"
      href={href}
      className="scale-[0.8] transition-all duration-200 hover:brightness-75"
      network={name}
    />
  );
});

ContactLink.displayName = 'ContactLink';
export default ContactLink;
