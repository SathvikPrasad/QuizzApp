import React, { useContext } from "react";
import NavBar from "./NavBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { DataBaseContext } from "../context/DataBase";
import AddInstructions from "./AddInstructions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Settings() {
  const { makeAdmin } = useContext(DataBaseContext);

  const classes = useStyles();
  const handelSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    makeAdmin(email.value, password.value);
  };

  return (
    <div>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Make Admin
          </Typography>
          <form className={classes.form} noValidate onSubmit={handelSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <div style={{ marginLeft: "10px" }}>Make Admin</div>
            </Button>
          </form>
        </div>
      </Container>
      <AddInstructions />
    </div>
  );
}
