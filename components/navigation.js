import Link from 'next/link'
import styles from './nav.module.css'
export default function Navigation() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.link}>Anasayfa</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>Hakkında</a>
      </Link>
      <Link href="/contact">
        <a className={styles.link}>İletişim</a>
      </Link>
      <Link href="/sss">
        <a className={styles.link}>Sık Sorulan Sorular</a>
      </Link>
    </nav>
  )
}
