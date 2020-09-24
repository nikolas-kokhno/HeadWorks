import React from 'react';

/* Material UI components */
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export const UserItem = ({firstName, lastName, date}) => {
    return (
        <Paper className="users__item">
            <div className="users__item-info">
                <Avatar>{firstName.charAt(0)}</Avatar>
                <span>{firstName + ' ' + lastName}</span>
            </div>
            <div className="users__item-date">
                {date}
            </div>
        </Paper >
    )
}