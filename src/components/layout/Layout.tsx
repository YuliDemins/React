import React, { Component, ReactNode } from 'react';
import { Header } from '../header/Header';
import { Title } from '../title/Title';

import styles from './layout.module.css';

type LayoutProp = {
  title: string;
  content: ReactNode;
};
class Layout extends Component<LayoutProp> {
  render() {
    const { title, content } = this.props;
    return (
      <>
        <Header headerTitle={<Title title={title} />} />
        <main className={styles.container}>{content}</main>
        <footer>2023</footer>
      </>
    );
  }
}

export { Layout };
