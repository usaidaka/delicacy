import { Box, Typography } from "@mui/material";
import classes from "./style.module.scss";
import React from "react";
import ingredient from "../../assets/ingredient.svg";

const CardIngredient = ({ ingredientName = "salt", measure = "1 spoon" }) => {
  return (
    <Box className={classes["ingredient-wrapper"]}>
      <Box className={classes["box-ingredient"]}>
        <img src={ingredient} alt="" />
      </Box>
      <Box>
        <Typography variant="body1">{ingredientName}</Typography>
        <Typography color={"text.secondary"} variant="body2">
          {measure}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardIngredient;
