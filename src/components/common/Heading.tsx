import React from 'react';

type IHeading = {
  name: string;
};

const Heading = ({ name }: IHeading) => {
  return (
    <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tertiary-300">
      {name}
      <hr className="my-2 sm:my-3 md:my-4 border-tertiary-200 opacity-45" />
    </h2>
  );
};

export default Heading;
