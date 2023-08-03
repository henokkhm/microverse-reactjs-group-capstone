import { useSelector } from 'react-redux';
import GenericList from '../components/GenericList';
import styles from '../styles/MyProfile.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';

function MyProfile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinedMissions = mission
    .filter((mission) => mission.reservation === true)
    .map((missionData) => ({
      id: missionData.mission_id,
      value: missionData.mission_name,
    }));

  const { rocketsList } = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList
    .filter((rocket) => rocket.isReserved)
    .map(({ id, name }) => ({ id, value: name }));

  return (
    <section className={styles.profiler}>
      <div>
        <h3>My Missions</h3>
        {joinedMissions.length ? (
          <GenericList data={joinedMissions} />
        ) : (
          <p>You have not joined any missions.</p>
        )}
      </div>
      <div>
        <h3>My Rockets</h3>
        {reservedRockets.length ? (
          <GenericList data={reservedRockets} />
        ) : (
          <p>You have not reserved any rockets.</p>
        )}
      </div>
    </section>
  );
}

export default MyProfile;
