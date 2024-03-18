import Login from "./login/page";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Login />
    </Box>
  );
}
