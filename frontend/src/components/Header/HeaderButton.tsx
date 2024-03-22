"use client";

import { Box, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useData } from "../Provider/DataProvider";

import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function HeaderButton() {
  const { push } = useRouter();
  const { userData } = useData();

  const handlerClick = () => {
    if (!userData) {
      push("/login");
    } else {
      push("./UserProfile");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="text"
        sx={{
          width: "102px",
          height: "40px",
          gap: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          color: "black",
        }}
      >
        <ShoppingBasketIcon sx={{ fontSize: 30 }} />
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>Сагс</Typography>
      </Button>
      {userData ? (
        <Button
          onClick={handlerClick}
          variant="text"
          sx={{
            width: "102px",
            height: "40px",
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "600",
            color: "green",
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: 30 }} />
          <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
            {userData.name}
          </Typography>
        </Button>
      ) : (
        <Button
          onClick={handlerClick}
          variant="text"
          sx={{
            width: "102px",
            height: "40px",
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "600",
            color: "black",
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: 30 }} />
          <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
            Нэвтрэх
          </Typography>
        </Button>
      )}
    </Box>
  );
}
