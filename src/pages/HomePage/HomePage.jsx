import styles from '../HomePage/HomePage.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Welcome to the service for storing your phone contacts...
            </h2>
        </div>
    );
}