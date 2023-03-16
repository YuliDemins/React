import React, { createRef, FormEvent } from 'react';
import { Component } from 'react';
import { FormValue } from '../formValue/FormValue';

import './formdata.css';
import { ValueList } from './valueList/ValueList';

type DataProps = Record<string, never>;
type DataState = {
  inputValue: string;
  nameValue: string;
  birthdayValue: string;
  showComponentB: boolean;
  components: JSX.Element[];
};
class FormData extends Component<DataProps, DataState> {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: DataProps) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      inputValue: '',
      nameValue: '',
      birthdayValue: '',
      showComponentB: false,
      components: [],
    };
  }

  handleInputChange = () => {
    if (this.inputRef.current) this.setState({ inputValue: this.inputRef.current.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { components } = this.state;

    event.preventDefault();
    this.setState({
      components: [
        ...components,
        <FormValue key={components.length} value={this.state.inputValue} />,
      ],
    });
  };

  render() {
    const { components } = this.state;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="formlabel" htmlFor="name">
            Name:
            <input
              name="name"
              type="text"
              ref={this.inputRef}
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="formlabel" htmlFor="birthday">
            birthday:
            <input name="birthday" type="date" />
          </label>
          <label className="formlabel" htmlFor="name">
            Agree:
            <input name="fgree" type="checkbox" />
          </label>
          <label className="formlabel" htmlFor="sex">
            Sex:
            <input type="radio" name="sex" value="male" />
            <input type="radio" name="sex" value="female" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ValueList>
          {components
            ? components.map((component, index) => <li key={index}>{component}</li>)
            : null}
        </ValueList>
      </>
    );
  }
}

export { FormData };
