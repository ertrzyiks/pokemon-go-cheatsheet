import { useId } from "react";
import "./styles.css";

const Switch = ({
  value,
  onChange,
}: {
  value: boolean;
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
        className="react-switch-label"
        htmlFor={id}
        style={{ background: value ? "#06D6A0" : undefined }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
