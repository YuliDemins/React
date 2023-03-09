import { Card } from '../card/Card';
import React, { Component } from 'react';

import './cards.css';
import { dataCards } from '../../dataCards';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {dataCards.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            url={el.url}
            title={el.title}
            author={el.author}
            likes={el.likes}
            show={el.show}
          />
        ))}
      </div>
    );
  }
}

export { Cards };
