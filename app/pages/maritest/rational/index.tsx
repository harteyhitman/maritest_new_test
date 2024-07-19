import Image from 'next/image'
import rational from './rational.module.css'
import YoungKid from '../../../../public/assets/youngkids.png'


const Rational = () => {
  return (
    <div className={rational["ration-cont"]}>
      <div className={rational["right-rational"]}>
        <p className={rational['rational-text']}>OUR RATIONALE</p>
        <h3 className={rational['what-we-do']}>Why We Do What We Do</h3>
        <p className={rational['texts']}>Malaria remains a leading cause of illness and death in many countries. Over 200 million cases are reported annually, with the majority (94%) being in sub-Saharan Africa. As a result, 95% of Malaria deaths occur in the region.</p>
        <p className={rational['texts']}>Children under five are particularly vulnerable, with one child dying every two minutes from malaria. These are not just statistics – they are real lives, real families, and real futures at stake.</p>
        <p className=' text-[16px] font-[400] text-[#DA6F51]'>Source: World Malaria Report 2023 by WHO</p>
      </div>


      <div className={rational["left-rational"]}>
        <Image
          src={YoungKid}
          className={rational['young-kids']}
          alt='young'
        />
        <div className={rational["population"]}>
          <h1 className={rational['numbers']}>249M <br /> <span className={rational['span']}>Malaria cases globally in 2022</span></h1>
          <h1 className={rational['numbers']}>608K <br /> <span className={rational['span']}>Malaria deaths in 2022</span></h1>
        </div>
      </div>

    </div>
  )
}

export default Rational