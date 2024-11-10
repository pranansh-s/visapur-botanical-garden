'use client';

import Image from 'next/image';
import Heading from '../common/Heading';
import tw from 'tailwind-styled-components';
import { locations } from '@/constants';
import { ILocation } from '@/types';
import Location from './Location';

import Draggable from 'react-draggable';
import map from '../../../public/map.png';

const Map = (): React.ReactElement => {
  return (
    <Container>
      <Heading name="Map" />
      <MapContainer>
        <Draggable>
          <DraggableMap>
            <Image
              className="min-w-[768px]"
              draggable={false}
              src={map}
              alt="Map"
            />
            {locations.map((location: ILocation, idx: number) => (
              <Location key={idx} {...location} />
            ))}
          </DraggableMap>
        </Draggable>
      </MapContainer>
    </Container>
  );
};

export default Map;

const Container = tw.div`
  flex flex-col space-y-10 relative
`;

const MapContainer = tw.div`
  h-[500px] overflow-hidden
`;

const DraggableMap = tw.div`
  cursor-move relative
`;
