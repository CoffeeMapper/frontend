import Typography from '@/ui/Typography';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" color="mindal">
        Компонента h1 <Typography variant="span"> и span</Typography>
      </Typography>
      <Typography variant="h2" className={styles.underline}>
        Компонента h2
      </Typography>
      <Typography variant="h3" bold>
        Компонента h3 + bold
      </Typography>
      <Typography variant="h4" style={{ color: 'red' }}>Компонента h4</Typography>
      <Typography variant="h5">Компонента h5</Typography>
      <Typography variant="h6">Компонента h6</Typography>
      <Typography variant="subheading1">Компонента subheading1</Typography>
      <Typography variant="subheading2">Компонента subheading2</Typography>
      <Typography variant="body1">Компонента body1</Typography>
      <Typography variant="body2">Компонента body2</Typography>

      <Typography variant="DisplayLarge">Dysplay Large</Typography>
      <Typography variant="DisplayMedium">Display Medium</Typography>
      <Typography variant="DisplaySmall">DisplaySmall</Typography>
      <Typography variant="HeadlineLarge">HeadlineLarge</Typography>
      <Typography variant="HeadlineMedium">HeadlineMedium</Typography>
      <Typography variant="HeadlineSmall">HeadlineSmall</Typography>
      <Typography variant="TitleLarge">TitleLarge</Typography>
      <Typography variant="TitleMedium">TitleMedium</Typography>
      <Typography variant="TitleSmall">TitleSmall</Typography>
      <Typography variant="LabelLarge">LabelLarge</Typography>
      <Typography variant="LabelMedium">LabelMedium</Typography>
      <Typography variant="LabelSmall">LabelSmall</Typography>
      <Typography variant="BodyLarge">BodyLarge</Typography>
      <Typography variant="BodyMedium">BodyMedium</Typography>
      <Typography variant="BodySmall">BodySmall</Typography>
    </div>
  );
};

export default HomePage;
