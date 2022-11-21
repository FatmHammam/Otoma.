import Login_Register from "../components/Login_Register";
import user from '../assets/images/user.png'
import styles from '../assets/styles/LoginOrRegister.module.scss'

function Login() {

    return (
        <div>
            <Login_Register
                userName={
                    <div className={styles.email}>
                        <span><img src={user} /></span>
                        <input id="email" type="text" name="email" placeholder="Your username or e-mail" />
                    </div>
                }
                buttonText={"Log In"}
            />
        </div>
    );
}

export default Login;
