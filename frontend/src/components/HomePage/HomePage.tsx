"use client";
import { Stack } from "@mui/material";
import { CardMap } from "../Maps/CardMap";
import { AllFood } from "./AllFood";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Stack
      sx={{
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "100px",
      }}
    >
      <Stack sx={{ width: "1440px", height: "778px", position: "relative" }}>
        {/* <Image src="MainPart.png" alt="" layout="fill" /> */}
        <Image src="/MainPart.png" alt="" fill style={{ flexShrink: 0 }} />
      </Stack>
      <CardMap />
      <AllFood handleOpen={handleOpen} />
    </Stack>
  );
}
