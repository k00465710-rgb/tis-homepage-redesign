import Reveal from '../Reveal'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Reveal>
        <div className={styles.contactContent}>
          <p className={styles.sectionLabel}>
            Contact TIS
          </p>

          <h2>
            Start the
            <br />
            <span>journey.</span>
          </h2>

          <p className={styles.contactText}>
            Interested in learning more about Tulas International School?
            Get in touch with our team.
          </p>

          <button className={styles.contactButton}>
            Enquire Now →
          </button>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact  