import React, { Component } from 'react';
import { SVGComponent } from '../svgComponent/svgComponent';

import './card.css';
import like from '/src/assets/svg/favorite.svg';

export interface CardProps {
  id: number;
  src: string;
  title: string;
  author: string;
  likes: number;
  show: number;
}

export interface CardState {
  isLike: boolean;
}

class Card extends Component<CardProps, CardState> {
  render() {
    const { id, src, title, author, likes, show } = this.props;
    return (
      <div className="card">
        <div className="image">
          <img src={src} alt={id.toString()} />
        </div>
        <div className="info">
          <div className="wrapper-name">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
          </div>
          <div className="wrapper-stats">
            <div className="likes">
              <div className="favorite">
                <SVGComponent src={like} id={id} />
              </div>
              <span>{likes}</span>
            </div>
            <div className="show">
              <div className="vis" />
              <div>{show}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
