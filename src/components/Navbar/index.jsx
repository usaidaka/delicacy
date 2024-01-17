import * as React from "react";
import Box from "@mui/material/Box";
import classes from "./style.module.scss";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar({ setMyMode, categories, setter, action }) {
  return (
    <>
      {/* Desktop */}

      <Box className={classes["tab-desktop"]}>
        {categories.map((category) => (
          <Button
            key={category.idCategory}
            value={category.idCategory}
            label={category.strCategory}
            color="inherit"
            sx={{ color: "#969696" }}
            onClick={() => {
              setter(category.strCategory);
              action();
            }}
          >
            {category.strCategory}
          </Button>
        ))}
        <Button
          value={"favorite"}
          label={"favorite"}
          color="inherit"
          sx={{ color: "#969696" }}
        >
          <Link to="/favorite">Favorite</Link>
        </Button>
      </Box>
      {/* Mobile */}

      <Box className={classes["tab-mobile"]}>
        {categories.map((category) => (
          <Button
            key={category.idCategory}
            value={category.idCategory}
            label={category.strCategory}
            color="inherit"
            sx={{ color: "#969696" }}
            onClick={(e) => {
              setter(category.strCategory);
              action();
            }}
          >
            {category.strCategory}
          </Button>
        ))}
        <Button
          value={"favorite"}
          label={"favorite"}
          color="inherit"
          sx={{ color: "#969696" }}
        >
          <Link to="/favorite">Favorite</Link>
        </Button>
      </Box>
    </>
  );
}
