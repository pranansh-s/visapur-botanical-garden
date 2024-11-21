import { useState } from 'react';

const useToggleIndex = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleIndex = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return { activeIndex, toggleIndex };
};

export default useToggleIndex;
