import Layout from '../components/layout'
import getData, { getCategoryData } from '../components/libfolder/getData'
import getContentsData from '../components/libfolder/getContentsData'
import StoryCard from '../components/StoryCard'
import Menu from '../components/menu'
import styles from '../styles/tripping.module.css'
import { useRouter } from 'next/router'
import HomePage from './index'

export default function PostDetail({ id, data, contents, categoryData }) {
  return (
    <Layout>
      <Menu data={data} />
      <div>
        <h1>{categoryData[0].fields.categoryName}</h1>
      </div>
      <p className={styles.SEOText}>
        {categoryData[0].fields.categoryTextexample}
      </p>
      <div className={styles.cerceve}>
        {contents.map((content) => (
          <StoryCard content={content} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await getData()
  return {
    paths: data.map((category) => {
      return {
        params: {
          id: `${category.fields.categoryLink}`
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const data = await getData()
  const categoryData = await getCategoryData(id)
  const contents = await getContentsData(id)
  return {
    props: {
      data,
      id,
      categoryData,
      contents,
      revalidate: 10
    }
  }
}
