const bgImg = require("../../../img/bg-card-front.png");
const bgLogo = require("../../../img/card-logo.svg");
console.log(bgLogo);

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
          <img src="/static/media/card-logo.8ca9036515954c3f8191559dce9c7bdf.svg" alt="" />
          {/* <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg> */}
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
