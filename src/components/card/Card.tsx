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
  id: number;

  src: string;

  title: string;

  author: string;

  likes: number;

  show: number;

  constructor(props: CardProps) {
    super(props);
    this.id = props.id;
    this.src = props.src;
    this.title = props.title;
    this.author = props.author;
    this.likes = props.likes;
    this.show = props.show;
  }

  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.src} alt={this.id.toString()} />
        </div>
        <div className="info">
          <div className="wrapper-name">
            <div className="title">{this.title}</div>
            <div className="author">{this.author}</div>
          </div>
          <div className="wrapper-stats">
            <div className="likes">
              <div className="favorite">
                <SVGComponent src={like} id={this.id} />
              </div>
              <span>{this.likes}</span>
            </div>
            <div className="show">
              <div className="vis" />
              <div>{this.show}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
