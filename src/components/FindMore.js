import styles from '../assets/styles/FindMore.module.scss'
import Imgheader from '../assets/images/Imgheader.png';
import poly from '../assets/images/poly.png';

function FindMore() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Find the best with<span>Otoma.</span></h1>
                <p>More than 100 templates for website, landing page,
                    Youtube banner, twitch and many other !</p>
                <div className={styles.buttons}>
                    <button className={styles.findDesign}>Find Design</button>
                    <button className={styles.video}>
                        <img src={poly} style={{ width: "20px", marginRight: "5px", marginBottom: "5px" }} />
                        Vidéo intro</button>
                </div>
            </div>
            <div className={styles.img}>
                <img src={Imgheader} />
            </div>
        </div>
    );
}

export default FindMore;