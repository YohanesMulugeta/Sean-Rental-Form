import { useState } from "react";
import "./loction.css";

export default function Location({
  label,
  width,
  handleClick,
  fromValue = "",
}) {
  const [value, setValue] = useState(fromValue);
  return (
    <div className="input-container" style={{ width: width }}>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="location-input-field"
        type="text"
        placeholder={label}
      />
    </div>
  );
}
