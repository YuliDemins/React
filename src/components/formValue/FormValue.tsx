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
    const { imageValue, nameValue, countryValue, birthdayValue, genderValue, agree } =
      this.props.values;
    return (
      <div className="value">
        <img className="image" src={imageValue} alt="" />
        <div className="valueitem">Name: {nameValue}</div>
        <div className="valueitem">Country: {countryValue}</div>
        <div className="valueitem">Birthday: {birthdayValue}</div>
        <div className="valueitem">Gender: {genderValue}</div>
        <div className="valueitem">Agree: {agree ? 'yes' : 'no'}</div>
      </div>
    );
  }
}

export { FormValue };
