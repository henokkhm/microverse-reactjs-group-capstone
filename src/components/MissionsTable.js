import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsFromAPI } from '../redux/missions/missionsSlice';
import styles from '../styles/MissionsTable.module.css';
import MissionRow from './MissionRow';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const { missionsList, isLoadingMissions, errorLoadingMissions } = useSelector(
    (store) => store.missions,
  );

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(getMissionsFromAPI());
    }
  }, [dispatch, missionsList]);

  if (isLoadingMissions) {
    return <div className={styles.loading}>Loading missions...</div>;
  }

  if (errorLoadingMissions) {
    return (
      <div className={styles.error}>
        Something went wrong! Please try again later.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={styles.stutus}>Status</th>
            <th className={styles.but_join}> </th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <MissionRow
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              isJoined={mission.isJoined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsTable;
