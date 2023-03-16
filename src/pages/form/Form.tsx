import { Component } from 'react';
import { FormData } from '../../components/formData/FormData';
import { ValueList } from '../../components/formData/valueList/ValueList';
import { FormValue } from '../../components/formValue/FormValue';

class Form extends Component {
  render() {
    return (
      <>
        <h1 className="main-title">Form</h1>
        <FormData />
        <ValueList />
      </>
    );
  }
}

export { Form };
