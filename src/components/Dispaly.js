import {  Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Engaged from "./Engaged";
import Footer from "./Footer";

import LookForward from "./LookForward";
import Parent from "./Parent";
import Readx from "./Readx";
import Thousand from "./Thousand";
import TutionPersonal from "./TutionPersonal";
import TutoringSpace from "./TutoringSpace";
import VeryCareful from "./VeryCareful";

const Display = () => {
  return (
    <>
      <Box display="flex"  >
        <Box
          bgcolor="darkblue"
          width={700}
          height={580}
          style={{ marginTop: 10 }}
         
        >
          <Typography
            style={{
              marginLeft: "10%",
              paddingTop: "20%",
              color: "orange",
              fontSize: "400%",
            }}
          >
            One-to-one online tuitions from home
          </Typography>
          <p style={{ marginLeft: "10%", color: "white", fontSize: "120%" }}>
            Keep your child’s studies on track with interactive online tuition
          </p>
        </Box>
        <Box marginTop="5em" marginLeft="10%">
          <img
            src="https://slatemates.in/_next/image?url=%2Fdesktopheroblock.jpeg&w=640&q=75"
            alt=""
          />
        </Box>
      </Box>
      <Box display="flex">
        <h1
          style={{
            marginLeft: "10%",
            fontSize: "160%",
          }}
        >
          40000+ Tutoring hours
        </h1>

        <h2
          style={{
            marginLeft: "10%",
            fontSize: "160%",
          }}
        >
          5 Star Google Reviews
        </h2>
        <h2
          style={{
            marginLeft: "20%",
            fontSize: "160%",
          }}
        >
          Trusted by 3000+ Students
        </h2>
      </Box>
      <Parent />
      <TutionPersonal />
      <VeryCareful />
      <TutoringSpace />
      <LookForward />
      <Engaged />
      <Thousand />
      <Readx />
      <Footer />
    </>
  );
};

export default Display;
