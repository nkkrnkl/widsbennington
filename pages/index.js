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
        <h2> Mission </h2>
        <p className="description">
          <a href="https://www.widsconference.org/">Women in Data Science (WiDS)</a>
          elevates women in the field by providing inspiration, education, community, and support.
        </p>
  
      </main>

      <Footer />
    </div>
  )
}
