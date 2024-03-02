import styles from './HomePage.module.css';
import MicroAvailableAlert from '@/features/MicroAvailableAlert';
import RecTextWidget from '@/widgets/RecTextWidget';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className={styles.wrapper}>
      <MicroAvailableAlert />
      <RecTextWidget />
    </Container>
  );
};

export default HomePage;
