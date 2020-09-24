import React from 'react';

import Form from '../components/Form';
import { Header } from '../components/Header';

const SignUp = () => {

    return (
        <div className="signup">
            <Header
                header={'Sign Up Page'}
                subheader={'new user registration form'}
            />
            <Form />
        </div>
    )
}

export default SignUp;