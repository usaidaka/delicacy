import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";

import CardIngredient from "../CardIngredient";
import { Link, useLocation, useParams } from "react-router-dom";
import { callJson } from "../../domain/json";

const CardDetail = ({ data }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const { id } = useParams();

  const location = useLocation();

  const handleFav = async () => {
    try {
      const response = await callJson(
        "/favorite",
        "POST",
        {},
        {},
        {
          id: data.idMeal,
          idMeal: data.idMeal,
          strMeal: data.strMeal,
          strMealThumb: data.strMealThumb,
        }
      );
      fetchFav();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFav();
  }, [id]);

  const fetchFav = async () => {
    try {
      const response = await callJson("/favorite", "GET");
      setFavorites(response);
      const arrId = response.map((item) => {
        return item.id;
      });

      const checkFav = arrId.includes(id);
      setIsFav(checkFav);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoves = async (id) => {
    try {
      const response = await callJson(`/favorite/${id}`, "DELETE", {}, {}, {});
      fetchFav();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes["text-container"]}>
          <Box className={classes["text-wrapper"]}>
            {/* Deskripsi */}
            <Box className={classes["text-description"]}>
              <Typography className={classes.title} variant="h5">
                <Link to={`/product-detail/${data.idMeal}`}>
                  {data.strMeal}
                </Link>
              </Typography>
              <Typography className={classes.desc} variant="body2">
                {data.strInstructions}
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
                <CardIngredient
                  ingredientName={data.strIngredient1}
                  measure={data.strMeasure1}
                />
                <CardIngredient
                  ingredientName={data.strIngredient2}
                  measure={data.strMeasure2}
                />
                <CardIngredient
                  ingredientName={data.strIngredient3}
                  measure={data.strMeasure3}
                />
                <CardIngredient
                  ingredientName={data.strIngredient4}
                  measure={data.strMeasure4}
                />
              </Box>
              {/* Button */}
              <Box className={classes["action-button"]}>
                {!location.pathname.includes("/product-detail") && (
                  <Link to={`/product-detail/${data.idMeal}`}>
                    <Button variant="text" color="primary">
                      Detail
                    </Button>
                  </Link>
                )}
                {isFav ? (
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      handleRemoves(data.idMeal);
                    }}
                  >
                    Removes Favorite
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      handleFav();
                    }}
                  >
                    Add To Favorite
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes["img-container"]}>
          <img src={data.strMealThumb} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetail;
