import { Component } from 'react';

import './formvalue.css';

type FormValueProp = {
  value: string;
};
class FormValue extends Component<FormValueProp> {
  render() {
    return (
      <div className="value">
        <div className="valueitem">Name: {this.props.value}</div>
        <div className="valueitem">
          birthday: <span>01.01.1000</span>
        </div>
        <div className="valueitem">
          Agree: <span>yes</span>
        </div>
        <div className="valueitem">
          Sex: <span>female</span>
        </div>
      </div>
    );
  }
}

export { FormValue };
