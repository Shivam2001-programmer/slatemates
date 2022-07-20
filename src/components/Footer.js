import * as React from "react";

import { Box } from "@mui/system";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        bgcolor="darkslateblue"
        width="100%"
        height={600}
        style={{ marginTop: "6%" }}
      >
 <h1
            style={{
              marginLeft: "20%",

              fontWeight: "",
              fontSize: "370%",
              color: "red",
              paddingTop: "10%",
             
            }}
          >
            Very very carefully chosen tutors
          </h1>

          <h2
            style={{
              marginLeft: "30%",

              fontWeight: "",
              fontSize: "170%",
              color: "white",
             
             
            }}
          >
          Know your child’s weaknesses & knowledge gaps
          </h2>

        <Button style={{
              marginLeft: "40%",

              fontWeight: "",
              fontSize: "170%",
              color: "white",
          
             backgroundColor:"lightskyblue"
            }}>
          Book Free Demo
        </Button>
       
      </Box>
    </>
  );
};

export default Footer;
