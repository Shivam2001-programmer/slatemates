import React from "react";
import { Box } from "@mui/system";
const Engaged = () => {
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
            You will always stay in the loop & engaged!
          </h1>

          <p style={{ fontSize: "140%", marginLeft: "10%" }}>
            You will feel more involved and cared for. You can login anytime for
            last assignment, progress reports, recordings etc. Our online
            dashboard keeps everything transparent and in one place for you.
          </p>
        </Box>
        <Box marginTop="5em" marginLeft="10%">
          <img
            src="https://slatemates.in/_next/image?url=%2Fstudent_parent1.png&w=750&q=75"
            alt=""
            width="70%"
          />
        </Box>
      </Box>
    </>
  );
};

export default Engaged;
