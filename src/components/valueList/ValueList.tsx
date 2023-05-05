import { FC } from 'react';
import { useTypedSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { FormValue } from '../formValue/FormValue';

import styles from './valuelist.module.css';

export const ValueList: FC = () => {
  const { list } = useTypedSelector((state: RootState) => state.formList);
  return (
    <ul className={styles.valuelist}>
      {list.map((value, index) => (
        <li key={index}>
          <FormValue {...value} />
        </li>
      ))}
    </ul>
  );
};
