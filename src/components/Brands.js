import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import b4 from '../assets/images/b4.png';
import b5 from '../assets/images/b5.png';
import b6 from '../assets/images/b6.png';
import styles from '../assets/styles/Brands.module.scss'

function Brands() {
    return (
        <div className={styles.container}>
            <p>Used by trusted brands and thousands of designers worldwide.</p>
            <div className={styles.brands}>
                <img src={b1} className={styles.b1} />
                <img src={b2} />
                <img src={b3} />
                <img src={b4} />
                <img src={b5} />
                <img src={b6} />
            </div>
        </div>
    );
}

export default Brands;