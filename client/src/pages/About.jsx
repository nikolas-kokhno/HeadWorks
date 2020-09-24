import React from 'react';
import { Header } from '../components/Header';
import Photo from '../assets/img/about.jpg';

/* Material UI components */
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export const AboutPage = () => {
    return (
        <div className="about">
            <Header
                header={'About Me Page'}
                subheader={'Some information about me'}
            />

            <Paper>
                <div className="about__header">
                    <img
                        alt="Nikolas Kokhno"
                        src={Photo}
                        className="about__header-avatar"
                    />
                </div>

                <div className="about__body">

                </div>

                <div className="about__footer">

                </div>
            </Paper>
        </div>
    )
}