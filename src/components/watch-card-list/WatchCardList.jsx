import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import WatchCard from "../watch-card/WatchCard";

const WatchCardList = (props) => {
    const { season, cards, loading, error } = props;

    return(
        <>
            <Typography
                sx={{
                    fontWeight: '700',
                    marginBottom: '16px',
                    marginTop: '32px'
                }}
                variant="h4"
                component="h2"
            >{`${ season } Сезон`}</Typography>
            <Grid container justifyContent="center" spacing={5} sx={{marginBottom: '64px'}}>
                {cards.map(card => {
                    if(card.season === season){
                        return(
                            <Grid key={card.id} item lg={4} sm={6} xs={12}>
                                <WatchCard
                                    cardData={card}
                                />
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </>
            
    )    
}

export default WatchCardList;