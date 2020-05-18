import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DataBaseContext } from "../context/DataBase";

export default function AddInstructions() {
  const { addInstructions, instructions, deleteInstruction } = useContext(
    DataBaseContext
  );
  const handelForm = (e) => {
    e.preventDefault();
    const { sno, instruction } = e.target.elements;

    addInstructions(sno.value, instruction.value);
  };
  const handeldelete = (e) => {
    deleteInstruction(e.target.id);
  };
  return (
    <div>
      <Container fixed style={{ marginTop: "30px" }}>
        <Container maxWidth="xs">
          <h3>Instructions</h3>
          {instructions.map((ins) => {
            return (
              <div key={ins.id}>
                <p id={ins.id} className="question" onClick={handeldelete}>
                  {ins.sno}.{ins.instruction}
                </p>
              </div>
            );
          })}
        </Container>
        <form onSubmit={handelForm}>
          <Grid container spacing={3}>
            <Grid item xs>
              <TextField
                id="outlined-basic"
                label="S.no"
                variant="outlined"
                name="sno"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="instruction"
                variant="outlined"
                name="instruction"
                fullWidth
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
  );
}
