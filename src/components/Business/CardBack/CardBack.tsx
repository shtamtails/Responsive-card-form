const bgImg = require("../../../img/bg-card-back.png");

interface CardBackProps {
  cvc: string;
}
export const CardBack: React.FC<CardBackProps> = ({ cvc }) => {
  return (
    <div className="card-back">
      <img src={bgImg} alt="card-back" />
      <div className="card-content">{cvc || "000"}</div>
    </div>
  );
};
