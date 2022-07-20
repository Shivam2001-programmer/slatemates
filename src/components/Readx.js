import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const Readx = () => {
  return (
    <>
      <Box
        style={{
          marginTop: "10%",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              Can I choose the timing of demo class as per convience?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontSize: "120%",
                marginLeft: "10%",
              }}
            >
              Once you have booked the demo from the website our academic
              advisor will call you and take down your preferences with respect
              to your schedule and time for the demo. The demo class will happen
              as per your convenient time and day.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              If I liked the demo class what happens after that ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontSize: "120%",
                marginLeft: "10%",
              }}
            >
              We look forward to receiving your feedback after the demo class.
              The academic advisor will reach out to gather your feedback and
              schedule classes thereafter. Emails with payment details are
              immediately sent out to you. Once the booking is confirmed and
              payment completed for 6 classes, you’re all set to start classes
              as per the schedule
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              Will the tutor teach according to School
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              Yes, the tutor will work based on your child’s needs. If the
              student wants to follow the school curriculum, tutors will work
              with your child based on the ongoing school curriculum. In fact,
              tutors believe that this has benefits such as avoiding confusion
              in the child’s mind because tuitions re-emphasize what has been
              taught at school. This helps students cope better at school and
              perform well in exams.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              Why Slatemates tution are Effective
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
              }}
            >
              Successful tuition require your child’s full cooperation and
              attention, and that’s only going to happen if there is a
              well-motivated student and an inspiring teacher, who is committed
              to driving improvement.
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
                marginTop: "1%",
              }}
            >
              Slatemates tuition experience is all of that and most of all
              enjoyable!
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
                marginTop: "1%",
              }}
            >
              For younger students, tutors make sure learning is fun -
              entertainment is built into the classes along with fundamentals.
              For older students, it’s less about fun and more about keeping
              things stimulating and interesting along with focus on exam
              results.
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "10%",
                marginTop: "1%",
              }}
            >
              We ensure that an inspiring super friendly tutor is:
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "12%",
                marginTop: "1%",
              }}
            >
              ⚫ great at explaining tricky topics
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "12%",
                marginTop: "1%",
              }}
            >
              ⚫ regular with assigning homework
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "12%",
                marginTop: "1%",
              }}
            >
              ⚫ up-to-date on exam style questions
            </Typography>
            <Typography
              style={{
                fontSize: "150%",
                marginLeft: "12%",
                marginTop: "1%",
              }}
            >
              ⚫ constantly working on the learning motivation level of your
              child
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Readx;
