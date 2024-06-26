"use client";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useAmp } from "next/amp";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { push } = useRouter();
  const HandleClick = () => {
    push("/HomePage");
  };
  return (
    <Box
      sx={{
        width: "500px",
        height: "50px",
        gap: "8px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src="Logo.png" alt="" width={41} height={41} />
      <Button
        onClick={HandleClick}
        variant="text"
        sx={{
          width: "134px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          color: "black",
        }}
      >
        Нүүр
      </Button>
      <Button
        onClick={() => {
          push("/Menu");
        }}
        variant="text"
        sx={{
          width: "200px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          color: "black",
        }}
      >
        ХООЛНЫ ЦЭС
      </Button>
      <Button
        variant="text"
        sx={{
          width: "250px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          color: "black",
        }}
      >
        ХҮРГЭЛТИЙН БҮС
      </Button>
    </Box>
  );
}
