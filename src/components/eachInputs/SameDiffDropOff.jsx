import { useEffect, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./sameDiff.css";

const selections = ["Same", "Different"];

function SameDiffDropOff({ setIsSame, isSame }) {
  const selectionRef = useRef();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest(".dropDown-contaienr")) {
        selectionRef.current.classList.add("hidden-container");
      }
    }

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  function renderList() {
    return selections.map((selection) => {
      return (
        <li
          key={selection}
          onClick={(e) => {
            setIsSame(selection);
            selectionRef.current.classList.add("hidden-container");
          }}
          className={`selection ${selection === isSame ? "selected" : ""}`}
        >
          {selection} drop-off
        </li>
      );
    });
  }

  function handleClick() {
    selectionRef.current.classList.remove("hidden-container");
    selectionRef.current.classList.add("active");
  }

  return (
    <div
      className="dropDown-contaienr relative"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="button-container" onClick={handleClick}>
        <button className="select-dropOff">{isSame} drop-off</button>
        <ExpandMoreIcon fontSize="small" />
      </div>
      <div
        ref={selectionRef}
        className="dropDown-selections-container absolute hidden-container"
      >
        <ul className="dropDown-selections-list">{renderList()}</ul>
      </div>
    </div>
  );
}

export default SameDiffDropOff;
