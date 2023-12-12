import { useId } from "react";
import "./styles.css";

const Switch = ({
  value,
  icon,
  color,
  onChange,
}: {
  value: boolean;
  icon: string;
  color: string;
  onChange: () => void;
}) => {
  const id = useId();

  return (
    <>
      <input
        checked={value}
        onChange={onChange}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        className={["react-switch-label", value ? "is-active" : ""].join(" ")}
        htmlFor={id}
        style={{ color: color }}
      >
        <span className={`react-switch-button`}>
          <img className={`react-switch-button-icon`} src={icon} />
        </span>
      </label>
    </>
  );
};

export default Switch;
