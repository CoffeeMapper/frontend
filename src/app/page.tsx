import Button from '@/ui/Button/Button';

import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Проверка состояний кнопки</h1>
      <Button className={`${styles.upper} ${styles.underline}`}>Чёрная</Button>
      <Button disabled>Выключенная чёрная</Button>
      <br />

      <Button data-text="text" color="white">
        Белая
      </Button>
      <Button color="white" disabled>
        Выключенная белая
      </Button>
      <br />

      <Button color="mindal" style={{ width: '100%' }}>
        Миндальная
      </Button>
      <Button color="mindal" disabled>
        Выключенная миндальная
      </Button>
      <br />

      <Button color="green">Зелёная</Button>
      <Button color="green" disabled>
        Выключенная зелёная
      </Button>
      <br />

      <Button href="/auth" style={{ width: '100%', textAlign: 'center' }}>
        Вход
      </Button>
      <Button href="/auth" disabled>
        Выключенная кнопка со ссылкой
      </Button>
    </div>
  );
};

export default HomePage;
