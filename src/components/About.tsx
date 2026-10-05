import Reveal from '../Reveal'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal>
        <div className={styles.aboutContent}>
          <p className={styles.sectionLabel}>
            About TIS
          </p>

          <h2>
            Education that
            <br />
            <span>shapes character.</span>
          </h2>

          <p className={styles.aboutText}>
            Tulas International School brings together strong academic
            foundations, timeless values, and a modern approach to learning.
            We prepare students to grow with confidence, curiosity, and purpose.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export default About