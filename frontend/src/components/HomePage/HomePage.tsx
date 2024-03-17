import { Stack } from "@mui/material";
import CardMap from "../Maps/CardMap";

export default function MainMenu() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <img src="MainPart.png" alt="" width={1440} height={788} />
      </Stack>
      <CardMap />
    </Stack>
  );
}
