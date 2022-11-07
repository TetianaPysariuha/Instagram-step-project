import styles from './Preloaders.module.scss';

function Preloaders() {
  return (
    <>
      <span className={styles.backgroundAnimation} />
      <div className={styles.loader} />
    </>
  );
}

export default Preloaders;
