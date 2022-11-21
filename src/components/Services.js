import styles from '../assets/styles/Services.module.scss'
import radio from '../assets/images/radio.png';
import template from '../assets/images/template.png';
import socialMedia from '../assets/images/socialMedia.png';

function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.services}>
                <div className={styles.serviceContainer}>
                    <img src={radio} />
                    <div className={styles.description}>
                        <h3>Best Qualities</h3>
                        <p>Et quoniam mirari posse quosdam peregrinos existimo haec lecturos.</p>
                    </div>
                </div>
            </div>

            <div className={styles.services}>
                <div className={styles.serviceContainer}>
                    <img src={template} />
                    <div className={styles.description}>
                        <h3>+100 templates</h3>
                        <p>Et quoniam mirari posse quosdam peregrinos existimo haec lecturos.</p>
                    </div>
                </div>
            </div>

            <div className={styles.services}>
                <div className={styles.serviceContainer}>
                    <img src={socialMedia} />
                    <div className={styles.description}>
                        <h3>For all social media</h3>
                        <p>Et quoniam mirari posse quosdam peregrinos existimo haec lecturos.</p>
                    </div>
                </div>
            </div>

            <div className={styles.services}>
                <div className={styles.serviceContainer}>
                    <img src={template} />
                    <div className={styles.description}>
                        <h3>Lorem Ipsum</h3>
                        <p>Et quoniam mirari posse quosdam peregrinos existimo haec lecturos.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;