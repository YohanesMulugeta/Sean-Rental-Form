import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "../../mod";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./rentalDatePicker.css";

function RentDateRangePicker() {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [, setIsVertical] = useState();

  const calendarRef = useRef();
  const endDateBtn = useRef();
  const startDateBtn = useRef();
  const nextPrevMonthBtns = useRef({});
  const isVerticalRef = useRef(false);

  function removeActiveButtonStyle() {
    document
      .querySelector(".rdrDateDisplayItemActive")
      ?.classList.remove("rdrDateDisplayItemActive");
  }

  function removeHidden(e) {
    e.target.closest(".rdrDateInput").classList.add("rdrDateDisplayItemActive");
    calendarRef.current.classList.remove("hiddenCalendar");

    Object.values(nextPrevMonthBtns.current).forEach((btn) => {
      const calendarHeight = parseFloat(
        getComputedStyle(calendarRef.current).height
      );
      setTimeout(() => {
        btn.style.top = `${calendarHeight / 2 + 57}px`;
        btn.classList.remove("hiddenCalendar");
      }, 300);
    });
  }

  function addHidden() {
    setTimeout(() => {
      calendarRef.current.classList.add("hiddenCalendar");
      removeActiveButtonStyle();
    });

    Object.values(nextPrevMonthBtns.current).forEach((btn) => {
      btn.classList.add("hiddenCalendar");
    });
  }

  function initResize() {
    const body = document.body;

    const bodyWidthObserver = new ResizeObserver(([entry]) => {
      const bodyWidth = entry.contentRect.width;
      if (!isVerticalRef.current && bodyWidth <= 670) {
        isVerticalRef.current = true;
        addHidden();
        setIsVertical(isVerticalRef.current);
      }
      if (isVerticalRef.current && bodyWidth > 670) {
        console.log(bodyWidth);
        isVerticalRef.current = false;
        addHidden();
        setIsVertical(isVerticalRef.current);
      }
    });

    bodyWidthObserver.observe(body);
  }

  useLayoutEffect(() => {
    removeActiveButtonStyle();

    initResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startDateBtn.current = document.querySelector(".start-date");
    endDateBtn.current = document.querySelector(".end-date");

    nextPrevMonthBtns.current.nextMonth = document.querySelector(".nextMonth");
    nextPrevMonthBtns.current.prevMonth = document.querySelector(".prevMonth");

    startDateBtn.current.addEventListener("click", removeHidden);
    endDateBtn.current.addEventListener("click", removeHidden);

    function handleOutsideClick(e) {
      if (
        !e.target.closest(".rdrDateRangePickerWrapper") ||
        e.target.closest(".select-time")
      )
        addHidden();
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      startDateBtn.current.removeEventListener("click", removeHidden);

      endDateBtn.current.removeEventListener("click", removeHidden);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function cahngeHandler(item) {
    setDateState([item.selection]);

    if (!endDateBtn.current.classList.contains("rdrDateDisplayItemActive"))
      return;

    addHidden();
  }

  return (
    <div style={{ display: "flex" }}>
      <DateRangePicker
        calendarRef={calendarRef}
        onChange={cahngeHandler}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={dateState}
        direction={isVerticalRef.current ? "vertical" : "horizontal"}
        showMonthAndYearPickers={false}
        minDate={new Date()}
      />
    </div>
  );
}

export default RentDateRangePicker;
