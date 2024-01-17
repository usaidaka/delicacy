import { useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme, Typography } from "@mui/material";
import ListByCategory from "./pages/ListByCategory";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import "./App.scss";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<ListByCategory />} />
          <Route path="/:id" element={<Detail />} />
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
        <Container maxWidth="" className="main-container">
          <Typography variant="h4" color="initial">
            Delicacy
          </Typography>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
