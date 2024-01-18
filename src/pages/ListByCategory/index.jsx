import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { callApi } from "../../domain/api";
import CardDetail from "../../components/CardDetail";
import { Box } from "@mui/material";
import classes from "./style.module.scss";
import CardRecipes from "../../components/CardRecipes";
import { useSearchParams } from "react-router-dom";

const ListByCategory = () => {
  const [datas, setDatas] = useState([]);
  const [random, setRandom] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    fetchProduct();
    fetchRandom();
  }, [selectedCategory]);

  const fetchRandom = async () => {
    const response = await callApi("/filter.php?a=Tunisian", "GET");

    const modifiedResponse = response?.meals?.map((item) => {
      const { idMeal, strMeal, strMealThumb } = item;
      return { idMeal, strMeal, strMealThumb };
    });
    const sliceResponse = modifiedResponse.slice(0, 8);
    setRandom(sliceResponse);
  };

  const fetchProduct = async () => {
    try {
      const responseByCategory = await callApi(
        `/filter.php?c=${selectedCategory}`,
        "GET"
      );
      const sliceResponse = responseByCategory?.meals?.slice(0, 10);
      const modifiedResponse = sliceResponse?.map(async (item) => {
        const responseByName = await callApi(
          `/search.php?s=${item?.strMeal}`,
          "GET"
        );
        const {
          idMeal,
          strMeal,
          strMealThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strInstructions,
        } = responseByName.meals[0];
        return {
          idMeal,
          strMeal,
          strMealThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strInstructions,
        };
      });
      const finalResponse = await Promise.all(modifiedResponse);

      setDatas(finalResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar action={fetchProduct} />
      <Box className={classes["card-detail-container"]}>
        {datas.map((data) => (
          <CardDetail key={data.idMeal} data={data} />
        ))}
      </Box>
      <Box className={classes["card-recipes-container"]}>
        {random?.map((item) => (
          <CardRecipes key={item.idMeal} data={item} />
        ))}
      </Box>
    </>
  );
};

export default ListByCategory;
