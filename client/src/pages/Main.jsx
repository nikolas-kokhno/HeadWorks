import React from 'react';

import { Header } from '../components/Header';
import UserList from '../components/UserList';

const MainPage = () => {
    return (
        <div className="main">
            <Header
                header={'Список пользователей'}
                subheader={'некоторые данные о пользователях'}
            />
            <UserList />
        </div>
    )
}

export default MainPage;