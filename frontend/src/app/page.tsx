import Image from "next/image";
import SignUp from "@/components/SignUp";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <SignUp />
    </Box>
  );
}
