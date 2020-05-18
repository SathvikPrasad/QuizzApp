import React, { useContext } from "react";
import NavBar from "./NavBar";
import { DataBaseContext } from "../context/DataBase";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Review() {
  const { studentData, deleteStudentsData } = useContext(DataBaseContext);
  const classes = useStyles();
  const handelDelete = (e) => {
    deleteStudentsData(e.target.id);
  };

  return (
    <div>
      <NavBar />
      <div>
        <Container maxWidth="sm">
          {studentData.map((student) => {
            let [endtime, waste] = student.studenttime.split("G");
            return (
              <Card
                id={student.id}
                onClick={handelDelete}
                className={classes.root}
                variant="outlined"
                key={student.id}
                style={{
                  marginTop: "20px",
                  backgroundColor: "#d3d3d3",
                }}
              >
                <div id={student.id}>
                  <CardContent className="question" id={student.id}>
                    <Typography variant="h5" component="h2" id={student.id}>
                      {student.studentName}
                    </Typography>
                    <Typography
                      className={classes.pos}
                      color="textSecondary"
                      id={student.id}
                    >
                      {student.studentEmail}
                    </Typography>
                    <Typography
                      className={classes.pos}
                      component="p"
                      id={student.id}
                    >
                      {student.studentRollnum}
                    </Typography>

                    <Typography
                      className={classes.pos}
                      component="p"
                      id={student.id}
                    >
                      No. questions answered {student.studentMarks}
                    </Typography>
                    <Typography
                      className={classes.pos}
                      component="p"
                      id={student.id}
                    >
                      End Time :{endtime}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
