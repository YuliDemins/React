import { useEffect } from 'react';

import './modal.css';

interface ModalProps {
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setIsFormValid }: ModalProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsFormValid(false);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [setIsFormValid]);

  return (
    <div className="overlay">
      <div className="modal">Данные отправлены</div>
    </div>
  );
};
export { Modal };
