import Reveal from '../Reveal'
import styles from './Campus.module.css'

function Campus() {
  return (
    <section id="campus" className={styles.campus}>
      <Reveal>
        <div className={styles.campusHeader}>
          <p className={styles.sectionLabel}>
            Campus
          </p>

          <h2>
            A place to
            <br />
            <span>belong & grow.</span>
          </h2>
        </div>
      </Reveal>

      <div className={styles.campusGrid}>
        <Reveal className={styles.campusLargeReveal}>
          <article className={`${styles.campusCard} ${styles.campusLarge}`}>
            <div>
              <span>01</span>

              <h3>Learning Spaces</h3>
            </div>

            <p>
              Thoughtfully designed spaces encourage curiosity,
              collaboration, and meaningful learning.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.campusCard}>
            <div>
              <span>02</span>

              <h3>Creative Spaces</h3>
            </div>

            <p>
              Places where students can explore ideas, express
              themselves, and discover new interests.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.campusCard}>
            <div>
              <span>03</span>

              <h3>Community</h3>
            </div>

            <p>
              A supportive environment where students, teachers,
              and families grow together.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Campus