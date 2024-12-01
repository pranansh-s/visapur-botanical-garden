'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
//@ts-ignore
import { MapInteractionCSS } from 'react-map-interaction';
import tw from 'tailwind-styled-components';

import drag from '../../../public/icons/drag.svg';
import map from '../../../public/map.png';

import { locations } from '@/constants/locations';
import Heading from '../common/Heading';
import Location from './Location';

const Map = (): React.ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <Heading name="Map" />
      <MapContainer>
        <MapInteractionCSS
          showControls
          minScale={0.5}
          maxScale={2}
          btnClass="bg-white shadow-sm text-2xl w-10 h-10 my-1"
        >
          <DraggableMap ref={mapRef}>
            <Image draggable={false} src={map} alt="Map" />
            {locations.map((location: ILocation, idx: number) => (
              <Location key={idx} {...location} />
            ))}
          </DraggableMap>
        </MapInteractionCSS>
      </MapContainer>
      <DragToMove>
        <Image className="sm:w-6 sm:h-6 w-4 h-4 mr-3" src={drag} alt="" />
        Drag To Move
      </DragToMove>
    </Container>
  );
};

export default Map;

const Container = tw.div`
  flex flex-col md:space-y-10 space-y-3 relative
`;

const MapContainer = tw.div`
  sm:aspect-[16/9] aspect-square overflow-hidden border sm:border-4 border-2 border-tertiary-300 rounded-xl
`;

const DraggableMap = tw.div`
  cursor-grab relative min-w-[600px] z-0 -translate-y-1/2 -translate-x-7 origin-center
`;

const DragToMove = tw.p`
  inline-block flex items-center sm:text-2xl text-lg font-sans mx-auto font-semibold
`;
