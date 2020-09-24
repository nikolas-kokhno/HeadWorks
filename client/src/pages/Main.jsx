import React from 'react';

import { Header } from '../components/Header';
import UserList from '../components/UserList';

const MainPage = () => {

    return (
        <div className="main">
            <Header
                header={'User List Page'}
                subheader={'full list of registered users'}
            />
            <UserList />
        </div>
    )
}

export default MainPage;