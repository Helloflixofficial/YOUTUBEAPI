import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import {Search} from "@mui/icons-material"
const Searchbar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: "20",
      color: "red",
      border: "1px solid #e3e3e3",
      pl: "2",
      boxShadow: "none",
      mr: { sm: "5" },
    }}
  >
    <input
      className="search-bar"
      placeholder="search.."
      value=""
      onChange={() => {}}
    />
    <IconButton
      tyep="submit"
      sx={{ padding: "10px", color: "red" }}>
        <Search />
      </IconButton>
  </Paper>
);

export default Searchbar;
