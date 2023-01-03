import styles from '../assets/styles/Header.module.scss'
import { useNavigate } from "react-router-dom";
import Buy from '../assets/images/Buy.png'
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate("/register");
    }
    return (
        <div className={styles.container}>
            <Navbar expand="md" fixed="top" >
                <Container >

                    <Navbar.Toggle />
                    <Navbar.Collapse className={styles.collapsedContainer}>
                        <Navbar.Brand href="/" style={{ padding: 0 }}>
                            <div className={styles.title}>
                                <h1>Otoma<span>.</span></h1>
                            </div>
                        </Navbar.Brand>

                        <div className={styles.links}>
                            <Nav >
                                <Nav.Link href="/" className={styles.overview}>Overview</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </div>
                        <div className={styles.login}>
                            <a href='/login'>Log In</a>
                            <img src={Buy} />
                            <button onClick={goToRegister}>Sign In</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;

     //     <div className={styles.title}>
        //         <h1>Otoma<span>.</span></h1>
        //     </div>
        //     <div className={styles.links}>
        //         <a href='#' className={styles.overview}>Overview</a>
        //         <a href='#'>Product</a>
        //         <a href='#'>Contact</a>
        //     </div>
        //     <div className={styles.login}>
        //         <a href='#'>Log In</a>
        //         <img src={Buy} />
        //         <button>Sign In</button>
        // <div className={styles.container}>