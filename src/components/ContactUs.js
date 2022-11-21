import discord from '../assets/images/discord.png';
import paper from '../assets/images/paper.png';
import tire from '../assets/images/tire.png';
import Insta from '../assets/images/Insta.png';
import LinkedIn from '../assets/images/LinkedIn.png';
import behance from '../assets/images/behance.png';
import styles from '../assets/styles/ContactUs.module.scss'

function ContactUs() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.contactInfo}>
                    <h1>Contact <span>Us</span></h1>
                    <p>Any question or remarks? Just write us a message</p>
                    <div className={styles.form}>
                        <div className={styles.name}>
                            <div className={styles.first}>
                                <label>First name</label>
                                <input type="text" placeholder="Matthew" />
                            </div>
                            <div className={styles.last}>
                                <label>Last Name</label>
                                <input type="text" placeholder="James" />
                            </div>
                        </div>
                        <label>Mail</label>
                        <input type="text" placeholder="matthew.james@gmail.com" />
                        <p>  Why do you contact us ? </p>
                        <div className={styles.contactReasons}>
                            <div className={styles.round}>
                                <input type="checkbox" id="checkbox1" />
                                <label htmlFor="checkbox1"></label>
                            </div>
                            <span>Sell Products</span>

                            <div className={styles.round}>
                                <input type="checkbox" id="checkbox2" />
                                <label htmlFor="checkbox2"></label>
                            </div>
                            <span>Become partner</span>

                            <div className={styles.round}>
                                <input type="checkbox" id="checkbox3" />
                                <label htmlFor="checkbox3"></label>
                            </div>
                            <span>I found a bug</span>

                            <div className={styles.round}>
                                <input type="checkbox" id="checkbox4" />
                                <label htmlFor="checkbox4"></label>
                            </div>

                            <span>Other</span>

                        </div>
                        <label>Message</label>
                        <textarea placeholder="Write your message…" />
                        <div className={styles.send}>
                            <button>Send my message</button>
                        </div>
                    </div>
                </div>
                <div className={styles.resources}>
                    <h5>Or check out these resources</h5>
                    <div className={styles.community}>
                        <img src={discord} alt="" />
                        <div className={styles.discord}>
                            <h5>Join our community on Discord</h5>
                            <p>Popular UI component like tooltips, modals, cards, surveys are there to help you</p>
                        </div>
                    </div>
                    <div className={styles.newsletter}>
                        <img src={paper} alt="" />
                        <div className={styles.discord}>
                            <h5>Join our newsletter</h5>
                            <p>Popular UI component like tooltips, modals, cards, surveys are there to help you</p>
                        </div>
                    </div>
                    <div className={styles.brands}>
                        <img src={LinkedIn} alt="" />
                        <img src={behance} alt="" />
                        <img src={tire} alt="" />
                        <img src={Insta} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;