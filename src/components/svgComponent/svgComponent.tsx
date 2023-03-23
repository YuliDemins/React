import { Component } from 'react';

interface SVGProp {
  src: string;
  id: number;
}
class SVGComponent extends Component<SVGProp> {
  render() {
    const { src, id } = this.props;
    return <img src={src} id={id.toString()} />;
  }
}

export { SVGComponent };
