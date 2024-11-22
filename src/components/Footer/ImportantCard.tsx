import { HTMLAttributes, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IImportant } from '@/types';
import tw from 'tailwind-styled-components';

interface ImportantCardProps
  extends HTMLAttributes<HTMLDivElement>,
    IImportant {}

const ImportantCard = memo(
  ({ icon, text, body, ...className }: ImportantCardProps) => {
    return (
      <CardContainer {...className}>
        <Image width={44} height={44} src={icon} alt="" />
        <span className="uppercase">{text}</span>
        {body === 'Direction' ? (
          <Link
            className="text-tertiary-200 font-bold"
            href={'https://maps.app.goo.gl/7QCo8wcPfDzdnRBT9'}
          >
            Direction
          </Link>
        ) : (
          <BodyText>{body}</BodyText>
        )}
      </CardContainer>
    );
  }
);

ImportantCard.displayName = 'ImportantCard';
export default ImportantCard;

const CardContainer = tw.div`
  flex flex-col items-center text-secondary text-center font-serif mr-auto space-y-3 lg:flex-1 2xl:-translate-x-1/3 -translate-x-0 mt-5
`;

const BodyText = tw.span`
  text-tertiary-200 font-extrabold text-sm
`;
