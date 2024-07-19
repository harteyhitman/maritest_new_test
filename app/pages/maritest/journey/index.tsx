import Image from 'next/image'
import journey from './journey.module.css'
import Gallery from '../../../../public/assets/gallery.png'
import Futurize from '../../../../public/assets/futurize.png'
import FondiBots from '../../../../public/assets/fundi-bots.png'
import AfricaSociety from '../../../../public/assets/africa-society.png'
import YouthUx from '../../../../public/assets/youth-ux.png'
import Solved from '../../../../public/assets/solved.png'

const OurJourney = () => {
  return (
    <div className={journey['journey-cont']}>
      <div className={journey["gallery-cont"]}>
        <div className={journey["journey-text"]}>
          <h3 className={journey['journey-header']}>Our Journey</h3>
          <p className={journey['journey-small-text']}>A timeline of MariTest’s development, highlighting the  dedication and milestones reached.</p>
        </div>

        <div className={journey["journey-galley"]}>
          <Image
            width={1240}
            height={400}
            alt='gallery'
            className='gallery'
            src={Gallery}
          />
        </div>
      </div>


      <div className={journey["sponsors"]}>
        <h3 className={journey['our-sponsors']}>Our Sponsors & Partners</h3>
        <div className={journey["sponsors-img"]}>
          <Image src={Futurize} alt='' className='' />
          <Image src={FondiBots} alt='' className='' />
          <Image src={AfricaSociety}  alt='' className='' />
          <Image src={YouthUx} alt='' className='' />
          <Image src={Solved} alt='' className='' />
        </div>
      </div>
    </div>
  )
}

export default OurJourney