import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WiDS Bennington</title>
      </Head>

      <main>
        <Header title="WiDS Bennington" />
        <p className="description">
          Mission
        </p>
  
      </main>

      <Footer />
    </div>
  )
}
