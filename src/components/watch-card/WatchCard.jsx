import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./watchCard.module.scss";

const WatchCard = (props) => {
    const { season, episod, thumbnail, title, duration, description } = props.cardData;
    let foreword = description;

    if( foreword.length > 140 ){
        foreword = description.slice(0,144) + '...';
    }

    return(
        <Card className={classes.card}>
            <Link
                to={`watch/${ season }/${ episod }`}
                className={classes.link}
            >
                <CardMedia
                    component="img"
                    height="200px"
                    image={thumbnail}
                    alt={`Конец еб*аного мира ${ season } сезон ${ episod } серия`}
                />
                <CardContent>
                    <Box className={classes.title}>
                        <Typography
                            variant="h6"
                            component="h3"
                        >{title}</Typography>
                        <Typography color="text.secondary">{`${ duration } мин.`}</Typography>
                    </Box>
                    <Typography color="text.secondary">{foreword}</Typography>
                </CardContent>
            </Link>
        </Card>
    )
}

export default WatchCard;