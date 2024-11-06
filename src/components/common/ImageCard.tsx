import Image from 'next/image';
import { forwardRef, HTMLAttributes } from 'react';
import tw from 'tailwind-styled-components';

export interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  name: string;
  ref?: React.Ref<HTMLDivElement>;
}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  ({ src, name, className }, ref) => {
    return (
      <ImageCardContainer ref={ref} className={className}>
        <Image
          src={src}
          height={500}
          width={500}
          className="h-full w-full"
          alt=""
        />
        <NameText>{name}</NameText>
      </ImageCardContainer>
    );
  }
);

ImageCard.displayName = 'ImageCard';
export default ImageCard;

const ImageCardContainer = tw.div`
    rounded-md relative
`;

const NameText = tw.span`
    bg-hotpink text-white absolute bottom-0 px-5 font-serif uppercase text-lg text-end rounded-md py-4 w-full
`;
