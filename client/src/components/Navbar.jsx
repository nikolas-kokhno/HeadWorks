import React from 'react';
import { Link } from 'react-router-dom';

/* Materil UI components */
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar className="navbar">
                <Typography variant="h6">
                    HeadWorks
                </Typography>
                <div className="nav__items">
                    <Link to="/signup">
                        <Button color="inherit">Регистрация</Button>
                    </Link>
                    <Link to="/">
                        <Button color="inherit">Пользователи</Button>
                    </Link>
                    <Link to="/about">
                        <Button color="inherit">Обо мне</Button>
                    </Link>
                </div>
                <div className="nav__icon">
                    <MenuIcon onClick={handleClick} />

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to="/signup">
                                Регистрация
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/">
                                Пользователи
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/about">
                                Обо мне
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}