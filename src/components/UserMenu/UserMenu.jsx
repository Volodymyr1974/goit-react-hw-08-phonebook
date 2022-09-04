import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import style from '../UserMenu/UserMenu.module.css';
import operations from '../../redux/auth/authOperations';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import defaultAvatar from './icon.png';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    const avatar = defaultAvatar;

    return (
        <div className={style.container}>
            <img src={avatar} alt="" width="32" className={style.avatar} />
            <span className={style.name}>Welcome, {name}</span>
            <Button
                sx={{
                    color: '#f1f3f5',
                    fontWeight: 600,
                    fontSize: '18px',
                    padding: '3px 8px',
                    textTransform: 'none',
                }}
                type="button"
                onClick={() => dispatch(operations.logOut())}
                variant="text"
                endIcon={<LogoutIcon />}
            >
                Log Out
            </Button>

        </div>
    );
}