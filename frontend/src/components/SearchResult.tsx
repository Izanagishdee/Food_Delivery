import { Stack } from "@mui/material";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type IntrinsicAttributes = any;

type Foods = {
  data: FoodType[] & IntrinsicAttributes;
};

export default function SearachResult(props: Foods) {
  const { data } = props;

  return (
    <div>
      {data?.length > 0 ? (
        <Stack
          direction="row"
          sx={{
            width: "1200px",
            height: "1344px",
            display: "flex",
            flexWrap: "wrap",
            gap: "17px",
          }}
        >
          {data?.map((el: FoodType, index: number) => (
            <Stack sx={{ width: "286px", height: "256px", gap: "14px" }}>
              <Box
                sx={{
                  width: "282px",
                  height: "186px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              >
                {" "}
                <img src={el.image} width="full" height="full" />
              </Box>

              <Stack
                sx={{
                  height: "56px",
                  gap: "2px",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  sx={{ color: "black", fontSize: "18px", fontWeight: "600" }}
                >
                  {el.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#18BA51",
                  }}
                >
                  {el.price}₮
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "170px 100px",
          }}
        >
          <Image alt="" src="/box.png" width={133} height={133} />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", color: "#8B8E95" }}
          >
            Уучлаарай илэрц олдсонгүй...
          </Typography>
        </Stack>
      )}
    </div>
  );
}
