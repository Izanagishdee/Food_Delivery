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
        width: "400px",
        height: "400px        ",

        // flexBasis: 300,
        justifyContent: "space-around",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        border: 2,
      }}
    >
      <Stack sx={{ width: "282px", height: "186px", borderRadius: "16px" }}>
        <Image alt="" src={icon} layout="fill" />
      </Stack>
      <Stack sx={{}}>
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
