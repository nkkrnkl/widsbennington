import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WiDS Bennington</title>
        <link rel="icon" href="/wids-black-stacked.png" />
      </Head>

      <main>
        <Header/>
        
        <p className="description">
          <h3> Mission </h3>
          <a href="https://www.widsconference.org/">Women in Data Science (WiDS)</a>
          elevates women in the field by providing inspiration, education, community, and support.
        </p>
        
        <h3>WiDS Bennington encourages people to get out of their comfort zone and try something NEW.</h3>
        
        
        <p className="list">
          <dl className="list">
            <h4>Coming Events</h4> 
            <dt>1. Datathon Workshop</dt>
            <dd>Saturday 25th of February Learn how to use Data Science to Improving Extreme Weather Forecasts with 
              <a href="https://www.kaggle.com/competitions/widsdatathon2023"> WiDS Datathon 2023 </a> 
              challenge. All levels are welcome to participate. 
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfH7sbClZiz0Q_XnzqDbqk-ulFwKGxWjJAYPspHN_Xfyw0wqg/viewform?usp=sf_link"> Register here now.</a></dd>
            <dt>2. Data Science Conference</dt>
            <dd>more info coming soon...</dd>
          </dl>
           
        </p>
        
  
      </main>

      <Footer />
    </div>
  )
}
