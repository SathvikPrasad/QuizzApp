import React, { useContext, useState } from "react";
import { DataBaseContext } from "../context/DataBase";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import StudentDetails from "./StudentDetails";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function StudentPage() {
  const { questions, updateStudentReview, studentname } = useContext(
    DataBaseContext
  );
  const [questionNumber, setquestionNumber] = useState(0);
  const [uidisplay, setuidisplay] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const { answer } = e.target.elements;
    // console.log(questions[questionNumber].answer, answer.value);
    if (questions[questionNumber].answer === answer.value) {
      if (questionNumber < questions.length - 1) {
        setquestionNumber(questionNumber + 1);
      } else {
        console.log("no questions ");
        const endTime = new Date().toString();
        updateStudentReview(questionNumber + 1, endTime);
        setuidisplay(false);
      }
    } else {
      setOpen(true);
      answer.value = "";
    }
    answer.value = "";
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {studentname ? (
        <div>
          <div>
            {questions.length ? (
              <div>
                {uidisplay ? (
                  <Container maxWidth="sm" style={{ marginTop: "10vh" }}>
                    <img
                      src={questions[questionNumber].link}
                      alt={"not avaliable"}
                      style={{
                        width: "80%",
                        height: "200px",
                        textAlign: "center",
                      }}
                    />
                    <h1>{questions[questionNumber].question}</h1>
                    <form onSubmit={handelSubmit}>
                      <TextField
                        id="outlined-basic"
                        label="answer"
                        variant="outlined"
                        name="answer"
                        fullWidth
                        required
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ height: "100%", marginTop: "10px" }}
                      >
                        Next
                      </Button>
                    </form>
                    <div>
                      <Snackbar
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Try again !"
                        action={
                          <React.Fragment>
                            <IconButton
                              size="small"
                              aria-label="close"
                              color="inherit"
                              onClick={handleClose}
                            >
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </div>
                  </Container>
                ) : (
                  <Container
                    maxWidth="sm"
                    style={{ marginTop: "30vh", color: "#00c853" }}
                  >
                    <h1>Congrats You Have Completed the Quiz Successfully!!</h1>
                  </Container>
                )}
              </div>
            ) : (
              <Container
                maxWidth="sm"
                style={{ textAlign: "center", marginTop: "30vh" }}
              >
                <CircularProgress color="primary" />
              </Container>
            )}
          </div>
        </div>
      ) : (
        <StudentDetails />
      )}
    </div>
  );
}
