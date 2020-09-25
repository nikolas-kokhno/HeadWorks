import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInDown, bounceInUp, bounceInRight } from 'react-animations';

import './About.scss';
import HWLogo from '../../assets/headworks.png';

/* Material UI Icon */
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {

    return (
        <div className="about">
            <BouncyUp className="about__left">
                <div className="about__left-img">
                    <h3>Обо мне:</h3>
                </div>

                <div className="about__left-info">
                    <p>Имя: <span>Николай</span></p>
                    <p>Фамилия: <span>Кохно</span></p>
                    <p>Лет: <span>20</span></p>
                </div>

                <div className="about__left-content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptas, consectetur debitis cumque recusandae eum aliquam 
                    impedit totam nostrum praesentium tempora, eius expedita 
                    voluptatibus numquam! Reiciendis, veniam adipisci. Doloremque, 
                    dignissimos sint.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptas, consectetur debitis cumque recusandae eum aliquam 
                    impedit totam nostrum praesentium tempora, eius expedita 
                    voluptatibus numquam! Reiciendis, veniam adipisci. Doloremque, 
                    dignissimos sint.</p>
                </div>

                <BouncyDown className="about__left-social">
                    <a href="https://www.instagram.com/n1k0las99/">
                        <InstagramIcon />
                    </a>
                    <a href="https://t.me/nikolaskokhno">
                        <TelegramIcon />
                    </a>
                    <a href="https://github.com/nikolas-kokhno">
                        <GitHubIcon />
                    </a>
                </BouncyDown>
            </BouncyUp>

            <div className="about__right">
                <img src={HWLogo} alt=""/>
                <BouncyUp className="about__right-header">
                    <h3>Информация</h3>
                    <span>Немножко информации обо мне</span>
                </BouncyUp>
            </div>
        </div>
    )
}

/* Animation */
const bounceUpAnim = keyframes`${bounceInUp}`;
const bounceDownAnim = keyframes`${bounceInDown}`;

const BouncyUp = styled.div`animation: 1s ${bounceUpAnim};`;
const BouncyDown = styled.div`animation: 1s ${bounceDownAnim};`;

export default About;
