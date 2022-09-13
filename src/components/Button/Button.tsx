import { getContainerSizing, getElementSizing, ISizing } from "../../interface/Sizing";

interface ButtonProps extends ISizing {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassname = ["button-container", props.fullWidth && `fullwidth`].filter(Boolean).join(" ");
  return (
    <div className={buttonClassname} style={getContainerSizing(props)}>
      <button type={props.type} style={getElementSizing(props)} className={props.fullWidth ? "fullwidth" : ""}>
        {props.children}
      </button>
    </div>
  );
};
