import { useSelector } from 'react-redux';
import JoinedMissionsList from '../components/JoinedMissionsList';
import styles from '../styles/MyProfile.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';

function MyProfile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  return (
    <section className={styles.profiler}>
      <JoinedMissionsList data={joinMission} />
    </section>
  );
}

export default MyProfile;
