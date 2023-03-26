import { useState } from 'react';
import { FormValue } from '../formValue/FormValue';

import { useForm, SubmitHandler, useFormState } from 'react-hook-form';

import './formdata.css';
import { ValueList } from '../valueList/ValueList';
import { Modal } from '../modal/Modal';

const ErrorName = {
  name: 'The first letter must be capitalized and more 1 letter',
  country: 'Choose the country',
  birthday: 'Choose the correct date',
  image: 'Choose the file .png, .jpg or .webp',
  gender: 'Choose the gender',
  agree: 'must be chosen',
};

// interface Errors {
//   [name: string]: string;
// }

// type DataProps = Record<string, never>;
// type DataState = {
//   isFormValid: boolean;
//   errors: Errors;
//   components: JSX.Element[];
// };

enum CountryEnum {
  Russia = 'Russia',
  Spain = 'Spain',
  France = 'France',
}

interface FormValues {
  name: string;
  country: CountryEnum;
  birthday: string;
  image: FileList;
  gender: string;
  agree: boolean;
}

export function FormData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [components, setComponents] = useState<FormValues[]>([]);

  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = (data: FormValues) => {
    setIsFormValid(true);
    setComponents([...components, { ...data }]);
    // reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label>
            Name:
            <input
              className="input"
              placeholder="Name"
              {...register('name', {
                required: 'This field is required',
                pattern: /^[А-ЯЁA-Z][а-яёa-z]+$/,
                minLength: 2,
              })}
            />
          </label>
          {errors.name && <span className="error">{errors.name.message || ErrorName.name}</span>}
        </div>
        <div className="country">
          <label>
            country:
            <select className="input" {...register('country', { required: true })} defaultValue="">
              <option value="" disabled>
                choose the country...
              </option>
              <option value="Russia">Russia</option>
              <option value="Spain">Spain</option>
              <option value="France">France</option>
            </select>
          </label>
          {errors.country && <span className="error">{ErrorName.country}</span>}
        </div>
        <div className="birthday">
          <label>
            birthday:
            <input
              className="input"
              type="date"
              {...register('birthday', {
                required: true,
                validate: (value) => value < new Date().toISOString().split('T')[0],
              })}
            />
          </label>
          {errors.birthday && <span className="error">{ErrorName.birthday}</span>}
        </div>
        <div className="file">
          <label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.webp"
              {...register('image', {
                required: true,
                validate: (value) =>
                  value[0].type === 'image/png' ||
                  value[0].type === 'image/jpeg' ||
                  value[0].type === 'image/webp',
              })}
            />
          </label>
          {errors.image && <div className="error">{ErrorName.image}</div>}
        </div>
        <div className="gender">
          <div className="switcher">
            <label>
              <input
                type="radio"
                value="male"
                className="switcher-input"
                {...register('gender', { required: true })}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                className="switcher-input"
                {...register('gender', { required: true })}
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="error">{ErrorName.gender}</span>}
        </div>
        <div className="checkbox">
          <label>
            <input className="agree" type="checkbox" {...register('agree', { required: true })} />
            agree
          </label>
          {errors.agree && <span className="error">{ErrorName.agree}</span>}
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      {isFormValid && <Modal setIsFormValid={setIsFormValid} />}
      <ValueList>
        {components
          ? components.map((component, index) => (
              <li key={index}>
                <FormValue
                  values={{
                    imageValue: URL.createObjectURL(component.image[0]),
                    nameValue: component.name,
                    countryValue: component.country,
                    birthdayValue: component.birthday,
                    genderValue: component.gender,
                    agree: component.agree,
                  }}
                />
              </li>
            ))
          : null}
      </ValueList>
    </>
  );
}

// class FormData extends Component<DataProps, DataState> {
//   nameRef: React.RefObject<HTMLInputElement>;
//   maleRef: React.RefObject<HTMLInputElement>;
//   femaleRef: React.RefObject<HTMLInputElement>;
//   countryRef: React.RefObject<HTMLSelectElement>;
//   fileRef: React.RefObject<HTMLInputElement>;
//   birthRef: React.RefObject<HTMLInputElement>;
//   agreeRef: React.RefObject<HTMLInputElement>;
//   constructor(props: DataProps) {
//     super(props);
//     this.nameRef = createRef();
//     this.maleRef = createRef();
//     this.femaleRef = createRef();
//     this.countryRef = createRef();
//     this.fileRef = createRef();
//     this.birthRef = createRef();
//     this.agreeRef = createRef();
//     this.state = {
//       isFormValid: false,
//       errors: {},
//       components: [],
//     };
//   }

