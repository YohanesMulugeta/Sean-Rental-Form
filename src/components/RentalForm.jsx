import { useEffect, useState, useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { addDays } from "date-fns";
import { pink } from "@mui/material/colors";

import {
  MAUIAIR,
  KAANAPALI,
  KAPALUA,
  KIHEI,
  WAILEA,
  LAHAINA,
  createLink,
} from "../defaults";

import SameDiff from "./eachInputs/SameDiffDropOff";
import Location from "./eachInputs/LocationInput";
import RentDateRangePicker from "./eachInputs/RentDateRangePicker";

import "./rentalForm.css";
/*

Thu Nov 10 2022 00:00:00 GMT+0300 (East Africa Time)
*/

function RentalForm() {
  const [dateState, setDateState] = useState([
    {
      startDate: addDays(new Date(), 30),
      endDate: addDays(new Date(), 31),
      key: "selection",
      pickTime: "1200AM",
      dropTime: "1200AM",
    },
  ]);

  const times = useRef();

  const [isSame, setIsSame] = useState("Same");
  const width = isSame === "Same" ? "100%" : "50%";

  function handleClick() {
    const link = createLink(MAUIAIR, {
      ...dateState[0],
      pickTime: times.current[0].dataset.time,
      dropTime: times.current[1].dataset.time,
    });

    window.open(link, "_blank");
  }

  useEffect(() => {
    times.current = document.querySelectorAll(".select-time");
  }, []);

  return (
    <form>
      <div className="flex inner-form-container column">
        <SameDiff setIsSame={setIsSame} isSame={isSame} />
        <div className="form-fields-container flex">
          <div
            style={{ display: "flex" }}
            className="location-fields-container"
          >
            <Location
              handleClick={handleClick}
              label="Pick-up location"
              fromValue={MAUIAIR}
              width={width}
            />
            {isSame === "Same" ? null : (
              <Location
                handleClick={handleClick}
                label="Drop-off location"
                width={width}
              />
            )}
          </div>
          <div className="date-search-container flex">
            <RentDateRangePicker
              dateState={dateState}
              setDateState={setDateState}
            />
            <div
              className="btn flex"
              role="button"
              onClick={handleClick}
              style={{
                fontWeight: "bold",
                color: "#fff",
                paddingLeft: "15px",
                letterSpacing: "0.8px",
              }}
            >
              Search{" "}
              <SearchOutlinedIcon fontSize="large" sx={{ color: pink[200] }} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RentalForm;
