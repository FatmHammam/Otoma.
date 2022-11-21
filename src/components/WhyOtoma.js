import styles from '../assets/styles/WhyOtoma.module.scss'
import img2 from '../assets/images/img2.png'

function WhyOtoma() {
    return (
        <div className={styles.container}>
            <div className={styles.whyOtoma}>
                <img src={img2} />
                <div className={styles.description}>
                    <h1>Why <span>Otoma</span> is a new begining</h1>
                    <p>Et quoniam mirari posse quosdam peregrinos existimo
                        haec lecturos forsitan, si contigerit, quamobrem cum
                        oratio ad ea monstranda deflexerit quae Romae
                        gererentur</p>
                    <button>Find my design</button>
                </div>
            </div>
        </div>
    );
}

export default WhyOtoma;