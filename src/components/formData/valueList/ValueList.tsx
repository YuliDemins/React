import { Component } from 'react';
import { FormValue } from '../../formValue/FormValue';

import './valueList.css';

class ValueList extends Component {
  render() {
    return <div className="valuelist">{<FormValue />}</div>;
  }
}

export { ValueList };
