import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu({ data }) {
  return (
    <nav className={styles.menutitle}>
      <div className="menutitle">
        <ul className={styles.menuList}>
          {data &&
            data.length > 0 &&
            data.map((category) => {
              return (
                <li className={styles.listItem}>
                  <Link
                    rel="stylesheet"
                    href={`/${category.fields.categoryLink}`}
                  >
                    <a className={styles.menuNameText}>
                      {category.fields.categoryName}
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </nav>
  )
}
