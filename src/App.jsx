import React from 'react';
import styles from './style';
import Billing from './Components/Billing/Billing';
import Carddeal from './components/Carddeal/Carddeal';
import Clients from './components/Clients/Clients';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimonials/Testimonials';
import Business from './components/Business/Business';

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
        <Carddeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>

      </div>
    </div>
    
  </div>
)




export default App
