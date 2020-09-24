import React from 'react';

import { UserItem } from './UserItem';

const users = [
    {id: "0", firstName: "Rodrigo", lastName: "Leodan", date: "20/02/2020"},
    {id: "1", firstName: "Leonargo", lastName: "Kabachek", date: "20/02/2020"},
    {id: "2", firstName: "Furer", lastName: "Disago", date: "20/02/2020"},
    {id: "3", firstName: "Ladrego", lastName: "Marcus", date: "20/02/2020"}
]

const UserList = () => {

    return (
        <div className="users__items">
            {users.map(user => (
                <UserItem
                    key={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    date={user.date} 
                />
            ))}
        </div>
    )
}

export default UserList;