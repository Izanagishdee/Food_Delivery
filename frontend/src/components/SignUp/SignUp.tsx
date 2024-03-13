"use client";
import { Box, Typography, Stack } from "@mui/material";
import Inputs from "./Inputs";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ChangeEvent, useState } from "react";
type stateType = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function SignUp() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, stPhone] = useState("");
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<stateType>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  // console.log(userData);
  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      // if (password !== repassword) {
      //   return "Password is not match";
      // }
      const { data } = await axios.post("http://localhost:8000/signup", {
        userData,
      });
      console.log(data);

      // push("/login");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };
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
          height: "722px",
          gap: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
          Бүртгүүлэх
        </Typography>
        <Inputs handleChange={handleChange} />
        <Box
          sx={{
            width: "384px",
            height: "120px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
          <Button
            variant="text"
            onClick={handleClick}
            sx={{
              width: "384px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "600",
              border: 2,
            }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
