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
        <h3> Mission </h3>
        <hr>
        <p className="description">
          <a href="https://www.widsconference.org/">Women in Data Science (WiDS)</a>
          elevates women in the field by providing inspiration, education, community, and support.
        </p>
        <hr>
        <h3>WiDS Bennington encourages people to get out of their comfort zone and try something NEW.</h3>
        <hr>
        <h3>Coming Events</h3> 
        <hr>
        <p className="list">
          <dl>
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
