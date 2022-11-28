import styles from '../assets/styles/WhyOtoma.module.scss'
import img2 from '../assets/images/img2.png'
import Rectangle from '../assets/images/Rectangle.png'
import phone from '../assets/images/phone.png'
import hourglass from '../assets/images/hourglass.png'

function WhyOtoma() {
    return (
        <div className={styles.container}>
            <img src={phone} alt="" className={styles.phone} />
            <img src={hourglass} alt="" className={styles.hourglass} />
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
            <div className={styles.footer}>
                <img src={Rectangle} alt="" />
            </div>
        </div>
    );
}

export default WhyOtoma;