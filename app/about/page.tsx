import Image from 'next/image'
import about from './about.module.css'
import Mosaic from '../../public/assets/mosaic.png'
import Navbar from '../components/navbar'
import OurMission from './our-mission'
import OurStory from './our-story'
import Footer from '../components/footer'
const About = () => {
  return (
    <div>
        <div className={about['about-hero']}>
       <Image src={Mosaic} alt='' className=' w-[100%]'/>
       <div className={about['main']}>
       <Navbar />
       <OurMission />
       </div>
    </div>
    <OurStory />
    <Footer />
    </div>
  
  )
}

export default About