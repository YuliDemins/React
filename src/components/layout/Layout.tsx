import React, { Component, ReactNode } from 'react';
import { Header } from '../header/Header';

type LayoutProp = {
  title: string;
  content: ReactNode;
};
class Layout extends Component<LayoutProp> {
  render() {
    return (
      <>
        {<Header title={this.props.title} />}
        <main className="container">{this.props.content}</main>
        <footer>2023</footer>
      </>
    );
  }
}

export { Layout };
