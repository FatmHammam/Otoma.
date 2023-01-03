import styles from '../assets/styles/LoginOrRegister.module.scss'
import key from '../assets/images/key.png'
import { useNavigate } from "react-router-dom";
import Back from '../assets/images/Back.png'

function Login_Register({ check, signIn, userName, fullName, buttonText, policy }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    }
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <img src={Back} className={styles.Back} onClick={goBack} />
                <p className={styles.signIn}>{check}<span>{signIn}</span></p>
                <h1>Otoma<span>.</span></h1>
                {fullName}
                {userName}
                <div className={styles.email}>
                    <span><img src={key} /></span>
                    <input id="email" type="text" name="email" placeholder="Password" />
                </div>
                {policy}
                <div className={styles.links}>
                    <a href="#">Register</a>
                    <a href="#">Forgot Password</a>
                    <button>{buttonText}</button>
                </div>

            </div>

            <div className={styles.invite}>
                <h1>Invite friends</h1>
                <p>and enjoy incredible benefits</p>
                <button>Send a invite</button>
            </div>
        </div>
    );
}

export default Login_Register;


// policy =






// fullName =
