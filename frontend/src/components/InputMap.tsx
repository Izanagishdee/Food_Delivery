"use client";
import { useState, ChangeEvent } from "react";
import Typography from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/material";

const signUpField = [
  { name: "Нэр", placeholder: "Нэрээ Оруулна Уу" },
  { name: "И-мэйл", placeholder: "И-мэйл хаягаа оруулна уу" },
  { name: "Хаяг", placeholder: "Та хаягаа Оруулна Уу" },
  //   { name: "Нууц үг", placeholder: "Нууц үгээ Оруулна Уу" },
  //   { name: "Нууц үг давтах", placeholder: "Нууц үгээ Оруулна Уу" },
];

export default function InputMap() {
  const [userData, setUserData] = useState({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData;
    ({ ...userData, [name]: value });
  };
  return (
    <FormControl
      component="form"
      sx={{ m: 0.5, width: "370px", height: "48px", gap: "4px" }}
      variant="outlined"
      noValidate
      autoComplete="off"
    >
      {signUpField.map(({ name, placeholder }, index) => (
        <Stack>
          {name}
          <TextField
            variant="outlined"
            key={index}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </Stack>
      ))}
    </FormControl>
  );
}
