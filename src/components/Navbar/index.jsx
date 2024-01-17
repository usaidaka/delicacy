import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import classes from "./style.module.scss";

export default function Navbar({ setMyMode }) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Desktop */}
      <Box sx={{ width: "100%" }} className={classes["tab-desktop"]}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
      {/* Mobile */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: "background.paper",
        }}
        className={classes["tab-mobile"]}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab value={"one"} label="Item One" />
          <Tab value={"two"} label="Item Two" />
          <Tab value={"three"} label="Item Three" />
          <Tab value={"four"} label="Item Four" />
          <Tab value={"five"} label="Item Five" />
          <Tab value={"six"} label="Item Six" />
          <Tab value={"seven"} label="Item Seven" />
        </Tabs>
      </Box>
    </>
  );
}
