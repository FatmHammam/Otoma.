import styles from '../assets/styles/Downloads.module.scss'
import point from '../assets/images/point.png';
import v1 from '../assets/images/v1.png';
import v2 from '../assets/images/v2.png';
import v3 from '../assets/images/v3.png';


function Downloads() {
    return (
        <div className={styles.container}>
            <div className={styles.download}>
                <div className={styles.description}>
                    <h1><span> 100 000 </span> downloads around the world</h1>
                    <p>We will take care of everything else</p>
                </div>
                <img src={point} className={styles.point} />
            </div>
            <div className={styles.examples}>
                <div className={styles.example}>
                    <div className={styles.exampleContainer}>
                        <h1>“</h1>
                        <p>Et quoniam mirari posse quosdam sonare peregrinos existimo</p>
                        <div className={styles.artists}>
                            <img src={v1} />
                            <div>
                                <h5>Mark Grabbs</h5>
                                <p>Verified Artist</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.example}>
                    <div className={styles.exampleContainer}>
                        <h1>“</h1>
                        <p>Et quoniam mirari posse quosdam sonare peregrinos existimo</p>
                        <div className={styles.artists}>
                            <img src={v2} />
                            <div>
                                <h5>Jannith Olsen</h5>
                                <p>Verified Artist</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.example}>
                    <div className={styles.exampleContainer}>
                        <h1>“</h1>
                        <p>Et quoniam mirari posse quosdam sonare peregrinos existimo</p>
                        <div className={styles.artists}>
                            <img src={v3} />
                            <div>
                                <h5>Jose Armando</h5>
                                <p>Verified Artist</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Downloads;