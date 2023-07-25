import styles from './Search.module.scss'

export function Search () {

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <input type="text" placeholder='Enter your city'/>
            </div>
        </div>
    )
}
