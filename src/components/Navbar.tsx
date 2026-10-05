import styles from './Navbar.module.css'

type NavbarProps = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TIS</div>

      <div className={styles.navLinks}>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#campus">Campus</a>
        <a href="#sports">Sports</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={styles.navActions}>
        <button className={styles.applyButton}>
          Enquire Now
        </button>

        <button
          className={styles.themeButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar