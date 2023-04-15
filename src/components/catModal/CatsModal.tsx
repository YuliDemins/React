import { FC, MouseEvent, useRef } from 'react';
import styles from './catmodal.module.css';
import { Preloader } from '../preloader/Preloader';
import { useGetCardQuery } from '../../store/api';
import { ImageCat } from '../imageCat/ImageCat';
import { RootState } from '../../store/store';
import { useTypedSelector, useAppDispatch } from '../../hooks/hooks';
import { updateState } from '../../store/cardSlice';

export const CatsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { idState } = useTypedSelector((state: RootState) => state.cardSlice);
  const { isLoading, data } = useGetCardQuery(idState);

  const handleClick = () => {
    dispatch(updateState({ idState: idState, visibleModal: false }));
  };

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: MouseEvent) => {
    if (overlayRef.current == event.target) {
      dispatch(updateState({ idState: idState, visibleModal: false }));
    }
  };

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.info}>
        <div className={styles.modal}>
          <button className={styles.exit} onClick={handleClick}>
            &times;
          </button>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <ImageCat id={idState} />
              <div className={styles.container}>
                <div className={styles.name}>{data?.name}</div>
                <div className={styles.description}>{data?.description}</div>
                <div className={styles.origin}>{data?.origin}</div>
                <div className={styles.temperament}>{data?.temperament}</div>
                <div className={styles.life}>{data?.life_span} average life span</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
