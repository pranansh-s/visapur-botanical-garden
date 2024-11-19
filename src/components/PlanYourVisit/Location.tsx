import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { IVisitLocation } from '@/types';

interface VisitLocation
  extends HTMLAttributes<HTMLDivElement>,
    IVisitLocation {}

const Location: React.FC<VisitLocation> = ({
  name,
  bgColor,
  text,
  imageSrc,
  ...props
}) => {
  return (
    <div {...props}>
      <Image
        src={imageSrc}
        width={700}
        height={400}
        className="md:w-[65%] w-[65%] sm:max-h-[400px] max-h-[250px]"
        alt=""
      />
    </div>
  );
};

export default Location;
