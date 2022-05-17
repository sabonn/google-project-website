import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>find me</title>
        <meta name="find me" content="find me" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to find me
        </h1>

        <div className={styles.grid}>

          <a href='./join_game' className={styles.card}>
            <h2>Join A Game &rarr;</h2>
          </a>

          <a href='./create_game' className={styles.card}>
            <h2>Create A Game &rarr;</h2>
          </a>

          <a href='./rules' className={styles.card}>
            <h2>Rules &rarr;</h2>
          </a>

        </div>
      </main>
    </div>
  )
}

export default Home