//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const errors: Errors = {};
//     if (
//       this.nameRef.current &&
//       this.fileRef.current?.files &&
//       this.countryRef.current &&
//       this.birthRef.current &&
//       this.agreeRef.current &&
//       this.maleRef.current &&
//       this.femaleRef.current
//     ) {
//       if (!/^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.nameRef.current.value.trim())) {
//         errors.name = ErrorName.name;
//       }
//       if (!this.countryRef.current.value) {
//         errors.country = ErrorName.country;
//       }
//       if (
//         !this.birthRef.current.value ||
//         new Date(this.birthRef.current.value).getTime() >
//           new Date().setDate(new Date().getDate() - 1)
//       ) {
//         errors.birthday = ErrorName.birthday;
//       }
//       if (
//         !this.fileRef.current.files[0] ||
//         !(
//           this.fileRef.current.files[0].type === 'image/png' ||
//           this.fileRef.current.files[0].type === 'image/jpeg' ||
//           this.fileRef.current.files[0].type === 'image/webp'
//         )
//       ) {
//         errors.image = ErrorName.image;
//       }
//       if (!this.maleRef.current.checked && !this.femaleRef.current.checked) {
//         errors.gender = ErrorName.gender;
//       }
//       if (!this.agreeRef.current.checked) {
//         errors.agree = ErrorName.agree;
//       }

//       this.setState({ errors });

//       if (Object.keys(errors).length === 0) {
//         this.setState({
//           isFormValid: true,
//         });
//         setTimeout(() => {
//           this.setState({ isFormValid: false });
//         }, 2000);

//         this.setState({
//           components: [
//             ...this.state.components,
//             <FormValue
//               key={this.state.components.length}
//               values={{
//                 imageValue: URL.createObjectURL(this.fileRef.current.files[0]),
//                 nameValue: this.nameRef.current.value,
//                 countryValue: this.countryRef.current.value,
//                 birthdayValue: this.birthRef.current.value,
//                 genderValue: this.maleRef.current.checked
//                   ? this.maleRef.current.value
//                   : this.femaleRef.current.value,
//                 agree: this.agreeRef.current.checked,
//               }}
//             />,
//           ],
//         });

//         const form = event.target as HTMLFormElement;
//         form.reset();
//         this.setState({
//           errors: {},
//         });
//       }
//     }
//   };

//   render() {
//     const { errors, isFormValid, components } = this.state;
//     return (
//       <>
//         <form className="form" onSubmit={this.handleSubmit}>
//           <div className="name">
//             <label>
//               Name:
//               <input type="text" ref={this.nameRef} className="input" placeholder="Name" />
//               {errors.name && <span className="error">{ErrorName.name}</span>}
//             </label>
//           </div>
//           <div className="country">
//             <label>
//               country:
//               <select className={'input'} ref={this.countryRef} defaultValue="">
//                 <option value="" disabled>
//                   choose the country...
//                 </option>
//                 <option value="Russia">Russia</option>
//                 <option value="Spain">Spain</option>
//                 <option value="France">France</option>
//               </select>
//             </label>
//             {errors.country && <span className="error">{ErrorName.country}</span>}
//           </div>
//           <div className="birthday">
//             <label>
//               birthday:
//               <input className={'input'} type="date" ref={this.birthRef} />
//             </label>
//             {errors.birthday && <span className="error">{ErrorName.birthday}</span>}
//           </div>
//           <div className="file">
//             <label>
//               <input type="file" ref={this.fileRef} accept=".png,.jpg,.jpeg,.webp" />
//             </label>
//             {errors.image && <div className="error">{ErrorName.image}</div>}
//           </div>
//           <div className="gender">
//             <div className="switcher">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   className="switcher-input"
//                   ref={this.maleRef}
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   className="switcher-input"
//                   ref={this.femaleRef}
//                 />
//                 Female
//               </label>
//             </div>
//             {errors.gender && <span className="error">{ErrorName.gender}</span>}
//           </div>
//           <div className="checkbox">
//             <label>
//               <input className="agree" type="checkbox" ref={this.agreeRef} />
//               agree
//             </label>
//             {errors.agree && <span className="error">{ErrorName.agree}</span>}
//           </div>
//           <button type="submit" className="submit">
//             Submit
//           </button>
//         </form>
//         {isFormValid && <Modal />}
//         <ValueList>
//           {components
//             ? components.map((component, index) => <li key={index}>{component}</li>)
//             : null}
//         </ValueList>
//       </>
//     );
//   }
// }

// export { FormData };
