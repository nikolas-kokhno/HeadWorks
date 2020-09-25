import React from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../redux/actions/users';

import { ModalWindow } from './Modal';

const Form = ({ BouncyRight, BouncyUp }) => {
    const [firstName, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [gender, setGender] = React.useState('male');
    const [program, setProgram] = React.useState('none');
    const [card, setCard] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState('');
    const [errorStatus, setErrorStatuts] = React.useState(false);

    const dispatch = useDispatch();

    const submitForm = () => {
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "gender": gender,
            "card": card
        }
    
        if (firstName === '' || lastName === '') {
            setError('Поля \'Имя или Фамилия\' не могут быть пустыми!');
            setErrorStatuts(true);
            setOpen(true);
        } else {
            dispatch(postUser(data));
            setError('');
            setErrorStatuts(false);
            setOpen(true);
            setName('');
            setLastName('');
            setCard('');
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <form className="signup__form">
                <BouncyRight className="signup__form-group">
                    <label htmlFor="">Имя</label>
                    <input 
                        type="text" 
                        placeholder="Введите реальное имя" 
                        required
                        className="signup__form-default"
                        value={firstName} 
                        onChange={e => setName(e.target.value)}
                    />
                </BouncyRight>

                <BouncyRight className="signup__form-group">
                    <label htmlFor="">Фамилия</label>
                    <input 
                        type="text"
                        placeholder="Введите реальную фамилию" 
                        required
                        className="signup__form-default"
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                    />
                </BouncyRight>

                <BouncyRight className="signup__form-group">
                    <label htmlFor="">Пол</label>
                    <select 
                        className="signup__form-default"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        <option value="male">мужской</option>
                        <option value="female">женский</option>
                        <option value="other">другой</option>
                    </select>
                </BouncyRight>

                <BouncyRight className="signup__form-group">
                    <label>Программа лояльности</label>
                    <select 
                        className="signup__form-default"
                        value={program}
                        onChange={e => setProgram(e.target.value)}
                    >
                        <option value="none">недоступна</option>
                        <option value="card">пластиковая карта</option>
                        <option value="mobile">мобильное приложение</option>
                    </select>
                </BouncyRight>

                <div className="signup__form-group">
                    <label style={program !== 'card' ? {display: 'none'} : {display: 'inline-flex'}}>
                        Платиковая карта
                    </label>
                    <input type="text" className="signup__form-default" 
                        style={program !== 'card' ? {display: 'none'} : {display: 'inline-flex'}} 
                    />
                </div>

                <BouncyUp className="signup__form-btn">
                    <button onClick={submitForm}>Регистрация</button>
                </BouncyUp>
            </form>

            <ModalWindow 
                open={open} 
                handleClose={handleClose}
                error={error}
                errorStatus={errorStatus}
            />
        </>
    )
}

export default Form;