import social2 from '../assets/images/social2.png';
import sideArrow from '../assets/images/sideArrow.png';
import discord1 from '../assets/images/discord1.png';
import Arrow2 from '../assets/images/Arrow2.png';
import Payment from '../assets/images/Payment.png';
import styles from '../assets/styles/Footer.module.scss'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.title}>
                    <h1>Otoma <span> .</span></h1>
                    <p>Find the best, be the best</p>
                    <div className={styles.photos} >
                        <img src={social2} />
                    </div>
                </div>
                <div className={styles.partner}>
                    <div className={styles.becomePartner}>
                        <h3> Become partner <span><img src={sideArrow} style={{ width: "6px" }} /></span></h3>
                        <p>Earn some serious cash promoting Otoma.</p>
                    </div>
                    <div className={styles.sellProducts}>
                        <h3> Sell Products <span><img src={sideArrow} style={{ width: "6px" }} /></span></h3>
                        <p>Earn 70% and more on all sales</p>
                    </div>
                </div>

                <div className={styles.menu}>
                    <h3>Menu</h3>
                    <p>Overview</p>
                    <p>Template</p>
                    <p>Contact</p>
                </div>
                <div className={styles.join}>
                    <h3>Join our growing discord community</h3>
                    <p>Exclusive offers, tips and goodies, you will find everything in our newsletter!</p>
                    <div className={styles.enterEmail}>
                        <img src={discord1} />
                        <p>Enter your email to get an invite</p>
                        <img src={Arrow2} className={styles.Arrow} />
                    </div>
                </div>
            </div>

            <img src={Payment} className={styles.Payment} />

            <div className={styles.copyRights}>
                <h3>Terms and Privacy Policy</h3>
                <h3>Copyright © 2021 Otoma</h3>
                <h3>Site Map - I find a bug ? </h3>
            </div>
        </div>
    );
}

export default Footer;