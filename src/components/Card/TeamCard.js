import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    borderRadius: "50px",
  },
  card__actionarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  card__image: {
    width: "350px",
    height: "350px",
    padding: "50px",
    borderRadius: "999px",
  },
  card__body: {
    height: "150px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#a57e56",
    fontFamily: "Lobster, cursive",
  },
  description: {
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
});
function TeamCard() {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.container}>
      <CardActionArea className={classes.card__actionarea}>
        <CardMedia
          component="img"
          height="140"
          image="images/elon-musk.jpg"
          alt="green iguana"
          className={classes.card__image}
        />
        <CardContent className={classes.card__body}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}>
            Bajuddin Khan
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}>
            Full Stack Developer
          </Typography>
          <hr />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TeamCard;
