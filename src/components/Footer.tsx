import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBrand}>
        <div className={styles.logo}>TIS</div>

        <p>Tulas International School</p>
      </div>

      <div className={styles.footerLinks}>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#campus">Campus</a>
        <a href="#sports">Sports</a>
        <a href="#contact">Contact</a>
      </div>

      <p className={styles.footerCopy}>
        © 2026 Tulas International School. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer