import { Link } from 'react-router-dom';

import { Sample } from '@/components/Sample';

export const HomePage = () => {
  return (
    <div>
      <Sample heading="Hello world Code Challenges!" />

      <Link to="profile">Profile Page</Link>
    </div>
  );
};
