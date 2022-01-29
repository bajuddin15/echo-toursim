import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  card__container: {
    backgroundColor: "#fff",
    borderRadius: "50px",
    padding: "30px 20px",
    cursor: "pointer",
    "&:hover": {
      transition: "ease-in-out 0.2s",
      transform: "scaleY(1.1)",
    },
  },
  card__info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9e5bc",
    width: "80px",
    padding: "10px 10px",
    borderRadius: "15px",
    color: "#a57e56",
  },
  description: {
    margin: "15px 0px 5px 0px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  card__buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card__button: {
    backgroundColor: "#f9e5bc",
    color: "#a57e56",
    borderRadius: "10px",
    padding: "6px 40px",
    fontWeight: "bold",
  },
});

export default function PathCard() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5SVaJAaES6qIKj3-6LsR4RRnu0VrF4FiMQ&usqp=CAU";

  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card__container}>
      <CardContent>
        <Box className={classes.card__info}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h4"
            component="div">
            1
          </Typography>
        </Box>

        <Typography
          className={classes.description}
          variant="body2"
          color="text.secondary">
          Apply For The Program
        </Typography>
      </CardContent>
      <CardActions className={classes.card__buttons}>
        <Button className={classes.card__button} size="small">
          Next
        </Button>
      </CardActions>
    </Card>
  );
}
