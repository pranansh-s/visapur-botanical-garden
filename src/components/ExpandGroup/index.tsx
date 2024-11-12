import { memo } from 'react';
import Image from 'next/image';

import { IExpandGroup } from '@/types';
import tw from 'tailwind-styled-components';

import Button from '../common/Button';

interface IExpandGroupProps extends IExpandGroup {
  index: number;
  activeIndex: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const ExpandGroup = memo(
  ({
    index,
    activeIndex,
    setActive,
    color,
    images,
    text,
    name,
  }: IExpandGroupProps) => {
    return (
      <ExpandContainer
        selected={activeIndex === index}
        onClick={() => setActive(index)}
        style={{ backgroundColor: color }}
      >
        <ExpandTitle>
          <span>{name}</span>
          <span className="rotate-90">&#10095;</span>
        </ExpandTitle>
        <p className="font-serif text-base">{text}</p>
        <ul className="flex flex-wrap">
          {images.map((image: string, idx: number) => (
            <li key={idx}>
              <Image src={image} alt={`Image for ${name}`} />
            </li>
          ))}
        </ul>
        <Button className="w-max px-8 ml-auto" variant="base">
          Book
        </Button>
      </ExpandContainer>
    );
  }
);

ExpandGroup.displayName = 'ExpandGroup';
export default ExpandGroup;

const ExpandContainer = tw.div<{ selected: boolean }>`
    ${props => (props.selected ? 'h-92' : 'h-16')}
    w-full flex flex-col space-y-12 text-lg py-5 px-16 rounded-md cursor-pointer overflow-hidden hover:opacity-75 transition-all duration-200
`;

const ExpandTitle = tw.div`
    flex justify-between font-sans font-bold
`;
