import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { addDays } from "date-fns";
import { pink } from "@mui/material/colors";

import SameDiff from "./eachInputs/SameDiffDropOff";
import Location from "./eachInputs/LocationInput";
import RentDateRangePicker from "./eachInputs/RentDateRangePicker";

import "./rentalForm.css";
/*
https://www.expedia.com/carsearch?locn=Kahului+%28OGG+-+Kahului%29&loc2=&date1=10%2F14%2F2022&date2=10%2F21%2F2022&d1=2022-10-14&d2=2022-10-21&aarpcr=off&vend=&pickupIATACode=OGG&dpln=4671311&returnIATACode=&drid1=&time1=1030AM&time2=1030AM&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage

Thu Nov 10 2022 00:00:00 GMT+0300 (East Africa Time)
*/

function RentalForm() {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

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
            <Location label="Pick-up location" width={width} />
            {isSame === "Same" ? null : (
              <Location label="Drop-off location" width={width} />
            )}
          </div>
          <div className="date-search-container flex">
            <RentDateRangePicker
              dateState={dateState}
              setDateState={setDateState}
            />
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
