import React, { useState } from "react";
import Login from "./Login";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StudentPage from "./StudentPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Students() {
  const [Admin, setAdmin] = useState(false);
  const handelClick = () => {
    setAdmin(!Admin);
  };
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h3" className={classes.title} color="primary">
              Quizz
            </Typography>
            <Button color="primary" onClick={handelClick}>
              {Admin ? "Student" : "Admin"}
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      {Admin ? <Login /> : <StudentPage />}
    </div>
  );
}
