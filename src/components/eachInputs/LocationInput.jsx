import { useState } from "react";
import "./loction.css";

export default function Location({ label, width }) {
  const [value, setValue] = useState();
  return (
    <div className="input-container" style={{ width: width }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="location-input-field"
        type="text"
        placeholder={label}
      />
    </div>
  );
}
