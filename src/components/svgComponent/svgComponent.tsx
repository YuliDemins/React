import { FC } from 'react';

interface SVGProp {
  src: string;
  id: number;
}
export const SVGComponent: FC<SVGProp> = ({ src, id }) => {
  return <img src={src} id={id.toString()} />;
};
