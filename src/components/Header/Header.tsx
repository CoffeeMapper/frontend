import Button from '@/ui/Button/Button';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Coffee Mapper</h1>
        <Button className={styles.button}>Вход</Button>
      </div>
    </header>
  );
};

export default Header;
