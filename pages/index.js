import Layout from '../components/layout'
import getData from '../components/libfolder/getData'
import styles from '../styles/tripping.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../components/menu'
export default function HomePage({ data }) {
  console.log({ data })
  return (
    <Layout>
      <div className="emree">
        <Head>
          <title>emreninblogu.com</title>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
      </div>
      <Menu data={data} />
      <div>
        <h1 className={styles.categoryNameText}>Anasayfa</h1>
        <div className={styles.SEOText}>
          Lafı uzatmadan iddia ediyoruz: Buradaki başkentler, köyler, kasabalar
          ve metropoller ile ilgili yazılanları başka hiçbir yerde
          bulamayacağınız kesin. Asya’nın ürkütücü güzelliklerinden Uzakdoğu’nun
          oryantal esintilerine, Güney Amerika’nın festival tadındaki
          sokaklarından Avrupa’nın kozmopolit havasına kadar dünyanın farklı
          köşelerinden bizzat gezerek topladığımız renkler sizin için burada bir
          araya geliyor. Bir gün Brezilya’nın gökkuşağı rengi caddelerinde samba
          yaparken ertesi gün kendinizi Finlandiya’nın buzulla kaplı otel
          odalarında bulabilirsiniz. İtirazı olan?
        </div>
        <div className={styles.tableRow}>
          <div className={styles.titleText}>
            İstanbul’a Yakın Kamp Alanları
            <div className="img">
              <img
                alt="kamp"
                src="https://blog.n11.com/wp-content/uploads/2021/03/shutterstock_1799645869-840x440.jpg"
                width="420"
                height="220"
              ></img>
            </div>
            <div className={styles.titleTextDesc}>
              Doğanın içinde, huzurlu bir tatil için son zamanlarda birçok
              tatilcinin tercihi olan kampçılık faaliyeti büyük şehirlerde de
              rahatça yapılabiliyor. Kamp …
            </div>
            <div>
              <button type="button" className={styles.divBtn}>
                Devamını oku..
              </button>
            </div>
          </div>
          <div className={styles.titleText}>
            Büyükada Gezilecek Yerler
            <div className="img">
              <img
                alt="buyukada"
                src="https://blog.n11.com/wp-content/uploads/2015/09/buyukada-gezilecek-yerler-768x512.jpg"
                width="420"
                height="220"
              ></img>
            </div>
            <div className={styles.titleTextDesc}>
              Özellikle İstanbul’da yaşayanlar gerek hafta sonları gerekse de
              tatil olan ilk fırsatta yakınlarda kaçacak bir yerler arıyorlar.
              Büyükada, İstanbulluların uğrak …
            </div>
            <div>
              <button type="button" className={styles.divBtn}>
                Devamını oku..
              </button>
            </div>
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.titleText}>
            İstanbul’a Yakın Tatil Yerleri
            <div className="img">
              <img
                alt="kamp"
                src="https://blog.n11.com/wp-content/uploads/2019/01/istanbula-yakin-tatil-yerleri-840x440.jpg"
                width="420"
                height="220"
              ></img>
            </div>
            <div className={styles.titleTextDesc}>
              Hepimizin zaman zaman İstanbul’un karmaşasından, kaosundan ve
              kalabalığından uzaklaşmak, kafamızı dinlemek ve kısa bir
              süreliğine de olsa “tatil” moduna girmek …
            </div>
            <div>
              <button type="button" className={styles.divBtn}>
                Devamını oku..
              </button>
            </div>
          </div>
          <div className={styles.titleText}>
            Sevgiliyle Gidilecek Yerler
            <div className="img">
              <img
                alt="sevgili"
                src="https://blog.n11.com/wp-content/uploads/2019/02/sevgiliyle-gidilecek-yerler-840x440.jpg"
                width="420"
                height="220"
              ></img>
            </div>
            <div className={styles.titleTextDesc}>
              Hazır Sevgililer Günü de yaklaşıyorken sevgiliyle gidilecek yerler
              listesi yapmanın tam zamanı! Sevgiliyle gidilecek yerler
              önerilerimizden birini seçerek bu yılki …
            </div>
            <div>
              <button type="button" className={styles.divBtn}>
                Devamını oku..
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

HomePage.getInitialProps = async (ctx) => {
  const data = await getData()
  return { data: data }
}
