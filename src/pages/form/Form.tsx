import { Component } from 'react';
import { FormData } from '../../components/formData/FormData';

class Form extends Component {
  render() {
    return (
      <>
        <h1 className="main-title">Form</h1>
        <FormData />
      </>
    );
  }
}

export { Form };
