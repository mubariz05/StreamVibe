import { useState } from "react";
import "../../assets/styles/ToggleSwitch.css";

const ToggleSwitch = ({ options = ["Monthly", "Yearly"], onChange }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    if (onChange) onChange(options[index]);
  };

  return (
    <div className="toggle-switch">
      {options.map((option, index) => (
        <button
          key={index}
          className={`toggle-btn ${active === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;
