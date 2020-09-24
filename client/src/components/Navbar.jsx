import React from 'react';
import { Link } from 'react-router-dom';

/* Materil UI components */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Navbar = () => {

    return (
        <AppBar position="fixed" color="transparent">
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
            </Toolbar>
        </AppBar>
    )
}