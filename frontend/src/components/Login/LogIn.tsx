"use client";
import * as React from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ChangeEvent } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { Label, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const handleForgetpass = () => {
    push("/forgetPass");
  };

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { push } = useRouter();

  const handleSign = () => {
    push("/signup");
  };

  const handleLogIn = async () => {
    try {
      const data = await axios.post("http://localhost:8000/login", userData);
      if (data === null) {
        setError("Incorrect email or password");
      } else {
        localStorage.setItem(`tokenFood`, data.data.user);

        push("/HomePage");
      }
    } catch (error: any) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "fit",
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
              name="email"
              sx={{ m: 0.5, width: "370px", height: "48px" }}
              placeholder="И-мэйл хаягаа оруулна уу"
              onChange={handleChange}
            />
          </Box>
          <Stack sx={{ mt: "20px", ml: "10px" }}>
            <Box sx={{ fontFamily: "sans-serif" }}>Нууц үг</Box>
            <FormControl sx={{ width: "370px" }} variant="outlined">
              <OutlinedInput
                sx={{
                  borderRadius: "4px",
                  borderColor: "grey",
                }}
                id="outlined-adornment-password"
                placeholder="Нууц үгээ оруулна уу"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {error && <div>email or password wrong</div>}
          </Stack>

          <Button
            onClick={handleForgetpass}
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
            onClick={handleLogIn}
            sx={{
              width: "384px",
              height: "48px",
              justifyContent: "center",
              alignItems: "center",
              border: 2,
              borderColor: "#18BA51",
              color: "#18BA51",
              backgroundColor: "#18BA51",
            }}
          >
            <Typography> Нэвтрэх</Typography>
          </Button>
          <Typography>Эсвэл</Typography>
          <Button
            onClick={handleSign}
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
