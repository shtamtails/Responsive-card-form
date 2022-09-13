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
      <div className="card-front-header">
        <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
      </div>
      <div className="card-front-body">
        {cc.cardNumber || "1234 5678 9123 0000"}
        <div className="card-front-footer">
          <div className="card-front-footer-name">{cc.name || "John Doe"}</div>
          <div className="card-front-footer-exp">
            {cc.expMonth || "00"}/{cc.expYear || "00"}
          </div>
        </div>
      </div>
    </div>
  );
};
