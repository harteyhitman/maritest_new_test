import React from 'react'
import Navbar from '../components/navbar'
import styles from '../pages/styles.module.css'
import FutureWithoutMalaria from './maritest'
import Mosaic from './maritest/mosaic'
import Rational from './maritest/rational'
import Urgency from './maritest/urgency'
import OurJourney from './maritest/journey'
import Footer from '../components/footer'

const Home = () => {
    return (
        <section className={styles['main']}>
            <div className={styles["hero"]}>
                <div className={styles['navbar-main']}>
                    <Navbar />
                    <FutureWithoutMalaria />
                </div>
            </div>
            <Mosaic />
            <Rational />
            <Urgency />
            <OurJourney />
            <Footer />
        </section>
    )
}

export default Home