import { Component } from 'react';

import './formvalue.css';

class FormValue extends Component {
  render() {
    return (
      <div className="value">
        <div className="valueitem">
          Name: <span>Yuli</span>
        </div>
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
