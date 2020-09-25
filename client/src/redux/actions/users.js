import axios from 'axios';

const baseURL = 'https://us-central1-headworks-eb302.cloudfunctions.net/api';

export const setUsers = (items) => ({
    type: 'SET_USERS',
    payload: items,
});

export const addUser = (res) => ({
    type: 'ADD_NEW_USER',
    payload: res
})

export const fetchUsers = () => (dispatch) => {
    axios.get(`${baseURL}/users`)
        .then(({ data }) => {
            dispatch(setUsers(data));
        })
}

export const postUser = (data) => (dispatch) => {
    axios.post(`${baseURL}/users`, data)
        .then(({ data }) => {
            dispatch(addUser(data));
            dispatch(fetchUsers());
        })
};
