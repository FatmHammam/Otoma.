import Login_Register from "../components/Login_Register";
import user from '../assets/images/user.png'
import styles from '../assets/styles/LoginOrRegister.module.scss'
import flame from '../assets/images/flame.png'
import envelope from '../assets/images/envelope.png'

function Register() {
    return (
        <div>
            <Login_Register
                check={"Already a member ?"}
                signIn={" Sign In"}
                fullName={<div className={styles.fullName}>
                    <div className={styles.fname}>
                        <span><img src={user} style={{ width: "15px" }} /></span>
                        <input id="email" type="text" name="email" placeholder="Full Name" />
                    </div>
                    <div className={styles.userName}>
                        <span><img src={flame} style={{ width: "20px" }} /></span>
                        <input id="email" type="text" name="email" placeholder="User Name" />
                    </div>
                </div>}
                userName={
                    <div className={styles.email}>
                        <span><img src={envelope} /></span>
                        <input id="email" type="text" name="email" placeholder="Your e-mail" />
                    </div>
                }
                policy={<div className={styles.policy}>
                    <input type="checkbox" className={styles.check} />
                    <span className={styles.checkmark}></span>
                    <p className={styles.terms} >Creating an account means you’re okay with our Terms of Serv-ice, Privacy Policy, and our default Notification Settings.</p>
                </div>}
                buttonText={"Log In"}
            />
        </div>
    );
}

export default Register;
