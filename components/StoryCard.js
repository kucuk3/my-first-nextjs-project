import Link from 'next/link'
import styles from '../components/storyCard.module.css'
export default function StoryCard({ content }) {
  //console.log(content.fields)
  return (
    <div className={styles.frame}>
      <div className={styles.card}>
        <title>{content.fields.categoryName} | emreninblogu.com</title>
        <h1 className={styles.cardTitle}>
          <a
            className={styles.cardTitleText}
            href={`/icerik/${content.fields.contentURL}`}
          >
            {content.fields.contentTitle}
          </a>
        </h1>
        <div className={styles.titleText}>
          <a href={`/icerik/${content.fields.contentURL}`}>
            <img
              className={styles.foto}
              src={content.fields.contentImage[0].url}
              alt=""
            />
          </a>

          <div className={styles.titleTextDesc}>
            <p className={styles.cardShortText}>
              {content.fields.contentShortText}
            </p>
            <button type="button" className={styles.cardBtn}>
              <a
                className={styles.buttonText}
                href={`/icerik/${content.fields.contentURL}`}
              >
                Devamını oku..
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
