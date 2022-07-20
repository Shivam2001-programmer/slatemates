import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";

const Thousand = () => {
  return (
    <>
      <Box bgcolor="skyblue" width="100%" height={380}>
        <h1
          style={{
            marginLeft: "1%",
            paddingTop: "0.5%",
          }}
        >
          Thousands of parents, students and teachers have rated us 4.9/5
        </h1>
        <Box display="flex">
          <Card sx={{ maxWidth: 345, marginLeft: "12%" }}>
            <CardHeader
              avatar={
                <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
              }
              title="Shrimp and Chorizo Paella"
              subheader="Parent , Math & Science, 10th CBSE"
            />
            x
            <CardContent>
              <Typography>Planned tuitions. Trained Tutors</Typography>
              <Typography variant="body2" color="text.secondary">
                Miss Shreya is always well prepared and great at explaining
                tricky topics in a simple and understandable way!!
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, marginLeft: "1%" }}>
            <CardHeader
              avatar={
                <Avatar alt="Yemy Sharp" src="/static/images/avatar/1.jpg" />
              }
              title="  Yashshvi"
              subheader="Mother , Chemistry, 10th CBSE"
            />

            <CardContent>
              <Typography marginLeft={4}>
                Never memorise Chemistry again!!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Miss Ritika helped her understand the questions and will show
                different ways to get the answer which she finds really helpful.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, marginLeft: "1%" }}>
            <CardHeader
              avatar={
                <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
              }
              title="Smitha Sharma"
              subheader="Parent , Math & Science, 12th CBSE"
            />

            <CardContent>
              <Typography marginLeft={4}>Teachers are Reliable</Typography>
              <Typography variant="body2" color="text.secondary">
                Slatemates French online tutor, Miss Aashima was reliable,
                knowledgeable, dedicated and knows how to structure the 60
                minutes class well and also gave a lot of worksheets notes. Many
                thanks
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography
          variant="body2"
          color="white"
          marginTop={9}
          backgroundColor="blue"
          fontSize={30}
        >
          Booking takes only 5 min. Get a call from our team. Fix up a 60 min
          LIVE demo class with an expert tutor.
        </Typography>

        <Typography
          variant="body2"
          color="blue"
          marginTop={2}
          fontSize={50}
          marginLeft={9}
        >
          Have some questions? Don’t worry, we’re here to help!
        </Typography>
      </Box>
    </>
  );
};

export default Thousand;
