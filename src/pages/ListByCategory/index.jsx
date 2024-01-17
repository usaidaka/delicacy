import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { callApi } from "../../domain/api";
import CardDetail from "../../components/CardDetail";
import { Box } from "@mui/material";
import classes from "./style.module.scss";
import CardRecipes from "../../components/CardRecipes";

const ListByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      };

      const response = await callApi("/categories.php", "GET", headers);
      console.log(response);

      // const x = await fetch(
      //   "https://www.themealdb.com/api/json/v1/1/categories.php"
      // ).then((res) => res.json());

      // console.log(x);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Box className={classes["card-detail-container"]}>
        <CardDetail />
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
