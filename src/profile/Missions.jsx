// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from '../components/Profiless.module.css';

function MyMissions({ data }) {
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
MyMissions.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired };
export default MyMissions;
