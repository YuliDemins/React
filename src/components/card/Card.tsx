import { Component } from 'react';
import { SVGComponent } from '../svgComponent/svgComponent';

import styles from './card.module.css';
import like from '/src/assets/svg/favorite.svg';

export interface CardProps {
  id: number;
  src: string;
  title: string;
  author: string;
  likes: number;
  show: number;
}

class Card extends Component<CardProps> {
  render() {
    const { id, src, title, author, likes, show } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={src} alt={id.toString()} />
        </div>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.author}>{author}</div>
          </div>
          <div className={styles.stats}>
            <div className={styles.likes}>
              <div className={styles.favorite}>
                <SVGComponent src={like} id={id} />
              </div>
              <span>{likes}</span>
            </div>
            <div className={styles.show}>
              <div className={styles.vis} />
              <div>{show}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
