import React from 'react';
import axios from 'axios';

import './SignUp.scss';
import HWLogo from '../../assets/headworks.png';
import Form from '../../components/Form';
import styled, { keyframes } from 'styled-components';
import { bounceInDown, bounceInUp, bounceInRight } from 'react-animations';

const SignUp = () => {
    const [randomData, setRandomData] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://meowfacts.herokuapp.com/')
            .then((res) => {
                setRandomData(res.data.data);
            })
    }, []);

    return (
        <div className="signup">

            <div className="signup__left">
                <img src={HWLogo} alt=""/>
                <BouncyUp className="signup__left-header">
                    <h3>Регистрация</h3>
                    <span>форма регистрации нового пользователя</span>
                </BouncyUp>
            </div>

            <div className="signup__right">
                <BouncyDown className="signup__right-header">
                    <h2>Создайте пользователя</h2>
                </BouncyDown>

                <div className="signup__right-form">
                    <Form 
                        BouncyRight={BouncyRight}
                        BouncyUp={BouncyUp}
                    />
                </div>

                <BouncyUp 
                    className="signup__right-random" 
                    data-title={randomData}
                >
                    {randomData}
                </BouncyUp>
            </div>

        </div>
    )
}

/* Animation */
const bounceUpAnim = keyframes`${bounceInUp}`;
const bounceDownAnim = keyframes`${bounceInDown}`;
const bounceRightAnim = keyframes`${bounceInRight}`;

const BouncyUp = styled.div`animation: .5s ${bounceUpAnim};`;
const BouncyDown = styled.div`animation: .5s ${bounceDownAnim};`;
const BouncyRight = styled.div`animation: 1s ${bounceRightAnim};`;


export default SignUp;