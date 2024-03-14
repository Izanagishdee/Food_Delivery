"use client";
import { ChangeEvent, useState } from "react";
import { Box, Stack, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { InputPass } from "./InputPass";

const signUpField = [
  { name: "name", placeholder: "Нэрээ Оруулна Уу", sort: "Нэр" },
  { name: "email", placeholder: "И-мэйл хаягаа оруулна уу", sort: "И-мэйл" },
  {
    name: "phone",
    placeholder: "Та утасны дугаараа оруулна Уу",
    sort: "Утасны дугаар",
  },
  //   { name: "Нууц үг", placeholder: "Нууц үгээ Оруулна Уу" },
  //   { name: "Нууц үг давтах", placeholder: "Нууц үгээ Оруулна Уу" },
];
const fieldForPassword = [
  { sort: "Нууц үг", name: "password", placeHolder: "Нууц үгээ оруулна уу" },
  {
    sort: "Нууц үг давтах",
    name: "repassword",
    placeHolder: "Нууц үгээ оруулна уу",
  },
];

type handletype = {
  handleChange: any;
};

export default function Inputs(props: handletype) {
  const { handleChange } = props;

  return (
    <Box sx={{ width: "384px", height: "409px" }}>
      <Stack sx={{ width: "384px", height: "fit", gap: "4px" }}>
        <Grid sx={{}}>
          {signUpField.map(({ name, placeholder, sort }, index) => (
            <Stack sx={{ marginBottom: "15px" }}>
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
          {fieldForPassword.map((field, index) => (
            <InputPass
              key={index}
              text={field.sort}
              name={field.name}
              handleChange={handleChange}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
