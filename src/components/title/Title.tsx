import { FC } from 'react';

import styles from './title.module.css';

type TitleProp = {
  title: string;
};

export const Title: FC<TitleProp> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};
