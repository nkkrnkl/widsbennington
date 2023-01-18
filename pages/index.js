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
          <h2>Mission</h2><br>
          <a href="https://www.widsconference.org">Women in Data Science (WiDS)</a> elevates women in the field by providing inspiration, education, community, and support. <br>  
          <h2> WiDS Bennington encourages people to get out of their comfort zone and try something NEW.</h2>
        </p>
  
      </main>

      <Footer />
    </div>
  )
}
