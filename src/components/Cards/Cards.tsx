import React, { Component } from 'react';
import { Card } from '../card/Card';

import './cards.css';
import { dataCards } from '../../dataCards';

class Cards extends Component {
  render() {
    return (
      <div className="cards" data-testid="сards">
        {dataCards.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    );
  }
}

export { Cards };
