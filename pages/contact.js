import Layout from '../components/layout'
import getData from '../components/libfolder/getData'
import styles from '../components/menu.module.css'
import Link from 'next/link'
import Menu from '../components/menu'

export default function Contact({ data }) {
  return (
    <Layout>
      <Menu data={data} />
      <div className="menutitle"></div>
      <h1 className="title">İletişim</h1>
    </Layout>
  )
}
