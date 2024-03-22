import React from "react";
import { Stack, Box } from "@mui/material";

import Image from "next/image";
type PropsType = {
  image: any;
  text: string;
  price: string;
};
export const Details = (props: PropsType) => {
  const { image, text, price } = props;
  return (
    <Stack
      sx={{
        width: "400px",
        height: "380px",

        justifyContent: "space-around",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Image
        alt=""
        src={image}
        width={358}
        height={255}
        style={{ borderRadius: "16px", boxShadow: "10px 20px 25px #D6D8DB" }}
      />
      <Stack sx={{}}>
        <Stack
          sx={{
            fontSize: "25px",
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
