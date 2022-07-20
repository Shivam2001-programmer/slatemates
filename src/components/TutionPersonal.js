import React from "react";

import { Box } from "@mui/system";
const TutionPersonal = () => {
  return (
    <>
      <Box display="flex">
        <Box width={700} height={550}>
          <h1
            style={{
              marginLeft: "10%",
              paddingTop: "10%",
              fontWeight: "",
              fontSize: "270%",
              color: "blue",
            }}
          >
            How do we make tuitions personal?
          </h1>

          <h4 style={{ marginLeft: "20%", fontSize: "150%" }}>
            Because our tutors...
          </h4>
          <p style={{ marginLeft: "20%", fontSize: "150%" }}>
            ✅Always keep you in the loop by providing weekly feedback
          </p>
          <p style={{ marginLeft: "20%", fontSize: "150%" }}>
            ✅Always follow the same books being used in school to avoid
            confusion
          </p>
          <p style={{ marginLeft: "20%", fontSize: "150%" }}>
            ✅Are more than willing to adjust timings as per your convenience
          </p>
          <p style={{ marginLeft: "20%", fontSize: "150%" }}>
            ✅Are trained to adapt to your child’s personality so that your
            child remains motivated
          </p>
        </Box>
        <Box marginTop="5em" marginLeft="10%">
          <img
            src="https://slatemates.in/_next/image?url=%2Fillustration1.jpeg&w=640&q=75"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};

export default TutionPersonal;
