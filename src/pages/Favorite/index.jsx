import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardRecipes from "../../components/CardRecipes";
import { callJson } from "../../domain/json";
import classes from "./style.module.scss";
import Navbar from "../../components/Navbar";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchFav();
  }, []);

  const fetchFav = async () => {
    try {
      const response = await callJson("/favorite", "GET");
      setFavorites(response);
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
    <Box>
      <Navbar />
      <Container className={classes["top-container"]}>
        <Box className={classes.container}>
          {favorites.map((fav, idx) => (
            <CardRecipes key={idx} data={fav} action={handleRemoves} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Favorite;
