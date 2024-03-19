import React from "react";
import { Stack, Box } from "@mui/material";

import Image from "next/image";
type PropsType = {
  icon: any;
  text: string;
  price: string;
};
export const Details = (props: PropsType) => {
  const { icon, text, price } = props;
  return (
    <Stack
      sx={{
        width: "fit",
        height: "300px",

        // flexBasis: 300,
        justifyContent: "space-around",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <Stack sx={{ width: "285px", height: "186px", borderRadius: "16px" }}>
        <img src={icon} width={286} height={186} />
      </Stack>
      <Stack sx={{ width: "286px", height: "56px" }}>
        <Stack
          sx={{
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontWeight: "semi-bold",
            marginBottom: "7px",
          }}
        >
          {text}
        </Stack>
        <Stack
          sx={{
            fontSize: "25px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#18BA51",
          }}
        >
          {price}₮
        </Stack>
      </Stack>
    </Stack>
  );
};
