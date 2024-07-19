import mission from './mission.module.css'
import CheerFullKids from '../../../public/assets/cheerfull-kids.png'
import Image from 'next/image'

const OurMission = () => {
    return (
        <div className={mission["ration-cont"]}>
            <div className={mission["right-rational"]}>
                <p className={mission['rational-text']}>ABOUT MARITEST</p>
                <h3 className={mission['what-we-do']}>Our Mission</h3>
                <p className={mission['small-text']}>At MariTest, our mission is to revolutionize malaria <br /> diagnosis and treatment in sub-Saharan Africa. We <br /> strive to create innovative, accessible, and non- <br />invasive diagnostic tools that save lives and bring <br /> hope to communities burdened by malaria. We are <br /> committed to eradicating this devastating disease <br /> through advanced technology, real-time monitoring, <br /> and community-driven solutions.</p>
            </div>
            <div className={mission["left-rational"]}>
                <Image src={CheerFullKids}  className=''alt='young' width={543} height={343}/>
            </div>
        </div>)
}

export default OurMission




