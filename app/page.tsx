import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>
      <Link href='/About'>go to about page</Link>
      <Link href='/users'>go to users page</Link>
    </main>
  )
}
