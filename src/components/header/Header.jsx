import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom"
import { useState } from "react";

import classes from "./header.module.scss";

import logo from "../../svg/logo.svg";

const pages = [
    { id: 'season1', title: 'Первый сезон' },
    { id: 'season2', title: 'Второй сезон' },
    { id: 'about', title: 'О сериале' },
    { id: 'cast', title: 'Актерский состав' }
];
const headerData = {
    logoTitile: "Конец гребаного мира"
}

const Header = (props) => {
    const [anchorDropMenu, setAnchorDropMenu] = useState(false);

    const handleOpenMenu = (event) => {
        setAnchorDropMenu(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorDropMenu(false);
    }

    return(
        <AppBar 
            sx={{backgroundColor: 'black'}}
            position="sticky"
        >
            <Container>
                <Toolbar>
                    <Box
                        className={classes.navigation}
                        sx={{ display: {xs: 'flex', md: 'none'}}}
                    >
                        <Typography variant="h6" sx={{flexGrow: 1}} style={{display:'flex',alignItems:'center'}}>
                            <img src={logo} alt="Логотип" width="30" height="24" />
                            <Link
                                to="/"
                                className={classes.logoLink}
                            >{headerData.logoTitile}</Link>
                        </Typography>
                        <IconButton
                            onClick={handleOpenMenu}
                            aria-controls="hidden-menu"
                            color="inherit"
                            size="large"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="hidden-menu"
                            anchorEl={anchorDropMenu}
                            open={anchorDropMenu}
                            onClose={handleCloseMenu}
                            keepMounted
                            
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseMenu}
                                >
                                    <Link
                                        to={page.id}
                                        className={classes.hiddenLink}
                                    >{page.title}</Link>
                                </MenuItem>
                            ))}
                            
                        </Menu>
                    </Box>
                    <Box
                        className={classes.navigation}
                        sx={{display: {md: 'flex', xs: 'none', gap: '40px'}}}
                    >
                        <Typography variant="h6" sx={{flexGrow: 1}} style={{display:'flex',alignItems:'center'}}>
                            <img src={logo} alt="Логотип" width="30" height="24" />
                            <Link to="/" className={classes.logoLink}
                            >{headerData.logoTitile}</Link>
                        </Typography>
                        {pages.map(page => (
                            <Link key={page.id} to={page.id} className={classes.link}>
                                {page.title}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;