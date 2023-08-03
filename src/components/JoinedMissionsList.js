// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from '../styles/JoinedMissionsList.module.css';

function JoinedMissionsList({ data }) {
  return (
    <table className="profiler-table">
      {data.length < 0 ? <th>My Missions</th> : <th>My Missions</th>}
      {data.map((mission) => (
        <tr key={mission.id} className={styles.profilertable}>
          <td className={styles.tabledata}>{mission.mission_name}</td>
        </tr>
      ))}
    </table>

  );
}
JoinedMissionsList.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired };
export default JoinedMissionsList;
