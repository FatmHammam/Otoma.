import styles from '../assets/styles/OurTeam.module.scss'
import John from '../assets/images/John.png';
import Jane from '../assets/images/Jane.png';
import Matthew from '../assets/images/Matthew.png';

function OurTeam() {
    return (
        <div className={styles.container}>
            <div className={styles.ourTeam}>
                <div className={styles.description}>
                    <h1>Our <span> Team !</span></h1>
                    <p>Et quoniam mirari posse quosdam peregrinos existimo
                        haec lecturos forsitan, si contigerit, quamobrem cum
                        oratio ad ea monstranda deflexerit quae Romae
                        gererentur</p>
                </div>
                <div className={styles.photos}>
                    <img src={John} className={styles.John} />
                    <img src={Matthew} className={styles.Matthew} />
                    <img src={Jane} className={styles.Jane} />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;