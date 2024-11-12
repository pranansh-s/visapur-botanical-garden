'use client';

import Image from 'next/image';

import { ILocation } from '@/types';
import Draggable from 'react-draggable';
import tw from 'tailwind-styled-components';

import drag from '../../../public/icons/drag.svg';
import map from '../../../public/map.png';

import { locations } from '@/constants/locations';
import Heading from '../common/Heading';
import Location from './Location';

const Map = (): React.ReactElement => {
  return (
    <Container>
      <Heading name="Map" />
      <MapContainer>
        <Draggable positionOffset={{ x: '0', y: '-50%' }}>
          <DraggableMap>
            <Image draggable={false} src={map} alt="Map" />
            {locations.map((location: ILocation, idx: number) => (
              <Location key={idx} {...location} />
            ))}
          </DraggableMap>
        </Draggable>
      </MapContainer>
      <DragToMove>
        <Image className="w-6 h-6 mr-3" src={drag} alt="" />
        Drag To Move
      </DragToMove>
    </Container>
  );
};

export default Map;

const Container = tw.div`
  flex flex-col space-y-10 relative
`;

const MapContainer = tw.div`
  h-[500px] overflow-hidden border border-8 border-gray-500 rounded-xl
`;

const DraggableMap = tw.div`
  cursor-grab relative min-w-[800px]
`;

const DragToMove = tw.p`
  inline-block flex items-center text-2xl font-sans mx-auto font-semibold
`;
