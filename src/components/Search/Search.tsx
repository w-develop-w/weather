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
                                <h2>Sun 25.07</h2>
                                <img src="img/1.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Mon 25.07</h2>
                                <img src="img/2.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Tue 25.07</h2>
                                <img src="img/3.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Wen 25.07</h2>
                                <img src="img/4.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Thu 25.07</h2>
                                <img src="img/5.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Fri 25.07</h2>
                                <img src="img/6.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>

                        <li>
                            <div className={styles.card}>
                                <h2>Sat 25.07</h2>
                                <img src="img/7.png" alt="" />
                                <h3>33°</h3>
                                <h3>London</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
