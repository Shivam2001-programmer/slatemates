import React from "react";
import { Box } from "@mui/system";
const TutoringSpace = () => {
  return (
    <>
      <Box display="flex">
        <Box width={700} height={550}>
          <h1
            style={{
              fontWeight: "",
              fontSize: "270%",
              color: "blue",
              marginLeft: "10%",
              paddingTop: "10%",
            }}
          >
            The best tutoring space that covers all aspects!
          </h1>

          <p style={{ fontSize: "140%", marginLeft: "10%" }}>
            LIVE classes, worksheets, tests or class recordings-Slatemates
            platform brings it all together in one place- your child can stay
            organised and focus 100% on the subject.
          </p>
        </Box>
        <Box marginTop="5em" marginLeft="15%">
          <img
            src="https://slatemates.in/_next/image?url=%2FlaptopTeacherTeaching2.png&w=1080&q=75"
            alt=""
            width="70%"
          />
        </Box>
      </Box>
    </>
  );
};

export default TutoringSpace;
