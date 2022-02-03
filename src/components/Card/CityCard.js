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
    border: "1px solid #D3D3D3",
  },
  card__actionarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  card__image: {
    width: "100%",
    height: "350px",
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
function CityCard({ name, imageUrl }) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.container}>
      <CardActionArea className={classes.card__actionarea}>
        <img src={imageUrl} alt={name} className={classes.card__image} />
        <CardContent className={classes.card__body}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}>
            Useful info of this city
          </Typography>
          <hr />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CityCard;
