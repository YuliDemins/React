import React, { Component } from 'react';
import { Card } from '../card/Card';

import styles from './cards.module.css';
import { dataCards } from '../../dataCards';

class Cards extends Component {
  render() {
    return (
      <div className={styles.cards}>
        {dataCards.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    );
  }
}

export { Cards };
