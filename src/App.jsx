import React from 'react';
import styles from './style';
import Billing from './Components/Billing/Billing';
import CardDeal from './Components/Carddeal/CardDeal';
import Clients from './Components/Clients/Clients';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Stats from './Components/Stats/Stats';
import Testimonials from './Components/Testimonials/Testimonials';
import Business from './Components/Business/Business';

const App = () =>(
  <div className="bg-primary dark:bg-secondary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
    </div>
    <div className={`bg-primary dark:bg-secondary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary dark:bg-secondary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>

      </div>
    </div>
    
  </div>
)




export default App
