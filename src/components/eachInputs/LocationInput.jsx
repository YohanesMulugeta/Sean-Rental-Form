import * as React from "react";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import "./loction.css";

export default function Location({ label, width }) {
  return (
    <FormControl sx={{ m: 1, width: width }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        style={{
          height: "40px",
          fontWeight: "400",
          fontSize: "14px",
          backgroundColor: "rgb(240,243,245)",
          borderRadius: "5px",
        }}
        id="outlined-adornment-password"
        startAdornment={
          <InputAdornment position="start">
            <DirectionsCarIcon style={{ fontSize: "30px" }} />
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}
