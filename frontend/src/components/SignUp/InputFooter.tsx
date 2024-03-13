"use client";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function InputFooter() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [username, setUsername] = useState("");

  const { push } = useRouter();
  const handleClick = async () => {
    try {
      const result = await axios.post("http://localhost:8000/signup", {
        username: username,
        email: mail,
        password: password,
      });
      // push("/login");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  return (
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
  );
}
