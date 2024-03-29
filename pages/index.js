import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rutland Cheese</title>
        <meta name="description" content="Rutland Cheese, experts in cheese" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming soon!
        </h1>
      </main>

      <footer >
       
      </footer>
    </div>
  )
}
