import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/company/wids-bennington/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384046.png" alt="LinkedIn icon" width="50" height="50"/></a>
        <a href = "mailto: nikikaranikola@bennington.edu"><img src="https://cdn-icons-png.flaticon.com/512/60/60543.png" alt="LinkedIn icon" width="50" height="50"/></a><br>
        @ 2023 Niki Karanikola. All Rights Reserved.
      </footer>
    </>
  )
}
