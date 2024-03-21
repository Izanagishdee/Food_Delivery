"use client";

import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SearchContext } from "../Provider/SeachProvider";

export default function Search() {
  const { search, setSearch } = useContext(SearchContext);
  const { push } = useRouter();

  const handlerSearch = () => {
    if (search === "") {
      push("/HomePage");
    } else {
      push(`/search?id=${search}`);
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handlerSearch}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Хайх"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Paper>
  );
}
