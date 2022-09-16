import * as React from "react";
import { useTheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dropOffChoices = ["Same", "Different"];

function SelectDropOffLocation({ setIsSame }) {
  const [dropOffLoc, setDropOffLoc] = React.useState(dropOffChoices[0]);
  const theme = useTheme();

  const handleChange = (event) => {
    const value = event.target.value;
    if (dropOffLoc === value) return;

    setDropOffLoc(value);
    setIsSame(value === dropOffChoices[0]);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dropOffLoc}
          onChange={handleChange}
          label="Age"
          style={{
            fontSize: "13px",
            fontWeight: theme.typography.fontWeightLight,
          }}
        >
          {dropOffChoices.map((loc) => {
            return (
              <MenuItem
                key={loc}
                value={loc}
                style={{
                  fontWeight:
                    loc === dropOffLoc
                      ? theme.typography.fontWeightMedium
                      : theme.typography.fontWeightLight,
                  fontSize: "14px",
                }}
              >
                {loc} drop-off
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectDropOffLocation;
