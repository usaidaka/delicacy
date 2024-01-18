import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

const CardRecipes = ({ data, action }) => {
  const path = useLocation();

  return (
    <Box className={classes.container}>
      <Link
        to={`/product-detail/${data.idMeal}`}
        className={classes["img-container"]}
      >
        <img src={data.strMealThumb} alt="" />
      </Link>
      <Box className={classes["content-container"]}>
        <Typography mb={2} variant="body1" color="initial" align="center">
          {data.strMeal}
        </Typography>
        {path.pathname === "/favorite" && (
          <Button size="small" onClick={() => action(data.idMeal)}>
            Remove Favorite
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CardRecipes;
