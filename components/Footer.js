import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <a href="https://www.linkedin.com/company/wids-bennington/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-149-450498.png" alt="LinkedIn icon" width="50" height="50"/></a>
      <a href = "mailto: nikikaranikola@bennington.edu"><img src="https://cdn-icons-png.flaticon.com/512/95/95627.png" alt="LinkedIn icon" width="50" height="50"/></a>   
      <footer className={styles.footer}>
        @ 2023 Niki Karanikola. All Rights Reserved.
      </footer>
    </>
  )
}
