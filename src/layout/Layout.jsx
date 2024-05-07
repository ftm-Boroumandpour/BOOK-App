/* eslint-disable react/prop-types */
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p>
            <a href="#">BotoStart</a> | React js course
        </p>
    </header>
    {children}
    <footer className={styles.footer}><p>Developed by Fateme</p></footer>
    </>
  )
}

export default Layout