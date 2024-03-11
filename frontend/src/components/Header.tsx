import { Box, Container } from "@mui/material";
import SearchButton from "./Search";
import HeaderButton from "./HeaderButton";
import Menu from "./Menu";

export default function Header() {
  return (
    <Box
      sx={{
        width: "2600px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ width: "720px" }}>
        <Menu />
      </Box>

      <Box
        sx={{
          width: "650px",
          height: "60px",
          gap: "8px",

          borderRadius: "8px",
          display: "flex",
          alignItems: "center ",
        }}
      >
        <SearchButton />
        <HeaderButton />
      </Box>
    </Box>
  );
}
