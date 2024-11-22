'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { disabledDates } from '@/constants';
import tw from 'tailwind-styled-components';

import honey from '../../../public/honey.svg';
import accessibility from '../../../public/icons/accesibility.svg';
import amenities from '../../../public/icons/amenities.svg';
import events from '../../../public/icons/events.svg';
import timings from '../../../public/icons/timings.svg';

import Button from '../common/Button';
import Amenities from './Amenities';
import Calendar from './Calendar';
import HowToReach from './HowToReach';
import Timings from './Timings';

const Table = (): React.ReactElement => {
  const [tablePage, setTablePage] = useState<number>(1);
  return (
    <section id="table" className="flex items-center justify-center relative">
      <TableContainer>
        <ButtonContainer>
          {renderButtonIcon(timings, setTablePage, tablePage, 0, 80)}
          {renderButtonIcon(events, setTablePage, tablePage, 1, 50)}
          {renderButtonIcon(accessibility, setTablePage, tablePage, 2, 70)}
          {renderButtonIcon(amenities, setTablePage, tablePage, 3, 70)}
        </ButtonContainer>
        <hr className="-mt-4 border-tertiary-200 opacity-45 mx-36" />
        {renderSection(tablePage)}
      </TableContainer>
      <BackgroundImage
        src={honey}
        alt="honey"
        className="w-[130px] md:w-[150px] lg:w-[200px] -right-48 top-1/3"
      />
    </section>
  );
};

const renderSection = (tablePage: number) => {
  const today = new Date();
  if (tablePage === 0) return <Timings />;
  else if (tablePage === 1) {
    return (
      <Calendar
        year={today.getFullYear()}
        month={today.getMonth()}
        disabledDates={disabledDates}
      />
    );
  } else if (tablePage === 2) return <HowToReach />;
  else return <Amenities />;
};

const renderButtonIcon = (
  icon: StaticImageData,
  setTablePage: any,
  tablePage: number,
  currentTablePage: number,
  iconSize: number
) => {
  return (
    <Button
      postIconNode={icon}
      iconSize={iconSize}
      onClick={() => setTablePage(currentTablePage)}
      className={`${tablePage === currentTablePage ? 'opacity-100' : 'opacity-60'} sm:scale-100 scale-125`}
    />
  );
};

export default Table;

const TableContainer = tw.div`
  bg-tertiary-table rounded-xl pb-16 sm:!-my-16 !-my-48 shadow-md overflow-clip sm:scale-75 scale-[0.6] w-full sm:min-w-[800px] min-w-[600px]
`;

const ButtonContainer = tw.div`
  flex justify-between items-center py-12 sm:px-36 px-16
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
