import { Box, Typography } from "@mui/material";
import classes from "./style.module.scss";
import React from "react";
import ingredient from "../../assets/ingredient.svg";

const CardIngredient = ({ name = "salt", composition = "1 spoon" }) => {
  return (
    <Box className={classes["ingredient-wrapper"]}>
      <Box className={classes["box-ingredient"]}>
        <img src={ingredient} alt="" />
      </Box>
      <Box>
        <Typography variant="body1">{name}</Typography>
        <Typography color={"text.secondary"} variant="body2">
          {composition}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardIngredient;
