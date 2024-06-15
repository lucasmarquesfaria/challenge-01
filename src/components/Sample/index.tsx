import styles from './styles.module.scss';

export interface SampleProps {
  heading: string;
  img: {
    src: string;
    alt: string;
  };
}

export const Sample = ({ heading, img }: SampleProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={img.src} alt={img.alt} />

      <h1>{heading}</h1>
    </div>
  );
};
