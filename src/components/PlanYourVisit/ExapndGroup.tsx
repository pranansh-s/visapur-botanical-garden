import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IExpandGroup } from '@/types';
import tw from 'tailwind-styled-components';

import book from '../../../public/icons/book.svg';
import download from '../../../public/icons/download.svg';

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
    pdfLink,
    text,
    name,
  }: IExpandGroupProps) => {
    return (
      <ExpandContainer
        selected={activeIndex === index}
        style={{ backgroundColor: color }}
      >
        <ExpandTitle
          onClick={() => setActive(pv => (pv === index ? -1 : index))}
        >
          <span>{name}</span>
          <svg
            fill="black"
            height="16px"
            viewBox="0 0 512 512"
            className="-rotate-90"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z" />
          </svg>
        </ExpandTitle>
        <p className="font-serif text-base py-5 md:px-16 sm:px-12 px-8">
          {text}
        </p>
        <ul className="flex flex-wrap sm:gap-3 gap-1 -mx-20">
          <StyledImage
            src={images[0]}
            height={300}
            width={285}
            className="lg:w-[39%] w-[38%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[1]}
            height={300}
            width={300}
            className="w-[38.5%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[2]}
            height={300}
            width={200}
            className="w-[20%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[3]}
            height={300}
            width={150}
            className="w-[20%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[4]}
            height={300}
            width={215}
            className="w-[30%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[5]}
            height={300}
            width={300}
            className="w-[32%]"
            alt={`Image for ${name}`}
          />
          <StyledImage
            src={images[6]}
            height={300}
            width={110}
            className="xl:w-[14.5%] w-[13%]"
            alt={`Image for ${name}`}
          />
        </ul>
        <div className="flex justify-between py-5 md:px-16 sm:px-12 px-8">
          <div className="flex space-x-3">
            <Link
              passHref
              target="_blank"
              href={pdfLink}
              className="sm:text-lg text-base sm:px-5 px-4 py-2 bg-white rounded-full font-sans hover:brightness-90 transition-all duration-200 text-tertiary-200 font-semibold"
            >
              <Image
                src={download}
                alt="download"
                className="w-8 h-8 inline p-1 mr-2"
              />
              Download PDF
            </Link>
            <Link
              passHref
              target="_blank"
              href={pdfLink}
              className="sm:text-lg text-base sm:px-5 px-4 py-2 bg-white rounded-full font-sans hover:brightness-90 transition-all duration-200 text-tertiary-200 font-semibold"
            >
              <Image
                src={download}
                alt="download"
                className="w-8 h-8 inline p-1 mr-2"
              />
              Must Visit
            </Link>
          </div>
          <Button
            className="sm:text-lg text-base sm:px-4 px-3 py-2"
            link="https://booking.atalbotanicalgarden.com/"
            preIconNode={book}
            iconSize={12}
            variant="base"
          >
            Book
          </Button>
        </div>
      </ExpandContainer>
    );
  }
);

ExpandGroup.displayName = 'ExpandGroup';
export default ExpandGroup;

const ExpandContainer = tw.div<{ selected: boolean }>`
  ${props => (props.selected ? 'h-[50rem] sm:h-[60rem] lg:h-[60rem]' : 'h-16')} transition-all duration-300
  w-full flex flex-col space-y-12 max-w-[900px] text-lg rounded-md overflow-hidden
`;

const ExpandTitle = tw.div`
  flex justify-between items-center font-sans font-bold transition-all cursor-pointer duration-200 py-5 md:px-16 sm:px-12 px-8 text-black hover:text-tertiary-200
`;

const StyledImage = tw(Image)`
  rounded-md aspect-auto flex-none h-auto object-cover w-full
`;
