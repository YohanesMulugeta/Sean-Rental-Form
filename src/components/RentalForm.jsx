import { useState } from "react";
import SelectDropOffLocation from "./eachInputs/DropOff";
import Location from "./eachInputs/Location";

function RentalForm() {
  const [isSame, setIsSame] = useState(true);
  const width = isSame ? "100%" : "auto";
  return (
    <form>
      <SelectDropOffLocation setIsSame={setIsSame} />
      <div style={{ display: "flex", width: "30rem" }}>
        <Location label="From" width={width} />
        {isSame ? null : <Location label="To" width={width} />}
      </div>
    </form>
  );
}

export default RentalForm;
