import { Children } from "react";

import "./styles.css";

const SwitchList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="switch-list-wrapper">
      <div className="switch-list">
        {Children.map(children, (child) => (
          <div className="switch-list-item">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default SwitchList;
