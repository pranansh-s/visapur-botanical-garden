import tw from 'tailwind-styled-components';

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <ArrowButton className="right-0" onClick={onClick}>
      <svg
        fill="#c90b02"
        height="40px"
        viewBox="0 0 512 512"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7  c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8  L298.3,256z" />
      </svg>
    </ArrowButton>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <ArrowButton className="left-0" onClick={onClick}>
      <svg
        fill="#c90b02"
        height="40px"
        viewBox="0 0 512 512"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z" />
      </svg>
    </ArrowButton>
  );
};

const ArrowButton = tw.button`
  absolute z-50 top-1/2 -translate-y-1/2 p-5 sm:block hidden
`;
