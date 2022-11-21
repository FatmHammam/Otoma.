import profile from '../assets/images/profile.png';
import cloud from '../assets/images/cloud.png';
import Arrow from '../assets/images/Arrow.png';
import styles from '../assets/styles/ProfileInfo.module.scss'

function ProfileInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.setting}>
                    <div className={styles.settingBox}>
                        <h1>Settings</h1>
                        <p className={styles.personal}>Personal informations</p>
                        <div className={styles.moreInfo} >
                            <p>Account</p>
                            <p>Notifications</p>
                            <p>Payment</p>
                        </div>
                    </div>
                    <h3>Privacy settings</h3>
                    <div className={styles.privacyBox}>
                        <div className={styles.post}>
                            <p>Post my profile in public</p>
                            <input type="checkbox" id="toggle" /><label htmlFor="toggle">Toggle</label>
                        </div>
                        <div className={styles.notifications}>
                            <p>Receive notifications</p>
                            <input type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
                        </div>
                    </div>
                    <hr></hr>
                    <p>Desactivate your account ?</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.title} >
                        <img src={profile} alt="" />
                        <div className={styles.welcome}>
                            <h3>Welcome back</h3>
                            <h1>Matthew.J</h1>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.personalInfo}>
                            <div className={styles.general}>
                                <label>Full name</label>
                                <input type="text" placeholder="Matthew James" />

                                <label>Mail</label>
                                <input type="text" placeholder="matthew.james@gmail.com" />

                                <label>Company</label>
                                <input type="text" placeholder="Le French Crew" />
                            </div>
                            <div className={styles.userAndPassword}>
                                <label>Username</label>
                                <input type="text" placeholder="Matthew.J" />

                                <label>Password</label>
                                <input type="password" placeholder="**********" />

                                <label>Website</label>
                                <input type="text" placeholder="matthewjames.com" />
                            </div>
                        </div>
                        <div className={styles.saveChanges}>
                            <img src={cloud} alt="" />
                            <span>Your changes are save automatically</span>
                        </div>
                        <h1>Billing information</h1>
                        <div className={styles.personalInfo}>
                            <div className={styles.general}>
                                <label>Address 1</label>
                                <input type="text" placeholder="8041 Ocean drive" />
                                <label>City of residence</label>
                                <input type="text" placeholder="New York" />
                                <label>Select your country</label>
                                <input type="text" placeholder="United state of America" />
                            </div>
                            <div className={styles.userAndPassword}>
                                <label>Address 2</label>
                                <input type="text" placeholder="" />
                                <label>Select state</label>
                                <div>
                                    <input type="text" placeholder="New York" />
                                    <img src={Arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;