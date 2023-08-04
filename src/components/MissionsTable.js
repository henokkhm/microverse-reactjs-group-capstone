import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsFromAPI } from '../redux/missions/missionsSlice';
import style from '../styles/MissionsTable.module.css';
import MissionRow from './MissionRow';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const { missionsList } = useSelector((store) => store.missions);

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(getMissionsFromAPI());
    }
  }, [dispatch, missionsList]);

  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={style.stutus}>Status</th>
            <th className={style.but_join}> </th>
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
