import { Box, Typography, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

export default function LogIn() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "448px",
          height: "549px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
          Нэвтрэх
        </Typography>
        <Stack sx={{ gap: "18px", width: "384px", height: "fit" }}>
          <Box
            component="form"
            sx={{ m: 0.5, width: "380px", height: "48px" }}
            noValidate
            autoComplete="off"
          >
            <Typography sx={{ paddingLeft: "6px" }}>И-мэйл</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ m: 0.5, width: "370px", height: "48px" }}
              placeholder="И-мэйл хаягаа оруулна уу"
            />
          </Box>
          <Box sx={{ paddingTop: "16px" }}>
            <Typography sx={{ paddingLeft: "6px" }}>Нууц үг</Typography>
          </Box>

          <Button
            sx={{
              fontSize: "12px",
              width: "384px",
              height: "fit",
              paddingLeft: "250px",
              color: "black",
            }}
          >
            Нууц үг сэргээх
          </Button>
        </Stack>
        <Stack
          sx={{
            width: "384px",
            height: "fit",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: "384px",
              height: "48px",
              justifyContent: "center",
              alignItems: "center",
              border: "1px",
              borderColor: "#EEEFF2",
            }}
          >
            <Typography> Нэвтрэх</Typography>
          </Button>
          <Typography>Эсвэл</Typography>
          <Button
            variant="text"
            sx={{
              width: "384px",
              height: "48px",
              justifyContent: "center",
              alignItems: "center",
              border: 2,
              borderColor: "#18BA51",
              color: "#18BA51",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
