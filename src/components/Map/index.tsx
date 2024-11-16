'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
import Draggable from 'react-draggable';
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';
import tw from 'tailwind-styled-components';

import drag from '../../../public/icons/drag.svg';
import map from '../../../public/map.png';

import { locations } from '@/constants/locations';
import Heading from '../common/Heading';
import Location from './Location';

const Map = (): React.ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [onMoving, setOnMoving] = useState<boolean>(false);

  return (
    <Container>
      <Heading name="Map" />
      <MapContainer>
        <TransformWrapper
          disabled={onMoving}
          minScale={1}
          maxScale={2}
          panning={{ wheelPanning: true }}
        >
          <TransformComponent>
            <Draggable
              bounds={{
                left: -(mapRef.current?.clientWidth ?? 0) / 3,
                right: (mapRef.current?.clientWidth ?? 0) / 5,
                bottom: (mapRef.current?.clientHeight ?? 0) / 8,
                top: -(mapRef.current?.clientHeight ?? 0) / 1.5,
              }}
              onDrag={() => setOnMoving(true)}
              onStop={() => setOnMoving(false)}
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
  aspect-[16/9] overflow-hidden border sm:border-8 border-2 border-gray-500 rounded-xl
`;

const DraggableMap = tw.div`
  cursor-grab relative min-w-[500px] z-0
`;

const DragToMove = tw.p`
  inline-block flex items-center sm:text-2xl text-lg font-sans mx-auto font-semibold
`;
