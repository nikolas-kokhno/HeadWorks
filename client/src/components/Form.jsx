import React from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../redux/actions/users';
import { ModalWindow } from './Modal';

/* Material UI components */
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const genders = [
    {value: "male", label: "мужской"},
    {value: "female", label: "женский"}
]

const programs = [
    {value: "none", label: "недоступна"},
    {value: "card", label: "пластиковая карта"},
    {value: "mobile", label: "мобильное приложение"}
];

const Form = () => {
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
        <Card className="signup__card">
            <form className="signup__form">
                <FormControl margin="dense">
                    <InputLabel htmlFor="component-simple">
                        Имя
                    </InputLabel>
                    <Input 
                        id="component-simple" 
                        value={firstName} 
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>

                <FormControl margin="dense">
                    <InputLabel htmlFor="component-simple">
                        Фамилия
                    </InputLabel>
                    <Input 
                        id="component-simple" 
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                    />
                </FormControl>

                <FormControl margin="dense">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Пол"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>

                <FormControl margin="dense">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Программа лояльности"
                        value={program}
                        onChange={e => setProgram(e.target.value)}
                    >
                        {programs.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                
                <FormControl 
                    margin="dense" 
                    style={program !== 'card' ? {display: 'none'} : {display: 'inline-flex'}}
                >
                    <InputLabel htmlFor="component-simple">
                        Пластиковая карта
                    </InputLabel>
                    <Input 
                        id="component-simple" 
                        value={card} 
                        onChange={e => setCard(e.target.value)} 
                    />
                </FormControl>

                <div className="signup__submit">
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={submitForm}
                    >
                        зарегистрироваться
                    </Button>
                </div>
            </form>
            
            <ModalWindow 
                open={open} 
                handleClose={handleClose} 
                error={error}
                errorStatus={errorStatus}
            />
        </Card>
    )
}

export default Form;