import React, { createRef, FormEvent } from 'react';
import { Component } from 'react';
import { FormValue } from '../formValue/FormValue';

import './formdata.css';
import { ValueList } from './valueList/ValueList';

type DataProps = Record<string, never>;
type DataState = {
  nameValue: string;
  emailValue: string;
  passValue: string;
  birthdayValue: string;
  isNameValid: boolean;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isFormValid: boolean;
  components: JSX.Element[];
};
class FormData extends Component<DataProps, DataState> {
  inputRef: React.RefObject<HTMLInputElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props: DataProps) {
    super(props);
    this.inputRef = createRef();
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.state = {
      nameValue: '',
      emailValue: '',
      passValue: '',
      birthdayValue: '',
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isFormValid: false,
      components: [],
    };
  }

  handleNameChange = () => {
    if (this.nameRef.current) {
      const name = this.nameRef.current.value;
      const isNameValid = name.length > 0;
      this.setState({ nameValue: name, isNameValid }, this.validateForm);
    }
  };

  handleEmailChange = () => {
    if (this.emailRef.current) {
      const email = this.emailRef.current.value;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      this.setState({ emailValue: email, isEmailValid }, this.validateForm);
    }
  };

  handlePasswordChange = () => {
    if (this.passwordRef.current) {
      const password = this.passwordRef.current.value;
      const isPasswordValid = password.length >= 6;
      // const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
      this.setState({ passValue: password, isPasswordValid }, this.validateForm);
    }
  };

  validateForm() {
    const { isNameValid, isEmailValid, isPasswordValid } = this.state;
    const isFormValid = isNameValid && isEmailValid && isPasswordValid;
    this.setState({ isFormValid });
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { nameValue, emailValue, passValue, isFormValid, components } = this.state;

    event.preventDefault();

    if (isFormValid) {
      this.setState({
        components: [
          ...components,
          <FormValue key={components.length} value={{ nameValue, emailValue, passValue }} />,
        ],
      });
    }

    if (this.nameRef.current) this.nameRef.current.value = '';
    if (this.emailRef.current) this.emailRef.current.value = '';
    if (this.passwordRef.current) this.passwordRef.current.value = '';

    this.setState({
      nameValue: '',
      emailValue: '',
      passValue: '',
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isFormValid: false,
    });
  };

  render() {
    const { isNameValid, isEmailValid, isPasswordValid, isFormValid, components } = this.state;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="formlabel" htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              ref={this.nameRef}
              className={!isNameValid ? 'invalid' : 'valid'}
              onChange={this.handleNameChange}
            />
            {!isNameValid && <span className="error">{'ошибка'}</span>}
          </label>
          <label className="formlabel" htmlFor="email">
            email:
            <input
              id="email"
              type="email"
              ref={this.emailRef}
              onChange={this.handleEmailChange}
              className={!isEmailValid ? 'invalid' : 'valid'}
            />
            {!isEmailValid && <span className="error">{'ошибка'}</span>}
          </label>
          <label className="formlabel" htmlFor="pass">
            password:
            <input
              id="pass"
              type="password"
              ref={this.passwordRef}
              onChange={this.handlePasswordChange}
              className={!isPasswordValid ? 'invalid' : 'valid'}
            />
            {!isPasswordValid && <span className="error">{'ошибка'}</span>}
          </label>
          <label className="formlabel" htmlFor="birthday">
            birthday:
            <input name="birthday" type="date" />
          </label>
          <label className="formlabel" htmlFor="name">
            Agree:
            <input name="fgree" type="checkbox" />
          </label>
          <div className="switcher">
            <label htmlFor="gender">
              <input
                type="radio"
                name="gender"
                value="male"
                // checked={gender === 'male'}
                // onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                // checked={gender === 'female'}
                // onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
          <button
            className={!isFormValid ? 'disable' : 'submit'}
            type="submit"
            disabled={!isFormValid}
          >
            Submit
          </button>
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
