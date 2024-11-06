import { IImportant } from '@/types';
import Image from 'next/image';
import { memo } from 'react';
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
  flex flex-col items-center text-secondary font-serif mx-auto space-y-3
`;

const BodyText = tw.span`
  text-tertiary-200 font-extrabold
`;
