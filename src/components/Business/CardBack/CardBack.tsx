interface CardBackProps {
  cvc: string;
}
export const CardBack: React.FC<CardBackProps> = ({ cvc }) => {
  return <div className="card-back">{cvc || "000"}</div>;
};
