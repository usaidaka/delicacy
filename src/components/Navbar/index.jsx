import * as React from "react";
import Box from "@mui/material/Box";
import classes from "./style.module.scss";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { callApi } from "../../domain/api";

export default function Navbar({ setMyMode, action }) {
  const [categories, setCategories] = React.useState([]);
  const [valueCategory, setValueCategory] = React.useState("Beef");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(location.pathname);

  const currentPage = searchParams.get("category");
  console.log(currentPage);

  React.useEffect(() => {
    if (location.pathname !== "/favorite") {
      setSearchParams({ category: valueCategory });
    }
    fetchCategories();
  }, [valueCategory]);

  const fetchCategories = async () => {
    try {
      const response = await callApi("/categories.php", "GET");
      const test = await callApi("/list.php?c=list", "GET");
      setCategories(test.meals.slice(0, 6));

      // setCategories(response.categories.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Desktop */}

      <Box className={classes["tab-desktop"]}>
        {categories?.map((category, idx) => (
          <Link
            to={
              location.pathname === "/favorite" &&
              `/?category=${category.strCategory}`
            }
            key={idx}
          >
            <Button
              value={category.idCategory}
              label={category.strCategory}
              color="inherit"
              sx={{
                color: `${
                  currentPage === category.strCategory ? "#005891" : "#969696"
                }`,
              }}
              onClick={() => {
                setValueCategory(category.strCategory);
                location.pathname !== "/favorite" ? action() : () => {};
              }}
            >
              {category.strCategory}
            </Button>
          </Link>
        ))}
        <Button
          value={"favorite"}
          label={"favorite"}
          color={"inherit"}
          sx={{
            color: `${
              location.pathname === "/favorite" ? "#005891" : "#969696"
            }`,
          }}
        >
          <Link to="/favorite">Favorite</Link>
        </Button>
      </Box>
      {/* Mobile */}

      <Box className={classes["tab-mobile"]}>
        {categories.map((category) => (
          <Button
            key={category.idCategory}
            value={category.idCategory}
            label={category.strCategory}
            color="inherit"
            sx={{
              color: `${
                currentPage === category.strCategory ? "#005891" : "#969696"
              }`,
            }}
            onClick={(e) => {
              setValueCategory(category.strCategory);
              location.pathname !== "/favorite" ? action() : () => {};
            }}
          >
            {category.strCategory}
          </Button>
        ))}
        <Button
          value={"favorite"}
          label={"favorite"}
          color="inherit"
          sx={{
            color: `${
              location.pathname === "/favorite" ? "#005891" : "#969696"
            }`,
          }}
        >
          <Link to="/favorite">Favorite</Link>
        </Button>
      </Box>
    </>
  );
}
