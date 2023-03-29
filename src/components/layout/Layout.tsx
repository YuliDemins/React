import { FC, ReactNode } from 'react';
import { Header } from '../header/Header';
import { Title } from '../title/Title';

import styles from './layout.module.css';

type LayoutProp = {
  title: string;
  content: ReactNode;
};
export const Layout: FC<LayoutProp> = ({ title, content }) => {
  return (
    <>
      <Header headerTitle={<Title title={title} />} />
      <main className={styles.container}>{content}</main>
      <footer>2023</footer>
    </>
  );
};
