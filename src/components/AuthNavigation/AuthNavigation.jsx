import styles from './AuthNavigation.module.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export function AuthNavigation() {
    return (
        <ul className={styles.authNavList}>
            <Button
                sx={{
                    color: '#f1f3f5',
                    marginRight: 3,
                    fontSize: '18px',
                }}
                variant="text"
                endIcon={<AssignmentIndOutlinedIcon />}
            >
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.authNavItem}
                >
                    sign up
                </NavLink>
            </Button>

            <Button
                sx={{
                    color: '#f1f3f5',
                    fontSize: '18px',
                }}
                variant="text"
                endIcon={<LoginOutlinedIcon />}
            >
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.authNavItem}
                >
                    Log In
                </NavLink>
            </Button>

        </ul>
    );
}