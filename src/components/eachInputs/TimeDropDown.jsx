import React, { useEffect, useRef, useState } from "react";

import "./timeDropDown.css";

const times = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const amPmSelection = { am: "AM", pm: "PM" };

function TimeDropDown({ id }) {
  const timeRef = useRef();

  const [selectedTime, setSelectedTime] = useState({
    time: "1200PM",
    renderValue: "Noon",
  });
  const [isSelectionVisible, setIsSelectionVisible] = useState(false);

  useEffect(() => {
    function handleOuterClick(e) {
      if (!e.target.closest(`.${id}`)) setIsSelectionVisible(false);
    }
    window.addEventListener("click", handleOuterClick);

    return () => window.removeEventListener("click", handleOuterClick);
  }, [id]);

  useEffect(() => {
    if (isSelectionVisible)
      document
        .querySelector(`.${id}`)
        .querySelector(".selected-time")
        .scrollIntoView({ behavior: "smooth" });
  }, [isSelectionVisible, id]);

  function renderTimeSelections(amPm) {
    return times.map((time) => {
      const renderValue =
        time === 12
          ? amPm === "PM"
            ? "Noon"
            : "Midnight"
          : `${time}:00 ${amPm.toLowerCase()}`;

      const dataTime = `${time}00${amPm}`;

      return (
        <li
          onClick={(e) => {
            setSelectedTime({
              time: e.target.dataset.time,
              renderValue: e.target.dataset.rendervalue,
            });

            setIsSelectionVisible(false);
          }}
          data-time={dataTime}
          data-rendervalue={renderValue}
          className={`${
            dataTime === selectedTime.time ? "selected-time" : null
          } time-selection`}
          key={time + amPm}
        >
          {renderValue}
        </li>
      );
    });
  }

  return (
    <div className={`${id} time-selection-container relative`}>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSelectionVisible(true);
          }}
          className="select-time"
        >
          {selectedTime.renderValue}
        </button>
      </div>
      <div
        className={`${
          isSelectionVisible ? "" : "hidden"
        } time-list-container absolute`}
        ref={timeRef}
      >
        <ul className="time-lists">
          {renderTimeSelections(amPmSelection.am)}
          {renderTimeSelections(amPmSelection.pm)}
        </ul>
      </div>
    </div>
  );
}

export default TimeDropDown;
