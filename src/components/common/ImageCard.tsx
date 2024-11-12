import Image from 'next/image';
import { HTMLAttributes, forwardRef } from 'react';
import tw from 'tailwind-styled-components';

export interface ImageCardProps extends HTMLAttributes<HTMLLIElement> {
  src: string;
  name: string;
  ref?: React.Ref<HTMLLIElement>;
}

const ImageCard = forwardRef<HTMLLIElement, ImageCardProps>(
  ({ src, name, className }, ref) => {
    return (
      <ImageCardContainer ref={ref} className={className}>
        <Image
          src={src}
          height={500}
          width={500}
          className="object-cover w-full h-full"
          alt=""
        />
        <NameText>{name}</NameText>
      </ImageCardContainer>
    );
  }
);

ImageCard.displayName = 'ImageCard';
export default ImageCard;

const ImageCardContainer = tw.li`
    rounded-md relative
`;

const NameText = tw.span`
    bg-hotpink text-white absolute bottom-0 md:px-5 md:px-3 px-2 font-serif uppercase md:text-lg text-xs text-end rounded-md md:py-4 sm:py-3 py-2 w-full whitespace-nowrap
`;
