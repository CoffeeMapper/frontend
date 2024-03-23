import Typography from '@/ui/Typography';

import styles from './CoffeeCard.module.css';
import Image from 'next/image';

interface CoffeeCardProps {
  style?: React.CSSProperties;
  className?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  description?: string;
  address?: string;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  imageUrl = '/img/CoffeeImage-placeholder.png',
  imageWidth = 222,
  imageHeight = 172,
  title,
  description,
  address,
}) => {
  const altTitle = title || 'Изобожение кофейни';

  return (
    <div className={styles.container}>
      <div className={styles.image} 
      // style={{backgroundImage: `url(${imageUrl})`}}
      >
        <Image
          src={imageUrl}
          alt={altTitle}
          className={styles.image}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className={styles.content}>
        <Typography variant="HeadlineLarge" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="BodyLarge" className={styles.description}>
          {description}
        </Typography>
        <Typography variant="BodyMedium" className={styles.address}>
          {address}
        </Typography>
      </div>
    </div>
  );
};

export default CoffeeCard;
