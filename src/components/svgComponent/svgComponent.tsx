import { Component } from 'react';

interface SVGProp {
  src: string;
  id: number;
}
interface SVGState {
  fillColor: string;
  isFill: boolean;
}

class SVGComponent extends Component<SVGProp, SVGState> {
  src: string;

  id: number;

  constructor(props: SVGProp) {
    super(props);
    this.state = {
      fillColor: '#000000',
      isFill: false,
    };

    this.src = props.src;
    this.id = props.id;
  }

  handleClick = () => {
    this.setState({ fillColor: '#fd171f', isFill: true });
  };

  render() {
    return (
      <img
        src={this.props.src}
        id={this.props.id.toString()}
        onClick={this.handleClick}
        style={{ fill: this.state.fillColor }}
      />
    );
  }
}

export { SVGComponent };
