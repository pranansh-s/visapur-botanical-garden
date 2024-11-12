import { CSSProperties } from 'react';

const MarkerIcon: React.FC<{ fill: string; style: CSSProperties }> = ({
  fill,
  style,
}) => {
  return (
    <svg
      style={style}
      className="absolute"
      width="34"
      height="36"
      viewBox="0 0 45 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.75 1C5.81294 1 1 5.81294 1 11.75V15.2221V23.4883V39.5267C1 41.3294 3.08535 42.3317 4.4931 41.2055L10.5722 36.3423C11.3346 35.7323 12.282 35.4 13.2584 35.4H33.25C39.1871 35.4 44 30.5871 44 24.65V11.75C44 5.81294 39.1871 1 33.25 1H11.75Z"
        fill={fill}
        stroke="#C90B02"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default MarkerIcon;
