import styles from './Search.module.scss'

export function Search () {

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <input type="text" placeholder='Enter your city'/>
                <div className={styles.listDays}>
                    <ul>
                        
                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33*</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33*</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33*</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33*</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33*</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
