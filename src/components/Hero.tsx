import Reveal from '../Reveal'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <Reveal>
        <p className={styles.heroLabel}>
          Tulas International School
        </p>

        <h1>
          The Modern
          <br />
          <span>Gurukul.</span>
        </h1>

        <p className={styles.heroDescription}>
          Where tradition meets tomorrow.
        </p>

        <button className={styles.heroButton}>
          Explore TIS →
        </button>
      </Reveal>
    </section>
  )
}

export default Hero