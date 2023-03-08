import { Card } from '../card/Card';
import React, { Component } from 'react';

import './cards.css';

class Cards extends Component {
  // const cardsArr =
  render() {
    return (
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export { Cards };
