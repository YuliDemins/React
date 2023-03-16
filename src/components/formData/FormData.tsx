import { Component } from 'react';

import './formdata.css';

class FormData extends Component {
  render() {
    return (
      <>
        <form className="form">
          <label className="formlabel" htmlFor="name">
            Name:
            <input name="name" type="text" />
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
      </>
    );
  }
}

export { FormData };
