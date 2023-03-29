import { FC } from 'react';

import './valuelist.css';

type ListProps = {
  children: JSX.Element | JSX.Element[] | null;
};

export const ValueList: FC<ListProps> = ({ children }) => {
  return <ul className="valuelist">{children}</ul>;
};
