import { Box, Typography } from "@mui/material";
import Inputs from "./Inputs";
import InputFooter from "./InputFooter";

export default function SignUp() {
  return (
    <Box
      sx={{
        width: "448px",
        height: "722px",
        gap: "48px",
        border: 2,
        top: "131px",
        left: "996px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
        Бүртгүүлэх
      </Typography>
      <Inputs />
      <InputFooter />
    </Box>
  );
}
