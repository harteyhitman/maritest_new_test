import Image from 'next/image';
import Navbar from '../components/navbar';
import { FoundingTeam } from '../data/data';
import team from './team.module.css';
import Boards from './board';
import Footer from '../components/footer';

const Team = () => {
  return (
    <section className={team['team-hero']}>
      <div className={team['team-header']}>
        <Navbar />
      </div>
      <div className={team['founding-team']}>
        <div className={team['team-maritest']}>TEAM MARITEST</div>
        <div className={team['big-text']}>Founding Team</div>
        <div className={team['portfolio']}>
          <div className={team['row']}>
            {FoundingTeam.slice(0, 3).map((teams) => (
              <div className={team['folder']} key={teams.id}>
                <Image src={teams.img} alt='team' />
                <div className={team["text"]}>
                  <p className={`${team['founder-name']}`}>{teams.teamName}</p>
                  <p className=' text-[16px] font-[400] text-[#17154C]'>{teams.portfolio}</p>
                </div>
              </div>))}
          </div>
          <div className={team['row']}>
            {FoundingTeam.slice(3).map((teams) => (
              <div className={team['folder']} key={teams.id}>
                <Image src={teams.img} alt='team' />
                <div className={team["text"]}>
                  <p className=' text-[#17154C]'>{teams.teamName}</p>
                  <p className=' text-[16px] font-[400] text-[#17154C]'>{teams.portfolio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Boards />
      <Footer />
    </section>
  );
};

export default Team;
