import { FC } from 'react';
import { ImageCat } from '../imageCat/ImageCat';
import './card.css';

type CatProp = {
  id: string;
  name: string;
  temperament: string;
};

export const Card: FC<CatProp> = ({ id, name, temperament }) => {
  return (
    <>
      <ImageCat id={id} />
      <div className={'cat-info'}>
        <div className={'cat-name'}>{name}</div>
        <div className={'cat-temperament'}>{temperament}</div>
      </div>
    </>
  );
};
