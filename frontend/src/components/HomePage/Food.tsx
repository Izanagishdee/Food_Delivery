"use client";

import { MouseEvent, useState } from "react";
import { Details } from "./Details";

import Button from "@mui/material/Button";

import { Stack, Box } from "@mui/material";
import Image from "next/image";

import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "961px",
  height: "524px",
  gap: "20px",
  p: 1,
  borderRadius: "16px",
  backgroundColor: "white",
};

type AllFoodsProps = {
  foods: FoodType[];
};

export const Food = ({ foods }: AllFoodsProps) => {
  const [foundFood, setFoundFood] = useState<FoodType | null>(null);
  const [open, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);
  let [count, setCount] = useState(1);
  const handleModalClick = () => setOpenModal(!open);

  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;
    const filteredFood = foods.find(({ _id }) => _id === foodId);
    handleModalClick();
    setFoundFood(filteredFood as FoodType);
  };

  const [all, setAll] = useState(8);
  const [moreButton, setMoreButton] = useState(true);

  const handleMore = () => {
    if (moreButton) {
      setAll(foods.length);
      setMoreButton(false);
    } else {
      setAll(8);
      setMoreButton(true);
    }
  };
  const handleCount = () => {
    count = count + 1;
    setCount(count);
  };
  const handleMinus = () => {
    count = count - 1;
    if ((count <= 0)) {
      count = 1;
    }
    setCount(count);
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "80%",
          justifyContent: "space-between",
          paddingLeft: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image alt="" src="/Star 1.png" width={40} height={40} />
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Main Foods
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            color: "#18BA51",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            paddingLeft: "100px",
          }}
          onClick={handleMore}
        >
          {moreButton ? `See all ${"    "} >` : `< ${"     "} Undo`}
        </Box>
         
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "10px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          width: "80%",
          paddingLeft: "90px",
        }}
      >
        {foods?.slice(0, all).map((el: FoodType, index: number) => (
          <div
            style={{ width: "400px" }}
            key={index}
            onClick={handleFoodClick}
            id={el._id}
          >
            <Details image={el.image} text={el.name} price={el.price} />
          </div>
        ))}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <Stack direction="row" sx={{ padding: "10px" }}>
            <div
              style={{ width: "505px", height: "502px", position: "relative" }}
            >
              {foundFood?.image && (
                <Image
                  src={foundFood?.image}
                  alt=""
                  layout="fill"
                  style={{ borderRadius: "6px" }}
                />
              )}
            </div>
            <Stack sx={{ gap: "60px", paddingLeft: "30px" }}>
              <div
                style={{
                  width: "370px",
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{ position: "absolute", right: "10px" }}
                  onClick={handleClose}
                >
                  <ClearIcon />
                </div>
              </div>
              <Stack sx={{}}>
                <div
                  style={{
                    fontSize: "40px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {foundFood?.name}
                </div>
                <div
                  style={{
                    fontSize: "29px",
                    fontFamily: "sans-serif",

                    color: "#18BA51",
                  }}
                >
                  {foundFood?.price} ₮
                </div>
              </Stack>
              <Stack>
                <div style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                  Орц
                </div>
                <div
                  style={{
                    width: "86%",
                    backgroundColor: "#f6f6f6",
                    height: "40px",
                    padding: "5px 5px",
                    borderRadius: "6px",
                    marginTop: "7px",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  {foundFood?.ingredients}
                </div>
              </Stack>
              <Stack sx={{ gap: "10px" }}>
                <div style={{ fontFamily: "sans-serif" }}>Тоо</div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    onClick={handleMinus}
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "black",
                      borderRadius: "6px",
                      border: 2,
                    }}
                  >
                    -
                  </Button>
                  <div style={{ fontFamily: "sans-serif" }}>{count}</div>
                  <Button
                    onClick={handleCount}
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "black",
                      borderRadius: "6px",
                      border: 2,
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  sx={{
                    backgroundColor: "#18BA51",
                    color: "black",
                    borderRadius: "4px",
                    border: 2,
                  }}
                >
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};
