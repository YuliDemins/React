import { Component } from 'react';

import './valueList.css';

type ListProps = {
  children: JSX.Element | JSX.Element[] | null;
};

class ValueList extends Component<ListProps> {
  render() {
    return <ul className="valuelist">{this.props.children}</ul>;
  }
}

export { ValueList };
