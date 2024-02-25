// 'use client';

// import styles from "./page.module.css";

import Button from '@/ui/Button/Button';

const HomePage: React.FC = () => {
  const handleClick = () => {
    console.log('1');
  };

  return (
    <div>
      <h1>Проверка состояний кнопки</h1>
      {/* <Button onClick={handleClick} ><span>+</span>Событие при клике</Button> */}

      <Button>Чёрная</Button>
      <Button disabled>Выключенная чёрная</Button>
      <br />

      <Button color="white">Белая</Button>
      <Button color="white" disabled>
        Выключенная белая
      </Button>
      <br />

      <Button color="mindal">Миндальная</Button>
      <Button color="mindal" disabled>
        Выключенная миндальная
      </Button>
      <br />

      <Button color="green">Зелёная</Button>
      <Button color="green" disabled>
        Выключенная зелёная
      </Button>
      <br />

      <Button href="/auth">Вход</Button>
      <Button href="/auth" disabled>
        Выключенная кнопка со ссылкой
      </Button>
    </div>
  );
};

export default HomePage;
