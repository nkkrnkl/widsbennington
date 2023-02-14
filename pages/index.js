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
          <h3> WiDS Mission </h3>
          <a href="https://www.widsconference.org/">Women in Data Science (WiDS) </a>
          elevates women in the field by providing inspiration, education, community, and support.
        </p>
        
        <h4 className="bio">
            WiDS Bennington is an independent event that is organized by Niki Karanikola, Mohammad Tanvir, and other Bennington College students 
            as part of the annual WiDS Worldwide conference organized by Stanford University and an estimated 200+ locations worldwide, 
            which features outstanding women doing outstanding work in the field of data science. 
            All genders are invited to attend all WiDS Worldwide conference events. 
            WiDS Bennington encourages people to get out of their comfort zone and try something NEW. 
        </h4>
        
        
        <p className="list">
          <dl className="list">
            <h3>Coming Events</h3> 
            <dt className="title">1. Datathon Workshop</dt>
            <dd>On Saturday 25th of February, join us at 12 pm to 5 pm in Bennington College, Commons Atrium. You will learn how to use Data Science to Improving Extreme Weather Forecasts with 
              <a href="https://www.kaggle.com/competitions/widsdatathon2023"> WiDS Datathon 2023 </a> 
              challenge. All levels are encouraged to participate! 
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfH7sbClZiz0Q_XnzqDbqk-ulFwKGxWjJAYPspHN_Xfyw0wqg/viewform?usp=sf_link"> Register here now.</a></dd>
            <dt className="title">2. Data Science Conference</dt>
            <dd>On Wednesday 8th of March join us at 11.00 am to 4.35 pm in Bennington College, CAPA Symposium. You will listen to Stanford Universty's WiDS Conference, which will feature keynotes, technical vision talks,
fireside chats, and networking opportunities. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcenWnV5BGsVzl8nRv-Vqjy_TTAEo1QfJTZRGyq4EqQWpXmQ/viewform?usp=sf_link"> Register here now.</a><
            </dd>
          </dl>
           
        </p>
        
  
      </main>

      <Footer />
    </div>
  )
}
