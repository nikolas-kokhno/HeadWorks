import React from 'react';
import { Link } from 'react-router-dom';

/* Material UI icon */
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FaceIcon from '@material-ui/icons/Face';

export const Navbar = () => {
    return (
        <nav className="menu">
            <input type="checkbox" id="toggle" className="toggle" />
            <label id="show-menu" htmlFor="toggle">
                <div className="btn">
                    <MenuIcon className="material-icons menuBtn md-36 toggleBtn" />
                    <CloseIcon className="material-icons md-36 toggleBtn closeBtn" />
                </div>

                <Link className="btn" to="/">
                    <PeopleAltIcon className="material-icons md-36" />
                </Link>

                <Link className="btn" to="/signup">
                    <AddCircleOutlineIcon className="material-icons md-36" />
                </Link>

                <Link className="btn" to="/about">
                    <FaceIcon className="material-icons md-36" />
                </Link>
            </label>
        </nav>
    )
}