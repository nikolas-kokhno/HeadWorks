import React from 'react';
import { useSelector } from 'react-redux';

import { Loader } from './Loader';
import { UserItem } from './UserItem';

const UserList = () => {
    const { items } = useSelector(({ users }) => {
        return { items: users.items }
    });

    return (
        <div className="users__items">
            {items && items.length === 0 ? <Loader /> : 
                items && items.map(user => (
                    <UserItem
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        date={user.date} 
                    />
                )
            )}
        </div>
    )
}

export default UserList;