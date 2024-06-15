import { Link } from 'react-router-dom';

import { Sample } from '@/components/Sample';
import { sampleMock } from '@/components/Sample/Sample.mock';

import styles from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Sample {...sampleMock} />

      <Link to="profile">Profile Page</Link>
    </div>
  );
};
