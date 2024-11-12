import { useRef, useState } from 'react';

import { shopPlayDineItems } from '@/constants';
import { IVideoLink } from '@/types';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';

const ShopPlayDine = (): React.ReactElement => {
  return (
    <ShopContainer>
      <Heading name="Shop, Play & Dine" />
      <CardContainer>
        {shopPlayDineItems.map((item: IVideoLink, idx: number) => (
          <VideoPlayer key={idx} src={item.src} />
        ))}
      </CardContainer>
    </ShopContainer>
  );
};

export default ShopPlayDine;

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoWrapper>
      <VideoItem ref={videoRef} src={src} muted loop playsInline />
      <PlayPauseButton onClick={togglePlayPause}>
        {isPlaying ? (
          <svg
            height="50px"
            width="50px"
            viewBox="0 0 512 512"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z" />
              <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z" />
            </g>
          </svg>
        ) : (
          <svg
            height="50px"
            width="50px"
            viewBox="0 0 139 139"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M117.037,61.441L36.333,14.846c-2.467-1.424-5.502-1.424-7.972,0c-2.463,1.423-3.982,4.056-3.982,6.903v93.188  c0,2.848,1.522,5.479,3.982,6.9c1.236,0.713,2.61,1.067,3.986,1.067c1.374,0,2.751-0.354,3.983-1.067l80.704-46.594  c2.466-1.422,3.984-4.054,3.984-6.9C121.023,65.497,119.502,62.866,117.037,61.441z" />
          </svg>
        )}
      </PlayPauseButton>
    </VideoWrapper>
  );
};

const ShopContainer = tw.div`
  flex flex-col space-y-2 h-max
`;

const VideoWrapper = tw.div`
  relative sm:max-w-[400px] w-full
`;

const VideoItem = tw.video`
  w-full h-full
`;

const PlayPauseButton = tw.button`
  absolute inset-0 flex items-center justify-center
  text-4xl font-bold text-white bg-black/50 rounded-md
  opacity-0 hover:opacity-100 transition-opacity duration-300
`;

const CardContainer = tw.ul`
  flex sm:gap-3 gap-2 items-center justify-center lg:flex-nowrap flex-wrap
`;
