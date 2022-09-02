import styles from './AuthNavigation.module.css';
import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export function AuthNavigation() {
    return (
        <ul className={styles.authNavList}>

            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.authNavItem
                }
            >
                sign up
            </NavLink>


            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.authNavItem
                }
            >
                Log In
            </NavLink>

        </ul>
    );
}