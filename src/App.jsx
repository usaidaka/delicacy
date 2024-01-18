import { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import {
  Container,
  CssBaseline,
  createTheme,
  Typography,
  Box,
} from "@mui/material";
import ListByCategory from "./pages/ListByCategory";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import classes from "./App.module.scss";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<ListByCategory />} />
          <Route path="/product-detail/:id" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function Root() {
  const [myMode, setMyMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
      text: {
        secondary: "#969696",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box className={classes["main-container"]}>
          <Typography variant="h4" color="initial">
            <Link to={"/"} className={classes.title}>
              Delicacy
            </Link>
          </Typography>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
