'use client'
import Image from 'next/image'
import maritest from '../maritest/maritest.module.css'
import Spiral from '../../../public/assets/spiral.png'
import Button from '@/app/components/button'
const FutureWithoutMalaria = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
        <div className={maritest['future']}>
            <div className='relative bottom-[-130px] z-4'>
                <Image
                    width={300}
                    height={72}
                    src={Spiral}
                    alt='spiral'
                    className={maritest['spiral']}
                />
            </div>

            <h2 className={maritest['bold-test']}>A Future <br />Without Malaria</h2>
            <p className={maritest['small-text']}>Innovative, bloodless, automated, <br /> and rapid diagnosis and prescription <br /> for a healthier tomorrow</p>
            <div className=' mt-8 flex items-center gap-5 font-bold'>
                <Button onClick={handleClick
                } label="Join the fight!"
                    className={maritest['top-btn']}
                />
                <h3 className={maritest['learn-more']}>Learn more</h3>
            </div>
        </div>
    )
}

export default FutureWithoutMalaria