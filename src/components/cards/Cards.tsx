import { Card } from '../card/Card';

import styles from './cards.module.css';
import { dataCards } from '../../dataCards';

export const Cards = () => {
  return (
    <div className={styles.cards}>
      {dataCards.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};
