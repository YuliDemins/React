import { Component } from 'react';

import './formvalue.css';

type FormValueProp = {
  data: {
    id: string;
    image: string;
    name: string;
    country: string;
    birthday: string;
    gender: string;
    agree: boolean;
  };
};
class FormValue extends Component<FormValueProp> {
  render() {
    const { id, image, name, country, birthday, gender, agree } = this.props.data;
    return (
      <div className="value" id={id}>
        <img className="image" src={image} alt="" />
        <div className="valueitem">Name: {name}</div>
        <div className="valueitem">Country: {country}</div>
        <div className="valueitem">Birthday: {birthday}</div>
        <div className="valueitem">Gender: {gender}</div>
        <div className="valueitem">Agree: {agree ? 'yes' : 'no'}</div>
      </div>
    );
  }
}

export { FormValue };
