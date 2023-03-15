import { Component } from 'react';

type TitleProp = {
  title: string;
};

class Title extends Component<TitleProp> {
  render() {
    const { title } = this.props;
    return <div className="header-title">{title}</div>;
  }
}

export { Title };
