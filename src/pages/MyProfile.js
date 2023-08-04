import { useSelector } from 'react-redux';
import GenericList from '../components/GenericList';
import styles from '../styles/MyProfile.module.css';

function MyProfile() {
  const { missionsList } = useSelector((store) => store.missions);
  const joinedMissions = missionsList
    .filter((mission) => mission.isJoined === true)
    .map((missionData) => ({
      id: missionData.id,
      value: missionData.name,
    }));

  const { rocketsList } = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList
    .filter((rocket) => rocket.isReserved)
    .map(({ id, name }) => ({ id, value: name }));

  return (
    <section className={styles.myProfileSection}>
      <div className={styles.listWrapper}>
        <h3 className={styles.listHeader}>My Missions</h3>
        {joinedMissions.length ? (
          <GenericList data={joinedMissions} />
        ) : (
          <p>You have not joined any missions.</p>
        )}
      </div>
      <div className={styles.listWrapper}>
        <h3 className={styles.listHeader}>My Rockets</h3>
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
