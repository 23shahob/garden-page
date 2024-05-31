import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const RangeSlider = () => {
  const [range, setRange] = useState([39, 1230]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <Box>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={39}
        max={2000}
        sx={{
          "& .MuiSlider-thumb": {
            color: "#46A358",
          },
          "& .MuiSlider-track": {
            color: "#46A358",
          },
          "& .MuiSlider-rail": {
            color: "#D3D3D3",
          },
        }}
      />
      <Box mt={2}>
        <Typography
          variant="body1"
          className="text-[15px] leading-4 text-[#3D3D3D]"
        >
          Price:{" "}
          <span className="font-bold text-[#46A358]">
            ${range[0]} - ${range[1]}
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default RangeSlider;
