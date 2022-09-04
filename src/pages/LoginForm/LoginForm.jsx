import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import style from '../LoginForm/LoginForm.module.css';


export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={style.container}>
            <h1 className={style.container_title}>Login page</h1>

            <form onSubmit={handleSubmit} className={style.container_form} autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    type="email"
                    variant="standard"
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="For example: johndoe@mail.com"
                    onChange={handleChange}
                    sx={{
                        margin: '0 auto',
                        display: 'block',
                        width: 320,
                        marginBottom: 4,
                        '& .MuiInputLabel-root': {
                            left: 0,
                        },
                    }}
                />

                <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
                    type="password"
                    variant="standard"
                    value={password}
                    pattern=".{8,}"
                    title="Eight or more characters"
                    onChange={handleChange}
                    sx={{
                        margin: '0 auto',
                        display: 'block',
                        width: 320,
                        marginBottom: 4,
                        '& .MuiInputLabel-root': {
                            left: 0,
                        },
                    }}
                />


                <Button
                    sx={{
                        marginLeft: 4,
                        minWidth: 100,
                        marginBottom: 4,

                    }}
                    type="submit"
                    variant="text"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}