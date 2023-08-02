// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// import styles from './Mission.module.css';
import styles from '../Profiless.module.css';

function MyMissions({ data }) {
  return (
    <table className="profiler-table">
      {(data.length) < 0 ? <th>My Missions</th> : <th>My Missions</th> }
      {data.map((mission) => (
        <tr key={mission.id} className={styles.profilertable}>
          <td className={styles.tabledata}>{mission.mission_name}</td>
        </tr>
      ))}
    </table>

  // <div className={styles.ourMission}>
  //   <h2>My Missions</h2>
  //   <ul>
  //     {data.map((mission) => (
  //       <li key={mission.id}>{mission.mission_name}</li>
  //     ))}
  //   </ul>
  // </div>
  );
}
MyMissions.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired };
export default MyMissions;
