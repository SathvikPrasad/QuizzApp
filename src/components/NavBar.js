import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import app from "../firebase";
import { DataBaseContext } from "../context/DataBase";
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
const handelLogout = () => {
  app.auth().signOut();
};

export default function NavBar() {
  const classes = useStyles();
  const { updateViewController, studentData } = useContext(DataBaseContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            Quizz
          </Typography>
          <Button
            color="primary"
            onClick={() => {
              updateViewController("home");
            }}
          >
            Home
          </Button>
          <Badge badgeContent={studentData.length} color="primary">
            <Button
              color="primary"
              onClick={() => {
                updateViewController("review");
              }}
            >
              Review
            </Button>
          </Badge>
          <Button
            color="primary"
            onClick={() => {
              updateViewController("settings");
            }}
          >
            Settings
          </Button>
          <Button color="primary" onClick={handelLogout}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
