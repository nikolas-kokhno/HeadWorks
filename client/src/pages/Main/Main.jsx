import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInUp, bounceInRight } from 'react-animations';

import './Main.scss';
import UserList from '../../components/UserList';
import Container from '@material-ui/core/Container';

const MainPage = () => {
    return (
        <div className="main">
            <Container maxWidth="lg">
                <BouncyUp className="header">
                    <h2 className="header__title">
                    Список пользователей
                    </h2>
                    <h5 className="header__subtitle">
                        Некоторые данные о пользователях
                    </h5>
                </BouncyUp>
                <UserList BouncyRight={BouncyRight} />
            </Container>
        </div>
    )
}

/* Animation */
const bounceUpAnim = keyframes`${bounceInUp}`;
const bounceRightAnim = keyframes`${bounceInRight}`;

const BouncyUp = styled.div`animation: 1s ${bounceUpAnim};`;
const BouncyRight = styled.div`animation: 1s ${bounceRightAnim};`;

export default MainPage;