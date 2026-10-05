import Reveal from '../Reveal'
import styles from './Sports.module.css'

function Sports() {
  return (
    <section id="sports" className={styles.sports}>
      <Reveal>
        <div className={styles.sportsHeader}>
          <p className={styles.sectionLabel}>
            Sports & Activities
          </p>

          <h2>
            Learn to play.
            <br />
            <span>Play to grow.</span>
          </h2>

          <p className={styles.sportsIntro}>
            Beyond academics, students discover teamwork, discipline,
            confidence, and leadership through active experiences.
          </p>
        </div>
      </Reveal>

      <div className={styles.sportsList}>
        <Reveal>
          <article className={styles.sportItem}>
            <span>01</span>
            <h3>Football</h3>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.sportItem}>
            <span>02</span>
            <h3>Basketball</h3>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.sportItem}>
            <span>03</span>
            <h3>Cricket</h3>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.sportItem}>
            <span>04</span>
            <h3>Creative Arts</h3>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Sports