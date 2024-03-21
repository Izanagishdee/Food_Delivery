"use client";

import React from "react";
import SearachResult from "@/components/SearchResult";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const getFoods = async () => {
  const params = useSearchParams();
  const id = params.get("id");

  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };

  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8000/Foods",
      body
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function searchPage() {
  const data = await getFoods();

  return (
    <Stack
      sx={{
        width: "1200px",
        margin: "auto",
        marginTop: "75px",
        marginBottom: "100px",
      }}
    >
      <SearachResult data={data} />
    </Stack>
  );
}
