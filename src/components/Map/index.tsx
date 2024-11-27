'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
import Draggable from 'react-draggable';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
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
        <TransformWrapper
          smooth
          centerZoomedOut
          alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
          panning={{ disabled: true }}
          minScale={1}
          maxScale={2}
        >
          <TransformComponent>
            <Draggable
              bounds={{
                left: -300,
                right: 200,
                bottom: 100,
                top: -1000,
              }}
              defaultPosition={{ x: -100, y: -400 }}
            >
              <DraggableMap ref={mapRef}>
                <Image draggable={false} src={map} alt="Map" />
                {locations.map((location: ILocation, idx: number) => (
                  <Location key={idx} {...location} />
                ))}
              </DraggableMap>
            </Draggable>
          </TransformComponent>
        </TransformWrapper>
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
  cursor-grab relative min-w-[600px] z-0
`;

const DragToMove = tw.p`
  inline-block flex items-center sm:text-2xl text-lg font-sans mx-auto font-semibold
`;
