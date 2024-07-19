import Image from 'next/image'
import urgency from './urgency.module.css'
import TwoMoon from '../../../../public/assets/two-moon.png'
const Urgency = () => {
    return (
        <div className={urgency['urgency-main']}>
            <div className={urgency['urgency-cont']}>
                <div className={urgency['two-moon-cont']}>
                    <Image
                        src={TwoMoon}
                        alt='moon'
                        className={urgency['two-moons']}
                    />
                    <Image
                        src={TwoMoon}
                        alt='moon'
                        className={urgency['two-moon']}
                    />
                </div>


                <div className={urgency["right-urgency"]}>
                    <h3 className={urgency['urgency-big-text']}>The Urgency of Early Malaria Diagnosis</h3>
                    <p className={urgency['small-text']}>Current diagnostic methods are often invasive, time-consuming, and inaccessible to those in remote areas. <br />  According to the Malaria Journal, community-based early diagnosis and treatment are crucial in reducing malaria deaths. These methods prevent transmission, lower recurrence rates, and are cost-effective, especially in resource-limited settings. Furthermore, early diagnosis and treatment within 24-48 hours of fever onset significantly reduce parasite transmission, thereby preventing further infections. <br /> This reality drives our unwavering commitment to developing a more effective, accessible, and non-invasive diagnostic tool. Our mission is to save lives and bring hope to communities burdened by malaria.</p>
                    <p className={urgency['journal']}>Source: Malaria Journal</p>
                </div>
            </div>
            <div className={urgency["line"]}></div>
        </div>



    )
}

export default Urgency