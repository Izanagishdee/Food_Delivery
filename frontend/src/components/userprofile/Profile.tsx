"use client";
import React, { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import { Inputs } from "./Inputs";
import { useData } from "../Provider/DataProvider";
import { useRouter } from "next/navigation";

export const Profile = () => {
  const { userData } = useData();
  const firstLetter = userData?.name.charAt(0);
  const [editing, setEditing] = useState(false);
  const { push } = useRouter();
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("tokenFood");
    push("/");
  };

  return (
    <Stack sx={{}}>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        sx={{ height: "100vh", width: "100vw", marginTop: "200px" }}
      >
        <Grid
          direction="column"
          sx={{
            display: "flex",
            height: "422px",
            width: "448px",
            paddingBottom: "22px",
            paddingTop: "2px",
            gap: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: "200px", height: "200px", fontSize: "80px" }}>
              {firstLetter}
            </Avatar>
          </Box>
          <Box>
            <Inputs value={userData?.name} label="Name" editable={editing} />
            <Inputs value={userData?.phone} label="Phone" editable={editing} />
            <Inputs value={userData?.email} label="Email" editable={editing} />
          </Box>
          {editing ? (
            <Button sx={{ border: 2 }} onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button sx={{ border: 2 }} onClick={handleEditClick}>
              Edit
            </Button>
          )}
          <Button sx={{ border: 2 }} onClick={handleLogout}>
            Log out
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
