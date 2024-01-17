import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { callApi } from "../../domain/api";
import CardDetail from "../../components/CardDetail";
import { Box } from "@mui/material";
import classes from "./style.module.scss";
import CardRecipes from "../../components/CardRecipes";
import { useSearchParams } from "react-router-dom";

const ListByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [valueCategory, setValueCategory] = React.useState("Beef");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    setSearchParams({ category: valueCategory });
    fetchCategories();
  }, [valueCategory]);

  const fetchCategories = async () => {
    try {
      const response = await callApi("/categories.php", "GET");
      setCategories(response.categories.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
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
          `/search.php?s=${item.strMeal}`,
          "GET"
        );
        const { idMeal } = responseByName.meals[0];
        return idMeal;
      });
      const finalResponse = await Promise.all(modifiedResponse);
      console.log(finalResponse, "testsss");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        categories={categories}
        setter={setValueCategory}
        action={fetchProduct}
      />
      <Box className={classes["card-detail-container"]}>
        <CardDetail />
        <CardDetail />
        <CardDetail />
        <CardDetail />
        <CardDetail />
      </Box>
      <Box className={classes["card-recipes-container"]}>
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
      </Box>
    </>
  );
};

export default ListByCategory;
