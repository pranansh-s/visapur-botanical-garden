import { memo } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import tw from 'tailwind-styled-components';

type IContactFieldProps = {
  name: string;
  icon: StaticImport;
  value: string;
  type?: string;
};

const ContactField = memo(({ name, icon, value, type }: IContactFieldProps) => {
  return (
    <ContactContainer>
      <Image
        width={16}
        height={16}
        className="sm:w-4 sm:h-4 w-8 h-8"
        src={icon}
        alt=""
      />
      <span className="sm:text-base text-xl">{name}</span>:
      <ContactLink href={type ? type + ':' + value : value}>
        {value.split(':')}
      </ContactLink>
    </ContactContainer>
  );
});

ContactField.displayName = 'ContactField';
export default ContactField;

const ContactLink = tw(Link)`
    underline overflow-hidden overflow-ellipsis sm:text-base text-xl
`;

const ContactContainer = tw.div`
    flex items-center text-secondary font-sans font-bold space-x-3 whitespace-nowrap 
`;
