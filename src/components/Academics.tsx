import Reveal from '../Reveal'
import styles from './Academics.module.css'

function Academics() {
  return (
    <section id="academics" className={styles.academics}>
      <Reveal>
        <div className={styles.academicsHeader}>
          <p className={styles.sectionLabel}>
            Academics
          </p>

          <h2>
            Learning beyond
            <br />
            <span>the classroom.</span>
          </h2>
        </div>
      </Reveal>

      <div className={styles.academicCards}>
        <Reveal>
          <article className={styles.academicCard}>
            <span>01</span>

            <h3>Holistic Learning</h3>

            <p>
              We encourage students to grow academically, creatively,
              socially, and emotionally.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.academicCard}>
            <span>02</span>

            <h3>Future Ready</h3>

            <p>
              Modern learning experiences help students develop skills
              for an evolving world.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className={styles.academicCard}>
            <span>03</span>

            <h3>Strong Foundations</h3>

            <p>
              Strong fundamentals create confident learners who are ready
              to take on new challenges.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Academics