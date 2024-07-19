import Image from 'next/image'
import board from './board.module.css'
import { advisoryBoard } from '@/app/data/data' 
const Boards = () => {
  return (
    <div className={board['boards']}>
        <p className={board['new-text']}>Team MARITEST</p>
        <h2 className={board['new-text-big']}>Advisory Board</h2>
        <div className={board["boards-view"]}>
            {advisoryBoard.map((advisory) =>(
                <div className={board["advisory"]} key={advisory.id}>
                    <Image src={advisory.img} alt=''/>
                    <div className={board["text"]}>
                        <p className=' text-[16px] font-semibold '>{advisory.teamName}</p>
                        <p>{advisory.portfolio}</p>
                        <p>{advisory.company}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Boards