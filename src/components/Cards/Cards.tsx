import { Card } from '../card/Card';
import React, { Component } from 'react';

import './cards.css';
import { dataCards } from '../../dataCards';

class Cards extends Component {
  render() {
    return (
      <div className="cards" data-testid="сards">
        {dataCards.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            src={el.src}
            title={el.title}
            author={el.author}
            likes={el.likes}
            show={el.show}
            url={''}
          />
        ))}
      </div>
    );
  }
}

export { Cards };
