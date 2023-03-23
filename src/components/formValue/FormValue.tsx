import { Component } from 'react';

import './formvalue.css';

type FormValueProp = {
  values: {
    imageValue: string;
    nameValue: string;
    countryValue: string;
    birthdayValue: string;
    genderValue: string;
    agree: boolean;
  };
};
class FormValue extends Component<FormValueProp> {
  render() {
    return (
      <div className="value">
        <img className="image" src={this.props.values.imageValue} alt="" />
        <div className="valueitem">Name: {this.props.values.nameValue}</div>
        <div className="valueitem">Country: {this.props.values.countryValue}</div>
        <div className="valueitem">Birthday: {this.props.values.birthdayValue}</div>
        <div className="valueitem">Gender: {this.props.values.genderValue}</div>
        <div className="valueitem">Agree: {this.props.values.agree ? 'yes' : 'no'}</div>
      </div>
    );
  }
}

export { FormValue };
