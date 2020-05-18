import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { DataBaseContext } from "../context/DataBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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
export default function StudentDetails() {
  const classes = useStyles();
  const { addStudentDetails, instructions } = useContext(DataBaseContext);

  const handelform = (e) => {
    e.preventDefault();
    const { name, rollnum, email } = e.target.elements;
    addStudentDetails(name.value, rollnum.value, email.value);
  };
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Dialog
          open={instructions.length ? open : false}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Instructions</DialogTitle>
          <DialogContent>
            {instructions.map((ins) => {
              return (
                <DialogContentText key={ins.id}>
                  {ins.sno}. {ins.instruction}
                </DialogContentText>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Student Details
          </Typography>
          <form className={classes.form} noValidate onSubmit={handelform}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Roll.no"
              label="Roll.no"
              name="rollnum"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <div style={{ marginLeft: "10px" }}>Next</div>
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
