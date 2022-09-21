import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import SameDiff from "./eachInputs/SameDiffDropOff";
import Location from "./eachInputs/LocationInput";
import RentDateRangePicker from "./eachInputs/RentDateRangePicker";
import { pink } from "@mui/material/colors";

import "./rentalForm.css";

function RentalForm() {
  const [isSame, setIsSame] = useState("Same");
  const width = isSame === "Same" ? "100%" : "50%";
  return (
    <form>
      <div className="flex inner-form-container column">
        <SameDiff setIsSame={setIsSame} isSame={isSame} />
        <div className="form-fields-container flex">
          <div
            style={{ display: "flex" }}
            className="location-fields-container"
          >
            <Location label="From?" width={width} />
            {isSame === "Same" ? null : <Location label="To?" width={width} />}
          </div>
          <div className="date-search-container flex">
            <RentDateRangePicker />
            <div className="btn flex" role="button">
              <SearchOutlinedIcon fontSize="large" sx={{ color: pink[200] }} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RentalForm;
