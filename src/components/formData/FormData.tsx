import React, { createRef, FormEvent } from 'react';
import { Component } from 'react';
import { FormValue } from '../formValue/FormValue';

import './formdata.css';
import { ValueList } from '../valueList/ValueList';
import { Modal } from '../modal/Modal';

const ErrorName = {
  name: 'The first letter must be capitalized',
  country: 'Choose the country',
  birthday: 'Choose the date',
  image: 'Choose the file',
  gender: 'Choose the gender',
  agree: 'must be chosen',
};

interface Errors {
  [name: string]: string;
}

type DataProps = Record<string, never>;
type DataState = {
  isFormValid: boolean;
  errors: Errors;
  components: JSX.Element[];
};
class FormData extends Component<DataProps, DataState> {
  nameRef: React.RefObject<HTMLInputElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  birthRef: React.RefObject<HTMLInputElement>;
  agreeRef: React.RefObject<HTMLInputElement>;
  constructor(props: DataProps) {
    super(props);
    this.nameRef = createRef();
    this.maleRef = createRef();
    this.femaleRef = createRef();
    this.countryRef = createRef();
    this.fileRef = createRef();
    this.birthRef = createRef();
    this.agreeRef = createRef();
    this.state = {
      isFormValid: false,
      errors: {},
      components: [],
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: Errors = {};
    if (
      this.nameRef.current &&
      this.fileRef.current?.files &&
      this.countryRef.current &&
      this.birthRef.current &&
      this.agreeRef.current &&
      this.maleRef.current &&
      this.femaleRef.current
    ) {
      if (!/^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.nameRef.current.value.trim())) {
        errors.name = ErrorName.name;
      }
      if (!this.countryRef.current.value) {
        errors.country = ErrorName.country;
      }
      if (!this.birthRef.current.value) {
        errors.birthday = ErrorName.birthday;
      }
      if (!this.fileRef.current.files[0]) {
        errors.image = ErrorName.image;
      }
      if (!this.maleRef.current.checked && !this.femaleRef.current.checked) {
        errors.gender = ErrorName.gender;
      }
      if (!this.agreeRef.current.checked) {
        errors.agree = ErrorName.agree;
      }

      this.setState({ errors });

      if (Object.keys(errors).length === 0) {
        this.setState({
          isFormValid: true,
        });
        setTimeout(() => {
          this.setState({ isFormValid: false });
        }, 2000);

        this.setState({
          components: [
            ...this.state.components,
            <FormValue
              key={this.state.components.length}
              values={{
                imageValue: URL.createObjectURL(this.fileRef.current.files[0]),
                nameValue: this.nameRef.current.value,
                countryValue: this.countryRef.current.value,
                birthdayValue: this.birthRef.current.value,
                genderValue: this.maleRef.current.checked
                  ? this.maleRef.current.value
                  : this.femaleRef.current.value,
                agree: this.agreeRef.current.checked,
              }}
            />,
          ],
        });

        const form = event.target as HTMLFormElement;
        form.reset();
        this.setState({
          errors: {},
        });
      }
    }
  };

  render() {
    const { components } = this.state;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="name">
            <label>
              Name:
              <input type="text" ref={this.nameRef} className="input" placeholder="Name" />
              {this.state.errors.name && <span className="error">{ErrorName.name}</span>}
            </label>
          </div>
          <div className="country">
            <label>
              country:
              <select className={'input'} ref={this.countryRef} defaultValue="">
                <option value="" disabled>
                  choose the country...
                </option>
                <option value="Russia">Russia</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
              </select>
            </label>
            {this.state.errors.country && <span className="error">{ErrorName.country}</span>}
          </div>
          <div className="birthday">
            <label>
              birthday:
              <input className={'input'} id="birthday" type="date" ref={this.birthRef} />
            </label>
            {this.state.errors.birthday && <span className="error">{ErrorName.birthday}</span>}
          </div>
          <div className="file">
            <label>
              <input type="file" id="file" ref={this.fileRef} />
            </label>
            {this.state.errors.image && <div className="error">{ErrorName.image}</div>}
          </div>
          <div className="gender">
            <div className="switcher">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="switcher-input"
                  ref={this.maleRef}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="switcher-input"
                  ref={this.femaleRef}
                />
                Female
              </label>
            </div>
            {this.state.errors.gender && <span className="error">{ErrorName.gender}</span>}
          </div>
          <div className="checkbox">
            <label>
              <input className="agree" type="checkbox" ref={this.agreeRef} />
              agree
            </label>
            {this.state.errors.agree && <span className="error">{ErrorName.agree}</span>}
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        {this.state.isFormValid && <Modal />}
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
