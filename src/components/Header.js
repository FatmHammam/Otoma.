import styles from '../assets/styles/Header.module.scss'
import Buy from '../assets/images/Buy.png'

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Otoma<span>.</span></h1>
            </div>
            <div className={styles.links}>
                <a href='#' className={styles.overview}>Overview</a>
                <a href='#'>Product</a>
                <a href='#'>Contact</a>
            </div>
            <div className={styles.login}>
                <a href='#'>Log In</a>
                <img src={Buy} />
                <button>Sign In</button>
            </div>
        </div>
    );
}

export default Header;