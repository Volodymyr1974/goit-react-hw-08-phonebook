import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <ul
            className={styles.mainNavList}>


            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.mainNavItem
                }
            >Home </NavLink>
            {isLoggedIn && (<NavLink
                to="contacts"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.mainNavItem
                }
            >
                Contacts
            </NavLink>)}



        </ul>
    );
}