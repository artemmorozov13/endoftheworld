import { createTheme, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import poster from "../images/vposter.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
    const darkTheme = createTheme({ palette: { mode: 'dark' } });

    return(
        <Container>
            <Grid container>
                <Grid item xs={12} md={4}>
                <img
                    src={poster}
                    alt={'Постер к сериалу конец гребаного мира'}
                    loading="lazy"
                    style={{ width: '-webkit-fill-available' }}
                />
                </Grid>
                <Grid item xs={12} md={8}>
                    <ThemeProvider theme={darkTheme}>
                        <Paper elevation={1} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid container style={{ paddingLeft:'20px' }}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" component="h1">Конец гребаного мира</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography 
                                        variant="subtitle1" 
                                        component="h2" 
                                        style={{color:'#5f5f5f',marginBottom:'10px'}}
                                    >The End of the F***ing World</Typography>
                                </Grid>
                                <Grid item xs={3} md={2}>
                                    <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Сезоны</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1" component="div">
                                        <Link to="/season1" style={{color:'#fff',textDecoration:'none',marginRight:'24px'}}>1</Link>
                                        <Link to="/season2" style={{color:'#fff',textDecoration:'none'}}>2</Link>
                                    </Typography>
                                </Grid>

                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Рейтинг:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" component="div">КП 7.8 / IMDB 8.1</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Жанр:</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body1" component="div">комедия / драма / криминал</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Статус:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" component="div">закрыт</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Страна:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" component="div">Великобритания</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Студия:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" component="div">Channel 4</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'8px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Дата выхода:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" component="div">24 октября 2017</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Актеры:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Джессика Барден, Алекс Лоутер, Наоми Аки, 
                                        Стив Орам, Вунми Моссаку, Джемма Уилан, Кристин Боттомли</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Режиссер:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Джонатан Энтвистл, Люси Черняк, 
                                        Destiny Ekaragha</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Сценарий:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Чарли Ковелл, Энди Бэйкер, 
                                        Emily Harrison</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Оператор:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Джастин Браун, Ben Fordesman, Бен Тодд</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Продюсер:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Энди Бэйкер, Доминик Бьюкэнэн, Чарли Ковелл</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Композитор:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Грэм Коксон</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Художник:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Гренвилль Хорнер, Дик Ланн, Флер Уитлок</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Монтаж:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">Селия Хэйнинг, Майк Джонс, Анна Дик</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{marginTop:'24px'}}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="body1" component="div" style={{color:'#5f5f5f'}}>Время:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1" component="div">25 мин.</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;