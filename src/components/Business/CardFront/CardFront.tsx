const bgImg = require("../../../img/bg-card-front.png");
const bgLogo = require("../../../img/card-logo.svg");
console.log(bgLogo.default);

interface CardFrontProps {
  cc: {
    name: string;
    cardNumber: string;
    expMonth: string;
    expYear: string;
  };
}

export const CardFront: React.FC<CardFrontProps> = ({ cc }) => {
  return (
    <div className="card-front">
      <img className="card-front-bg" src={bgImg} alt="card-front" />
      <div className="card-content">
        <div className="card-front-header">
          <img src={bgLogo.default} alt="" />
        </div>
        <div className="card-front-body">
          <div className="card-front-body-number">{cc.cardNumber || "1234 5678 0000 0000"}</div>
          <div className="card-front-body-info">
            <div className="card-front-body-info-name">{cc.name || "John Doe"}</div>
            <div className="card-front-body-info-exp">
              {cc.expMonth || "00"}/{cc.expYear || "00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
