import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import styles from '../UserMenu/UserMenu.module.css';
import operations from '../../redux/auth/authOperations';

// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     avatar: {
//         marginRight: 4,
//     },
//     name: {
//         fontWeight: 700,
//         marginRight: 12,
//     },
// };

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    // const avatar = defaultAvatar;

    return (
        <div className={styles.container}>
            {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
            <span className={styles.name}>Добро пожаловать, {name}</span>
            <button type="button" onClick={() => dispatch(operations.logOut())}>
                Выйти
            </button>
        </div>
    );
}