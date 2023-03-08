import React, { Component } from 'react';

import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="image"></div>
        <div className="info">
          <div className="wrapper-name">
            <div className="title">Title</div>
            <div className="author">author</div>
          </div>
          <div className="wrapper-stats">
            <div className="likes">
              <div className="favorite"></div>
              <div>likes</div>
            </div>
            <div className="show">
              <div className="vis"></div>
              <div>show</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
