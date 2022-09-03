import styles from '../HomePage/HomePage.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Вітаю на сервісі для збергіання Твоїх телефонних контактів...
            </h2>
        </div>
    );
}