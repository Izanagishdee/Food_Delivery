"use client";
import { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/material";
import axios from "axios";
import { Sort } from "@mui/icons-material";

const signUpField = [
  { name: "name", placeholder: "Нэрээ Оруулна Уу", sort: "Нэр" },
  { name: "email", placeholder: "И-мэйл хаягаа оруулна уу", sort: "Нэр" },
  {
    name: "phone",
    placeholder: "Та утасны дугаараа оруулна Уу",
    sort: "Нэр",
  },
  //   { name: "Нууц үг", placeholder: "Нууц үгээ Оруулна Уу" },
  //   { name: "Нууц үг давтах", placeholder: "Нууц үгээ Оруулна Уу" },
];
type stateType = {
  name: string;
  email: string;
  phone: string;
};

export default function InputMap() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData);
  return (
    <FormControl
      component="form"
      sx={{ m: 0.5, width: "370px", height: "48px", gap: "4px" }}
      variant="outlined"
      noValidate
      autoComplete="off"
    >
      {signUpField.map(({ name, placeholder, sort }, index) => (
        <Stack>
          {sort}
          <TextField
            name={name}
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
