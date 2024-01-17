import { Box, Button, Typography } from "@mui/material";
import React from "react";
import classes from "./style.module.scss";

const CardRecipes = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes["img-container"]}></Box>
      <Box className={classes["content-container"]}>
        <Typography mb={2} variant="body1" color="initial">
          Beef
        </Typography>
        <Button size="small">Remove Favorite</Button>
      </Box>
    </Box>
  );
};

export default CardRecipes;
