import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      
      <footer className={styles.footer}>
          <a href="https://www.linkedin.com/company/wids-bennington/"><img src="/linkedin.png" alt="LinkedIn icon" width="30" height="30"/> </a>
          <a href="https://www.instagram.com/widsbenn23/"><img src="/instagram.png" alt="Instagram icon" width="25" height="25"/> </a>
          <a href="https://www.facebook.com/widsbennington23/"><img src="/facebook.png" alt="Facebook icon" width="25" height="25"/> </a>
          <a href = "mailto: nikikaranikola@bennington.edu"><img src="/mail.png" alt="Gmail icon" width="30" height="30"/> </a>        
        @ 2023 Niki Karanikola. All Rights Reserved.
      </footer>
    </>
  )
}
