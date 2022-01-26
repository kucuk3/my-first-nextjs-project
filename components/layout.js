import Navigation from './navigation'
import Menu from './menu'
import getData from './libfolder/getData'

export default function Layout({ children, data }) {
  return (
    <div>
      <main>
        <a href="/">
          <img
            src="https://blog.n11.com/wp-content/uploads/2015/09/n11com-blog-1.png"
            alt="logo"
          />
        </a>
        <Menu data={data} />
        {children}
      </main>

      <footer>
        <Navigation />
        made with ♥
      </footer>
    </div>
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
