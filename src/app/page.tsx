import CoffeeCard from '@/components/CoffeeCard';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <CoffeeCard
        title="Coffe year"
        description="Идет описание кафешки идет описание 
      кафешки идет описание кафешки идет 
      описание кафешки"
        address="Ул. Советская  18"
      />
      <br />
      <CoffeeCard
        title="Coffe year"
        description="Идет описание кафешки идет описание 
      кафешки идет описание кафешки идет 
      описание кафешки идет описание кафешки идет описание кафешки идет 
      описание кафешки идет описание кафешки"
        address="Ул. Советская  18"
        imageUrl="/img/CoffeeImage-2.png"
      />
      <br />
      <CoffeeCard
        title="Coffe year"
        description="Идет описание кафешки идет описание 
      описание кафешки"
        address="Ул. Советская  18"
        imageUrl="/img/CoffeeImage-3.png"
      />
    </div>
  );
};

export default HomePage;
