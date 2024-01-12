import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const ZigzagLine = ({ style }) => (
  <SvgIcon style={style} viewBox="0 0 800 160">
    <path
      d="M 0,80 L 160,40 L 320,120 L 480,40 L 640,120 L 800,40"
      fill="none"
      stroke="#f5f5f5"
      strokeWidth="100"
    />
  </SvgIcon>
);

export default ZigzagLine;
