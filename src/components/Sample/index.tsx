import styles from './styles.module.scss';

export interface SampleProps {
  heading?: string;
}

export const Sample = ({ heading }: SampleProps) => {
  return (
    <div className={styles.wrapper}>
      <h1>{heading}</h1>
    </div>
  );
};
