import React, { useEffect, useState } from "react";
import CardDetail from "../../components/CardDetail";
import { useParams } from "react-router-dom";
import classes from "./style.module.scss";
import { Box } from "@mui/material";
import { callApi } from "../../domain/api";
import CardRecipes from "../../components/CardRecipes";

const Detail = () => {
  const { id } = useParams();

  const [datas, setDatas] = useState({});
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetchDetail();
    fetchRandom();
  }, [id]);

  const fetchRandom = async () => {
    const response = await callApi("/filter.php?a=Canadian", "GET");

    const modifiedResponse = response?.meals?.map((item) => {
      const { idMeal, strMeal, strMealThumb } = item;
      return { idMeal, strMeal, strMealThumb };
    });
    const sliceResponse = modifiedResponse.slice(0, 8);
    setRandom(sliceResponse);
  };

  const fetchDetail = async () => {
    try {
      const response = await callApi(`/lookup.php?i=${id}`, "GET");

      const modifiedResponse = {
        idMeal: response.meals[0].idMeal,
        strMeal: response.meals[0].strMeal,
        strMealThumb: response.meals[0].strMealThumb,
        strIngredient1: response.meals[0].strIngredient1,
        strIngredient2: response.meals[0].strIngredient2,
        strIngredient3: response.meals[0].strIngredient3,
        strIngredient4: response.meals[0].strIngredient4,
        strMeasure1: response.meals[0].strMeasure1,
        strMeasure2: response.meals[0].strMeasure2,
        strMeasure3: response.meals[0].strMeasure3,
        strMeasure4: response.meals[0].strMeasure4,
        strInstructions: response.meals[0].strInstructions,
      };
      setDatas(modifiedResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box className={classes["card-detail-container"]}>
        <CardDetail data={datas} />
      </Box>
      <Box className={classes["card-recipes-container"]}>
        {random?.map((item) => (
          <CardRecipes key={item.idMeal} data={item} />
        ))}
      </Box>
    </>
  );
};

export default Detail;
