import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const FancySearchBar = () => {
  return (
    <TextField
      variant="standard"
      fullWidth
      placeholder=""
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          color: "white", // Set text color to white
          "& .MuiInputAdornment-root": {
            color: "white", // Icon color
          },
          "& .MuiIconButton-root": {
            color: "white", // Icon color
            "&:hover": {
              backgroundColor: "transparent", // Transparent background on hover
            },
          },
          "&::placeholder": {
            color: "white", // Set placeholder color to white
          },
          "&:hover": {
            "& fieldset": {
              borderColor: "white !important", // Set border color to white on hover
            },
          },
        },
      }}
    />
  );
};

export default FancySearchBar;
