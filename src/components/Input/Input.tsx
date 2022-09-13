import { getContainerSizing, getElementSizing, ISizing } from "../../interface/Sizing";

interface InputProps extends ISizing {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = (props) => {
  const inputContainerClassname = ["input-container", props.fullWidth && `fullwidth`].filter(Boolean).join(" ");
  const inputClassname = ["card-text", props.fullWidth && `fullwidth`, props.error && "input-error"]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={inputContainerClassname} style={getContainerSizing(props)}>
      {props.label && <label className="input-label">{props.label}</label>}
      <input
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        className={inputClassname}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        style={getElementSizing(props)}
        maxLength={props.maxLength}
      />
      {props.error && <div className="input-error-text">{props.error}</div>}
    </div>
  );
};
