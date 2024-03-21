import { Box, Container, Stack } from "@mui/material";
import SearchButton from "./Search";
import HeaderButton from "./HeaderButton";
import Menu from "./Menu";


export default function Header() {
;
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
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
      </Stack>
    </Stack>
  );
}
