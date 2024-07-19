import ourstory from './ourstory.module.css'
import Traveller from '../../../public/assets/traveller.png'
import Image from 'next/image'
import Twomoon from '../../../public/assets/two-moon.png'
import urgency from '../../pages/maritest/urgency/urgency.module.css'
const OurStory = () => {
  return (
    <div className={ourstory['mission']}>
      <div className={ourstory["our-story"]}>

        <div className="traveller">
          <Image src={Traveller} alt='' />
        </div>

        <div className={ourstory["right-rational"]}>
          <p className={ourstory['rational-text']}>TEAM MARITEST</p>
          <h3 className={ourstory['what-we-do']}>Our Story</h3>
          <div className={ourstory["small-text"]}>
            <p>In 2021, an unexpected encounter changed our founder Kakooza Hakim's life that sparked the creation of MariTest. While interning on the remote Bussi Island in Uganda, Kakooza experienced a severe bout of fever. Despite having faced fever before, this time was different and much worse. </p>
            <p>
              One morning, Kakooza felt the familiar signs of malaria. But by this time, the fever had escalated. He went to a local healthcare center, only to wait three grueling hours and be told that they had run out of Malaria Rapid Diagnostic Test kits (RDTs) and antimalarial drugs. With COVID-19 lockdowns in place, he was stuck on the island with few options.</p>
            <p>Desperate, Kakooza turned to local remedies to manage his fever. His condition worsened, but luckily, a special travel permit allowed him to reach a private hospital on the mainland. By then, the parasites had severely damaged his liver, bringing him close to death.</p>
          </div>

        </div>
      </div>
      <div className={ourstory["down-part"]}>
           <div className={ourstory["recovery"]}>
            <p>During his recovery, Kakooza reflected on the harsh reality faced by those without access to adequate healthcare. Malaria is a massive burden in Africa, infecting 241 million people and killing over half a million in 2020 alone. Every 75 seconds, a child under five died from the disease. The major issues were limited access to early diagnosis and treatment, poor vector control, lack of medical facilities, and a shortage of healthcare workers.</p><p>Determined to make a difference, Kakooza, leveraging his machine learning expertise from Fundi Bots Uganda and entrepreneurial skills from the African Leadership University, teamed up with four other amazing individuals with diverse skills but on a shared mission to fight malaria in sub-Saharan Africa. MariTest was created. </p><p>
            MariTest is a reusable, non-invasive, automated diagnostic and prescription device that was designed to bridge the gap in malaria diagnosis and treatment, embodying the team's commitment to a malaria-free future.</p>
           </div>
           <div className={urgency['two-moon-cont']}>
                    <Image
                        src={Twomoon}
                        alt='moon'
                        className={urgency['two-moons']}
                    />
                    <Image
                        src={Twomoon}
                        alt='moon'
                        className={urgency['two-moon']}
                    />
                </div>
      </div>
   
    </div>
  )
}

export default OurStory