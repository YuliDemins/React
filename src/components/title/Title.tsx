import { Component } from 'react';

import styles from './title.module.css';

type TitleProp = {
  title: string;
};

class Title extends Component<TitleProp> {
  render() {
    const { title } = this.props;
    return <div className={styles.title}>{title}</div>;
  }
}

export { Title };
