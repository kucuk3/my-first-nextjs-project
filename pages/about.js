import Layout from '../components/layout'
import getData from '../components/libfolder/getData'
import styles from '../styles/tripping.module.css'
import Link from 'next/link'
import Menu from '../components/menu'
export default function About({ data }) {
  return (
    <Layout>
      <Menu data={data} />
      <h1 className="title">Hakkında</h1>
    </Layout>
  )
}
export async function getStaticProps() {
  const data = await getData()
  return {
    props: {
      data,
      revalidate: 10
    }
  }
}
