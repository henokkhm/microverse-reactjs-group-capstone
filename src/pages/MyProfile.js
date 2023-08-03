import { useSelector } from 'react-redux';
import JoinedMissionsList from '../components/JoinedMissionsList';
import styles from '../styles/MyProfile.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';

function MyProfile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  const { rocketsList } = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.isReserved);

  return (
    <section className={styles.profiler}>
      <JoinedMissionsList data={joinMission} />
      <pre>{JSON.stringify(reservedRockets, null, 2)}</pre>
    </section>
  );
}

export default MyProfile;
