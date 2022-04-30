import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';

const Cast = (props) => {
    return(
        <Container>
            <Box sx={{mt:4}}>
                <Typography variant="h4" component="h1" sx={{mb:2}}>
                    Актерский состав сериала
                </Typography>
                <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://images.kinorium.com/persona/150/1241532.jpg?20201106100915"
                        alt="Джессика Барден"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="body1">
                                Джессика Барден
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Jessica Barden 
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{mt:2}}>
                                Alyssa
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            
        </Container>
    )
}

export default Cast;