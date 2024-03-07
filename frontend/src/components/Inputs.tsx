"use client";
import { ChangeEvent, useState } from "react";
import { Box, Stack } from "@mui/material";
import Password from "./Password";
import InputMap from "./InputMap";

export default function Inputs() {
  return (
    <Box sx={{ width: "384px", height: "409px" }}>
      <Stack sx={{ width: "384px", height: "260px", gap: "4px" }}>
        <InputMap />
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Password />
        <Password />
      </Stack>
    </Box>
  );
}
