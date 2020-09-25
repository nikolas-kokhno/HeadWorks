import React from 'react';

import { Header } from '../components/Header';
import Photo from '../assets/img/about.jpg';

/* Material UI components */
import Paper from '@material-ui/core/Paper';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                    <div className="about__body-info">
                        <p>First Name: <span>Nikolay</span></p>
                        <p>Last Name: <span>Kokhno</span></p>
                        <p>Age: <span>20</span></p>
                    </div>
                    <div className="about__body-content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Consequuntur eum aliquid reprehenderit deserunt, quod 
                            sapiente fuga rerum maiores aspernatur nulla necessitatibus 
                            modi tempora ut ipsam eius laudantium consequatur 
                            consectetur beatae.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Consequuntur eum aliquid reprehenderit deserunt, quod 
                            sapiente fuga rerum maiores aspernatur nulla necessitatibus 
                            modi tempora ut ipsam eius laudantium consequatur 
                            consectetur beatae.
                        </p>
                    </div>
                </div>

                <div className="about__footer">
                    <InstagramIcon />
                    <TelegramIcon />
                    <GitHubIcon />
                </div>
            </Paper>
        </div>
    )
}