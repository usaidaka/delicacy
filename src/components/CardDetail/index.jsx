import { Box, Typography, Button } from "@mui/material";
import React from "react";
import classes from "./style.module.scss";

import CardIngredient from "../CardIngredient";

const CardDetail = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes["text-container"]}>
          <Box className={classes["text-wrapper"]}>
            {/* Deskripsi */}
            <Box className={classes["text-description"]}>
              <Typography className={classes.title} variant="h5">
                Baked salmon with fennel & tomatoes
              </Typography>
              <Typography className={classes.desc} variant="body2">
                "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the
                fennel and set aside. Cut the fennel bulbs in half, then cut
                each half into 3 wedges. Cook in boiling salted water for 10
                mins, then drain well. Chop the fennel fronds roughly, then mix
                with the parsley and lemon zest.\r\n\r\nSpread the drained
                fennel over a shallow ovenproof dish, then add the tomatoes.
                Drizzle with olive oil, then bake for 10 mins. Nestle the salmon
                among the veg, sprinkle with lemon juice, then bake 15 mins more
                until the fish is just cooked. Scatter over the parsley and
                serve."
              </Typography>
            </Box>
            {/* Ingredient */}
            <Box className={classes["text-ingredient"]}>
              <Typography
                className={classes.title}
                color={"text.secondary"}
                variant="h5"
              >
                Ingredients
              </Typography>
              <Box className={classes["ingredient-wrapper"]}>
                <CardIngredient />
                <CardIngredient />
                <CardIngredient />
                <CardIngredient />
              </Box>
              {/* Button */}
              <Box className={classes["action-button"]}>
                <Button variant="text" color="primary">
                  Detail
                </Button>
                <Button variant="text" color="primary">
                  Add To Favorite
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes["img-container"]}></Box>
      </Box>
    </Box>
  );
};

export default CardDetail;
