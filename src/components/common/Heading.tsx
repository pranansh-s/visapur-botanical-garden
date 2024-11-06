import React from 'react';

type IHeading = {
  name: string;
};

const Heading = ({ name }: IHeading) => {
  return (
    <h1 className="font-sans font-bold text-6xl text-tertiary-300">
      {name}
      <hr className="my-4 border-tertiary-200 opacity-45" />
    </h1>
  );
};

export default Heading;
