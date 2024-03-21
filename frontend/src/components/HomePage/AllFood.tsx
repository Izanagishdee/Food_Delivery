"use client";
import { Stack, Box } from "@mui/material";
import axios from "axios";
import React from "react";

import { Food } from "./Food";
import Image from "next/image";

const AllFoods = async () => {
  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8000/Foods"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

type OpenModelType = {
  handleOpen: () => void;
};

export const AllFood = async (props: OpenModelType) => {
  const data = await AllFoods();

  return (
    <Stack
      sx={{
        padding: "20px 30px",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Food foods={data as FoodType[]} />
      </Stack>
    </Stack>
  );
};
