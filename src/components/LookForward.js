import React from "react";
import { Box } from "@mui/system";
const LookForward = () => {
  return (
    <>
      <Box display="flex">
        <Box marginTop="5em">
          <img
            src="https://slatemates.in/_next/image?url=%2Flearning_space.png&w=828&q=75"
            alt=""
            width="60%"
          />
        </Box>
        <Box width={700} height={550}>
          <h1
            style={{
              fontWeight: "",
              fontSize: "250%",
              color: "blue",
              backgroundColor: "darkyellow",
            }}
          >
            Look forward to interactive and engaging classes
          </h1>

          <p style={{ fontSize: "150%", color: "black" }}>
            Our super-friendly tutors strike a great rapport-something your
            child will look forward to. They explain concepts in a way that
            offers fresh perspectives. They use interactive exercises, explain
            tricky concepts and move as per school.
          </p>
        </Box>
      </Box>
    </>
  );
};

export default LookForward;
