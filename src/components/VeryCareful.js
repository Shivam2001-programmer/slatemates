import React from "react";
import { Box } from "@mui/system";
const VeryCareful = () => {
  return (
    <>
      <Box display="flex" bgcolor="skyblue">
        <Box marginTop="5em" marginLeft="">
          <img
            src="https://www.onlyoffice.com/blog/wp-content/uploads/2018/06/onlyoffice-for-education-without-limitations.jpg"
            alt=""
          />
        </Box>
        <Box width={700} height={550}>
          <h1
            style={{
              marginLeft: "20%",

              fontWeight: "",
              fontSize: "270%",
              color: "blue",
              backgroundColor: "darkyellow",
            }}
          >
            Very very carefully chosen tutors
          </h1>

          <p style={{ marginLeft: "20%", fontSize: "150%", color: "white" }}>
            With proven academic record and exam success We truly believe
            successful teachers make successful students. That’s why we select
            tutors from top colleges who are a perfect source of inspiration and
            expertise for your child.
          </p>
        </Box>
      </Box>
    </>
  );
};

export default VeryCareful;
