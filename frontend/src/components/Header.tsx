import { Box, Container } from "@mui/material";
import SearchButton from "./Search";
import HeaderButton from "./HeaderButton";
import Menu from "./Menu";

export default function Header() {
  return (
    <Container
      sx={{
        width: "1600px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
    </Container>
  );
}
