import { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./sameDiff.css";

const selections = ["Same", "Different"];

function SameDiffDropOff() {
  const [selectedDrop, setSelectedDrop] = useState({
    renderedValue: "Same",
    value: "Same",
  });

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

  function renderStr(val) {
    return `${val} drop-off`;
  }

  function renderList() {
    return selections.map((selection) => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const txt = renderStr(selection);
      return (
        <li
          key={selection}
          data-rendered={selection}
          data-value={selection}
          onClick={(e) => {
            setSelectedDrop({
              renderedValue: e.target.dataset.rendered,
              value: e.target.dataset.value,
            });
            selectionRef.current.classList.add("hidden-container");
          }}
          className={`selection ${
            selection === selectedDrop.value ? "selected" : ""
          }`}
        >
          {txt}
        </li>
      );
    });
  }

  function handleClick() {
    selectionRef.current.classList.remove("hidden-container");
    selectionRef.current.classList.add("active");
  }

  return (
    <div className="dropDown-contaienr relative">
      <div className="button-container" onClick={handleClick}>
        <button className="select-dropOff">
          {renderStr(selectedDrop.renderedValue)}
        </button>
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
