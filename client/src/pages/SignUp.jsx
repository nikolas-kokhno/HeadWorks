import React from 'react';

import Form from '../components/Form';
import { Header } from '../components/Header';

const SignUp = () => {

    return (
        <div className="signup">
            <Header
                header={'форма регистрации'}
                subheader={'создайте нового пользователя'}
            />
            <Form />
        </div>
    )
}

export default SignUp;