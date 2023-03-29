import styles from './modal.module.css';

const Modal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>Данные отправлены</div>
    </div>
  );
};
export { Modal };
