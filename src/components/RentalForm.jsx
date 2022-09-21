import { useState } from "react";

import SameDiff from "./eachInputs/SameDiffDropOff";
import Location from "./eachInputs/LocationInput";
import RentDateRangePicker from "./eachInputs/RentDateRangePicker";

import "./rentalForm.css";

function RentalForm() {
  const [isSame, setIsSame] = useState("Same");
  const width = isSame === "Same" ? "100%" : "auto";
  return (
    <form>
      <div className="flex inner-form-container column">
        <SameDiff setIsSame={setIsSame} isSame={isSame} />
        <div>
          <div
            style={{ display: "flex", width: "28rem" }}
            className="form-fields-container"
          >
            <Location label="From?" width={width} />
            {isSame === "Same" ? null : <Location label="To?" width={width} />}
          </div>
        </div>
      </div>
    </form>
  );
}

export default RentalForm;
