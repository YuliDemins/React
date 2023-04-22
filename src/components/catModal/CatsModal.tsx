import { FC, MouseEvent, useRef } from 'react';
import './catmodal.css';
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
    <div className={'catmodal-overlay'} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={'catmodal-info'}>
        <div className={'catmodal-modal'}>
          <button className={'catmodal-exit'} onClick={handleClick}>
            &times;
          </button>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <ImageCat id={idState} />
              <div className={'catmodal-container'}>
                <div className={'catmodal-name'}>{data?.name}</div>
                <div className={'catmodal-description'}>{data?.description}</div>
                <div className={'catmodal-origin'}>{data?.origin}</div>
                <div className={'catmodal-temperament'}>{data?.temperament}</div>
                <div className={'catmodal-life'}>{data?.life_span} average life span</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
