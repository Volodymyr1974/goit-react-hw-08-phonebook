import styles from './AppBar.module.css';


export default function Appbar({ children }) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
}