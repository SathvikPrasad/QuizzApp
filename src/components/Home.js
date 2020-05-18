import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DataBaseContext } from "../context/DataBase";

export default function Home() {
  const { questions, addQuestion, removeQuestion } = useContext(
    DataBaseContext
  );

  const handelForm = (e) => {
    e.preventDefault();
    const { Question, Answer, Link } = e.target.elements;

    let newlink = Link.value.replace("open", "uc");
    let newQuestion = {
      question: Question.value,
      answer: Answer.value,
      link: newlink,
    };

    addQuestion(newQuestion);
    Question.value = "";
    Answer.value = "";
    Link.value = "";
  };

  const deletehandler = (e) => {
    if (e.target.tagName === "H2") {
      removeQuestion(e.target.id);
    }

    // console.log(e.target.id);
  };

  return (
    <div>
      <NavBar />
      <div>
        <Container
          fixed
          style={{
            height: "50%",
            color: "balck",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          {questions.map((e) => {
            return (
              <div key={e.id} onClick={deletehandler}>
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <div
                      id={e.id}
                      className="question"
                      style={{
                        border: "1px solid #d3d3d3",
                        borderRadius: "10px",
                        height: "100px",
                      }}
                    >
                      <h2 id={e.id} className="text">
                        {e.question}
                      </h2>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div
                      style={{
                        border: "1px solid #d3d3d3",
                        borderRadius: "10px",
                        height: "100px",
                      }}
                    >
                      <h2 className="text">{e.answer}</h2>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div
                      style={{
                        border: "1px solid #d3d3d3",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={e.link}
                        alt={"not avaliable"}
                        style={{
                          width: "100%",
                          height: "100px",
                          textAlign: "center",
                          padding: "5px",
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Container>
        <Container fixed style={{ marginTop: "30px" }}>
          <form onSubmit={handelForm}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <TextField
                  id="outlined-basic"
                  label="Question"
                  variant="outlined"
                  name="Question"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-basic"
                  label="Answer"
                  variant="outlined"
                  name="Answer"
                  required
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-basic"
                  label="Link"
                  variant="outlined"
                  name="Link"
                  required
                />
              </Grid>
              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ height: "100%" }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );
}
