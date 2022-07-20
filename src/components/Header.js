import * as React from "react";

import { Toolbar, AppBar, Typography, Button, Container } from "@mui/material";
import Display from "./Dispaly";

const Header = () => {
  return (
    <>
      <AppBar color="default" position="fixed">
        <Container maxWidth="xl" sx={{ flexGrow: 0 }}>
          <Toolbar>
            <Typography sx={{ fontSize: "23px" }} color="primary">
              Slatemates
            </Typography>
            <Typography sx={{ marginLeft: "10%" }}>Home</Typography>
            <Typography sx={{ marginLeft: "4%" }}>How it works</Typography>
            <Typography sx={{ marginLeft: "4%" }}>About us</Typography>
            <Typography sx={{ marginLeft: "4%" }}>Resources</Typography>
            <Typography sx={{ marginLeft: "4%" }}>Reviews</Typography>
            <Typography sx={{ marginLeft: "4%" }}>FAQs</Typography>
            <Typography sx={{ marginLeft: "4%" }} color="primary">
              +91 964 371 9927
            </Typography>
            <Button sx={{ marginLeft: "6%" }} variant="contained">
              Trial
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Display />
    </>
  );
};

export default Header;
