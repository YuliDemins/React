import load from '../../assets/1484.gif';
import styles from './preloader.module.css';

export const Preloader = () => {
  return <img className={styles.loader} src={load} alt="load" />;
};
