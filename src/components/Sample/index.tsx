export interface SampleProps {
  heading?: string;
}

export const Sample = ({ heading }: SampleProps) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};
