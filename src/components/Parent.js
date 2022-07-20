import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Parent = () => {
  return (
    <>
      <Box display="flex">
        <Box width={700} height={550}>
          <h1
            style={{
              marginLeft: "10%",
              paddingTop: "20%",
              fontWeight: "",
              fontSize: "170%",
            }}
          >
            PARENT
          </h1>

          <h1 style={{ marginLeft: "10%", fontSize: "270%", color: "blue" }}>
            "It is rare these days to meet a team of teachers who care deeply.
            Slatemates 'impact on both my kids' learning needs has been deep.
            That is why we continue with their tutors every year.."
          </h1>
          <h3 style={{ marginLeft: "10%" }}>
            KHASTHURI SANKARA / Class 12 & 7 / Coimbatore, Tamil Nadu
          </h3>
          <Button
            style={{
              marginLeft: "10%",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            SEE ONLINE TUTION IN ACTION
          </Button>
        </Box>
        <Box marginTop="5em" marginLeft="10%">
          <img
            src="https://slatemates.in/_next/image?url=%2FtestimonialHome.jpeg&w=640&q=75"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};

export default Parent;
