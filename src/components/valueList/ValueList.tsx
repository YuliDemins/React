import { FC } from 'react';
import { IFormData } from '../../types/types';
import { FormValue } from '../formValue/FormValue';

import './valuelist.css';

type ListProps = {
  list: IFormData[];
};

export const ValueList: FC<ListProps> = ({ list }) => {
  return (
    <ul className="valuelist">
      {list.map((value, index) => (
        <li key={index}>
          <FormValue
            data={{
              id: value.id,
              name: value.name,
              country: value.country,
              birthday: value.birthday,
              image: value.image,
              gender: value.gender,
              agree: value.agree,
            }}
          />
        </li>
      ))}
    </ul>
  );
};
