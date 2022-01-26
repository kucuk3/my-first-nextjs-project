import Layout from '../../components/layout'
import getData, { getCategoryData } from '../../components/libfolder/getData'
import getContentsData, {
  getContentBySlug,
  getContentsAllData
} from '../../components/libfolder/getContentsData'
import styles from '../../styles/tripping.module.css'
import Menu from '../../components/menu'
import StoryCard from '../../components/StoryCard'

export default function icerikYazisi({ icerik, data, content }) {
  //console.log({ content })
  return (
    <Layout>
      <Menu data={data} />

      <div className={styles.titleText}>
        <img
          className={styles.foto}
          src={content[0].fields.contentImage[0].url}
          alt=""
        />
      </div>
      <h1 className={styles.cardTitle}>{content[0].fields.contentTitle}</h1>
      <p className={styles.SEOText}>{content[0].fields.contentText}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const contents = await getContentsAllData()
  return {
    paths: contents.map((content) => {
      return {
        params: {
          icerik: `${content.fields.contentURL}`
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { icerik } = params
  const data = await getData()
  const content = await getContentBySlug(icerik)
  return {
    props: {
      data,
      icerik,
      content,
      revalidate: 10
    }
  }
}
