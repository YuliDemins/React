import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { useGetBreedsQuery } from '../../store/api';
import { setId, setVisibleModal } from '../../store/idSlice';
import { RootState } from '../../store/store';
import { ICat } from '../../types/api.interface';
import { Card } from '../card/Card';
import { Preloader } from '../preloader/Preloader';

export const Cards = () => {
  const dispatch = useAppDispatch();
  const { value } = useTypedSelector((state: RootState) => state.filter);

  const { isLoading, data } = useGetBreedsQuery(value);

  const handleClick = (id: string) => {
    dispatch(setVisibleModal(true));
    dispatch(setId(id));
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="cards">
      {data ? (
        data.map((cat: ICat) => {
          return <Card key={cat.id} {...cat} onClick={() => handleClick(cat.id)} />;
        })
      ) : (
        <span className="error">не найдено</span>
      )}
    </div>
  );
};
