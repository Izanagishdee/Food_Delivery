import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function HeaderButton() {
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
        <PersonOutlineIcon sx={{ fontSize: 30 }} />
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          Нэвтрэх
        </Typography>
      </Button>
    </Box>
  );
}