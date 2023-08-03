import { useSelector } from 'react-redux';
import MyMissions from '../profile/Missions';
import styles from './Profiless.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';

function Profile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  return (
    <div className={styles.profiler}>
      <MyMissions data={joinMission} />
    </div>
  );
}

export default Profile;
