import Image from 'next/image'
import React from 'react'
import MosaicImg from '../../../../public/assets/mosaic.png'
import styles from '../../styles.module.css'

const Mosaic = () => {
  return (
        <Image 
        src={MosaicImg}
        width={1627}
        height={109}
        className={styles['mosaic']}
        alt='mosaic'
        />
  )
}
' relative w-[100%] -top-12 z-50'
export default Mosaic