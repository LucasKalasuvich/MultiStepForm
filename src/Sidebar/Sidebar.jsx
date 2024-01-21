import React from "react";
import Box from "@mui/material/Box";

import classes from "./style.module.scss";

const Sidebar = () => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.container}>
          <div className={classes.text}>
            <p>Test</p>
            <h4>Test</h4>
          </div>
          <div className={classes.text}>
            <p>Test</p>
            <h4>Test</h4>
          </div>
          <div className={classes.text}>
            <p>Test</p>
            <h4>Test</h4>
          </div>
          <div className={classes.text}>
            <p>Test</p>
            <h4>Test</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
