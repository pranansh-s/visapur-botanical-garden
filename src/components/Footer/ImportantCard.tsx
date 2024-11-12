import { memo } from 'react';
import Image from 'next/image';

import { IImportant } from '@/types';
import tw from 'tailwind-styled-components';

const ImportantCard = memo((props: IImportant) => {
  return (
    <CardContainer>
      <Image width={56} height={56} src={props.icon} alt="" />
      <span className="uppercase">{props.text}</span>
      <BodyText>{props.body}</BodyText>
    </CardContainer>
  );
});

ImportantCard.displayName = 'ImportantCard';
export default ImportantCard;

const CardContainer = tw.div`
  flex flex-col items-center text-secondary font-serif mx-auto space-y-3 lg:flex-1 2xl:-translate-x-1/3 -translate-x-0
`;

const BodyText = tw.span`
  text-tertiary-200 font-extrabold
`;
